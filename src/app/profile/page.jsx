import { Book, Calendar, User, Mail, Phone, MapPin, Clock, Edit, Settings, LogOut } from 'lucide-react';
import Sidebar from '../components/Sidebar';

export default async function Profile() {
    // Ambil user ID dari session/cookies
    // Contoh: dari cookies atau query parameter
    const id = 1; // Ganti dengan cara ambil dari session/auth
    
    // Fetch data user spesifik berdasarkan ID
    const user = await fetch(`http://localhost:5000/users/${id}`, { 
        method: "GET",
        cache: "no-store",
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('User not found');
        }
        return res.json();
    })
    .then(data => data.data)
    .catch(error => {
        console.error('Error fetching user:', error);
        return null;
    });

    // Redirect ke login jika user tidak ditemukan
    if (!user) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#ECF4E8] to-[#D4E7C5] flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">User tidak ditemukan</h2>
                    <a href="/login" className="text-blue-600 hover:underline">Kembali ke Login</a>
                </div>
            </div>
        );
    }

    return (
        <Sidebar>
            <div className="min-h-screen bg-gradient-to-br from-[#ECF4E8] to-[#D4E7C5] p-4 md:p-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header Card */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                        <div className="h-32 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                        
                        <div className="relative px-6 pb-6">
                            <div className="absolute -top-16 left-6">
                                <div className="relative">
                                    <img 
                                        src={`https://ui-avatars.com/api/?name=${user.username}&size=200&background=4CAF50&color=fff`}
                                        alt={user.username}
                                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                                    />
                                    <button className="absolute bottom-0 right-0 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition">
                                        <Edit size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 pt-4">
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                                    <Settings size={18} />
                                    <span className="hidden sm:inline">Settings</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition">
                                    <LogOut size={18} />
                                    <span className="hidden sm:inline">Logout</span>
                                </button>
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

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Books Read</p>
                                    <p className="text-3xl font-bold text-green-600 mt-1">{user.books_read || 0}</p>
                                </div>
                                <div className="bg-green-100 p-3 rounded-full">
                                    <Book size={24} className="text-green-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Wishlist</p>
                                    <p className="text-3xl font-bold text-blue-600 mt-1">{user.wishlist_count || 0}</p>
                                </div>
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <Clock size={24} className="text-blue-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Reviews</p>
                                    <p className="text-3xl font-bold text-purple-600 mt-1">{user.reviews_count || 0}</p>
                                </div>
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <User size={24} className="text-purple-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
                        <div className="space-y-4">
                            {[
                                { action: "Finished reading", book: "The Great Gatsby", time: "2 days ago" },
                                { action: "Added to wishlist", book: "1984 by George Orwell", time: "5 days ago" },
                                { action: "Wrote a review for", book: "To Kill a Mockingbird", time: "1 week ago" },
                            ].map((activity, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <Book size={18} className="text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-800">
                                            <span className="font-medium">{activity.action}</span> {activity.book}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}