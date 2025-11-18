import React from "react";
import { Mic, Clock, MapPin } from 'lucide-react';

export default function LiterasiAct() {
    return (
        <div className="max-w-[300px] justify-center items-center m-2 mt-5 mb-10 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-40 bg-gradient-to-br from-gray-700 to-gray-900">
                <img
                    src="./aktivitas-literasi.jpeg"
                    alt="Event venue"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-3">
                <h2 className="text-[16px] font-bold text-gray-900 mb-3 leading-tight">
                    Sosialisasi Dan Workshop Taman Bacaan
                </h2>

                <div className="space-y-3">
                    <div className="flex items-center gap-1">
                        <div className="flex-shrink-0">
                            <Mic className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="text-gray-700 text-[14px]">
                            Dr. Abiel Yusuf, M.Pd
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex-shrink-0">
                            <Clock className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="text-gray-700 text-[14px]">
                            22 November 2025, 09:00 - 16:00 WIB
                        </span>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="flex-shrink-0">
                            <MapPin className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="text-gray-700 text-[14px]">
                            Pusat Dokumentasi Sastra HB Jassin
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}