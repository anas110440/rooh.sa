const Services = () => {
  return (
    <section className="py-10 relative bg-gray-100 sm:py-16 lg:py-40 z-10 overflow-hidden">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 text-center  ">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative" data-aos="fade-up">
            <h1 className="text-5xl font-bold ">
              {' '}
              Our <span className="text-[#ffd24c]">Services</span>{' '}
            </h1>
            <div className="flex w-24 mt-4 mb-10 overflow-hidden rounded mx-auto">
              <div className="flex-1 h-2 bg-yellow-300"></div>
              <div className="flex-1 h-2 bg-yellow-400"></div>
              <div className="flex-1 h-2 bg-yellow-500"></div>
            </div>
          </div>
        </div>

        <div className=" grid items-center max-w-7xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4  ">
          <div
            className="h-auto flex flex-col shadow-lg items-center justify-center bg-white hover:shadow-xl transition-all duration-150 group"
            data-aos="fade-up"
          >
            <img
              className="object-contain w-full h-40 mx-auto group-hover:scale-75 transition-all duration-150"
              src="/services/Artboard-4.svg"
              alt=""
            />
            <p className="mb-3 text-base font-bold text-gray-900">Events</p>
          </div>
          <div
            className="h-auto flex flex-col shadow-lg items-center justify-center bg-white hover:shadow-xl transition-all duration-150 group"
            data-aos="fade-right"
          >
            <img
              className="object-contain w-full h-40 mx-auto group-hover:scale-75 transition-all duration-150"
              src="/services/Artboard-5.svg"
              alt=""
            />
            <p className="mb-3 text-base font-bold text-gray-900">
              Trophies &amp; Awards
            </p>
          </div>
          <div
            className="h-auto flex flex-col shadow-lg items-center justify-center bg-white hover:shadow-xl transition-all duration-150 group"
            data-aos="fade-down"
          >
            <img
              className="object-contain w-full h-40 mx-auto group-hover:scale-75 transition-all duration-150"
              src="/services/media.svg"
              alt=""
            />
            <p className="mb-3 text-base   font-bold text-gray-900">
              Production
            </p>
          </div>
          <div
            className="h-auto flex flex-col shadow-lg items-center justify-center bg-white hover:shadow-xl transition-all duration-150 group"
            data-aos="fade-left"
          >
            <img
              className="object-contain w-full h-40 mx-auto group-hover:scale-75 transition-all duration-150"
              src="/services/Artboard-3-1.svg"
              alt=""
            />
            <p className="mb-3 text-base   font-bold text-gray-900">Branding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
