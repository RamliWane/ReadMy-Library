//BorrowPending.jsx
"use client"
import { useState, useEffect } from "react";

export default function BorrowPending() {

  const [data, setData] = useState([]);

  const fetchPending = async () => {
    try {
      const res = await fetch("http://localhost:5000/peminjaman/pending");
      const json = await res.json();
      setData(json.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const approve = async (id) => {
    try {
     await fetch(`http://localhost:5000/peminjaman/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "accept"
      })
    });

      fetchPending();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-xl border border-white/20 transition-all duration-300 lg:col-span-2">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Pengajuan Peminjaman
          </h2>
          <p className="text-sm text-gray-500">
            Menunggu persetujuan Anda
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {data.map((item, index) => (
          <div
            key={index}
            className="group p-5 bg-white rounded-2xl border-2 border-emerald-100 hover:border-[#6dc700] hover:shadow-lg transition-all duration-200"
          >

            <div className="flex flex-col gap-3">

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                    {item.username.charAt(0)}
                  </div>

                  <div className="flex-1">
                    <p className="font-bold text-gray-800">
                      {item.username}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.tgl_peminjaman}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 flex items-center gap-2 ml-1">
                  {item.judul_buku}
                </p>

              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => approve(item.id)}
                  className="flex-1 px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1"
                >
                  Setujui
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
