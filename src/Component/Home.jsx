import React from "react";
import ProductList from "./ProductList";

const Home = () => {

return (
    <div className="font-sans text-gray-900">

    <section className="relative overflow-hidden bg-gray-950 text-white">
    
    
<div className="
absolute inset-0
bg-[linear-gradient(120deg,#6A1B9A_0%,#8E24AA_40%,#B44CFF_70%,#FF4FD8_100%),linear-gradient(to_right,rgba(180,76,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(180,76,255,0.15)_1px,transparent_1px)]
bg-[size:auto,40px_40px,40px_40px]
opacity-20
">
</div>

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[linear-gradient(135deg,#0B0B1F_0%,#15152E_35%,#6A1B9A_65%,#D63384_100%)] pointer-events-none"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center">
        
        <span className="
inline-block mb-6 px-6 py-2 rounded-full
backdrop-blur
border border-[#FF4FD8]/40
text-white text-sm font-semibold uppercase
shadow-[0_0_20px_rgba(180,76,255,0.35)]
">
Ecoplug Energy India Limited
</span>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
        Premium EV Charging <br />
<span className="
text-transparent bg-clip-text
bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-400
drop-shadow-[0_0_6px_rgba(255,79,216,0.45)]
">
Solutions
</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-8 text-lg md:text-xl text-white-400 leading-relaxed">
        Power your electric vehicle with cutting-edge, eco-friendly charging
        technology built for performance and sustainability.
        </p>

        
<div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
{[
    { value: "20+", label: "Products" },
    { value: "100%", label: "Eco-Friendly" },
    { value: "24/7", label: "Support" },
    { value: "5★", label: "Rated" },
].map((item, index) => (
    <div
    key={index}
    className="
        rounded-2xl px-6 py-6
        backdrop-blur-md
        border border-gray-800
        bg-gray-900/50
        text-white

        transition-all duration-300 ease-out
        transform hover:-translate-y-2

        shadow-[0_8px_25px_rgba(0,0,0,0.45)]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]

        hover:bg-gray-800/80
    "
    >
    <h3 className="text-3xl font-bold">
        {item.value}
    </h3>
    <p className="mt-2 text-sm text-gray-300 font-medium uppercase tracking-wider">
        {item.label}
    </p>
    </div>
))}



</div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
    <button
className="
    relative inline-block
    w-40 h-15
    leading-[2.5rem]
    m-5
    overflow-hidden
    border-2 border-[#560bad]
    rounded-md
    text-[17px] font-medium
    text-[#fff]
    transition-colors duration-500
    z-10
    hover:text-white

    before:content-['']
    before:absolute
    before:-z-10
    before:bg-[#560bad]
    before:w-[220px]
    before:h-[160px]
    before:rounded-full
    before:top-full
    before:left-full
    before:transition-all
    before:duration-700

    hover:before:-top-[30px]
    hover:before:-left-[30px]

    active:before:bg-[#3a0ca3]
    active:before:duration-0
"
>
Explore Product
</button>

<button
className="
    relative inline-block
    w-40 h-15
    leading-[2.5rem]
    m-5
    overflow-hidden
    border-2 border-[#FF4FD8]
    rounded-md
    text-[17px] font-medium
    text-[#fff]
    transition-colors duration-500
    z-10
    hover:text-white

    before:content-['']
    before:absolute
    before:-z-10
    before:bg-[#FF4FD8]
    before:w-[220px]
    before:h-[160px]
    before:rounded-full
    before:top-full
    before:left-full
    before:transition-all
    before:duration-700

    hover:before:-top-[30px]
    hover:before:-left-[30px]
    active:before:bg-[#D63384]
    active:before:duration-0"
>
Contact Sales
</button>
        </div>
    </div>
    </section>
    <ProductList />

<section className="py-24 bg-gray-950 relative overflow-hidden">
  

  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(106,27,154,0.1),transparent)] pointer-events-none"></div>
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
      Superior EV Charging Technology
    </h2>

    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
      Our chargers combine cutting-edge technology with sustainable design for
      optimal performance.
    </p>

    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">

      {[
        {
          title: "Ultra-Fast Charging",
          desc: "High-speed charging technology that minimizes downtime and maximizes efficiency.",
          icon: "⚡",
        },
        {
          title: "Safety Certified",
          desc: "Meets all international safety standards with multiple protection mechanisms.",
          icon: "🛡️",
        },
        {
          title: "Smart Control",
          desc: "Advanced mobile app integration for remote monitoring and scheduling.",
          icon: "⚙️",
        },
        {
          title: "Universal Compatibility",
          desc: "Works with all major EV models and charging standards worldwide.",
          icon: "🔗",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="
            bg-gray-900/60 backdrop-blur-md rounded-3xl p-10 border border-gray-800
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(236,64,122,0.15)]
            hover:border-pink-500/30 hover:bg-gray-900/80
            group
          "
        >
          <div className="w-14 h-14 mb-6 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-gradient-to-r from-[#6A1B9A] via-[#9C27B0] to-[#EC407A] py-20 text-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

    <div>
      <h3 className="text-4xl font-extrabold">1000+</h3>
      <p className="mt-2 text-sm opacity-80">Happy Customers</p>
    </div>

    <div>
      <h3 className="text-4xl font-extrabold">1 Year</h3>
      <p className="mt-2 text-sm opacity-80">Warranty</p>
    </div>

    <div>
      <h3 className="text-4xl font-extrabold">1.6J</h3>
      <p className="mt-2 text-sm opacity-80">OCPP Enabled</p>
    </div>

    <div>
      <h3 className="text-4xl font-extrabold">24/7</h3>
      <p className="mt-2 text-sm opacity-80">Technical Support</p>
    </div>

  </div>
</section>

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <span className="inline-block mb-4 px-6 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold uppercase">
      Testimonials
    </span>

    <h2 className="text-4xl font-extrabold text-gray-900">
      What Our Customers Say
    </h2>

    <p className="mt-4 text-gray-600">
      Trusted by EV owners and businesses across the country.
    </p>

    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

      {[
        {
          name: "Vikram Singh",
          msg: "The charging speed is incredible! My EV charges twice as fast as with my previous charger. The app makes it so easy to monitor and schedule charging sessions..",
        },
        {
          name: "Sarah Juan",
          msg: "As a business owner with multiple EVs, these chargers have been a game-changer. The reliability and ease of use are unmatched. Customer support is excellent too!",
        },
        {
          name: "Raj Kashyap",
          msg: "The installation was seamless and the charger works perfectly with my Tesla. I love the sleek design and how it integrates with my home automation system.",
        },
      ].map((t, i) => (
        <div
          key={i}
          className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6A1B9A] to-[#EC407A] text-white flex items-center justify-center font-bold">
              {t.name[0]}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-yellow-400 text-sm">★★★★★</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">"{t.msg}"</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-24 bg-gray-950 relative overflow-hidden">

  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(106,27,154,0.1),transparent)] pointer-events-none"></div>
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none"></div>
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-3xl py-16 shadow-2xl">

  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
      Ready to Power Your EV Journey?
    </h2>

    <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
      Join thousands of satisfied customers who have made the switch to premium
      EV charging solutions.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="
          relative inline-block
          px-8 py-3
          overflow-hidden
          border-2 border-[#560bad]
          rounded-md
          text-[17px] font-medium
          text-[#fff]
          transition-colors duration-500
          z-10
          hover:text-white
          before:content-['']
          before:absolute
          before:-z-10
          before:bg-[#560bad]
          before:w-[300px]
          before:h-[300px]
          before:rounded-full
          before:top-full
          before:left-full
          before:transition-all
          before:duration-700
          hover:before:-top-[50px]
          hover:before:-left-[50px]
          active:before:bg-[#3a0ca3]
          active:before:duration-0">
        Get Free Consultation
      </button>
      <button
        className="
        relative inline-block
          px-8 py-3
          overflow-hidden
          border-2 border-[#C2185B]
          rounded-md
          text-[17px] font-medium
          text-[#fff]
          transition-colors duration-500
          z-10
          hover:text-white
          before:content-['']
          before:absolute
          before:-z-10
          before:bg-[#C2185B]
          before:w-[300px]
          before:h-[300px]
          before:rounded-full
          before:top-full
          before:left-[-60px]
          before:transition-all
          before:duration-700
          hover:before:-top-[50px]
          active:before:bg-[#880E4F]
          active:before:duration-0">
        Download Brochure
      </button>
    </div>

  </div>
</section>
</div>
);
};

export default Home;
