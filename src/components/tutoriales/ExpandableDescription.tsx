"use client";

import { useState } from 'react';

interface Props {
  views: string;
  publishedAt: string;
  category: string;
  description?: string;
}

export default function ExpandableDescription({ views, publishedAt, category, description }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  // If there's no description or it's very short, we don't necessarily need the toggle, 
  // but for simplicity we'll just apply the UI to any description.
  const hasDescription = description && description.trim().length > 0;
  
  return (
    <div 
      className={`mt-4 bg-slate-100 rounded-xl p-4 text-sm text-slate-900 transition-all cursor-pointer hover:bg-slate-200/80 ${isExpanded ? 'bg-slate-200/50' : ''}`}
      onClick={() => hasDescription && setIsExpanded(!isExpanded)}
    >
      <p className="font-semibold mb-2 text-slate-900">
        {views} • {publishedAt} • {category}
      </p>
      
      <p className={`whitespace-pre-line text-slate-700 ${isExpanded ? '' : 'line-clamp-3'}`}>
        {hasDescription ? description : "Sin descripción proporcionada para este vídeo."}
      </p>
      
      {hasDescription && (
        <button 
          className="mt-2 font-bold text-slate-900 hover:text-teal-600 transition-colors"
          onClick={(e) => {
            e.stopPropagation(); // Prevent the parent div click from firing twice
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Mostrar menos" : "...más"}
        </button>
      )}
    </div>
  );
}
