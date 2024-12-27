import first from "./img/first.mp4";
import Pi7_NASC_LOGO from "./img/Pi7_NASC LOGO.png";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={first} type="video/mp4" />
      </video>

      {/* Navbar */}
      <div className="w-[90%] mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={Pi7_NASC_LOGO}
            alt="Logo"
            className="w-40 mt-1 cursor-pointer"
          />
          <h2 className="text-white text-lg ml-2">
            NANDHA ARTS AND SCIENCE COLLEGE (AUTONOMOUS)
          </h2>
        </div>
        <ul className="flex gap-4">
          {/* Nav Links */}
          {["Home", "BookingForm", "CancellingForm", "Login"].map((link) => (
            <li key={link} className="group relative">
              <a
                href="#"
                className="text-white uppercase font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-white hover:text-black"
              >
                {link}
              </a>
              {/* Hover Underline Effect */}
              <span className="absolute bottom-[-4px] left-0 w-0 h-1 bg-cyan-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="mt-20 text-5xl md:text-6xl lg:text-7xl font-extrabold">
          Auditorium Booking
        </h1>
        <button
          className="mt-8 w-48 py-3 bg-white text-black text-lg font-semibold rounded-full hover:bg-cyan-400 hover:text-white transition duration-300"
          role="button"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default HomePage;
