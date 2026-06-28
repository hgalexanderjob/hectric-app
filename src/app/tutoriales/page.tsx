import { fetchTutorials } from '@/lib/youtube';
import TutorialsClient from './TutorialsClient';

export default async function TutorialesPage() {
  // Fetch data dynamically on the server from the YouTube API
  // This will be cached by Next.js automatically according to the fetch rules
  const tutorials = await fetchTutorials();

  return (
    <TutorialsClient initialTutorials={tutorials} />
  );
}
