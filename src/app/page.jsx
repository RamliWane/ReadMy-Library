import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <nav className="">
        <Navbar></Navbar>
      </nav>
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

            <div className=" flex overflow-x-auto gap-4  pr-10">
                <div className="transition-transform duration-300 hover:-translate-y-5 cursor-pointer">
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
            <div className="flex flex-wrap justify-start -mt-20">
              <div className="flex flex-wrap items-center justify-center">
                <img className="w-2xl lg:pl-10" src="./popular-test.png" alt="" />
                <div className="flex flex-col lg:pt-20">
                  <h1 className="text-4xl lg:text-4xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                    Piercy Jackson #1 -<span className="text-[#6DC700]">Rick <br />Riordan</span>
                  </h1>
                  <p className="text-[20px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua.
                  </p>
                  <button
                    className="text-[#6DC700]  bg-white border-2 border-[#6DC700] font-bold py-2 mt-3 px-6 rounded-lg w-fit hover:bg-[#6DC700] hover:text-white transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-end lg:-mt-20 mt-5">
              <div className="flex flex-wrap items-center justify-center flex-row-reverse">
                <img className="w-xl lg:pr-10" src="./test-asal.png" alt="" />
                <div className="flex flex-col lg:pt-20 lg:pr-40 text-right">
                  <h1 className="text-4xl lg:text-4xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                    Piercy Jackson #1 -<span className="text-[#6DC700]">Rick <br />Riordan</span>
                  </h1>
                  <p className="text-[20px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua.
                  </p>
                  <div className="flex justify-end">
                    <button
                      className="text-[#6DC700] bg-white border-2 border-[#6DC700] font-bold py-2 mt-3 px-6 rounded-lg w-fit hover:bg-[#6DC700] hover:text-white transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-wrap justify-center items-center gap-15 mt-20 mb-20">
              <img className="w-100" src="./retangle-coba.png" alt="" />
              <img className="w-65" src="./retangle-coba-2.png" alt="" />
              <div className="flex items-start flex-col gap-2">
                <h1 className="text-4xl lg:text-4xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                  Lorem ipsum dolor sit amet, <br />consectetur<span className="text-[#6DC700]"> adipiscing elit</span>
                </h1>
                <p className="text-[20px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua.
                </p>
                <button
                  className="text-[#6DC700] bg-white border-2 border-[#6DC700] font-bold py-2 mt-3 px-6 rounded-lg w-fit hover:bg-[#6DC700] hover:text-white transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  Read More
                </button>
              </div>
            </div>
          </section>

          <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div className="col-span-1 md:col-span-1">
                  <span className="text-2xl mb-4 font-bold text-[#6DC700]" style={{ fontFamily: "'Homemade Apple', cursive" }}>
                    ReadMy
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Your destination for discovering amazing books and stories that inspire.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6DC700] transition-colors">
                      <span className="text-xl">📘</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6DC700] transition-colors">
                      <span className="text-xl">📱</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6DC700] transition-colors">
                      <span className="text-xl">✉️</span>
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-[#6DC700] transition-colors">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#6DC700] transition-colors">About Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#6DC700] transition-colors">Books</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#6DC700] transition-colors">Authors</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#6DC700] transition-colors">Blog</a></li>
                  </ul>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-[#6DC700] transition-colors">Fiction</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#6DC700] transition-colors">Non-Fiction</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#6DC700] transition-colors">Mystery</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#6DC700] transition-colors">Romance</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#6DC700] transition-colors">Sci-Fi</a></li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact</h3>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span>📍</span>
                      <span>123 Book Street, Reading City, RC 12345</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>📧</span>
                      <span>info@bookstore.com</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>📞</span>
                      <span>+1 (555) 123-4567</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </footer>

        </main>
      </div>
    </div>
  );
}