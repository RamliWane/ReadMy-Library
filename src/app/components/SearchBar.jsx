import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-64 border border-gray-200 focus-within:border-blue-400 focus-within:bg-white transition-all">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
    </svg>
    <input
        type="text"
        placeholder="Cari buku..."
        className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
    />
</div>
  );
}