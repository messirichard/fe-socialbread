import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React from "react"


const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
      
    <>
      <div className="navigation-wrapper h-48 md:h-96">
        <div ref={sliderRef} className="keen-slider h-48 md:h-96 rounded-3xl">
          <div className="keen-slider__slide number-slide1">
            <img src="img/Frame-10.png" className="md:block hidden"></img>
            <img src="img/Frame-11.png" className="md:hidden w-full"></img>
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src="img/Frame-10-2.png" className="md:block hidden"></img>
            <img src="img/Group-130.png" className="md:hidden w-full"></img>
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src="img/Frame-10-3.png" className="md:block hidden"></img>
            <img src="img/Frame-11-4.png" className="md:hidden w-full"></img>
          </div>
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots absolute left-1/2 transform -translate-x-1/2 -mt-10">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left fill-current color text_color_grey_5 bg_color_white_1" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right fill-current color text_color_grey_5 bg_color_white_1" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}


export default Slider;
