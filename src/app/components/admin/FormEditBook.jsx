// app/components/admin/FormEditBook.jsx
import { redirect } from "next/navigation";

async function EditBuku(formData) {
  "use server";

  const id = formData.get("id");

  // Buat payload kosong dulu
  const payload = {};

  // Cuma masukin data yang diisi aja
  const judul_buku = formData.get("judul_buku");
  const pengarang = formData.get("pengarang");
  const penerbit = formData.get("penerbit");
  const tahun_terbit = formData.get("tahun_terbit");
  const isbn = formData.get("isbn");
  const stok = formData.get("stok");
  const genre = formData.get("genre");
  const gambar = formData.get("gambar");

  if (judul_buku) payload.judul_buku = judul_buku;
  if (pengarang) payload.pengarang = pengarang;
  if (penerbit) payload.penerbit = penerbit;
  if (tahun_terbit) payload.tahun_terbit = Number(tahun_terbit);
  if (isbn) payload.isbn = isbn;
  if (stok) payload.stok = Number(stok);
  if (genre) payload.genre = genre;
  if (gambar) payload.gambar = gambar;

  await fetch(`http://localhost:5000/buku/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  redirect("/booklist");
}

export default async function FormEditBook({ id, buku }) {
  return (
    <div className="bg-white/80 p-6 md:p-8 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Edit Buku</h2>
      </div>

      <div className="space-y-5">
        <form action={EditBuku}>
          <input type="hidden" name="id" value={id} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2 group">
              <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                Judul Buku
              </label>
              <input
                name="judul_buku"
                defaultValue={buku?.judul_buku}
                className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 bg-white/50"
                placeholder="Masukkan judul buku"
              />
            </div>

            <div className="flex flex-col gap-2 group">
              <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                Pengarang
              </label>
              <input
                name="pengarang"
                defaultValue={buku?.pengarang}
                className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-200 bg-white/50"
                placeholder="Nama pengarang"
              />
            </div>

            <div className="flex flex-col gap-1 group">
              <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                Penerbit
              </label>
              <input
                name="penerbit"
                defaultValue={buku?.penerbit}
                className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-200 bg-white/50"
                placeholder="Nama penerbit"
              />
            </div>

            <div className="flex flex-col gap-1 group">
              <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                Tahun Terbit
              </label>
              <input
                name="tahun_terbit"
                type="number"
                defaultValue={buku?.tahun_terbit}
                className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 bg-white/50"
                placeholder="2024"
              />
            </div>

            <div className="flex flex-col gap-1 group">
              <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                ISBN
              </label>
              <input
                name="isbn"
                defaultValue={buku?.isbn}
                className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-200 bg-white/50"
                placeholder="Nomor ISBN"
              />
            </div>

            <div className="flex flex-col gap-1 group">
              <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                Stok
              </label>
              <input
                name="stok"
                type="number"
                defaultValue={buku?.stok}
                className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all duration-200 bg-white/50"
                placeholder="Jumlah stok"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 group">
            <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
              Genre
            </label>
            <input
              name="genre"
              defaultValue={buku?.genre}
              className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 bg-white/50"
              placeholder="Contoh: Fiksi, Aksi, Horor"
            />
          </div>

          <div className="flex flex-col gap-1 group">
            <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
              Gambar Buku (URL)
            </label>
            <input
              name="gambar"
              defaultValue={buku?.gambar}
              className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 bg-white/50"
              placeholder="Masukkan link gambar"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-3 py-4 bg-black text-white rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Update Buku
          </button>
        </form>
      </div>
    </div>
  );
}