"use client";

export default function DeleteButton({ id }) {
    
    const handleDelete = async () => {
        // Konfirmasi dulu
        if (!confirm("Yakin mau hapus buku ini?")) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/buku/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Buku berhasil dihapus!");
                window.location.reload();
            } else {
                alert("Gagal hapus buku");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan");
        }
    };

    return (
        <div>
            <button 
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
                Delete
            </button>
        </div>
    );
}