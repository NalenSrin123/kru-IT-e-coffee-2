import React from "react";

const Home = () => {
  return (
    <div className="bg-[#efddba] min-h-screen mt-0">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5B3A1A] leading-tight">
              Discover the best coffee
            </h1>

            <p className="mt-6 text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
              Bean Scene is a coffee shop that provides you with quality coffee
              that helps boost your productivity and helps build your mood.
              Having a cup of coffee is good, but having a cup of real coffee is
              greater. There is no doubt that you will enjoy this coffee more
              than others you have ever tasted.
            </p>

            <button className="mt-8 bg-[#F4B860] hover:bg-[#e5a84f] text-black px-7 py-3 rounded-xl shadow-md transition">
              Learn More
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
              alt="Cafe"
              className="rounded-2xl w-full h-64 sm:h-80 md:h-[420px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= LOGO ROW ================= */}
      <section className=" border-blue-500 py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center font-semibold text-gray-800 tracking-wide">
            <span>LAVENDER AGENCY</span>
            <span className="text-[#F97316]">VIN-TAGE</span>
            <span>VIOLET</span>
            <span>CEATHES</span>
            <span>Creator Fav</span>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">

          {[
            "1495474472287-4d71bcdd2085",
            "1509042239860-f550ce710b93",
            "1511920170033-f8396924c348",
            "1442512595331-e89e73853f31",
            "1504754524776-8f4f37790ca0",
            "1470337458703-46ad1756a187",
            "1498804103079-a6351b050096",
            "1501339847302-ac426a4a7cbb",
          ].map((id, index) => (
            <img
              key={index}
              src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`}
              alt="Gallery"
              className="w-full h-40 sm:h-52 md:h-60 object-cover rounded-lg"
            />
          ))}

        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        <div className="relative text-gray-700">

          {/* Big Quote */}
          <span className="absolute text-7xl sm:text-8xl text-gray-300 -top-8 left-0">
            “
          </span>

          <p className="pl-10 sm:pl-16 text-base sm:text-lg italic leading-relaxed">
            I absolutely love the cozy ambiance of this cafe! The warm lighting,
            comfortable seating, and charming decor make it the perfect place
            to unwind. And the coffee? Simply divine! Every sip of their
            artisanal brews is a treat for the taste buds. Highly recommended!
          </p>

          <div className="mt-6 pl-10 sm:pl-16">
            <p className="font-semibold text-gray-800">
              Bunheng Sreng
            </p>

            <div className="flex gap-2 mt-3">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="w-3 h-3 bg-orange-200 rounded-full"></span>
              <span className="w-3 h-3 bg-orange-200 rounded-full"></span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;