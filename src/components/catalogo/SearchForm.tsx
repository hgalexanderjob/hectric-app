"use client";

import { Dispatch, SetStateAction } from "react";

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export default function SearchForm({ searchQuery, setSearchQuery }: SearchFormProps) {
  return (
    <form className="max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="content-search" className="block mb-2.5 text-sm font-medium text-slate-800 sr-only">
        Buscar
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="shrink-0 size-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </div>
        <input
          type="search"
          id="content-search"
          name="content-search"
          className="block w-full p-3 ps-10 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm placeholder:text-slate-400 focus:outline-hidden"
          placeholder="¿Qué mecanismo quieres instalar hoy?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="absolute end-2 bottom-2 text-white bg-teal-600 hover:bg-teal-700 shadow-sm font-medium leading-5 rounded-lg text-xs px-4 py-1.5 transition-all focus:outline-hidden"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
