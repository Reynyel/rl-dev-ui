import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

function Carousel() {
  const cardData = [
    {
      title: "Web Design and Development",
      subtitle:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      title: "Mobile App Development",
      subtitle:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      title: "Software Testing Service",
      subtitle:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      title: "Software Testing Service",
      subtitle:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide on phone screens
          slidesToScroll: 1,
          centerMode: true, // Optional: center the slide
          centerPadding: "0px", // Optional: add padding around the slide
        },
      },
    ],
  };

  return (
    <div className=" mx-auto overflow-visible">
      <Slider {...settings} className="flex-auto">
        {cardData.map((card, index) => (
          <div key={index} className="p-2 ">
            <div className="bg-white border border-gray-200 rounded-lg shadow p-4 flex-auto">
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
              <p className="subtitle font-normal text-gray-700 dark:text-gray-400">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
