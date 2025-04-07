"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../app/globals.css";

const testimonials = [
  {
    text: `I’m attaching a picture of one of my streams of income. Look at the spike in sales yesterday… and even more so today. I made more today than I did on Black Friday last year. The ONLY thing I changed was my language and my mindset.
    
    I don’t know HOW many times I said, “I love money and money loves me” — Found a penny in the dryer, kissed it and said “THANK YOU!”… found a dime in my closet, did the same! Every sale that came in on my phone today (yes, even for the $1 ones), I approached it with the utmost gratitude.
    
    THIS IS REAL, YOU GUYS!`,
    image:
      "https://assets.cdn.filesafe.space/pAkc6auY53VnEbQBpdr1/media/67ed9cfcf87cf876f1dae1d2.png",
  },
  {
    text: `I missed the after party. Couldn't open up the schedule this week. FYI, pound for pound this is MORE value than most people put into a $197–$297 program.`,
  },
  {
    text: `So that is my biggest takeaway from today: releasing the timeline and going full send on what lights our fire 🔥

    I’ve never been on mastermind calls that are so engaging. Love the energy everybody is bringing and I’m excited to see how it will transform each and every one of you! ❤️`,
  },
  {
    text: `I want to be back. Your energy is amazing. LIKE super power and it was JUST what I needed.`,
  },
];

const TestimonialSlider = () => {
  return (
    <div className="max-w-[800px] mx-auto py-10 px-5 flex cursor-grab">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center h-full rounded-2xl px-5 lg:px-12 text-lg leading-relaxed text-center shadow-[0_0_20px_rgba(0,0,0,0.05)]">
              <p>{item.text}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt={`testimonial-${index}`}
                  className="block max-w-[400px] w-full h-auto mt-5 object-contain mx-auto"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
