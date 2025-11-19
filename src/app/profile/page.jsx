"use client";

import React, { useState } from 'react';
import { Book, Calendar, User, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Sidebar from "../components/Sidebar";

export default function profile() {

    const [activeTab, setActiveTab] = useState('active');

    const profileData = {
        name: 'Budi Santoso',
        email: 'budi.santoso@email.com',
        phone: '+62 812-3456-7890',
        address: 'Jl. Sudirman No. 123, Jakarta',
        memberSince: '15 Januari 2023',
        avatar: 'BS'
    };

    const borrowingHistory = {
        active: [
            {
                id: 1,
                title: 'Clean Code',
                author: 'Robert C. Martin',
                borrowDate: '2024-11-10',
                dueDate: '2024-11-24',
                status: 'Dipinjam',
                cover: '📘'
            },
            {
                id: 2,
                title: 'The Pragmatic Programmer',
                author: 'David Thomas',
                borrowDate: '2024-11-12',
                dueDate: '2024-11-26',
                status: 'Dipinjam',
                cover: '📙'
            }
        ],
        completed: [
            {
                id: 3,
                title: 'Design Patterns',
                author: 'Gang of Four',
                borrowDate: '2024-10-15',
                returnDate: '2024-10-28',
                status: 'Dikembalikan',
                cover: '📕'
            },
            {
                id: 4,
                title: 'JavaScript: The Good Parts',
                author: 'Douglas Crockford',
                borrowDate: '2024-10-01',
                returnDate: '2024-10-14',
                status: 'Dikembalikan',
                cover: '📗'
            }
        ]
    };
    return (
        <section>
            <div className="flex bg-[#ECF4E8]">
                <Sidebar />
                <div className="min-h-screen bg-white p-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Profile Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32"></div>
                            <div className="px-6 md:px-8 pb-8">
                                <div className="flex flex-col md:flex-row items-center md:items-start -mt-16 md:-mt-12">
                                    <div className="bg-white rounded-full p-2 shadow-lg mb-4 md:mb-0">
                                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl font-bold">
                                            {profileData.avatar}
                                        </div>
                                    </div>
                                    <div className="md:ml-6 text-center md:text-left flex-1 mt-4">
                                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{profileData.name}</h1>
                                        <p className="text-gray-500 mb-4">Member sejak {profileData.memberSince}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-center justify-center md:justify-start text-gray-600">
                                                <Mail className="w-4 h-4 mr-2" />
                                                {profileData.email}
                                            </div>
                                            <div className="flex items-center justify-center md:justify-start text-gray-600">
                                                <Phone className="w-4 h-4 mr-2" />
                                                {profileData.phone}
                                            </div>
                                            <div className="flex items-center justify-center md:justify-start text-gray-600 md:col-span-2">
                                                <MapPin className="w-4 h-4 mr-2" />
                                                {profileData.address}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Borrowing History */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                                    <Book className="w-6 h-6 mr-3 text-blue-600" />
                                    Riwayat Peminjaman Buku
                                </h2>
                            </div>

                            {/* Tabs */}
                            <div className="flex border-b border-gray-200">
                                <button
                                    onClick={() => setActiveTab('active')}
                                    className={`flex-1 px-6 py-4 font-semibold transition-colors ${activeTab === 'active'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Sedang Dipinjam ({borrowingHistory.active.length})
                                </button>
                                <button
                                    onClick={() => setActiveTab('completed')}
                                    className={`flex-1 px-6 py-4 font-semibold transition-colors ${activeTab === 'completed'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Riwayat ({borrowingHistory.completed.length})
                                </button>
                            </div>

                            {/* Book List */}
                            <div className="p-6">
                                <div className="space-y-4">
                                    {borrowingHistory[activeTab].map((book) => (
                                        <div
                                            key={book.id}
                                            className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-start">
                                                <div className="text-5xl mr-4">{book.cover}</div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-bold text-gray-800 mb-1">{book.title}</h3>
                                                    <p className="text-gray-600 mb-3 flex items-center">
                                                        <User className="w-4 h-4 mr-1" />
                                                        {book.author}
                                                    </p>
                                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                        <div className="flex items-center">
                                                            <Calendar className="w-4 h-4 mr-1" />
                                                            Dipinjam: {book.borrowDate}
                                                        </div>
                                                        {activeTab === 'active' ? (
                                                            <div className="flex items-center text-orange-600">
                                                                <Clock className="w-4 h-4 mr-1" />
                                                                Jatuh tempo: {book.dueDate}
                                                            </div>
                                                        ) : (
                                                            <div className="flex items-center text-green-600">
                                                                <Calendar className="w-4 h-4 mr-1" />
                                                                Dikembalikan: {book.returnDate}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <span
                                                    className={`px-4 py-2 rounded-full text-sm font-semibold ${book.status === 'Dipinjam'
                                                            ? 'bg-blue-100 text-blue-700'
                                                            : 'bg-green-100 text-green-700'
                                                        }`}
                                                >
                                                    {book.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}