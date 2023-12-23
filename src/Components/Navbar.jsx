import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section
      data-section-id="1"
      data-share=""
      data-category="headers-dark-color"
      data-component-id="4659488c_01_awz"
      className="skewed-bottom-right overflow-hidden"
    >
      <nav
        className="relative px-6 py-6 flex justify-between items-center bg-gray-900"
        data-config-id="toggle-mobile"
        data-config-target=".navbar-menu"
        data-config-className="hidden"
      >
        <div className="container mx-auto px-4 flex justify-between">
          <a
            className="text-white text-3xl font-bold leading-none"
            href="#"
            data-config-id="brand"
          >
            <img className="h-12 " src="/logo.png" alt="" width="auto" />
          </a>
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-white p-3"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="block h-7 w-7 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="auto-svg-1-1"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a
                className="text-sm text-[#FFD14B] font-bold hover:text-[#FFD14B] transition-all duration-150"
                href="#"
                data-config-id="link1"
              >
                Home
              </a>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-config-id="auto-svg-2-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </li>
            <li>
              <a
                className="text-sm text-white font-bold hover:text-[#FFD14B] transition-all duration-150"
                href="#"
                data-config-id="link2"
              >
                About Us
              </a>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-config-id="auto-svg-3-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </li>
            <li>
              <a
                className="text-sm text-white font-bold hover:text-[#FFD14B] transition-all duration-150"
                href="#"
                data-config-id="link3"
              >
                Catalogues
              </a>
            </li>

            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-config-id="auto-svg-5-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </li>
            <li>
              <a
                className="text-sm text-white font-bold hover:text-[#FFD14B] transition-all duration-150"
                href="#"
                data-config-id="link5"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-gray-900 pt-12 lg:pt-20 pb-28 2xl:pb-64">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap  xl:pt-16">
            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
              <div className="w-full text-center lg:text-left">
                <div className=" mx-auto lg:mx-0">
                  <h2
                    className="mb-7 text-4xl lg:text-6xl text-white font-bold capitalize"
                    data-aos="fade-left"
                  >
                    <span data-config-id="header-p1">Unique custom </span>
                    <span className="text-[#FFD14B]" data-config-id="header-p2">
                      Awards
                    </span>
                  </h2>
                </div>
                <div className="max-w-2xl mx-auto lg:mx-0">
                  <p
                    className="mb-6 text-gray-400 leading-loose text-justify pr-5 texs-sm"
                    data-config-id="desc"
                    data-aos="fade-up"
                  >
                    <span className="text-gray-200 font-bold">
                      Exceptional Customer Service:
                    </span>{' '}
                    Our experienced team is dedicated to ensuring your
                    experience with us is as rewarding as the awards we provide.
                    We are here to assist you through the entire process, from
                    selecting the perfect award to personalizing it with your
                    unique touch.
                    <br />
                    <br />
                    <span className="text-gray-200 font-bold">
                      Quick Turnaround:
                    </span>{' '}
                    We understand that time is often of the essence, especially
                    when it comes to recognizing outstanding accomplishments. We
                    offer efficient production and delivery, so you can
                    celebrate your achievements without delay.
                    <br />
                  </p>
                  <div>
                    <a
                      className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-[#f7ba24] hover:bg-[#FFD14B] text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                      data-config-id="primary-action-hero"
                      data-aos="fade-down"
                    >
                      Get Started
                    </a>
                    <a
                      className="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-gray-900 border-2 border-gray-700 hover:border-gray-600 rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                      data-config-id="secondary-action-hero"
                      data-aos="fade-right"
                    >
                      How it works
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
              <div className="relative" style={{ zIndex: 0 }}>
                <img
                  className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
                  src="/hero.PNG"
                  alt=""
                  data-config-id="image1"
                  data-aos="fade-right"
                />
                <img
                  className="hidden md:block absolute"
                  style={{ top: '-2rem', right: '3rem', zIndex: -1 }}
                  src="/blue-up.svg"
                  alt=""
                  data-aos="fade-up"
                />
                <img
                  className="hidden md:block absolute"
                  style={{ bottom: '-2rem', right: '-2rem', zIndex: -1 }}
                  src="/wing-purple-down.svg"
                  alt=""
                  data-aos="fade-left"
                />
                <img
                  className="hidden md:block absolute"
                  style={{ top: '3rem', right: '-3rem', zIndex: -1 }}
                  src="/bullets-dark-right.svg"
                  alt=""
                  data-aos="fade-down"
                />
                <img
                  className="hidden md:block absolute"
                  style={{ bottom: '2.5rem', left: '-4.5rem', zIndex: -1 }}
                  src="/bullets-yellow-left.svg"
                  alt=""
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          open ? '' : 'hidden'
        } navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 overflow-x-hidden`}
        data-config-id="toggle-mobile-2"
        data-config-target=".navbar-menu"
        data-config-className="hidden"
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-gray-900 border-r border-[#FFD14B] overflow-y-auto ">
          <div className="flex items-center mb-8">
            <a
              className="mr-auto text-3xl font-bold leading-none"
              href="#"
              data-config-id="brand"
            >
              <img className="h-10" src="/logo.png" alt="" width="auto" />
            </a>
            <button className="navbar-close" onClick={() => setOpen(!open)}>
              <svg
                className="h-7 w-7 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-config-id="auto-svg-6-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-600 hover:text-[#FFD14B] rounded"
                  href="#"
                  data-config-id="link1"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-600 hover:text-[#FFD14B] rounded"
                  href="#"
                  data-config-id="link2"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-600 hover:text-[#FFD14B] rounded"
                  href="#"
                  data-config-id="link3"
                >
                  Catalogus
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-600 hover:text-[#FFD14B] rounded"
                  href="#"
                  data-config-id="link4"
                >
                  Contact Us
                </a>
              </li>
              1
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
