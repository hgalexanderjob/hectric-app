"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { useChat } from "ai/react";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PencilSquareIcon, XMarkIcon, PhotoIcon, PaperAirplaneIcon, StopIcon } from '@heroicons/react/24/outline';

export default function AIChat({
  brandId,
  seriesId,
  mecanismoId,
  seriesName,
  mecanismoName
}: {
  brandId: string;
  seriesId: string;
  mecanismoId?: string;
  seriesName: string;
  mecanismoName?: string;
}) {
  const searchParams = useSearchParams();
  const refParam = searchParams.get("ref");

  const chatBody = useMemo(() => ({
    brandId,
    seriesId,
    mecanismoId,
    reference: refParam
  }), [brandId, seriesId, mecanismoId, refParam]);

  const initialMsgs = useMemo(() => ([
    {
      id: "1",
      role: "assistant" as const,
      content: `¡Hola! Soy hectric IA, tu asistente experto. He analizado los esquemas técnicos ${mecanismoName ? `del ${mecanismoName.toLowerCase()}` : "de los mecanismos"} de la serie ${seriesName}. ¿En qué paso de la instalación te puedo ayudar?`,
    }
  ]), [mecanismoName, seriesName]);

  const { messages, input, handleInputChange, handleSubmit, isLoading, stop, setMessages } = useChat({
    api: "/api/chat",
    body: chatBody,
    initialMessages: initialMsgs
  });

  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Avoid hydration mismatch by only rendering timestamps after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [isOpenMobile, setIsOpenMobile] = useState(false);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isMounted) {
      scrollToBottom();
    }
  }, [messages, isLoading, isMounted, isOpenMobile]);

  const chatInterface = (
    <div className="flex flex-col h-full bg-white/95 backdrop-blur-xl rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/60 overflow-hidden transition-all duration-300 w-full max-w-[500px] lg:max-w-none mx-auto lg:mx-0">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200/60 bg-white/50 backdrop-blur-md">
        <div className="flex items-center gap-x-4">
          <div className="relative">
            <div className="size-10 rounded-lg bg-teal-50/80 flex items-center justify-center shadow-sm border border-teal-100/50 overflow-hidden">
              <img src="/assets/images/icons/hectric.ico" alt="hectric IA" className="size-6 object-contain" />
            </div>
            <span className="absolute bottom-[-2px] right-[-2px] size-3.5 bg-emerald-500 border-2 border-white rounded-full shadow-sm"></span>
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-800 tracking-tight">hectric IA</h2>
            <p className="text-xs text-teal-600 font-medium opacity-90">
              Experto en {mecanismoName ? `${mecanismoName}` : seriesName}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          {/* New Chat Button */}
          <button
            type="button"
            onClick={() => setMessages(initialMsgs)}
            className="flex items-center gap-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-teal-700 bg-slate-100 hover:bg-teal-50 rounded-lg transition-all duration-200"
            title="Nuevo chat"
          >
            <PencilSquareIcon className="size-4" strokeWidth={2} />
            <span className="hidden sm:inline">Nuevo</span>
          </button>

          {/* Close Button Mobile */}
          <button 
            type="button"
            onClick={() => setIsOpenMobile(false)}
            className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <XMarkIcon className="size-5" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-slate-50/30 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200/80 hover:[&::-webkit-scrollbar-thumb]:bg-slate-300 transition-colors">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col max-w-[88%] md:max-w-[80%] ${msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
              }`}
          >
            <div
              className={`p-3.5 md:p-4 rounded-lg shadow-xs text-[14px] leading-relaxed transition-all duration-300 ${msg.role === "user"
                ? "bg-teal-600 text-white rounded-br-sm"
                : "bg-white border border-slate-200/60 text-slate-700 rounded-bl-sm prose prose-sm prose-teal max-w-none dark:prose-invert prose-p:leading-relaxed prose-ul:my-2 prose-li:my-0.5 marker:text-teal-500"
                }`}
            >
              {msg.role === "assistant" ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </ReactMarkdown>
              ) : (
                msg.content
              )}
            </div>
            {isMounted && msg.createdAt && (
              <span className="text-[10px] text-slate-400 mt-1.5 px-1 font-medium tracking-wide">
                {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex flex-col max-w-[85%] mr-auto items-start animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="px-4 py-3.5 rounded-lg rounded-bl-sm bg-white border border-slate-200/60 shadow-xs flex items-center gap-x-1.5">
              <span className="size-1.5 bg-teal-500/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="size-1.5 bg-teal-500/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="size-1.5 bg-teal-500/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/80 backdrop-blur-md border-t border-slate-200/60">
        <form onSubmit={handleSubmit} className="relative flex items-center group">
          <button
            type="button"
            className="absolute left-3 p-1.5 text-slate-400 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 rounded-lg transition-all duration-200 focus:outline-hidden"
            title="Añadir imagen de la instalación"
          >
            <PhotoIcon className="size-5" strokeWidth={1.5} />
          </button>

          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
            placeholder="Pregunta algo sobre la instalación..."
            className="w-full pl-12 pr-12 py-3.5 bg-slate-50/50 border border-slate-200/80 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:border-teal-500/50 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all disabled:opacity-50 outline-hidden shadow-xs"
          />

          {isLoading ? (
            <button
              type="button"
              onClick={stop}
              className="absolute right-2.5 size-8 bg-slate-800 hover:bg-slate-700 text-white rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-hidden focus:ring-4 focus:ring-slate-500/20 shadow-sm animate-in zoom-in duration-200"
              title="Detener respuesta"
            >
              <StopIcon className="size-4" strokeWidth={2} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim()}
              className="absolute right-2.5 size-8 bg-teal-600 hover:bg-teal-500 text-white rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:hover:bg-teal-600 focus:outline-hidden focus:ring-4 focus:ring-teal-500/20 shadow-sm animate-in zoom-in duration-200"
              title="Enviar"
            >
              <PaperAirplaneIcon className="size-4" strokeWidth={2} />
            </button>
          )}
        </form>
      </div>
    </div>
  );

  return (
    <>
      {/* Floating Action Button (Mobile Only) */}
      <button 
        type="button"
        onClick={() => setIsOpenMobile(true)}
        className={`lg:hidden fixed bottom-6 right-6 z-40 hover:scale-105 active:scale-95 transition-all duration-300 ${isOpenMobile ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Abrir Asistente IA"
      >
        <div className="relative">
          <div className="size-14 rounded-2xl bg-teal-50/90 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-teal-100/80 overflow-hidden backdrop-blur-sm">
            <img src="/assets/images/icons/hectric.ico" alt="Hectric IA" className="size-8 object-contain" />
          </div>
          <span className="absolute bottom-[-2px] right-[-2px] size-4 bg-emerald-500 border-[2.5px] border-white rounded-full shadow-sm"></span>
        </div>
      </button>

      {/* Chat Container (Inline on Desktop, Modal on Mobile) */}
      <div className={`
        ${isOpenMobile ? 'fixed inset-0 z-50 p-4 pb-6 bg-slate-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center animate-in fade-in duration-200' : 'hidden'}
        lg:!block lg:!relative lg:!inset-auto lg:!p-0 lg:!bg-transparent lg:!z-auto lg:h-[calc(100vh-8rem)] lg:animate-none
      `}>
        {isOpenMobile ? (
          <div className="w-full h-[85vh] animate-in slide-in-from-bottom-8 duration-300">
            {chatInterface}
          </div>
        ) : (
          chatInterface
        )}
      </div>
    </>
  );
}
