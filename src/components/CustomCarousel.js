import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

const items = [
  {
    src: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/35A52EA5C513626C5C575B9B85CF821604427D9FE284D039938518246902A58C/scale?width=1440&aspectRatio=3.91&format=jpeg',
    srcTitle: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A05E8420616009754D259CBA7F17AE3A1E3FE2CA1C0F0824C03845A755CCC70/scale?width=1440&aspectRatio=3.91&format=png',
    key: 1,
  },
  {
    src: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CF4ACF13322C0F45CC8F19A5AED04B8E6F592DCD1EC092753B0AAB278AFB7098/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim',
    srcTitle: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/876185A48BBF6966105A1F97D976C7AE27265BF867341C0B1B90370BEF77FC03/scale?width=800&aspectRatio=1.78&format=png',
    key: 2,
  },
  {
    src: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDF4ECC450C1F308A1E895F6E0771DA81362871F94A18125FCA552A3B8E55C59/scale?width=1440&aspectRatio=3.91&format=png',
    srcTitle: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5B1A122E6BA6998C94E5548EE186DFE65C869BD3E0720702A4E78C214ABA2371/scale?width=1440&aspectRatio=3.91&format=png',
    key: 3,
  },
];

const CustomCarousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className='carousel--bg' src={item.src} />
        <img className='carousel--title' src={item.srcTitle}/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className='custom--carousel'
      interval={5000}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        className="custom--carousel--controller"
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
        className="custom--carousel--controller"
      />
    </Carousel>
  );
}

export default CustomCarousel;