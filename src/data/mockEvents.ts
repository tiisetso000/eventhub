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
    id: "soweto-shutdown-nov-2024",
    title: "SOWETO SHUTDOWN",
    description: "Sxova present to you SOWETO SHUTDOWN once more, bigger & better this time🥹 this is a musical celebration, celebrating my journey and love we have received throughout. Efforts & lessons. Family & friends we have made outside our homes.",
    date: "May 03, 2025",
    location: "Soweto",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1739923058/WhatsApp_Image_2025-02-18_at_23.53.35_a41febf9_gkirkv.jpg",
    price: 99.99,
    startTime: "16:00",
    endTime: "02:00",
    lineup: [
      {
        name: "Sxova",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Shaun101",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/summerfest",
      facebook: "https://facebook.com/summerfest",
      tiktok: "https://tiktok.com/@summerfest"
    },
    ticketTypes: [
      {
        name: "Early Bird",
        price: 99.99,
        description: "Limited early access tickets at a special price",
        available: 100
      },
      {
        name: "General Admission",
        price: 149.99,
        description: "At the Gate!!",
        available: 30
      },
      {
        name: "VIP",
        price: 249.99,
        description: "VIP area access",
        available: 70
      }
    ]
  },
  {
    id: "pens-down-nov-2024",
    title: "Black Tee & Friends",
    description: "Yeye🤘🏿 hope y'all good,@sportman striker x stiflerman smiso x team phoko phoko  Present's to you The unlock of shakaman Yktv  Mr sgidongooo🔥🥳❤Sharists Please Do The Most 🙏🏾❤😭 & Spread The Word Your support Will be highly appreciated 🫶.",
    date: "April 19, 2025",
    location: "Tshepisong",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1739923058/WhatsApp_Image_2025-02-18_at_23.53.36_cfe5827a_wwyhrj.jpg",
    price: 0.00,
    startTime: "09:00",
    endTime: "18:00",
    lineup: [
      {
        name: "Sportsman Striker",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Stilfer",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Phokophoko",
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
        name: "Pre-Sold",
        price: 30.00,
        description: "Limited early access tickets at a special price",
        available: 100
      },
      {
        name: "General Admission",
        price: 50.00,
        description: "Standard festival access",
        available: 30
      },
      {
        name: "CoolerBox",
        price: 50.00,
        description: "Small Cooler Box R50",
        available: 100
      }
    ]
  },
  {
    id: "gees-fest-apt-2025",
    title: "Gees Fest",
    description: "Wassup Good People The Boygees Clothing Proudly Presents The Official Gees Fest (Mabhanzin's Birthday Celebration) Hosted By Malume Spura & Umfana WeHubbly .SAVE THE DATE (05 APRIL) We Promise Y'all Good Vibes With Perfect Blend Of Iconic Culture,Music and Streetwear.🎂🥳🥳🥳🥳🥳🥳🥳 More Details Coming Soon",
    date: "April 05, 2025",
    location: "Soweto (Mapetla)",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1739923059/WhatsApp_Image_2025-02-18_at_23.53.36_b6d14b52_ltrag4.jpg",
    price: 50.00,
    startTime: "16:00",
    endTime: "02:00",
    lineup: [
      {
        name: "LineUp Coming Soon",
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
        price: 49.99,
        description: "Limited early access tickets at a special price",
        available: 100
      },
      {
        name: "General Admission",
        price: 99.99,
        description: "After 9pm Entry Ticket",
        available: 90
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
    id: "brandros-mrh-2025",
    title: "Brandros",
    description: "Ladies and gents these are the pilots for the all black everything, the connoisseurs of the days groove! The ones to take centre stage and give us memorable moments to last us a lifetime. Let's rock!!!!🔥",
    date: "March 29, 2025",
    location: "Johannesburg",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1739923059/WhatsApp_Image_2025-02-18_at_23.53.36_21e69d31_dci6td.jpg",
    price: 120.00,
    startTime: "17:00",
    endTime: "02:00",
    lineup: [
      {
        name: "Kabza De Small",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Kelvin Momo",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Oscar Mbo",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Shakes X Les",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Skroef",
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
        price: 0.00,
        description: "Limited early access tickets at a special price",
        available: 0
      },
      {
        name: "General Admission",
        price: 120.00,
        description: "Standard festival access",
        available: 90
      },
      {
        name: "VIP",
        price: 250.00,
        description: "VIP area access, complimentary drinks, and exclusive viewing areas",
        available: 70
      }
    ]
  },
  {
    id: "two-man-may-2025",
    title: "Two Man",
    description: "🚨🚨🚨 ON 24 MAY FIASCO PRESENTS TWO MAN SHOW 🚨🚨🚨",
    date: "May 24, 2025",
    location: "Location well be shared",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1739923058/WhatsApp_Image_2025-02-18_at_23.53.36_39259c04_ffczd6.jpg",
    price: 40.00,
    startTime: "12:00",
    endTime: "20:00",
    lineup: [
      {
        name: "Nkuleee 501",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Rico",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "King P",
        facebook: "https://facebook.com/realblackcoffee",
        instagram: "https://instagram.com/realblackcoffee"
      },
      {
        name: "Sxova",
        facebook: "https://facebook.com/nasty_c",
        instagram: "https://instagram.com/nasty_c"
      },
      {
        name: "Cakes",
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
        name: "Pre Sold",
        price: 40.00,
        description: "Limited early access tickets at a special price",
        available: 100
      }
    ]
  },
  
  
];
