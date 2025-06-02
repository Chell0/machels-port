const About = () => {
  return (
    <>
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
          <div className="md:w-2/3 text-lg text-gray-300 leading-relaxed">
            <p className="mb-4">
              Hello! I&apos;m a dedicated software developer with a strong
              passion for building innovative and user-friendly applications. My
              journey in tech began with a fascination for how code can solve
              real-world problems and create impactful digital experiences.
            </p>
            <p className="mb-4">
              I specialize in both frontend and backend development, with a keen
              eye for detail and a commitment to writing clean, maintainable,
              and efficient code. I thrive in dynamic environments and love
              learning new technologies to stay at the forefront of the
              industry.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new cycling
              trails, experimenting with new recipes, or diving into a good
              book. I&apos;m always eager to connect with fellow developers and
              collaborate on exciting projects!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
