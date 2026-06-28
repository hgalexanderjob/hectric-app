import Link from 'next/link';
import { Tutorial } from '@/data/tutoriales';

export default function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  // Generate YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${tutorial.youtubeId}/maxresdefault.jpg`;

  return (
    <Link href={`/tutoriales/${tutorial.id}`} className="flex flex-col gap-3 h-full w-full min-w-0 group cursor-pointer block">
      {/* Thumbnail Section (Static image that links to detail page) */}
      <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-xl bg-slate-900 flex-shrink-0" style={{ paddingTop: "56.25%" }}>
        <img 
          src={thumbnailUrl} 
          alt={tutorial.title}
          className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${tutorial.youtubeId}/hqdefault.jpg`;
          }}
        />
        {/* Play Icon Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
          <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-7 h-7 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex gap-4 items-start mt-1">
        {/* Channel Avatar */}
        <div className="flex-shrink-0 mt-0.5">
          <img 
            src={tutorial.channelAvatar} 
            alt={tutorial.channelName}
            className="w-10 h-10 rounded-full object-cover bg-slate-200"
          />
        </div>

        {/* Text Info */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <h3 className="text-lg font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-teal-600 transition-colors break-words">
            {tutorial.title}
          </h3>
          
          <div className="text-base text-slate-500 mt-1.5 flex flex-col">
            <span className="line-clamp-1">{tutorial.channelName}</span>
            <div className="flex flex-wrap items-center text-sm sm:text-base mt-0.5">
              <span>{tutorial.views}</span>
              <span className="mx-1">•</span>
              <span>{tutorial.publishedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
