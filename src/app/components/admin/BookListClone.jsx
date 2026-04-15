import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default async function BorrowList() {
  const book = await fetch("http://localhost:5000/buku", {
    method: "GET",
    cache: "no-store",
  })
    .then(res => res.json())
    .then(data => data.data);

  return (
    <div className="bg-white rounded-2xl overflow-y-auto overflow-x-hidden shadow-sm border border-gray-100 overflow-hidden">
      <div className="grid grid-cols-[0.5fr_2fr_2fr_2fr_2fr_2fr] px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <span>No</span>
        <span>Gambar</span>
        <span>Judul Buku</span>
        <span>Pengarang</span>
        <span>Stock</span>
        <span>Action</span>
      </div>

      <div className="max-h-130 overflow-y-auto overflow-x-hidden divide-y divide-gray-100 ">
        {book.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.5fr_2fr_2fr_2fr_2fr_2fr] px-6 py-4 hover:bg-gray-50 transition-colors duration-150 items-center justify-between"
          >
            <span className="text-sm text-gray-500">{index + 1}</span>

            <div className="flex items-center gap-3">
              <img className="w-15 h-23" src={item.gambar} alt={item.judul_buku} />
            </div>

            <span className="text-sm text-gray-600">{item.judul_buku}</span>

            <span className="text-sm text-gray-600">{item.pengarang}</span>

            <span className="text-sm text-gray-600">{item.stok}</span>
            <div className="flex gap-2">
              <EditButton id={item.id} />
              <DeleteButton id={item.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}