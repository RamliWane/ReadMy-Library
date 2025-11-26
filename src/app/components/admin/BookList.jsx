//app/components/BorrowList.jsx

import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default async function BookList() {
  const book = await fetch("http://localhost:5000/buku", {
    method: "GET",
    cache: "no-store",
  })
    .then(res => res.json())
    .then(data => data.data);

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-white-600 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Book List</h2>
          <p className="text-sm text-gray-500">Semua buku</p>
        </div>
      </div>
      <>
        {book?.map((item) => (
          <div key={item.id} className="space-y-3 max-h-96 overflow-y-auto pr-2">
            <div
              className="group p-4 bg-gradient-to-r from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-emerald-300 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">

                {/* FLEX UTAMA */}
                <div className="flex justify-between items-center">

                  {/* BAGIAN KIRI */}
                  <div className="flex items-center gap-3">
                    <img className="w-15 h-23" src={item.gambar} alt={item.judul_buku} />

                    <div className="flex flex-col">
                      <p className="font-bold text-gray-800" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                        {item.judul_buku}
                      </p>

                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        {item.genre}
                      </p>
                    </div>
                  </div>

                  {/* BAGIAN KANAN (BUTTON) */}
                  <div className="flex gap-2">
                    <EditButton />
                    <DeleteButton />
                  </div>

                </div>
              </div>
            </div>
          </div>
              ))}
    </>
      </div>
      )
}