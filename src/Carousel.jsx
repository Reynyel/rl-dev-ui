import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      title: "Noteworthy technology acquisitions 2021",
      subtitle:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };

    return (
        <div
        className="slider-container"
        >
        <Slider {...settings}>
            {cardData.map((card, index) => (
            <a
                key={index}
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                {card.subtitle}
                </p>
            </a>
            ))}
        </Slider>
        </div>
    );
}

export default Carousel;
