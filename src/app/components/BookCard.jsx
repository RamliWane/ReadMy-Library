import React from "react";

export default function BookCard(){
    return(
        <div className="relative flex flex-col max-w-xl items-center">
                                <img className="w-45 rounded-lg" src="./atomic-habbits-book.png" alt="Atomic Habits" />
                                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

                                <p
                                    className="text-[17px] bg-[#6DC700] w-30 h-7 flex items-center justify-center -mt-20 rounded-2xl text-white relative z-[10]"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Fiksi
                                </p>

                                <h1 className="text-xl text-white font-bold z-10">Atomic Habits</h1>
                                <p
                                    className="text-[17px] text-white z-10"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Abiel Yusuf
                                </p>
                            </div>
    )
}