import { getInfo } from "@/api/general";
import { useI18n } from "@/store/i18n";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const CompanyInformation = ({ token }) => {
  const t = useI18n((s) => s.t);
  useI18n((s) => s.lang);

  //   const [info, setInfo] = useState(null);

  //   useEffect(() => {
  //     if (!token) {
  //       // ยังไม่มี token ก็รอก่อน
  //       setInfo(null);
  //       return;
  //     }

  //     let cancelled = false;

  //     (async () => {
  //       try {
  //         const data = await getInfo(token); // ✅ เรียกจริง
  //         if (!cancelled) setInfo(data);
  //       } catch (e) {
  //         if (!cancelled) {
  //           setError(e);
  //           setInfo(null);
  //         }
  //         // debug ให้เห็นชัดว่าเพราะอะไร
  //         console.error("getInfo failed:", e.response?.status, e.response?.data);
  //       }
  //     })();

  //     return () => {
  //       cancelled = true;
  //     };
  //   }, [token]);

  //   useEffect(() => {
  //     console.log("info", info);
  //   }, [info]);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold mb-6">
        {t("contact.company.title")}
      </h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold">{t("contact.company.name")}</h3>
            <p className="text-muted-foreground">
              {t("contact.company.address_lines")[0]}
              <br />
              {t("contact.company.address_lines")[1]}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-primary" />
          <a href="mailto:rvncamp@carryboy.com" className="hover:text-primary">
            rvncamp@carryboy.com
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-primary" />
          <a href="tel:0638916161" className="hover:text-primary">
            063 891 6161
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Clock className="w-6 h-6 text-primary" />
          <p>{t("contact.company.hours_value")}</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-primary text-xl">🌐</span>
          </div>
          <a
            href="https://www.rvncamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            www.rvncamp.com
          </a>
        </div>

        <div className="flex justify-center mt-4">
          <img
            src="/images/RVNCampQRCode.png"
            alt="RVN Camp QR Code"
            className="w-32 h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
