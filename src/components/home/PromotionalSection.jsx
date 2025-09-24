import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PromotionalSection = () => {
  const promotions = [
    {
      id: 1,
      title: "CampTrip x AirAsia",
      subtitle: "Low Fare",
      description: "ตั๋วเที่ยวบินสุดคุ้ม",
      buttonText: "จองด่วน",
      bgColor: "bg-gradient-to-r from-red-500 to-red-600",
      image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
    },
    {
      id: 2,
      title: "#DiscoverThailand",
      subtitle: "เที่ยวกิ่วฮุ่นใน",
      description: "โรงแรมสุดฮอต 50%",
      period: "14 - 27 ก.ค.",
      buttonText: "จองด่วน",
      bgColor: "bg-gradient-to-r from-blue-600 to-purple-600",
      image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
    },
    {
      id: 3,
      title: "CampTrip",
      subtitle: "เปิดประสบการณ์",
      description: "ท่องโลกอย่างมีระดับกับ",
      brand: "CAMPING ADVENTURES",
      buttonText: "จองด่วน",
      bgColor: "bg-gradient-to-r from-green-600 to-blue-600",
      image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          โปรโมชั่นและข่าวสาร
        </h2>

        <div className="max-w-6xl mx-auto relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {promotions.map((promo) => (
                <CarouselItem
                  key={promo.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className={`${promo.bgColor} relative overflow-hidden min-h-[300px] rounded-xl`}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30"
                      style={{ backgroundImage: `url(${promo.image})` }}
                    />

                    {/* Content */}
                    <div className="relative z-10 p-6 text-white h-full flex items-center">
                      <div className="w-full">
                        <div className="text-xl md:text-2xl font-bold mb-2">
                          {promo.title}
                        </div>
                        <div className="text-lg md:text-xl font-semibold mb-3">
                          {promo.subtitle}
                        </div>
                        <div className="text-sm md:text-base mb-2">
                          {promo.description}
                        </div>
                        {promo.period && (
                          <div className="text-xs mb-3 bg-white/20 inline-block px-2 py-1 rounded-full">
                            {promo.period}
                          </div>
                        )}
                        {promo.brand && (
                          <div className="text-sm font-semibold mb-3">
                            {promo.brand}
                          </div>
                        )}
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                          {promo.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
