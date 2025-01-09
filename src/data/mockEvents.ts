export interface TicketType {
  name: string;
  price: number;
  description: string;
  available: number;
}

export interface Artist {
  name: string;
  facebook?: string;
  instagram?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  price: number;
  startTime: string;
  endTime: string;
  lineup: Artist[];
  socialMedia: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  ticketTypes: TicketType[];
}

export const mockEvents: Event[] = [
  {
    id: "sgidi-fridays-nov-2024",
    title: "Pretty Girls Love Sgidi Fridays",
    description: "We bring Sgidi Friday. Join us for an unforgettable experience of live performances, great food, and amazing atmosphere.",
    date: "Nov 29, 2024",
    location: "Impala Cafe",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1732926050/sgidi_love_zjvtfa.jpg",
    price: 99.99,
    startTime: "16:00",
    endTime: "23:00",
    lineup: [
      {
        name: "DJ Maphorisa",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Kabza De Small",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Uncle Waffles",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "DBN Gogo",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Major League DJz",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      }
    ],
    socialMedia: {
      instagram: "https://instagram.com/summerfest",
      facebook: "https://facebook.com/summerfest",
      tiktok: "https://tiktok.com/@summerfest"
    },
    ticketTypes: [
      {
        name: "Early Bird",
        price: 79.99,
        description: "Limited early access tickets at a special price",
        available: 100
      },
      {
        name: "General Admission",
        price: 99.99,
        description: "Standard festival access",
        available: 0
      },
      {
        name: "VIP",
        price: 199.99,
        description: "VIP area access, complimentary drinks, and exclusive viewing areas",
        available: 20
      }
    ]
  },
  {
    id: "pens-down-nov-2024",
    title: "Pens Down",
    description: "Join the biggest pens down chilliars, Everyone is welcome, and networking opportunities.",
    date: "Nov 30, 2024",
    location: "Naledi",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1732926130/pensdown_bttpcl.jpg",
    price: 299.99,
    startTime: "09:00",
    endTime: "18:00",
    lineup: [
      {
        name: "Black Coffee",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Shimza",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "DJ Fresh",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Zakes Bantwini",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Sun-El Musician",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      }
    ],
    socialMedia: {
      instagram: "https://instagram.com/techconf",
      facebook: "https://facebook.com/techconf",
      tiktok: "https://tiktok.com/@techconf"
    },
    ticketTypes: [
      {
        name: "Early Bird",
        price: 79.99,
        description: "Limited early access tickets at a special price",
        available: 100
      },
      {
        name: "General Admission",
        price: 99.99,
        description: "Standard festival access",
        available: 30
      },
      {
        name: "VIP",
        price: 199.99,
        description: "VIP area access, complimentary drinks, and exclusive viewing areas",
        available: 0
      }
    ]
  },
  {
    id: "amapiano-world-sept-2024",
    title: "Amapiano To The World",
    description: "We bring the best Amapiano Event from around the world, with demonstrations from celebrity chefs and wine experts.",
    date: "September 30, 2024",
    location: "Johannesburg South",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1732926170/event1_ywebwu.jpg",
    price: 149.99,
    startTime: "12:00",
    endTime: "20:00",
    lineup: [
      {
        name: "Mellow & Sleazy",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Tyler ICU",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Ch'cco",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Focalistic",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Young Stunna",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      }
    ],
    socialMedia: {
      instagram: "https://instagram.com/foodexpo",
      facebook: "https://facebook.com/foodexpo",
      tiktok: "https://tiktok.com/@foodexpo"
    },
    ticketTypes: [
      {
        name: "Early Bird",
        price: 79.99,
        description: "Limited early access tickets at a special price",
        available: 100
      },
      {
        name: "General Admission",
        price: 99.99,
        description: "Standard festival access",
        available: 30
      },
      {
        name: "VIP",
        price: 199.99,
        description: "VIP area access, complimentary drinks, and exclusive viewing areas",
        available: 0
      }
    ]
  },
  {
    id: "stance-oyslay-2024",
    title: "Stance ParkOff",
    description: "Make sure you bring your friends & tell them to tell their friends because we know they are car lovers",
    date: "January 25, 2025",
    location: "Molapo Makapane 139",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1736447349/stance_oyslay.jpg",
    price: 49.99,
    startTime: "12:00",
    endTime: "20:00",
    lineup: [
      {
        name: "DJY_K1_SA",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "ADK",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Marikana Fest",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Sir Trill",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Daliwonga",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      }
    ],
    socialMedia: {
      instagram: "https://instagram.com/foodexpo",
      facebook: "https://facebook.com/foodexpo",
      tiktok: "https://tiktok.com/@foodexpo"
    },
    ticketTypes: [
      {
        name: "Early Bird",
        price: 79.99,
        description: "Limited early access tickets at a special price",
        available: 0
      },
      {
        name: "General",
        price: 49.00,
        description: "Standard festival access",
        available: 30
      },
      {
        name: "VIP",
        price: 199.99,
        description: "VIP area access, complimentary drinks, and exclusive viewing areas",
        available: 0
      }
    ]
  },
  {
    id: "creative-link-sept-2024",
    title: "Creative Link",
    description: "We bring the best Creative Link Event from around the world, with demonstrations from celebrity chefs and wine experts.",
    date: "September 30, 2024",
    location: "JebbeTown",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1732927962/creative_ioypbg.jpg",
    price: 149.99,
    startTime: "12:00",
    endTime: "20:00",
    lineup: [
      {
        name: "Kelvin Momo",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "De Mthuda",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Lady Du",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Sir Trill",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Daliwonga",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      }
    ],
    socialMedia: {
      instagram: "https://instagram.com/foodexpo",
      facebook: "https://facebook.com/foodexpo",
      tiktok: "https://tiktok.com/@foodexpo"
    },
    ticketTypes: [
      {
        name: "Early Bird",
        price: 79.99,
        description: "Limited early access tickets at a special price",
        available: 100
      },
      {
        name: "General Admission",
        price: 99.99,
        description: "Standard festival access",
        available: 30
      },
      {
        name: "VIP",
        price: 199.99,
        description: "VIP area access, complimentary drinks, and exclusive viewing areas",
        available: 0
      }
    ]
  },
  {
    id: "strickly-amapiano-sept-2024",
    title: "Strickly Amapiano",
    description: "Free entrance event celebrating Amapiano music",
    date: "September 30, 2024",
    location: "Johannesburg South",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1710715583/lalzybbptf8xxraapifg.jpg",
    price: 0,
    startTime: "12:00",
    endTime: "20:00",
    lineup: [
      {
        name: "Mellow & Sleazy",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Tyler ICU",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Ch'cco",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Focalistic",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Young Stunna",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      }
    ],
    socialMedia: {
      instagram: "https://instagram.com/foodexpo",
      facebook: "https://facebook.com/foodexpo",
      tiktok: "https://tiktok.com/@foodexpo"
    },
    ticketTypes: []
  }
];