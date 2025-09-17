import { useI18n } from "@/store/i18n";
import { MapPin } from "lucide-react";

const LocationMap = () => {
  const t = useI18n((s) => s.t);
  useI18n((s) => s.lang);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">
        {t("contact.location.title")}
      </h2>
      <div className="relative">
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.8641875973351!2d100.82962487049812!3d13.708202583367138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d68430edfca1f%3A0xd8332a822c965920!2sCarryboy!5e0!3m2!1sen!2sth!4v1757997115950!5m2!1sen!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-sm">
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">CarryBoy Pickup Location</h3>
              <p className="text-sm text-muted-foreground">
                989, 989/1-10 Luang Phaeng Rd, Thap Yao, Lat Krabang, Bangkok
                10520
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
