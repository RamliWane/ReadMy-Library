export default function FilterActivity(){
    return(
        <div className="flex gap-2 pt-5 pr-2">
            <button className="px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors">
                Hari Ini
            </button>
            <button className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                Aktivitas Literasi
            </button>
            <button className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                Seremoni
            </button>
            <button className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                Story Telling
            </button>
            <button className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                Seminar
            </button>
        </div>
    )
}