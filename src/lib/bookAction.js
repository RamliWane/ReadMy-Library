'use server';

export async function tambahBuku(formData) {
  const payload = {
    judul_buku: formData.get("judul_buku"),
    pengarang: formData.get("pengarang"),
    penerbit: formData.get("penerbit"),
    tahun_terbit: Number(formData.get("tahun_terbit")),
    isbn: formData.get("isbn"),
    stok: Number(formData.get("stok")),
    genre: formData.get("genre"),
    gambar: formData.get("gambar"),
  };

  await fetch("http://localhost:5000/buku", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
