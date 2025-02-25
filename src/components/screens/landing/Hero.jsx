const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Source for Real-Time News
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest breaking news and in-depth reporting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
