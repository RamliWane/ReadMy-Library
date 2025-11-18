import React from 'react';
import { Users, BookOpen, Star, TrendingUp, Crown } from 'lucide-react';

export default function AuthorSidebar() {
  const getBadge = (badge) => {
    if (badge === "trending") return <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs font-semibold"><TrendingUp className="w-3 h-3" />Trending</div>;
    if (badge === "top") return <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold"><Crown className="w-3 h-3" />Top</div>;
    if (badge === "new") return <div className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs font-semibold"><Star className="w-3 h-3" />New</div>;
    return null;
  };

  return (
    <div className="sticky top-0 h-screen flex w-full max-w-[18rem] flex-col bg-white p-3 text-gray-700 border">
      <div className="p-1 pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Author</h2>
      </div>      

      <div className="px-6 pb-2">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-green-600" />
          <span className="text-sm font-bold text-gray-800">Popular Authors</span>
        </div>
        
        <div className="space-y-2">
          {[1, 2, 3, 4].map((index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer group border border-transparent hover:border-gray-200"
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gray-200 ring-2 ring-gray-100 group-hover:ring-green-200 transition-all"></div>
                {index === 1 && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-3 h-3 text-orange-600" />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Crown className="w-3 h-3 text-yellow-600" />
                  </div>
                )}
                {index === 5 && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Star className="w-3 h-3 text-green-600" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="h-4 bg-gray-200 rounded w-24 group-hover:bg-green-100 transition-colors"></div>
                  {index === 1 && getBadge("trending")}
                  {index === 2 && getBadge("top")}
                  {index === 5 && getBadge("new")}
                </div>
                <div className="h-3 bg-gray-100 rounded w-32 mb-1.5"></div>
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
        
        <button className="w-full mt-4 text-green-600 hover:bg-green-50 font-semibold text-sm py-2.5 border-2 border-green-600 rounded-xl transition-all hover:shadow-md">
          View All Authors
        </button>
      </div>

      <div className="px-6 pb-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 rounded-full -mr-12 -mt-12 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-400 opacity-10" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          <div className="absolute top-1/2 right-4 w-16 h-0.5 bg-green-500 opacity-30 rotate-45"></div>
          <div className="absolute bottom-6 right-8 w-3 h-3 bg-green-400 rounded-full"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-white text-base mb-2">Become an Author</h4>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Share your stories and knowledge with millions of readers worldwide
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-lg w-full">
              Start Writing →
            </button>
          </div>
        </div>
      </div>

      <div className="h-4"></div>
    </div>
  );
}