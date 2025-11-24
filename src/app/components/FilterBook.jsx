export default function FilterBook() {
    return (
        <div className="flex gap-2 pt-5 pr-2">
            <button className="px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors">
                Semua
            </button>
            <button className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                Fiksi
            </button>
            <button className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                Sejarah
            </button>
            <button className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                Romance
            </button>
            <button className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                Religi
            </button>
            <button className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                Horror
            </button>
            <button className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                Inspirasi
            </button>
        </div>
    )
}