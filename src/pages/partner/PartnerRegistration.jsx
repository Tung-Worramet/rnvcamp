import Hero from "@/components/partner/Hero";
import RegisterForm from "@/components/partner/RegisterForm";

const PartnerRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <RegisterForm />
      </div>
    </div>
  );
};
export default PartnerRegistration;
