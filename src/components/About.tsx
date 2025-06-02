const About = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
        About Me.
      </h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="/images/chelloh20.png"
            alt="Machel's Profile"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto shadow-xl border-4 border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
