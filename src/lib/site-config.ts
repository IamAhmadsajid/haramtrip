// src/lib/site-config.ts

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  highlight?: boolean;
}

export interface NavLink {
  label: string;
  href: string | null;
  dropdownTitle?: string; // Added this for the heading inside the dropdown
  dropdown?: NavDropdownItem[];
}

export const SITE_CONFIG = {
  name: "Haram Trip",
  whatsapp: "https://wa.me/447700171892", 
  phoneDisplay: "07700171892",
  phoneLink: "+447700171892",
  email: "info@haramtrip.co.uk",
  address: "13 Station Road, London, SE25 5AH",
  
  socials: {
    facebook: "https://facebook.com/haramtrip",
    instagram: "https://instagram.com/haramtrip",
    twitter: "https://twitter.com/haramtrip",
  },

  customerCare: [
    { label: "Rules and Regulation", href: "/customer-care/rules" },
    { label: "Privacy and Policy", href: "/customer-care/privacy-policy" },
    { label: "Terms and Conditions", href: "/customer-care/terms" },
    { label: "Umrah Visa Policy", href: "/customer-care/umrah-visa-policy" },
  ],

  navLinks: [
    { label: "Home", href: "/" },
    { 
      label: "Umrah Packages", 
      href: "/umrah-packages",
      dropdownTitle: "Select Umrah Offerings",
      dropdown: [
        { label: "5 Star Umrah Packages", href: "/umrah-packages/5-star", description: "Luxury 5-star accommodations", icon: "Star", highlight: true },
        { label: "Ramadan Umrah", href: "/umrah-packages/ramadan", description: "Perform Umrah in the holy month", icon: "Moon" },
        { label: "December Umrah", href: "/umrah-packages/december", description: "Winter break Umrah packages", icon: "Snowflake" },
        { label: "Easter Umrah", href: "/umrah-packages/easter", description: "Family Umrah during Easter holidays", icon: "CalendarHeart" },
        { label: "Women Umrah Packages", href: "/umrah-packages/women", description: "100% safe & 24/7 supported female pilgrimages", icon: "Users" },
      ]
    },
    { 
      label: "Tour Umrah Packages", 
      href: null, 
      dropdownTitle: "Popular Holiday & Multi-Destination Tours",
      dropdown: [
        { label: "Dubai Holidays", href: "/tour-umrah-packages/dubai", description: "Luxury desert, skyline & family attractions", icon: "Building2" },
        { label: "Egypt Holidays", href: "/tour-umrah-packages/egypt", description: "Ancient Pyramids, Nile cruises & Islamic Cairo", icon: "Landmark" },
        { label: "Turkey Holidays", href: "/tour-umrah-packages/turkey", description: "Istanbul Bosphorus, Cappadocia & cultural tours", icon: "Map" },
      ]
    },

    { label: "Makkah Hotels", href: "/makkah-hotels" },

    { 
      label: "Extra", 
      href: null,
      dropdownTitle: "Services & Guidance",
      dropdown: [
        { label: "Airport Transfers", href: "/airport-transfers", description: "Seamless transport to and from the airport", icon: "Bus" }, // Removed /extra/
        { label: "About Us", href: "/about", description: "Learn more about Haram Trip", icon: "Info" }, // Removed /extra/
        { label: "Contact Us", href: "/contact", description: "Get in touch with us", icon: "Phone" }, // Removed /extra/
        { label: "Blog", href: "/blog", description: "Latest news and guides", icon: "Newspaper" }, // Removed /extra/
      ]
    },
  ] as NavLink[],
};