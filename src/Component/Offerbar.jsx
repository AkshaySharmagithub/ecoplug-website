const OfferBar = () => {
  return (
   <div
  className="w-full bg-[linear-gradient(135deg,#0B0B1F_0%,#15152E_35%,#6A1B9A_65%,#D63384_100%)] text-white shadow-md cursor-pointer group transition-all duration-300"
>
  <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
    <span className="bg-[#6A1B9A] text-sm font-bold px-4 py-1 rounded-full shadow-sm transform group-hover:scale-105 transition-transform duration-300">
      LIMITED TIME OFFER
    </span>

    <p className="text-sm md:text-base font-medium flex items-center justify-center gap-2">
      Enjoy a Complimentary ₹50,000 Wallet Credit with Every AC Charger Purchase
      <span className="transform group-hover:translate-x-1 transition-transform duration-300">
        →
      </span>
    </p>
  </div>
</div>

  );
};

export default OfferBar;
