// components/TestimonialSlider.js
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './testimonial.css' // Optional: for custom styles

const testimonials = [
  {
    text: `I’m attaching a picture of one of my streams of income. Look at the spike in sales yesterday… and even more so today. I made more today than I did on Black Friday last year. The ONLY thing I changed was my language and my mindset.
    
    I don’t know HOW many times I said, “I love money and money loves me” — Found a penny in the dryer, kissed it and said “THANK YOU!”… found a dime in my closet, did the same! Every sale that came in on my phone today (yes, even for the $1 ones), I approached it with the utmost gratitude.
    
    THIS IS REAL, YOU GUYS!`,
    image: 'https://assets.cdn.filesafe.space/pAkc6auY53VnEbQBpdr1/media/67ed9cfcf87cf876f1dae1d2.png',
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
]

const TestimonialSlider = () => {
  return (
    <div className="testimonial-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide">
              <p>{item.text}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt={`testimonial-${index}`}
                  className="testimonial-image"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialSlider
