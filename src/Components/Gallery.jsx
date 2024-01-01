import { useState } from 'react';
import { Award } from './models/Award';
import { Award2 } from './models/Award2';
import { Neom } from './models/Neom';

// eslint-disable-next-line react/prop-types
const Item = ({ children }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`h-96 w-full mb-6 lg:mb-0  rounded-lg overflow-hidden ${
        hover ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onMouseDown={() => setHover(true)}
      onMouseUp={() => setHover(false)}
    >
      {children}
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="bg-gray-900 pt-12 pb-28">
      <div className=" mx-auto text-center mb-16 mt-12 overflow-hidden">
        <div className="relative">
          <h1 className="text-5xl font-bold text-white " data-aos="fade-up">
            {' '}
            Our <span className="text-[#ffd24c]">Projects</span>{' '}
          </h1>
          <div
            className="flex w-24 mt-4 mb-10 overflow-hidden rounded mx-auto"
            data-aos="fade-left"
          >
            <div className="flex-1 h-2 bg-yellow-300"></div>
            <div className="flex-1 h-2 bg-yellow-400"></div>
            <div className="flex-1 h-2 bg-yellow-500"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto  px-10 py-10">
        <div className="grid gap-4">
          <div>
            <Item>
              <Award />
            </Item>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Item>
              <Award2 />
            </Item>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Item>
              <Neom />
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
