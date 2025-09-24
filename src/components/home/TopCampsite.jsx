import { Star, MapPin, Heart } from "lucide-react";

const campsites = [
  {
    id: 1,
    name: "เขาใหญ่ แกรนด์ แคมป์",
    location: "เขาใหญ่, นครราชสีมา",
    rating: 4.8,
    price: "฿1,200",
    image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
    type: "แคมป์ไซต์",
    amenities: ["ห้องน้ำ", "ไฟฟ้า", "อินเทอร์เน็ต"],
  },
  {
    id: 2,
    name: "ดอยอินทนนท์ แคมป์ปิ้ง",
    location: "เชียงใหม่",
    rating: 4.9,
    price: "฿800",
    image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
    type: "ลานกางเต็นท์",
    amenities: ["วิวภูเขา", "อากาศเย็น", "ธรรมชาติ"],
  },
  {
    id: 3,
    name: "กระบี่ บีช แคมป์",
    location: "กระบี่",
    rating: 4.7,
    price: "฿1,500",
    image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
    type: "จุดจอดรถบ้าน",
    amenities: ["ใกล้หาด", "ร้านอาหาร", "กิจกรรม"],
  },
  {
    id: 4,
    name: "ภูเก็ต ฮิลล์ไซด์ แคมป์",
    location: "ภูเก็ต",
    rating: 4.6,
    price: "฿2,000",
    image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
    type: "บ้านพัก",
    amenities: ["วิวทะเล", "สระว่ายน้ำ", "สปา"],
  },
];

const TopCampsite = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Top Campsite
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          ที่พักยอดนิยมที่นักท่องเที่ยวแนะนำ พร้อมสิ่งอำนวยความสะดวกครบครัน
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campsites.map((campsite) => (
            <div
              key={campsite.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={campsite.image}
                  alt={campsite.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                  {campsite.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Title and Location */}
                <h3 className="font-semibold text-lg mb-1 text-gray-900">
                  {campsite.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{campsite.location}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium ml-1">
                    {campsite.rating}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">
                    (120+ รีวิว)
                  </span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {campsite.amenities.slice(0, 3).map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-blue-600">
                      {campsite.price}
                    </span>
                    <span className="text-gray-500 text-sm">/คืน</span>
                  </div>
                  <button
                    onClick={() =>
                      window.open(
                        "https://preview--camp-vista-filters.lovable.app/",
                        "_blank"
                      )
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    จองเลย
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium transition-colors">
            ดูทั้งหมด
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCampsite;
