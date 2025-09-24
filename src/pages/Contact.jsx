import CompanyInformation from "@/components/contact/CompanyInformation";
import ContactForm from "@/components/contact/ContactForm";
import LocationMap from "@/components/contact/LocationMap";
import useAuthStore from "@/store/authStore";
import { useI18n } from "@/store/i18n";
import { useMemo } from "react";

const Contact = () => {
  const t = useI18n((s) => s.t);
  useI18n((s) => s.lang);

  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);

  // ส่งเฉพาะฟิลด์ที่ฟอร์มต้องใช้ (กัน coupling)
  const initialValues = useMemo(
    () => ({
      userId: user?.id,
      fullName: user?.fullname || "",
      email: user?.email || "",
      phone: user?.tel || "",
    }),
    [user]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full h-[400px] relative">
        <img
          src="/images/bg-contact.png"
          alt="RVN Camp Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("contact.hero.title")}</h1>
          <p className="text-muted-foreground">{t("contact.hero.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <CompanyInformation token={token} />
          <ContactForm token={token} initialValues={initialValues} />
        </div>

        <LocationMap />
      </main>
    </div>
  );
};
export default Contact;
