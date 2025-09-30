const Hero = () => {
  return (
    <div className="relative h-64 md:h-80 bg-gradient-to-r from-red-600 to-orange-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/camping-hero.jpg')",
        }}
      ></div>
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            สมัครเป็นพาร์ทเนอร์ที่พัก
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            ลงทะเบียนพื้นที่จอดรถบ้านและแคมป์ไซต์ของคุณ
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
