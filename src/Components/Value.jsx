const Value = () => {
  return (
    <section className="flex items-center  font-poppins bg-white overflow-hidden lg:pb-24">
      <div className="justify-center flex-1 max-w-7xl px-4 py-4 mx-auto lg:py-6 md:px-0">
        <div className="flex flex-wrap justify-center -mx-4">
          <div
            className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3"
            data-aos="fade-right"
          >
            <div className="h-full p-6 text-center transition duration-200 rounded-md shadow bg-gray-100 hover:bg-gray-50  hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-[#f7ba24] hover:bg-[#FFD14B] transition duration-150 rounded-lg   text-gray-50">
                <img src="/goal.svg" alt="" className="w-10 h-10" />
              </div>
              <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl text-gray-900 ">
                Mission
              </h2>
              <p className="font-medium text-gray-600 ">
                Lorem ipsum dor amet is a dummy To exceed client expectations
                with exceptional quality products and services provided by a
                team of elite experts, innovators, and designers.
              </p>
            </div>
          </div>
          <div
            className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3"
            data-aos="fade-up"
          >
            <div className="h-full p-6 text-center transition duration-200 rounded-md shadow bg-gray-100 hover:bg-gray-50  hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-[#f7ba24] hover:bg-[#FFD14B] transition duration-150 rounded-lg text-gray-50  ">
                <img src="/eye.svg" alt="" className="w-10 h-10" />
              </div>
              <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl text-gray-900 ">
                Vision
              </h2>
              <p className="font-medium text-gray-600 ">
                Lorem ipsum dor amet is a dummy To be acknowledged as a
                long-term communications partner by our clients, through
                continuous creative innovation, and cutting-edge market
                leadership.
              </p>
            </div>
          </div>
          <div
            className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3"
            data-aos="fade-left"
          >
            <div className="h-full p-6 text-center transition duration-200 rounded-md shadow bg-gray-100  hover:bggray-50e hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-[#f7ba24] hover:bg-[#FFD14B] transition duration-150 rounded-lg text-gray-50  ">
                <img src="/services.svg" alt="" className="w-10 h-10" />
              </div>
              <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl text-gray-900">
                Services
              </h2>
              <p className="font-medium text-gray-600 ">
                Lorem ipsum dor amet is a dummy We enable our clients to stand
                out among their peers by translating their mission, vision,
                pillars, and objectives into creative content and visuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
