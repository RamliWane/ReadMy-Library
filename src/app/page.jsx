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
                className="text-[#6DC700]  bg-white border-2 border-[#6DC700] font-bold py-2 px-6 rounded-lg w-fit hover:bg-[#6DC700] hover:text-white transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Read More
              </button>
            </div>
          </div>

          <div className="flex pr-10">
            <div className=" transition-transform duration-300 hover:-translate-y-5 cursor-pointer">
              <img
                src="./planet-luna-book-2.png"
                alt="Book 1"
                className="w-150 h-84 object-cover rounded-md shadow-xl"
              />
            </div>

            <div className="transition-transform duration-300 hover:-translate-y-5 cursor-pointer">
              <img
                src="./arwah-book.png"
                alt="Book 2"
                className="w-150 h-84 object-cover rounded-md shadow-xl"
              />
            </div>

            <div className="transition-transform duration-300 hover:-translate-y-5 cursor-pointer">
              <img
                src="./harry-potter-book.png"
                alt="Book 3"
                className="w-150 h-84 object-cover rounded-md shadow-xl"
              />
            </div>

            <div className="transition-transform duration-300 hover:-translate-y-5 cursor-pointer">
              <img
                src="./deadpool-book.png"
                alt="Book 4"
                className="w-130 h-84 object-cover rounded-md shadow-xl"
              />
            </div>
          </div>
        </div>


        <section>
          <div className="bg-[#ECF4E8]">
            <div className="flex pt-10 flex-wrap justify-around items-center">
              <h1 className="text-3xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                About The <span className="text-[#6DC700]">ReadMy</span> <br />Library.
              </h1>
              <p className="text-[17px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-[#CCC5B8] flex flex-wrap rounded-lg mb-10 mt-10">
                  <img className="w-90 md:w-60 md:h-65" src="./remove.png" alt="" />
                <div className="bg-[white] mr-3 flex justify-start mt-2 rounded-lg lg:w-120 lg:h-60 md:w-100 md:h-60">
                  <h1 className="text-3xl pt-25 pl-10 text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                    <span className="text-[#6DC700]">ReadMy</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

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