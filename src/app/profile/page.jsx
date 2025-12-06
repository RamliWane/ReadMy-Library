import { Book, Calendar, User, Mail, Phone, MapPin, Clock, Edit, Settings, LogOut } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LogoutButton from '../components/LogoutButton';


export default async function Profile() {
   
    const session = await getServerSession(authOptions);
    console.log(session);

    const user = session?.user;
    return (
        <Sidebar>
            <div className="min-h-screen bg-linear-to-br from-[#ECF4E8] to-[#D4E7C5] p-4 md:p-8">
                <div className="max-w-5xl mx-auto animate-slide-up animate-delay-200">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="h-32 bg-linear-to-r from-green-400 to-emerald-500"></div>
                        
                        <div className="relative px-6 pb-6">
                            <div className="absolute -top-16 left-6">
                                <div className="relative">
                                    <img 
                                        src={`https://ui-avatars.com/api/?name=${user.username}&size=200&background=4CAF50&color=fff`}
                                        alt={user.username}
                                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 pt-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition">
                                    <LogoutButton />
                                    </div>
                            </div>
                            <div className="mt-16">
                                <h1 className="text-3xl font-bold text-gray-800">{user.username}</h1>
                                <p className="text-gray-600 mt-2 max-w-2xl">
                                    {user.bio || 'Penggemar buku yang antusias'}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Mail size={18} className="text-green-600" />
                                        <span className="text-sm">{user.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Phone size={18} className="text-green-600" />
                                        <span className="text-sm">{user.phone || '08.........'}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <MapPin size={18} className="text-green-600" />
                                        <span className="text-sm">{user.location || 'depok'}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Calendar size={18} className="text-green-600" />
                                        <span className="text-sm">Joined {user.created_at}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </Sidebar>
    );
}