function Build() {
  const data = [
    {
      image: "/images/Rectangle 17.png",
      avatar: "/images/Ellipse 185.png",
      name: "Jeewa Markram",
      title: "CEO",
    },
    {
      image: "/images/Rectangle 18.png",
      avatar: "/images/Ellipse 186.png",
      name: "John Doe",
      title: "CTO",
    },
    {
      image: "/images/Rectangle 19.png",
      avatar: "/images/Ellipse 187.png",
      name: "Jane Smith",
      title: "CFO",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center mx-auto max-w-screen-xl flex-wrap flex-col">
        <hr className="w-48 h-1 mx-auto my-16 bg-purple-600 border-0 rounded md:my-24 dark:bg-gray-700" />
        <h3 className="text-3xl">Way of building</h3>
        <h3 className="text-4xl my-4 font-bold">Great Software</h3>
      </div>

      <div className="pt-10 flex justify-center items-center mx-auto max-w-full flex-wrap">
        {data.map((item, index) => (
          <a
            href="#"
            key={index}
            className="w-full flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-10"
          >
            <div className="md:w-1/2 h-full">
              <img
                className="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between p-8 leading-normal md:w-1/2 text-start">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Build the right team to scale
              </h5>
              <p className="mb-4 text-lg font-normal text-gray-700 dark:text-gray-400">
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers).
              </p>
              <p className="mb-4 text-lg font-normal text-gray-700 dark:text-gray-400">
                Our <span className="text-purple-600">delivery model</span>{" "}
                helps you cut costs and deliver within budget.
              </p>

                <div className="flex flex-row">
                  <div className="mr-4">
                    <div className="h-[100px]  bg-purple-600 w-[5px]"></div>
                  </div>
                  <p className="mb-4 text-lg font-thin text-purple-700 dark:text-purple-400 italic">
                    "Simform is quick to identify larger problem with the
                    Software so we decided to expand our scope to build new
                    modules"
                  </p>
                </div>
              <div className="flex items-center mt-4">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={item.avatar}
                  alt={item.name}
                />
                <div className="text-sm">
                  <p className="text-gray-900 dark:text-white leading-none">
                    {item.name}
                  </p>
                  <p className="text-gray-400 text-left dark:text-gray-400">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* <a href="#" className="text-indigo-600 hover:underline mt-4">
                Read more &gt;
              </a> */}
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Build;
