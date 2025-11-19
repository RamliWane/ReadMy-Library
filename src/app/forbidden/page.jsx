export default function ForbiddenPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-black">403</h1>
        <h2 className="text-2xl font-semibold mt-4 text-black">Akses Ditolak</h2>
        <p className="text-gray-600 mt-2">
          Kamu tidak memiliki izin untuk mengakses halaman ini.
        </p>

        <a
          href="/home"
          className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}
