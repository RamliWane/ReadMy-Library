import React from 'react';
import { Users, BookOpen, Star, TrendingUp, Crown } from 'lucide-react';

export default async function AuthorSidebar() {
  const author = await fetch("http://localhost:5000/author", {
    method: "GET",
    cache: "no-store",
  })
    .then(res => res.json())
    .then(data => data.data);

  return (
    <div className="sticky h-screen flex w-full max-w-[18rem] flex-col bg-white pt-15 text-gray-700 shadow-xl">
      <div className="px-6 py-5">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-green-600" />
          <span className="text-sm font-bold text-gray-800">Popular Authors</span>
        </div>

        <div className="space-y-2">
          {author?.map((item, index) => (
            <div
              key={item.id}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer group border border-transparent hover:border-gray-200"
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gray-200 ring-2 ring-gray-100 group-hover:ring-green-200 transition-all"></div>

                {index === 0 && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-3 h-3 text-orange-600" />
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Crown className="w-3 h-3 text-yellow-600" />
                  </div>
                )}
                {index === 4 && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Star className="w-3 h-3 text-green-600" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  {/* NAME */}
                  <div className="text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors line-clamp-1">
                    {item.name}
                  </div>
                </div>

                {/* COUNTRY */}
                <div className="text-xs text-gray-500 mb-1.5">
                  {item.country}
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-3 bg-gray-100 rounded w-16"></div>
                  <div className="h-3 bg-gray-100 rounded w-14"></div>
                </div>
              </div>

              <button className="mt-1 px-3 py-1 text-green-600 hover:bg-green-600 hover:text-white text-xs font-semibold border border-green-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bagian bawah tetap sama */}
      <div className="px-6 pb-6">
        <div className="from-gray-900 to-gray-800 rounded-xl p-5 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 rounded-full -mr-12 -mt-12 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-400 opacity-10" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          <div className="absolute top-1/2 right-4 w-16 h-0.5 bg-green-500 opacity-30 rotate-45"></div>
          <div className="absolute bottom-6 right-8 w-3 h-3 bg-green-400 rounded-full"></div>

          <div className="relative z-10">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-white text-base mb-2">Become an Author</h4>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Share your stories and knowledge with millions of readers worldwide
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-lg w-full">
              View All Author →
            </button>
          </div>
        </div>
      </div>

      <div className="h-4"></div>
    </div>

  );
}