export default function sidebar() {
    return (
        <div className="xl:w-64 md:w-64 lg:w-64  h-screen bg-white shadow-xl text-gray-500 p-5">
            <div className="m-4 space-y-8 ">
                <ul className="space-x-2">
                    <h3 className="text-[12px] font-bold">LIBRARY</h3>
                    <li className="flex items-center gap-2 text-blue-600 p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9-4 9 4-9 4-9-4zM3 17l9 4 9-4M3 12l9 4 9-4" />
                        </svg>
                        Discover
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17l6-6 4 4 8-8" />
                        </svg>
                        Trending
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10M4 18h7" />
                        </svg>
                        Genre
                    </li>

                    <li className="flex items-center gap-2 hover:text-blue-600 p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                            <circle cx="12" cy="12" r="9" />
                        </svg>
                        Recent
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                            C2 6 4 4 6.5 4 
                            c1.74 0 3.41 0.81 4.5 2.09 
                            C12.09 4.81 13.76 4 15.5 4 
                            C18 4 20 6 20 8.5 
                            c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        Favourites
                    </li>
                </ul>
                <ul className="space-x-2">
                    <h3 className="text-[12px] font-bold">MENU</h3>
                    <li className="flex items-center gap-2 hover:text-blue-600 p-2 rounded cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="1.8"
                        className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"/>
                    </svg>
                    Account
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 p-2 rounded cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="1.8"
                        className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 13.5l4.5-4.5 4.5 4.5L21 4.5M3 21h18"/>
                    </svg>
                    Dashboard
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 p-2 rounded cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="1.8"
                        className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.065z"/>
                        <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Settings
                    </li>
                </ul>
            </div>
        </div>
    )
}