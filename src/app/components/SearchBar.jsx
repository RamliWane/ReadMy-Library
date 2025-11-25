import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex items-center justify-start pt-2">
      <div className="w-full max-w-lg">
        <div className="relative flex items-center bg-white rounded-xl shadow-lg hover:border">
          <div className="pl-5 pr-3">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          
          <input
            type="text"
            placeholder="Cari Judul/Author/ISBN"
            className="flex-1 py-4 pr-5 text-slate-800 placeholder-slate-400 bg-transparent outline-none text-[15px]"
          />
        </div>
      </div>
    </div>
  );
}