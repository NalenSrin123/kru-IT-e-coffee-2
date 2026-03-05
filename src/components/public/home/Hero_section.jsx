import herosection from "../../../assets/images/coffee/herosection.png";

const Hero_section = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FDF6E9] min-h-screen">
      {/* Mobile View (default) */}
      <div className="relative w-full h-screen md:hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${herosection})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          {/* Main content */}
          <div className="max-w-md">
            <h2 className="text-5xl font-bold text-white mt-1 leading-tight">
              COFFEE
              <br />
              FACTORY
            </h2>
            <p className="text-white/90 text-base mt-4 leading-relaxed border-t border-white pt-4">
              Real coffee flavor, extracted from 100% natural coffee beans,
              gives you energy and freshness.
            </p>

            <button
              className="bg-transparent border border-white text-white 
                       px-8 py-3 rounded-full font-semibold text-base mt-6
                       hover:bg-[#6B3F23] hover:border-[#6B3F23] hover:text-[#EE8542]
                       transition-all duration-300 shadow-md"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View (md and above) */}
      <div className="hidden md:block relative w-full">
        <div
          className="w-full h-[70vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${herosection})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="bg-[#EAD7B7] py-24 relative">
          {/* Info Box */}
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

              <button className="bg-[#7D4729] px-8 py-3 rounded-full text-white font-semibold hover:bg-[#b65e20] transition">
                ORDER DRINKS
              </button>
            </div>
            <div className="p-10 bg-gray-50">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                It's a Kofee time
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium">Mon - Fri</span>
                  <span>6.00 am - 7.00 pm</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">Sat - Sun</span>
                  <span>7.00 am - 5.00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_section;
