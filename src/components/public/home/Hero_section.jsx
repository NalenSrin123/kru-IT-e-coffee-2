import heroSectionImg from "../../../assets/images/coffee/herosection.png";

const HeroSection = () => {
  const hours = [
    { day: "Mon - Fri", time: "6.00 am - 7.00 pm" },
    { day: "Sat - Sun", time: "7.00 am - 5.00 pm" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#FDF6E9]">
      {/* ---------------- Mobile ---------------- */}
      <div className="relative w-full h-[380px] md:hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${heroSectionImg})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          {/* Top Text */}
     

          {/* Card */}
          <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden flex flex-col sm:flex-row">
            {/* Left Side */}
            <div className="w-full sm:w-1/2 p-4 border-b sm:border-b-0 sm:border-r">
              <h1 className="text-lg font-bold text-gray-800 mb-2">
                Have a cup of coffee
              </h1>
              <p className="text-xs text-gray-600 mb-3">
                Morbi justo vel diam non leo elementum massa.
              </p>
              <button className="bg-[#7D4729] px-4 py-2 text-xs rounded-full text-white">
                Order
              </button>
            </div>

            {/* Right Side */}
            <div className="w-full sm:w-1/2 p-4 bg-gray-50">
              <h2 className="text-sm font-bold text-gray-800 mb-3">
                Coffee Time
              </h2>
              <div className="space-y-2 text-xs text-gray-700">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between border-b pb-1">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Desktop ---------------- */}
      <div className="hidden md:block relative w-full">
        {/* Background */}
        <div
          className="w-full h-[70vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroSectionImg})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Info Box */}
        <div className="bg-[#EAD7B7] py-24 relative">
          <div className="absolute left-1/2 -top-32 -translate-x-1/2 w-[70%] max-w-5xl bg-white rounded-xl shadow-2xl grid grid-cols-[1.5fr_1fr] overflow-hidden">
            {/* Left Side */}
            <div className="p-10 border-r">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Have a cup of coffee
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Morbi justo vel diam non leo elementum massa. Molestie ipsum
                condimentum egestas vitae ut cras aenean aoreet odionis.
              </p>
              <button className="bg-[#7D4729] px-8 py-3 rounded-full text-white font-semibold hover:bg-[#b65e20] transition duration-300">
                ORDER DRINKS
              </button>
            </div>

            {/* Right Side */}
            <div className="p-10 bg-gray-50">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                It's a Kofee time
              </h2>
              <div className="space-y-4 text-gray-700">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between pb-2 border-b border-gray-200"
                  >
                    <span className="font-medium">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;