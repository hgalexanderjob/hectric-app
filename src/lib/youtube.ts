import { Tutorial, TutorialSource, tutorialSources } from '@/data/tutoriales';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

// Utility to format numbers to K/M (e.g. 1500 -> 1.5K)
function formatViews(viewCount: string): string {
  const count = parseInt(viewCount, 10);
  if (isNaN(count)) return '0 visualizaciones';
  
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M visualizaciones';
  }
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K visualizaciones';
  }
  return count + ' visualizaciones';
}

// Utility to format ISO date to relative time in Spanish
function formatPublishedAt(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'hace unas horas';
  if (diffDays === 1) return 'hace 1 día';
  if (diffDays < 7) return `hace ${diffDays} días`;
  if (diffDays < 30) return `hace ${Math.floor(diffDays / 7)} semanas`;
  if (diffDays < 365) return `hace ${Math.floor(diffDays / 30)} meses`;
  return `hace ${Math.floor(diffDays / 365)} años`;
}

// Fallback data when API key is missing or request fails
function getFallbackTutorial(source: TutorialSource): Tutorial {
  return {
    id: source.id,
    youtubeId: source.youtubeId,
    title: `Tutorial Simulado: ${source.id.replace(/-/g, ' ')}`,
    channelName: "Hidal Electric (Simulado)",
    channelAvatar: "/src/assets/images/logo/favicon.png",
    views: "1K visualizaciones",
    publishedAt: "hace 1 día",
    category: source.category,
    aiTutorialUrl: source.aiTutorialUrl,
  };
}

export async function fetchTutorials(): Promise<Tutorial[]> {
  if (!YOUTUBE_API_KEY) {
    console.warn("YOUTUBE_API_KEY is missing. Using fallback data for tutorials.");
    return tutorialSources.map(getFallbackTutorial);
  }

  try {
    // 1. Fetch Videos (Snippet for Title/Date, Statistics for Views)
    const videoIds = tutorialSources.map(s => s.youtubeId).join(',');
    const videosRes = await fetch(
      `${YOUTUBE_API_URL}/videos?part=snippet,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`,
      { next: { revalidate: 86400 } } // Cache for 24 hours
    );
    
    if (!videosRes.ok) throw new Error('Failed to fetch videos from YouTube');
    const videosData = await videosRes.json();
    const videosItems = videosData.items || [];

    // 2. Extract unique Channel IDs to fetch Channel Avatars
    const channelIds = Array.from(new Set(videosItems.map((v: any) => v.snippet.channelId))).join(',');
    let channelAvatars: Record<string, string> = {};

    if (channelIds) {
      const channelsRes = await fetch(
        `${YOUTUBE_API_URL}/channels?part=snippet&id=${channelIds}&key=${YOUTUBE_API_KEY}`,
        { next: { revalidate: 86400 } }
      );
      if (channelsRes.ok) {
        const channelsData = await channelsRes.json();
        const channelsItems = channelsData.items || [];
        channelsItems.forEach((c: any) => {
          // Force high quality thumbnail (800x800) instead of default (88x88) to prevent blurriness
          channelAvatars[c.id] = c.snippet.thumbnails?.high?.url || c.snippet.thumbnails?.medium?.url || c.snippet.thumbnails?.default?.url || "";
        });
      }
    }

    // 3. Map the data back to our Tutorial interface
    return tutorialSources.map(source => {
      const video = videosItems.find((v: any) => v.id === source.youtubeId);
      
      if (!video) return getFallbackTutorial(source);

      const snippet = video.snippet;
      const statistics = video.statistics;
      const channelId = snippet.channelId;

      return {
        id: source.id,
        youtubeId: source.youtubeId,
        category: source.category,
        title: snippet.title,
        channelName: snippet.channelTitle,
        channelAvatar: channelAvatars[channelId] || "/src/assets/images/logo/favicon.png",
        views: formatViews(statistics.viewCount),
        publishedAt: formatPublishedAt(snippet.publishedAt),
        description: snippet.description,
        aiTutorialUrl: source.aiTutorialUrl
      };
    });

  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return tutorialSources.map(getFallbackTutorial);
  }
}
