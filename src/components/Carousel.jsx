import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

const Carousel = ({ data }) => {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const previousSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }

    const handleBtn = (index) => {
        setSlide(index);
    }


    return (
        <div className="carousel">

            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={previousSlide} />

            {
                data.map((item, index) => {
                    return <img className={slide === index ? "slide" : "slide-hidden"} src={item.src} alt={item.alt} key={index} />
                })
            }

            <BsArrowRightCircleFill className="arrow arrow-right" onClickCapture={nextSlide} />

            <span className="indicators">
                {
                    data.map((_, index) => {
                        return <button className={slide === index ? "indicator" : "indicator indicator-inactive"} key={index} onClick={() => handleBtn(index)} />
                    })
                }
            </span>
        </div>
    )
}

export default Carousel