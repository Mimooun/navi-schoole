import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image';
import image1 from '../../public/assets/images/Rectangle 93.png';

import image2 from '../../public/assets/images/Rectangle 92.png';


const ImageSwiper = () => {
  const images = [image1, image2];

  return (
    <Carousel showThumbs={false} showStatus={false} emulateTouch>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image}  layout="responsive" width={500} height={300} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSwiper;
