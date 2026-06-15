import Link from 'next/link';
import { Tutorial } from '@/data/tutoriales';

export default function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  const isVideo = !!tutorial.videoUrl;

  const difficultyColors = {
    Baja: 'bg-green-100 text-green-700 border-green-200',
    Media: 'bg-amber-100 text-amber-700 border-amber-200',
    Alta: 'bg-rose-100 text-rose-700 border-rose-200'
  };

  return (
    <Link href={`/tutoriales/${tutorial.id}`} className="block group h-full">
      <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-500/30 transition-all duration-300">
        
        {/* Thumbnail Section */}
        <div className="relative aspect-video bg-slate-100 overflow-hidden flex items-center justify-center">
          <img 
            src={tutorial.thumbnail} 
            alt={tutorial.title}
            className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/assets/images/category/mechanisms/niessen.png";
            }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Play/Read Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-xs text-teal-600 rounded-full p-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              {isVideo ? (
                <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              )}
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
              {tutorial.category}
            </span>
          </div>
          {tutorial.featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                Destacado
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col grow">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 mb-2">
            {tutorial.title}
          </h3>
          <p className="text-sm text-slate-500 line-clamp-2 mb-4 grow">
            {tutorial.description}
          </p>

          {/* Footer Metadata */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
            <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
              {isVideo && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {tutorial.duration}
                </div>
              )}
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                {tutorial.readTime}
              </div>
            </div>
            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded border ${difficultyColors[tutorial.difficulty]}`}>
              {tutorial.difficulty}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
