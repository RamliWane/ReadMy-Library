"use client";
import { useState } from "react";

export default function BorrowButton({ idBuku }) {
  const [durasiPinjam, setDurasiPinjam] = useState(7);
  const [loading, setLoading] = useState(false);

  const handleBorrow = async () => {
    try {
      setLoading(true);

      const payload = {
        id_user: 1,
        id_buku: idBuku,
        durasi_pinjam: durasiPinjam
      };

      const res = await fetch("http://localhost:5000/peminjaman", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      const json = await res.json();
      console.log("Response:", json); 

      if (!res.ok) {
        throw new Error(json.message || "Gagal meminjam");
      }

      alert("Pengajuan peminjaman berhasil!");
      
    } catch (err) {
      console.error("Error:", err);
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <select 
        value={durasiPinjam}
        onChange={(e) => setDurasiPinjam(Number(e.target.value))}
        className="px-3 py-2 border rounded-lg text-black"
      >
        <option value={7}>7 hari</option>
        <option value={14}>14 hari</option>
        <option value={21}>21 hari</option>
      </select>

      <button
        onClick={handleBorrow}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
      >
        {loading ? "Memproses..." : "Borrow — Pinjam Buku"}
      </button>
    </div>
  );
}