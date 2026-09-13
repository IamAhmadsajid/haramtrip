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
  dropdownTitle?: string;
  dropdown?: NavDropdownItem[];
}

export const SITE_CONFIG = {
  name: "Haram Trip",

  // =========================================================
  // CONTACT DETAILS
  // =========================================================
  whatsapp: "https://wa.me/447700171892",
  phoneDisplay: "07700171892",
  phoneLink: "tel:+447700171892",
  email: "info@haramtrip.co.uk",

  // Keep the original address property for any existing
  // components that may already be using SITE_CONFIG.address
  address: "13 Station Road, London, SE25 5AH",

  address2: "156 Great Charles St, Queensway, Birmingham B3 3HN",

  // New complete address list
  addresses: {
    london: "13 Station Road, London SE25 5AH",
    birmingham: "156 Great Charles St, Queensway, Birmingham B3 3HN",
  },

  // =========================================================
  // COMPANY DESCRIPTION
  // =========================================================
  description:
    "Haram Trip, an ATOL-protected and IATA-certified travel provider, proudly offers premium and exclusive All-Inclusive Umrah & Hajj Packages from the UK. Enjoy exceptional value with the best prices on complete travel arrangements — including return flights, luxury 5-star hotel stays close to the Haram, and seamless customer support throughout your holy journey.",

  // =========================================================
  // SOCIAL ACCOUNTS
  // =========================================================
  socials: {
    instagram: "https://www.instagram.com/haramtrip1/",
    facebook: "https://www.facebook.com/profile.php?id=61585943232918",
    twitter: "https://twitter.com/haramtrip",
    pinterest:
      "https://uk.pinterest.com/haramtrip/?actingBusinessId=1109574564352379024",
    youtube: "https://www.youtube.com/@Haramtripuk",
    tiktok: "https://www.tiktok.com/@haramtripofficial",
  },

  // =========================================================
  // CUSTOMER CARE
  // =========================================================
  customerCare: [
    {
      label: "Rules and Regulation",
      href: "/rules-and-regulations",
    },
    {
      label: "Privacy and Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms and Conditions",
      href: "/terms-and-conditions",
    },
    {
      label: "Umrah Visa Policy",
      href: "/umrah-visa-policy",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "FAQs",
      href: "/faqs",
    },
  ],

  // =========================================================
  // NAVIGATION
  // =========================================================
  navLinks: [
    { label: "Home", href: "/" },

    {
      label: "Umrah Packages",
      href: "/umrah-packages",
      dropdownTitle: "Select Umrah Offerings",
      dropdown: [
        {
          label: "5 Star Umrah Packages",
          href: "/umrah-packages/5-star-umrah",
          description: "Luxury 5-star accommodations",
          icon: "Star",
          highlight: true,
        },
        {
          label: "Budget Friendly Umrah Packages",
          href: "/umrah-packages/budget-umrah",
          description: "Affordable Umrah packages for all budgets",
          icon: "Star",
          highlight: true,
        },
        {
          label: "Ramadan Umrah Packages",
          href: "/umrah-packages/ramadan-umrah",
          description: "Perform Umrah in the holy month",
          icon: "Moon",
        },
        {
          label: "December Umrah Packages",
          href: "/umrah-packages/december-umrah",
          description: "Winter break Umrah packages",
          icon: "Snowflake",
        },
        {
          label: "Easter Umrah Packages",
          href: "/umrah-packages/easter-umrah",
          description: "Family Umrah during Easter holidays",
          icon: "CalendarHeart",
        },
        {
          label: "Women Umrah Packages",
          href: "/umrah-packages/women-umrah",
          description:
            "100% safe & 24/7 supported female pilgrimages",
          icon: "Users",
        },
      ],
    },

    {
      label: "Tour Umrah Packages",
      href: null,
      dropdownTitle: "Popular Holiday & Multi-Destination Tours",
      dropdown: [
        {
          label: "Dubai Holidays",
          href: "/tour-umrah-packages/dubai",
          description:
            "Luxury desert, skyline & family attractions",
          icon: "Building2",
        },
        {
          label: "Egypt Holidays",
          href: "/tour-umrah-packages/egypt",
          description:
            "Ancient Pyramids, Nile cruises & Islamic Cairo",
          icon: "Landmark",
        },
        {
          label: "Turkey Holidays",
          href: "/tour-umrah-packages/turkey",
          description:
            "Istanbul Bosphorus, Cappadocia & cultural tours",
          icon: "Map",
        },
      ],
    },

    {
      label: "Hotels",
      href: null, // Parent has no link
      dropdownTitle: "Premium Hotel Accommodations",
      dropdown: [
        {
          label: "Makkah Hotels",
          href: "/makkah-hotels",
          description: "Luxury stays near Masjid al-Haram",
          icon: "Building",
        },
        {
          label: "Madinah Hotels",
          href: "/madinah-hotels",
          description: "Comfort near Masjid an-Nabawi",
          icon: "Building",
        },
      ],
    },

    {
      label: "Extra",
      href: null,
      dropdownTitle: "Services & Guidance",
      dropdown: [
        {
          label: "About Us",
          href: "/about",
          description: "Learn more about Haram Trip",
          icon: "Info",
        },
        {
          label: "Contact Us",
          href: "/contact",
          description: "Get in touch with us",
          icon: "Phone",
        },
        {
          label: "Airport Transfers",
          href: "/airport-transfers",
          description:
            "Seamless transport to and from the airport",
          icon: "Bus",
        },
        {
          label: "Iharam & Umrah Shop",
          href: "/shop",
          description: "Premium Ihram & travel accessories",
          icon: "ShoppingBag",
        },
        {
          label: "Blog",
          href: "/blog",
          description: "Latest news and guides",
          icon: "Newspaper",
        },
      ],
    },
  ] as NavLink[],
};