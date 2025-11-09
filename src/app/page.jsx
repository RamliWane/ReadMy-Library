export default function Home() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300&display=swap" rel="stylesheet" />

      <main>
        <div
          className="flex items-center min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: "url('./first-bg-landing.png')" }}
        >
          <div className="container px-8 lg:px-16">
            <div className="max-w-2xl flex flex-col gap-6">
              <p className="text-[17px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <h1 className="text-4xl lg:text-5xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                Ga ada orang yang <br />ga bisa <span className="text-[#6DC700]">baca</span>. Temuin <span className="text-[#6DC700]"><br />buku</span> lo!
              </h1>
              <p className="text-[17px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                Temukan buku yang menarik disini
              </p>
              <button
                className="text-[#6DC700] bg-white border-2 border-[#6DC700] font-bold py-2 px-6 rounded-lg w-fit hover:bg-[#6DC700] hover:text-white transition"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Read More
              </button>
            </div>
          </div>

          <div className="flex pr-10">
            <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="./planet-luna-book-2.png"
                alt="Book 1"
                className="w-150 h-84 object-cover rounded-md shadow-xl"
              />
            </div>

            <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="./arwah-book.png"
                alt="Book 2"
                className="w-150 h-84 object-cover rounded-md shadow-xl"
              />
            </div>

            <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="./harry-potter-book.png"
                alt="Book 3"
                className="w-150 h-84 object-cover rounded-md shadow-xl"
              />
            </div>

            <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="./deadpool-book.png"
                alt="Book 4"
                className="w-130 h-84 object-cover rounded-md shadow-xl"
              />
            </div>
          </div>
        </div>




        {/* ABOUT THE READMY LIBRARY */}




        <section>

            <div className="flex items-center justify-center mt-5">
              <div className="flex flex-col text-center gap-1">
                <h1 className="text-4xl lg:text-4xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                  New <span className="text-[#6DC700]">Release</span> Books
                </h1>
                <p className="text-[17px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <p className="text-[17px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  elit, sed do eiusmod tempor in
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-15 mt-10">
              <div className="flex flex-col items-center text center">
                <img src="./atomic-habbits-book.png" alt="" />
                <p className="text-[17px] pt-3 font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  James Clear
                </p>
                <h1 className="text-xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                  <span className="text-[#6DC700]">Atomic Habbits</span>
                </h1>
                <p className="text-[17px] text-[#B5830D] font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  1 October 2025
                </p>
              </div>
              <div className="flex flex-col items-center text center">
                <img src="./laskar-pelangi-book.png" alt="" />
                <p className="text-[17px] pt-3 font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  James Clear
                </p>
                <h1 className="text-xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                  <span className="text-[#6DC700]">Atomic Habbits</span>
                </h1>
                <p className="text-[17px] text-[#B5830D] font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  1 October 2025              
                </p>
              </div>
              <div className="flex flex-col items-center text center">
                <img src="./sapiens-book.png" alt="" />
                <p className="text-[17px] pt-3 font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  James Clear
                </p>
                <h1 className="text-xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                  <span className="text-[#6DC700]">Atomic Habbits</span>
                </h1>
                <p className="text-[17px] text-[#B5830D] font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  1 October 2025              
                </p>
              </div>
              <div className="flex flex-col items-center text center">
                <img src="./mariposa-book.png" alt="" />
                <p className="text-[17px] pt-3 font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  James Clear
                </p>
                <h1 className="text-xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                  <span className="text-[#6DC700]">Atomic Habbits</span>
                </h1>
                <p className="text-[17px] text-[#B5830D] font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  1 October 2025              
                </p>
              </div>
              <div className="flex flex-col items-center text center">
                <img src="./five-feet-apart-book.png" alt="" />
                <p className="text-[17px] pt-3 font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  James Clear
                </p>
                <h1 className="text-xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                  <span className="text-[#6DC700]">Atomic Habbits</span>
                </h1>
                <p className="text-[17px] text-[#B5830D] font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  1 October 2025
                </p>
              </div>

            </div>
        </section>
        <section>

            <div className="flex items-center justify-center mt-20">
              <div className="flex flex-col text-center gap-1">
                <h1 className="text-4xl lg:text-4xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                  Most <span className="text-[#6DC700]">Popular</span> Novels
                </h1>
                <p className="text-[17px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <p className="text-[17px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  elit, sed do eiusmod tempor in
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              <div className="flex flex-wrap items-center text center">
                <img className="w-2xl" src="./piercy-jackson-book.png" alt="" />
                <div className="flex flex-col">
                  <p className="text-[17px] pt-3 font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    James Clear
                  </p>
                  <h1 className="text-xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                    <span className="text-[#6DC700]">Atomic Habbits</span>
                  </h1>
                  <p className="text-[17px] text-[#B5830D] font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    1 October 2025
                  </p>
                </div>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}