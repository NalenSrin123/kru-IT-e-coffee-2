import React from "react";
import {
  Coffee,
  CheckCircle,
  Heart,
  Award,
  Users,
  Globe,
  Zap,
  Star,
} from "lucide-react";

const About = () => {
  return (
    <div>
      <div
        className="relative w-full h-[300px]  overflow-hidden shadow-2xl transition-all duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-white mt-4">
            Crafting exceptional coffee experiences since 2015
          </p>
        </div>
      </div>
      {/* ------------------Our Mission */}
      <div className="bg-[#EAD3A7] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Our Mission */}
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-6 text-[#6B3F1D]">
            Our Mission
          </h2>

          <p className="text-[#6B3F1D] max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            At E-Coffee Shop, we’re passionate about bringing the world’s finest
            coffees directly to your cup. We believe that great coffee starts
            with great relationships— with farmers, with our community, and with
            you. Every bean we roast tells a story of dedication,
            sustainability, and the pursuit of perfection.
          </p>

          <p className="text-[#6B3F1D] max-w-3xl mx-auto leading-relaxed mt-4 text-sm md:text-base">
            Our mission is simple: to source ethically, roast expertly, and
            deliver joy with every sip. We’re not just selling coffee; we’re
            sharing a passion that connects people across continents and
            cultures.
          </p>

          {/* Our Values */}
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B3F1D]  mt-16 mb-10">
            Our Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#F4E3C1] rounded-full mb-6">
                <Coffee className="text-[#C07A2C]" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-[#6B3F1D] mb-3">
                Quality First
              </h3>
              <p className="text-gray-600 text-sm">
                We source only the finest, single-origin beans from ethical
                farms around the world.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#F4E3C1] rounded-full mb-6">
                <CheckCircle className="text-[#C07A2C]" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-[#6B3F1D] mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600 text-sm">
                Our commitment to the environment drives every decision we make,
                from farm to cup.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#F4E3C1] rounded-full mb-6">
                <Heart className="text-[#C07A2C]" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-[#6B3F1D] mb-3">
                Community
              </h3>
              <p className="text-gray-600 text-sm">
                We believe in building lasting relationships with farmers,
                partners, and customers.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#F4E3C1] rounded-full mb-6">
                <Award className="text-[#C07A2C]" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-[#6B3F1D] mb-3">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                Every roast is crafted with precision and passion to deliver the
                perfect cup.
              </p>
            </div>
          </div>
         
        </div>
        <div className="max-w-6xl mx-auto text-center">
          {/* Our Journey */}
          <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#6B3F1D] mb-6">
                Our Journey
              </h2>
              <p className="text-lg leading-relaxed mb-4 text-[#6B3F1D]">
                It started with a simple realization: the world moves too fast,
                but coffee deserves time. Our journey began with a single
                roaster and a dream to bring the soul of the highlands to your
                neighborhood.
              </p>
              <p className="text-lg leading-relaxed text-[#6B3F1D]">
                Every bean we grind and every milk we steam is a tribute to the
                farmers who dedicate their lives to the craft. We are here to
                bridge the gap between the soil and your soul.
              </p>
            </div>

            <div className="border-[12px] border-white shadow-xl rounded-xl overflow-hidden transition-all duration-500 hover:-rotate-[10deg]">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt="Coffee pouring"
                className="w-full h-full object-cover "
              />
            </div>
          </section>
          {/* ================= STATS ================= */}
          <section className=" py-16 px-6 text-center">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users size={28} />,
                  number: "10K+",
                  text: "Happy Customers",
                },
                {
                  icon: <Globe size={28} />,
                  number: "25+",
                  text: "Countries Served",
                },
                {
                  icon: <Star size={28} />,
                  number: "4.9★",
                  text: "Customer Rating",
                },
                {
                  icon: <Coffee size={28} />,
                  number: "1M+",
                  text: "Cups Brewed",
                },
              ].map((item, index) => (
                <div key={index} className="items-center p-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ">
                  <div className="text-[#C07A2C] flex justify-center mb-3 ">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.number}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-[#905E42] text-white py-16 px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Ready to Taste the Difference?
              </h2>
              <p className="text-lg text-amber-100 mb-8">
                Experience the quality and care that goes into every bag of our
                coffee
              </p>
              <button className="bg-amber-500 hover:bg-amber-400 text-amber-900 font-semibold px-8 py-3 rounded-full shadow-lg transition-colors duration-200 text-lg">
                Shop Our Collection
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
 