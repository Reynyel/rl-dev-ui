function Hero() {
  return (
    <div className="flex justify-center items-center mx-auto max-w-screen-xl flex-wrap h-dvh ">
      <div dir="ltr">
        <div className="flex flex-col max-w-lg me-8 pe-8 items-start text-start">
          <hr className="w-48 h-1 mx-auto my-4 bg-purple-600 border-0 rounded md:my-10 dark:bg-gray-700" />
          <h3 className="text-4xl mb-4">
            Leading companies trust us{" "}
            <span className="text-400 font-bold">to developer software</span>
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            We{" "}
            <span className="text-purple-600">add development capacity </span>to
            tech teams. Our value isn’t limited to building teams but is equally
            distributed across the project lifecycle. We are a custom software
            development company that guarantees the successful delivery of your
            project.
          </p>
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            See more Informations →
          </a>
        </div>
      </div>
      <div className="">
        <img src="/images/Abou-us-Video.png" alt="About us video" />
      </div>
    </div>
  );
}

export default Hero;
