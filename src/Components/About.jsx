const About = () => {
  return (
    <section className="flex items-center justify-center bg-white overflow-hidden lg:pt-40 ">
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <div className="flex flex-wrap">
          <div className="relative w-full mb-10 lg:mb-0 lg:mr-20 lg:w-2/5">
            <div
              className="absolute z-10 hidden w-full h-full bg-[#ffd24c] rounded -top-6 left-6 lg:block"
              data-aos="fade-up"
            ></div>
            <img
              className="relative z-20 object-cover w-full h-full rounded"
              src="/about.jpg"
              alt=""
              data-aos="fade-down"
            />
          </div>
          <div className="flex-1 pl-0 lg:pl-4">
            <div className="mb-12">
              <div className="relative">
                <h1 className="text-5xl font-bold " data-aos="fade-left">
                  {' '}
                  Who <span className="text-[#ffd24c]">We Are</span>{' '}
                </h1>
                <div
                  className="flex w-24 mt-1 mb-10 overflow-hidden rounded"
                  data-aos="fade-right"
                >
                  <div className="flex-1 h-2 bg-yellow-300"></div>
                  <div className="flex-1 h-2 bg-yellow-400"></div>
                  <div className="flex-1 h-2 bg-yellow-500"></div>
                </div>
              </div>
              <p
                className="mb-10 text-base font-normal text-gray-600 "
                data-aos="fade-down"
              >
                A leading Saudi company specializes in designing awards,
                trophies, gifts, and branding, media production, events. We
                believe in creative and strategic thinking and aim to be one of
                the leading companies in the field of marketing and advertising
                in Saudi Arabia and to be a company where ideas are translated
                into solutions with ultimate accuracy and quality. Our team of
                Saudi strategists and designers have a firm and good grasp of
                the philosophies and cultures of our clients, this experience is
                well reflected in the quality of our products and the services
                that we provide.
              </p>
              <a
                className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-[#f7ba24] hover:bg-[#FFD14B] text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                href="#"
                data-config-id="primary-action-hero"
                data-aos="fade-up"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
