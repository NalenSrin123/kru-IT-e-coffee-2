import React from "react";
const Design_Service_Page = () => {
  return (
    <div className="bg-[#e8d3b1] min-h-screen">


      <div
        className="h-[300px] bg-cover bg-center flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="text-5xl font-bold z-10">Our Service</h1>
        <p className="z-10 mt-2 text-lg italic">
          Your Perfect Place to Sip, Study & Relax
        </p>
      </div>


      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold text-[#6b3e26]">
          Coffee first, everything else later.
        </h2>
      </div>


      <div className="container mx-auto px-6 md:px-20 py-10 grid md:grid-cols-2 gap-10 items-center">


        <div className="rounded-4xl overflow-hidden shadow-lg w-full max-w-md mt-3 ">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/207/218/non_2x/free-delivery-by-scooter-vector.jpg"
            alt="Delivery"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#4a2c1a] mb-4 text-center">
            Fast & Fresh Coffee Delivery
          </h3>
          <p className="text-gray-700 leading-relaxed text-center">
            Craving your favorite coffee but don`t want to go out?
            Order from our website and enjoy fresh, handcrafted
            coffee delivered straight to your home, office, or campus.
            We prepare every cup with care and deliver it quickly
            to keep it hot, fresh, and delicious.
          </p>
        </div>
        <p className=" mt-3 italic text-center text-gray-700 text-sm">
          Craving your favorite coffee but don`t want to go out?
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-20 py-16 grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-[#4a2c1a] mb-4 text-center ">
            Chill, Study & Enjoy Great Coffee
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0 text-center">
            Our coffee shop is more than just a place to drink coffee —
            it`s a space to feel comfortable. With cozy seating,
            soft music, and free WiFi, it`s the perfect spot to
            study, meet friends, or just chill with a warm cup in hand.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-4xl overflow-hidden shadow-lg w-full max-w-md">
            <img
              src="https://i.pinimg.com/736x/a5/f9/56/a5f956e2c1d564aa00104886f8f8fa65.jpg"
              alt="Cafe Interior"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mt-6 italic text-gray-700 text-sm text-center">
            A cup of coffee is a little moment of happiness.
          </p>
        </div>

      </div>
    </div>
  );
};
export default Design_Service_Page;