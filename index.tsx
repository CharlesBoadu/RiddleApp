// import Image from 'next/image'
// import { Inter } from 'next/font/google'

import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showRiddle, setShowRiddle] = useState(false);
  const [riddle, setRiddle] = useState("");
  const [answer, setAnswer] = useState("");

  const handleClick = () => {
    setShowRiddle(!showRiddle);
  };

  useEffect(() => {
    const fetchAllRiddles = async () => {
      const res = await fetch("http://localhost:4001/riddles");
      const data = await res.json();
      const random = Math.floor(Math.random() * data.length);
      setRiddle(data[random].riddle);
      setAnswer(data[random].answer);
    };
    fetchAllRiddles();
  }, [showRiddle]);

  return (
    <main className="bg-[#0d2477] flex flex-col items-center justify-center min-h-screen text-center font-inter">
      <div className="text-4xl font-bold text-white pb-4">
        Welcome to the Riddle App
      </div>
      <div
        className="w-fit h-fit font-bold rounded-lg hover:cursor-pointer bg-blue-400 px-4 py-2 text-white hover:bg-[#ffffff] hover:text-[#0d2477]"
        onClick={handleClick}
      >
        Click to show a riddle
      </div>
      {showRiddle ? (
        <>
          <div className="text-2xl font-bold text-white pt-4">{riddle}</div>
          <div className="text-2xl font-bold text-white pt-4"><span className="text-blue-400">Answer: </span>{answer}</div>
        </>
      ) : (
        <>
          <div className="text-2xl font-bold text-white pt-4">{riddle}</div>
          <div className="text-2xl font-bold text-white pt-4"><span className="text-blue-400">Answer: </span>{answer}</div>
        </>
      )}
    </main>
  );
}
