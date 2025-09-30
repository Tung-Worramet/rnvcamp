import {
  Mail,
  Facebook,
  Instagram,
  Phone,
  Home,
  Users,
  Shield,
  Info,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { register } from "./../api/auth";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Handle newsletter subscription
  };

  const handlePartnerRegistration = () => {
    window.location.href = "https://preview--camp-partner-portal.lovable.app/";
  };

  const handlePartnerLogin = () => {
    window.location.href =
      "https://preview--rvn-camp.lovable.app/partner/login";
  };

  const handleAdminLogin = () => {
    window.open(
      "https://preview--booking-admin-control.lovable.app/",
      "_blank"
    );
  };

  return (
    <footer className="bg-luxury-dark border-t border-luxury-charcoal">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Main Menu */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Home className="h-4 w-4 text-luxury-silver" />
              <h3 className="text-base font-medium text-luxury-pearl">
                Main Menu
              </h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/rent-campervan"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm"
                >
                  Campervan Rentals
                </a>
              </li>
              <li>
                <a
                  href="/book-campsite"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm"
                >
                  Campsites
                </a>
              </li>
              <li>
                <a
                  href="/manage-trip"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm"
                >
                  My Trips
                </a>
              </li>
              <li>
                <a
                  href="/promotions"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm"
                >
                  Promotions
                </a>
              </li>
            </ul>
          </div>

          {/* For Partners & Admins */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-4 w-4 text-luxury-silver" />
              <h3 className="text-base font-medium text-luxury-pearl">
                For Partners
              </h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="/partner-registration">
                  <Button
                    variant="ghost"
                    className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm p-0 h-auto font-normal justify-start"
                  >
                    Partner Registration
                  </Button>
                </a>
              </li>
              <li>
                <Button
                  onClick={handlePartnerLogin}
                  variant="ghost"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm p-0 h-auto font-normal justify-start"
                >
                  Partner Login
                </Button>
              </li>
            </ul>

            {/* For Admins */}
            <div className="pt-6 border-t border-luxury-charcoal">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-4 w-4 text-luxury-silver" />
                <h4 className="text-sm font-medium text-luxury-pearl">
                  For Admins
                </h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <Button
                    onClick={handleAdminLogin}
                    variant="ghost"
                    className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm p-0 h-auto font-normal justify-start"
                  >
                    Admin Login
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          {/* General Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Info className="h-4 w-4 text-luxury-silver" />
              <h3 className="text-base font-medium text-luxury-pearl">
                General Info
              </h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300 text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us & Newsletter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-base font-medium text-luxury-pearl">
                Follow Us
              </h3>
            </div>

            {/* Social Media Icons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-luxury-silver hover:text-luxury-red transition-colors duration-300"
                  aria-label="Line Official"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-6 border-t border-luxury-charcoal">
              <h4 className="text-sm font-medium text-luxury-pearl mb-4">
                Newsletter
              </h4>
              <p className="text-xs text-luxury-silver mb-4">
                Subscribe to receive updates about new destinations and special
                offers.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-luxury-charcoal border-luxury-charcoal text-luxury-pearl placeholder:text-luxury-silver text-sm"
                    required
                  />
                  <Button
                    type="submit"
                    variant="default"
                    size="sm"
                    className="bg-luxury-red text-white hover:bg-luxury-red-dark"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-luxury-charcoal mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm text-luxury-silver">
              © 2025 RVnCamp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
