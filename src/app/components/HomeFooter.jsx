export default function HomeFooter() {
    return (
        <section>
            <div className="flex bg-[#ECF4E8] h-25 rounded-xl m-10 gap-5 flex-col flex-wrap justify-center items-center">      
                <div className="flex text-black gap-5" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    <h1>FAQ</h1>
                    <h1>Kebijakan Privasi</h1>
                    <h1>Bantuan</h1>
                    <h1>Tentang Kami</h1>
                </div>
                <div className="flex text-black gap-5 text-sm" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    <h1>Copyright © 2022 Dinas Perpustakaan dan Kearsipan Provinsi DKI Jakarta. Seluruh Hak Cipta Dilindungi Undang-Undang.</h1>
                </div>
            </div>
        </section>
    )
}