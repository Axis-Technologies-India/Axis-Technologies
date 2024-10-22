import TestimonialCard from "../Components/Testimonials/TestimonialCard"
import Slider from "react-slick"

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
}
const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 6000,
        swipeToSlide: true,
        cssEase: "linear",
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return <div className=" mx-auto flex flex-col py-[1rem]">
        <div className="sm:w-[80%] w-[80%] lg:w-[80%] xl:w-[70%] mx-auto flex flex-col gap-[1.3rem]">
            <p className="text-sec text-center mt-8 uppercase">Testimonials</p>
            <p className="text-head text-center">What Our Client Say About Us</p>
            <div className="py-[2rem]">
            <Slider {...settings}>
                <TestimonialCard logo={"hlo"} head="Mr. Nakamura" desc="PCD Tools were good and high quality" img={"https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} no={1} />
                <TestimonialCard logo={"hlo"} head="Mr. Santosh" desc="PCD Tools were good and high quality" img={"https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} no={2} />
                <TestimonialCard logo={"hlo"} head="Jaidev" desc="PCD Tools were good and high quality" img={"https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} no={3} />
                <TestimonialCard logo={"hlo"} head="Ratan" desc="PCD Tools were good and high quality" img={"https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} no={4} />
            </Slider>
            </div>
        </div>
        {/* <div className="relative z-[1] top-[7rem] bg-[url('https://images.pexels.com/photos/280014/pexels-photo-280014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] w-[70%] mx-auto min-h-[10rem] hidden lg:flex flex-row justify-between items-center px-[3rem] py-[2rem] bg-cover bg-center">
            <div>
                <p className="text-sec">JOIN NOW</p>
                <p className="text-[2.5rem] font-bold text-white tracking-wider leading-10">Join The future of <br></br>Industry now</p>
            </div>
            <a href="#" className="bg-primaryColor max-h-[3rem] p-3 text-white text-[0.8rem]">GET A QUOTE</a>
        </div> */}
    </div>
}

export default Testimonials;