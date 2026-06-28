"use client";

import { useState } from "react";
import { Icon } from '@iconify/react';

type Comment = {
  id: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
  likes: number;
  isLikedByMe?: boolean;
};

export default function CommunityComments({ 
  brandName, 
  seriesName,
  mecanismoName
}: { 
  brandName: string; 
  seriesName: string; 
  mecanismoName?: string;
}) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Carlos Instalador",
      avatar: "CI",
      content: `Ojo al instalar ${mecanismoName ? `los ${mecanismoName.toLowerCase()}` : "los conmutadores"} de la serie ${seriesName}. El borne de entrada de fase (L) suele venir marcado en rojo, mientras que en otras marcas viene en negro. Aseguraos de no cruzar los cables de vuelta.`,
      date: "Hace 2 días",
      likes: 14,
    },
    {
      id: "2",
      author: "Miguel Ángel",
      avatar: "MÁ",
      content: `Para ${mecanismoName ? `este ${mecanismoName.toLowerCase()}` : "los enchufes dobles"} de ${brandName}, os recomiendo pelar el cable exactamente a 11mm como indica el fabricante. Si peláis de más, el cobre queda expuesto y es peligroso al apretar el mecanismo en la caja.`,
      date: "Hace 1 semana",
      likes: 8,
    }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: "Tú",
      avatar: "TU",
      content: newComment.trim(),
      date: "Justo ahora",
      likes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  const toggleLike = (id: string) => {
    setComments(comments.map(c => {
      if (c.id === id) {
        return {
          ...c,
          likes: c.isLikedByMe ? c.likes - 1 : c.likes + 1,
          isLikedByMe: !c.isLikedByMe
        };
      }
      return c;
    }));
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-x-3">
          <div className="size-10 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100">
            <Icon icon="solar:chat-round-line-duotone" className="size-5 text-teal-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">
              Comunidad y Consejos
            </h3>
            <p className="text-sm text-slate-500 mt-0.5">
              Aportes de instaladores sobre {brandName} {seriesName} {mecanismoName && `- ${mecanismoName}`}
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-x-2 text-sm font-semibold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100/50">
          <Icon icon="solar:lightbulb-line-duotone" className="size-4" />
          <span>{comments.length} consejos</span>
        </div>
      </div>

      {/* Input de nuevo comentario */}
      <form onSubmit={handleSubmit} className="mb-10 relative">
        <div className="flex gap-x-4">
          <div className="shrink-0 size-11 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-teal-500/20 border-2 border-white">
            TU
          </div>
          <div className="flex-grow relative group">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={`Comparte tu experiencia instalando ${mecanismoName ? mecanismoName.toLowerCase() : seriesName}...`}
              className="w-full px-4 py-3.5 bg-slate-50/50 border border-slate-200/80 rounded-xl text-sm text-slate-700 focus:border-teal-500/50 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all resize-none h-24 outline-hidden shadow-xs placeholder:text-slate-400"
            ></textarea>
            <div className="absolute bottom-2.5 right-2.5">
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="flex items-center gap-x-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold rounded-lg transition-all disabled:opacity-50 disabled:hover:bg-teal-600 focus:outline-hidden focus:ring-4 focus:ring-teal-500/20 shadow-sm disabled:cursor-not-allowed"
              >
                <Icon icon="solar:plain-line-duotone" className="size-3.5" />
                <span>Publicar</span>
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Lista de comentarios */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-x-4 group/comment">
            <div className="shrink-0 size-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm border-2 border-white shadow-sm ring-1 ring-slate-200/50">
              {comment.avatar}
            </div>
            <div className="flex-grow">
              <div className="bg-slate-50/80 border border-slate-200/60 rounded-2xl rounded-tl-none p-4 shadow-xs transition-colors group-hover/comment:bg-white group-hover/comment:border-slate-300/60">
                <div className="flex items-center justify-between gap-x-2 mb-1.5">
                  <span className="font-bold text-slate-800 text-sm">
                    {comment.author}
                  </span>
                  <span className="text-xs font-medium text-slate-400 bg-white px-2 py-0.5 rounded-md border border-slate-100 shadow-xs">
                    {comment.date}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {comment.content}
                </p>
              </div>
              
              <div className="flex items-center gap-x-2 mt-2 ml-2">
                <button 
                  onClick={() => toggleLike(comment.id)}
                  className={`flex items-center gap-x-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                    comment.isLikedByMe 
                      ? "text-teal-600 bg-teal-50" 
                      : "text-slate-500 hover:text-teal-600 hover:bg-teal-50"
                  }`}
                >
                  {comment.isLikedByMe ? (
                    <Icon icon="solar:like-line-duotone" className="size-3.5" />
                  ) : (
                    <Icon icon="solar:like-line-duotone" className="size-3.5" />
                  )}
                  Útil {comment.likes > 0 && <span className={comment.isLikedByMe ? "text-teal-700" : "text-slate-400"}>({comment.likes})</span>}
                </button>
                <button className="flex items-center gap-x-1.5 px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all">
                  <Icon icon="solar:reply-line-duotone" className="size-3.5" />
                  Responder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
