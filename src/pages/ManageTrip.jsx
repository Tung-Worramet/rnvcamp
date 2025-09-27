import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ManageTrip = () => {
  return (
    <div className="min-h-[70vh] flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-center text-3xl font-bold">
            Plan Your Adventure
          </h1>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Campervan",
                image: "/images/signup.png",
                link: "/campervan",
                description: "Perfect campervan for your journey!",
              },
              {
                title: "Campsite",
                image: "/images/campSite.png",
                link: "/campsite",
                description: "Find the perfect spot to park and camp",
              },
              {
                title: "Campervan and Campsite",
                image: "/images/vanAndCamp.png",
                link: "/book-motorhome",
                description: "Plan your ultimate road trip with ease",
              },
            ].map((item, index) => (
              <Card key={index} className="group overflow-hidden">
                <Link to={item.link} className="block">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mb-4 text-muted-foreground">
                      {item.description}
                    </p>
                    <Button className="w-full">Book Now</Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageTrip;
