import React from "react";
import { Mic, Clock, MapPin } from 'lucide-react';

export default function LiterasiAct() {
    return (
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 bg-linear-to-br from-gray-700 to-gray-900">
                <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
                    alt="Event venue"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                    Sosialisasi Dan Workshop Taman Bacaan
                </h2>

                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5">
                            <Mic className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="text-gray-700 text-sm">
                            Dr. Abiel Yusuf, M.Pd
                        </span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5">
                            <Clock className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="text-gray-700 text-sm">
                            22 November 2025, 09:00 - 16:00 WIB
                        </span>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5">
                            <MapPin className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="text-gray-700 text-sm">
                            Pusat Dokumentasi Sastra HB Jassin
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}