import ScrambleText from "./ui/scramble";
export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

    
        <div className="absolute w-[800px] h-[800px] bg-white/10 blur-3xl rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-gray-400/20 blur-[120px] rounded-full animate-pulse" />

      </div>

      {/* MAIN TITLE
      <div className="absolute left-4 top-12 z-10">
        <h1 className="text-[180px] font-extrabold leading-none text-gray-200">
          IronSwarm
        </h1>
      </div> */}

      {/* SUBTEXT */}
      <div className="absolute bottom-10 left-6 max-w-none text-gray-300">
          <ScrambleText text="Autonomous aerial computing."/>
          <ScrambleText text="Optimizing intelligent warfare to protect our future." />
      </div>

      {/* FLOATING CARD
      <div className="absolute bottom-16 right-16 bg-white/10 backdrop-blur-lg p-4 rounded-xl flex items-center gap-4 border border-white/20">
        <img
          src="/profile.jpg"
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div>
          <p className="text-sm text-gray-300">Director</p>
          <p className="font-semibold">Zachary Ronski</p>
          <button className="mt-2 text-sm bg-white text-black px-3 py-1 rounded-full">
            Lets talk
          </button>
        </div>
      </div> */}
    </div>
  );
}