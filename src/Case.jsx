function CaseStudies() {
  const cards = [
    {
      image: "/images/Case-study__image.png",
      title: "Website Design for SCFC Philippines",
      subtitle:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario.",
      fill: "#F1F2FF",
    },
    {
      image: "/images/Case-study__image_2.png",
      title: "Website Design for SCFC Philippines",
      subtitle:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario.",
      fill: "#F0FFF7",
    },
    {
      image: "/images/Case-study__image_3.png",
      title: "Website Design for SCFC Philippines",
      subtitle:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario.",
      fill: "#E7DAED",
    },
  ];
  
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto max-w-screen-xl py-10">
        <hr className="w-48 h-1 bg-purple-600 border-0 rounded my-6 md:my-10 dark:bg-gray-700" />
        <h3 className="text-3xl">Our recent</h3>
        <h3 className="text-4xl my-4 font-bold">Case Studies</h3>
      </div>
      
      <div className="pt-10 flex justify-center items-center mx-auto max-w-full flex-wrap text-start">
        {cards.map((card, index) => (
          <a
            href="#"
            key={index}
            style={{ backgroundColor: card.fill }}
            className="w-full flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-10"
          >
            <div className="md:w-1/2 h-full">
              <img
                className="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={card.image}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between p-8 leading-normal md:w-1/2">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
              <p className="mb-4 text-lg font-normal text-gray-700 dark:text-gray-400">
                {card.subtitle}
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                Read more &gt;
              </a>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default CaseStudies;
