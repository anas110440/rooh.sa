// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Autoplay, FreeMode } from 'swiper/modules';
const Clients = () => {
  return (
    <section className="py-48  bg-gray-900 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="relative">
          <h1 className="text-5xl font-bold text-white " data-aos="fade-up">
            {' '}
            Our <span className="text-[#ffd24c]">Clients</span>{' '}
          </h1>
          <div
            className="flex w-24 mt-4 mb-6 overflow-hidden rounded mx-auto"
            data-aos="fade-right"
          >
            <div className="flex-1 h-2 bg-yellow-300"></div>
            <div className="flex-1 h-2 bg-yellow-400"></div>
            <div className="flex-1 h-2 bg-yellow-500"></div>
          </div>
          <p
            className="mb-16 text-gray-400 leading-loose text-base"
            data-aos="fade-left"
          >
            We are proud of our valued clients and partners and we seek to build
            lasting and successful partnerships with leading companies in both
            public and private sectors in Saudi Arabia—clients’ needs. We are
            proud of our valued clients and partners and seek to build lasting
            successful partnerships with leading companies in the public and
            private sectors in Saudi Arabia.
          </p>
        </div>
      </div>
      <Swiper
        speed={600}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        parallax={true}
        loop={true}
        slidesPerView={7}
        spaceBetween={30}
        freeMode={true}
        modules={[Parallax, Autoplay, FreeMode]}
        className="mySwiper"
        breakpoints={{
          328: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-53.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-right"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-54.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-62.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full  mx-auto"
              src="/clients/Artboard-60.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-52.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-59.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-64.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-63.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full  mx-auto"
              src="/clients/Artboard-19.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-7.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-48.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-20.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-55.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full  mx-auto"
              src="/clients/Artboard-57.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-51.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        {/*  */}
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-58.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-44.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-29.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full  mx-auto"
              src="/clients/Artboard-21.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-5.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-45.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-46.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-43.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full  mx-auto"
              src="/clients/Artboard-50.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-49.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-57.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-6.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-14.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full  mx-auto"
              src="/clients/Artboard-8.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-61.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-39.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-29.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-11.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full  mx-auto"
              src="/clients/Artboard-16.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-42.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-36.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-9.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-1.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full  mx-auto"
              src="/clients/Artboard-4.webp"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="flex shadow-lg hover:shadow-xl items-center justify-center"
            data-aos="fade-up"
            data-swiper-parallax="50"
          >
            <img
              className="object-contain w-full mx-auto"
              src="/clients/Artboard-3.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Clients;
