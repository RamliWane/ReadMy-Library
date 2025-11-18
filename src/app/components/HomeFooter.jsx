export default function HomeFooter() {
    return (
        <section>
            <div className="flex border bg-[#ECF4E8] h-25 rounded-xl m-10 gap-5 flex-col flex-wrap justify-center items-center">      
                <div className="flex text-black gap-5" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    <h1 className="hover:underline">FAQ</h1>
                    <h1 className="hover:underline">Kebijakan Privasi</h1>
                    <h1 className="hover:underline">Bantuan</h1>
                    <h1 className="hover:underline">Tentang Kami</h1>
                </div>
                <div className="flex text-black gap-5 text-sm" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    <h1>Copyright © 2022 Dinas Perpustakaan dan Kearsipan Provinsi DKI Jakarta. Seluruh Hak Cipta Dilindungi Undang-Undang.</h1>
                </div>
            </div>
        </section>
    )
}