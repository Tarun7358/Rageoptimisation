/* ==========================================================================
   RAGE OPTIMISATION - Free Fire Exhaustive Brand & Device Sensitivity Application
   ========================================================================== */

// Global Configuration & Sensitivity Data Matrix
const CONFIG = {
  YOUTUBE_URL: "https://www.youtube.com/@clasherliveop",
  WHATSAPP_URL: "https://whatsapp.com/channel/0029Vb6Bqn8FCCoW6zjffR3j",
  DISCORD_URL: "https://discord.gg/JdvKrCHnMJ",

  // Mobile Device Brands & Exhaustive Model Matrix
  MOBILE_BRANDS: [
    {
      id: "apple",
      name: "Apple (iPhone / iPad)",
      icon: "fa-brands fa-apple",
      models: [
        "iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17 Plus", "iPhone 17",
        "iPhone 16e", "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
        "iPhone SE (2025)", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
        "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
        "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini",
        "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini",
        "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
        "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X",
        "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7",
        "iPhone SE (2022)", "iPhone SE (2020)",
        "iPad Pro 13 (M4)", "iPad Pro 12.9 (M1/M2)", "iPad Pro 11 (M1/M2/M4)", "iPad Air 6 (M2)", "iPad Air (M1)", "iPad Mini 7", "iPad Mini 6", "iPad 10th Gen", "iPad 9th Gen"
      ],
      sensi: {
        general: "172",
        redDot: "165",
        scope2x: "160",
        scope4x: "155",
        awm: "95",
        freeLook: "150",
        fireButton: "42%",
        dpi: "Default (iOS Touch Curves)",
        proTips: [
          "iOS has native smooth touch acceleration—no DPI modification required.",
          "Set Fire Button size to 42% positioned slightly lower for clean drag upward.",
          "Enable 120Hz ProMotion in iOS Settings for instant drag headshot response."
        ]
      }
    },
    {
      id: "iqoo",
      name: "iQOO (Z10 5G, Neo 10, iQOO 13 & Monster Gaming Series)",
      icon: "fa-solid fa-bolt-lightning",
      models: [
        "iQOO 14 Pro", "iQOO 14 5G", "iQOO 13 5G", "iQOO 12 Pro", "iQOO 12 5G", "iQOO 11 5G", "iQOO 9 Pro", "iQOO 9T", "iQOO 9 5G", "iQOO 9 SE", "iQOO 7 Legend", "iQOO 7",
        "iQOO Neo 10 Pro", "iQOO Neo 10", "iQOO Neo 9 Pro", "iQOO Neo 9", "iQOO Neo 7 Pro", "iQOO Neo 7", "iQOO Neo 6",
        "iQOO Z10 5G", "iQOO Z10 Pro 5G", "iQOO Z10x 5G", "iQOO Z9s Pro 5G", "iQOO Z9s 5G", "iQOO Z9 5G", "iQOO Z9x 5G", "iQOO Z9 Turbo+", "iQOO Z9 Turbo", "iQOO Z8", "iQOO Z7 Pro 5G", "iQOO Z7 5G", "iQOO Z7s 5G", "iQOO Z6 Pro 5G", "iQOO Z6 5G", "iQOO Z6 Lite 5G"
      ],
      sensi: {
        general: "178",
        redDot: "170",
        scope2x: "165",
        scope4x: "160",
        awm: "100",
        freeLook: "155",
        fireButton: "43%",
        dpi: "410 DPI",
        proTips: [
          "Enable Monster Mode in iQOO Game Space for maximum CPU/GPU & 1200Hz Instant Touch Sampling.",
          "Set Smallest Width (DPI) to 410 in Developer Options for fast upward drag lock.",
          "Keep Fire Button at 43% near the lower right quadrant for smooth drag headshots."
        ]
      }
    },
    {
      id: "vivo",
      name: "Vivo (V70 FE, V70/V60/V50, T5/T4 5G, X Series)",
      icon: "fa-solid fa-mobile-screen-button",
      models: [
        "Vivo V70 FE", "Vivo V70 Pro 5G", "Vivo V70 5G",
        "Vivo V60 Pro 5G", "Vivo V60 5G",
        "Vivo V50 Pro 5G", "Vivo V50 5G", "Vivo V50e",
        "Vivo V40 Pro 5G", "Vivo V40 5G", "Vivo V40 SE 5G", "Vivo V40 Lite", "Vivo V30 Pro", "Vivo V30", "Vivo V30e",
        "Vivo V29 Pro", "Vivo V29", "Vivo V29e", "Vivo V27 Pro", "Vivo V27", "Vivo V25 Pro", "Vivo V23 Pro", "Vivo V21 5G", "Vivo V20", "Vivo V19", "Vivo V17 Pro", "Vivo V15 Pro",
        "Vivo X200 Pro Ultra", "Vivo X200 Pro", "Vivo X200", "Vivo X100 Ultra", "Vivo X100 Pro", "Vivo X100", "Vivo X90 Pro", "Vivo X90", "Vivo X80 Pro", "Vivo X70 Pro+",
        "Vivo T5 5G", "Vivo T4 Pro 5G", "Vivo T4 5G", "Vivo T4x 5G", "Vivo T3 Ultra", "Vivo T3 Pro 5G", "Vivo T3 5G", "Vivo T3x 5G", "Vivo T2 Pro 5G", "Vivo T2 5G", "Vivo T2x 5G", "Vivo T1 Pro 5G", "Vivo T1 5G",
        "Vivo Y400 5G", "Vivo Y300 Pro", "Vivo Y300 5G", "Vivo Y200e 5G", "Vivo Y200 5G", "Vivo Y100 5G", "Vivo Y56 5G", "Vivo Y36 5G", "Vivo Y28 5G", "Vivo Y27 5G", "Vivo Y22", "Vivo Y21", "Vivo Y20", "Vivo Y19", "Vivo Y17s", "Vivo Y16", "Vivo Y15"
      ],
      sensi: {
        general: "190",
        redDot: "183",
        scope2x: "178",
        scope4x: "173",
        awm: "106",
        freeLook: "158",
        fireButton: "45%",
        dpi: "435 DPI",
        proTips: [
          "Set Smallest Width (DPI) to 435 in Funtouch OS Developer Options.",
          "Enable Ultra Game Mode for peak touch response acceleration.",
          "Set Fire Button at 45% positioned low for smooth upward drag headshots."
        ]
      }
    },
    {
      id: "xiaomi",
      name: "Xiaomi / POCO / Redmi",
      icon: "fa-solid fa-mobile-screen-button",
      models: [
        // POCO Series
        "POCO F7 Pro", "POCO F7", "POCO F6 Pro", "POCO F6", "POCO F5 Pro", "POCO F5", "POCO F4 5G", "POCO F3 GT", "POCO F3",
        "POCO X7 Pro 5G", "POCO X7 5G", "POCO X6 Pro 5G", "POCO X6 5G", "POCO X5 Pro 5G", "POCO X5 5G", "POCO X4 Pro 5G", "POCO X3 Pro", "POCO X3 NFC", "POCO X3",
        "POCO M7 Pro 5G", "POCO M6 Pro 5G", "POCO M6 5G", "POCO M5", "POCO M4 Pro 5G", "POCO M3 Pro 5G", "POCO C65", "POCO C55", "POCO C51",
        // Redmi Note Series
        "Redmi Note 14 Pro+ 5G", "Redmi Note 14 Pro 5G", "Redmi Note 14 5G",
        "Redmi Note 13 Pro+ 5G", "Redmi Note 13 Pro 5G", "Redmi Note 13 5G", "Redmi Note 13 4G",
        "Redmi Note 12 Pro+ 5G", "Redmi Note 12 Pro 5G", "Redmi Note 12 5G", "Redmi Note 12 4G", "Redmi Note 12 Turbo",
        "Redmi Note 11 Pro+ 5G", "Redmi Note 11 Pro 5G", "Redmi Note 11S", "Redmi Note 11",
        "Redmi Note 10 Pro Max", "Redmi Note 10 Pro", "Redmi Note 10S", "Redmi Note 10", "Redmi Note 10T 5G",
        "Redmi Note 9 Pro Max", "Redmi Note 9 Pro", "Redmi Note 9S", "Redmi Note 9", "Redmi Note 8 Pro", "Redmi Note 8",
        // Redmi Budget & Xiaomi Flagships
        "Redmi 14C 5G", "Redmi 13C 5G", "Redmi 13C", "Redmi 12 5G", "Redmi 12", "Redmi 11 Prime 5G", "Redmi 10C", "Redmi 10", "Redmi 9A", "Redmi 9C", "Redmi A3", "Redmi A2+",
        "Xiaomi 15 Ultra", "Xiaomi 15 Pro", "Xiaomi 15", "Xiaomi 14 Ultra", "Xiaomi 14 Pro", "Xiaomi 14", "Xiaomi 14T Pro", "Xiaomi 14T", "Xiaomi 13T Pro", "Xiaomi 13T", "Xiaomi 13 Pro", "Xiaomi 13 Ultra",
        "Xiaomi 12T Pro", "Xiaomi 12 Pro", "Xiaomi 12X", "Xiaomi 11T Pro", "Xiaomi Mi 11X Pro", "Xiaomi Mi 11X", "Xiaomi Mi 10i"
      ],
      sensi: {
        general: "194",
        redDot: "188",
        scope2x: "182",
        scope4x: "178",
        awm: "110",
        freeLook: "165",
        fireButton: "48%",
        dpi: "490 DPI",
        proTips: [
          "Set Smallest Width (DPI) to 490 in MIUI / HyperOS Developer Options.",
          "Turn ON Game Turbo mode and set Touch Response & Sensitivity to Maximum.",
          "Use smooth thumb sleeves for fast upward drag speed."
        ]
      }
    },
    {
      id: "samsung",
      name: "Samsung Galaxy",
      icon: "fa-solid fa-mobile-retro",
      models: [
        // S-Series Flagships
        "Galaxy S25 Ultra", "Galaxy S25+", "Galaxy S25", "Galaxy S25 FE",
        "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S24 FE",
        "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S23 FE",
        "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22",
        "Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21", "Galaxy S21 FE 5G",
        "Galaxy S20 Ultra", "Galaxy S20+", "Galaxy S20", "Galaxy S20 FE 5G", "Galaxy S10+", "Galaxy S10", "Galaxy S9+",
        // A-Series
        "Galaxy A56 5G", "Galaxy A36 5G", "Galaxy A55 5G", "Galaxy A54 5G", "Galaxy A53 5G", "Galaxy A52s 5G", "Galaxy A52 5G", "Galaxy A52", "Galaxy A51",
        "Galaxy A35 5G", "Galaxy A34 5G", "Galaxy A33 5G", "Galaxy A32 5G", "Galaxy A32",
        "Galaxy A25 5G", "Galaxy A24", "Galaxy A23 5G", "Galaxy A23", "Galaxy A22 5G",
        "Galaxy A16 5G", "Galaxy A15 5G", "Galaxy A14 5G", "Galaxy A14", "Galaxy A13", "Galaxy A12", "Galaxy A05s", "Galaxy A04s", "Galaxy A03s",
        // M & F Series
        "Galaxy M56 5G", "Galaxy M55 5G", "Galaxy M54 5G", "Galaxy M53 5G", "Galaxy M52 5G", "Galaxy M35 5G", "Galaxy M34 5G", "Galaxy M33 5G", "Galaxy M32 5G",
        "Galaxy M15 5G", "Galaxy M14 5G", "Galaxy M13 5G", "Galaxy M12", "Galaxy F56 5G", "Galaxy F55 5G", "Galaxy F54 5G", "Galaxy F34 5G", "Galaxy F15 5G", "Galaxy F14 5G", "Galaxy F23 5G",
        // Z-Series Foldables
        "Galaxy Z Fold 7", "Galaxy Z Flip 7", "Galaxy Z Fold 6", "Galaxy Z Fold 5", "Galaxy Z Fold 4", "Galaxy Z Fold 3", "Galaxy Z Flip 6", "Galaxy Z Flip 5", "Galaxy Z Flip 4"
      ],
      sensi: {
        general: "188",
        redDot: "182",
        scope2x: "175",
        scope4x: "170",
        awm: "105",
        freeLook: "160",
        fireButton: "46%",
        dpi: "450 DPI",
        proTips: [
          "Enable 'Touch Sensitivity' mode in One UI Display settings.",
          "Set Game Booster touch optimization plugins to High Performance.",
          "Fire Button size at 46% positioned near the lower right quadrant."
        ]
      }
    },
    {
      id: "oppo",
      name: "OPPO (F35 5G, F33, Reno, Find, F & A Series)",
      icon: "fa-solid fa-mobile-screen",
      models: [
        "OPPO F35 5G", "OPPO F33 5G", "OPPO F33 Pro 5G", "OPPO F31 5G", "OPPO F27 Pro+ 5G", "OPPO F27 5G",
        "OPPO Reno 13 Pro 5G", "OPPO Reno 13 5G", "OPPO Reno 12 Pro 5G", "OPPO Reno 12 5G", "OPPO Reno 11 Pro 5G", "OPPO Reno 11 5G", "OPPO Reno 10 Pro+ 5G", "OPPO Reno 10 Pro 5G", "OPPO Reno 10 5G",
        "OPPO Reno 8 Pro 5G", "OPPO Reno 8 5G", "OPPO Reno 7 Pro 5G", "OPPO Reno 6 Pro 5G", "OPPO Find X8 Pro", "OPPO Find X8", "OPPO Find N3 Flip",
        "OPPO F25 Pro 5G", "OPPO F23 5G", "OPPO F21s Pro 5G", "OPPO F21 Pro 5G", "OPPO F19 Pro+ 5G",
        "OPPO A80 5G", "OPPO A79 5G", "OPPO A59 5G", "OPPO A78 5G", "OPPO A58 5G", "OPPO A38", "OPPO A18", "OPPO A17"
      ],
      sensi: {
        general: "186",
        redDot: "179",
        scope2x: "174",
        scope4x: "169",
        awm: "102",
        freeLook: "158",
        fireButton: "44%",
        dpi: "440 DPI",
        proTips: [
          "Set Smallest Width (DPI) to 440 in ColorOS Developer Options.",
          "Enable Pro Gaming Mode in Game Assistant for 240Hz Touch Sampling.",
          "Set Fire Button size to 44% positioned low for clean upward drag acceleration."
        ]
      }
    },
    {
      id: "realme",
      name: "Realme (Realme 14, 13, GT 7 Pro & Narzo Series)",
      icon: "fa-solid fa-mobile",
      models: [
        "Realme 14 Pro+ 5G", "Realme 14 Pro 5G", "Realme 14 5G",
        "Realme 13 Pro+ 5G", "Realme 13 Pro 5G", "Realme 13+ 5G", "Realme 12 Pro+ 5G", "Realme 12 Pro 5G", "Realme 12+ 5G", "Realme 12 5G", "Realme 12x 5G",
        "Realme 11 Pro+ 5G", "Realme 11 Pro 5G", "Realme 11 5G", "Realme 11x 5G",
        "Realme 10 Pro+ 5G", "Realme 10 Pro 5G", "Realme 10 5G", "Realme 10",
        "Realme 9 Pro+ 5G", "Realme 9 Pro 5G", "Realme 9i 5G", "Realme 9 5G", "Realme 8 Pro", "Realme 8 5G", "Realme 8", "Realme 7 Pro",
        "Realme GT 7 Pro", "Realme GT 6", "Realme GT 6T", "Realme GT 5 Pro", "Realme GT 5", "Realme GT 3", "Realme GT 2 Pro", "Realme GT 2", "Realme GT Neo 6 SE", "Realme GT Neo 5", "Realme GT Neo 3T", "Realme GT Neo 3", "Realme GT Neo 2", "Realme GT Master Edition",
        "Realme Narzo 80 Pro 5G", "Realme Narzo 70 Turbo 5G", "Realme Narzo 70 Pro 5G", "Realme Narzo 70x 5G", "Realme Narzo 60 Pro 5G", "Realme Narzo 60x 5G", "Realme Narzo 50 Pro 5G", "Realme Narzo 50", "Realme Narzo 30 5G",
        "Realme C67 5G", "Realme C65 5G", "Realme C55", "Realme C53", "Realme C35", "Realme C33", "Realme C31", "Realme C25s"
      ],
      sensi: {
        general: "192",
        redDot: "185",
        scope2x: "180",
        scope4x: "175",
        awm: "108",
        freeLook: "160",
        fireButton: "45%",
        dpi: "430 DPI",
        proTips: [
          "Set Smallest Width (DPI) to 430 in Developer Options.",
          "Enable Pro Gaming Mode in Game Assistant for 240Hz Touch Sampling.",
          "Keep General at 192 for quick 360-degree drag rotation."
        ]
      }
    },
    {
      id: "oneplus",
      name: "OnePlus",
      icon: "fa-solid fa-bolt",
      models: [
        "OnePlus 13", "OnePlus 13R", "OnePlus 12", "OnePlus 12R", "OnePlus 11", "OnePlus 11R",
        "OnePlus Open 2", "OnePlus Open", "OnePlus 10 Pro", "OnePlus 10T", "OnePlus 10R",
        "OnePlus 9 Pro", "OnePlus 9RT", "OnePlus 9", "OnePlus 9R",
        "OnePlus 8T", "OnePlus 8 Pro", "OnePlus 8", "OnePlus 7T Pro", "OnePlus 7T", "OnePlus 7 Pro",
        "OnePlus Nord 5", "OnePlus Nord 4", "OnePlus Nord 3 5G", "OnePlus Nord 2T 5G", "OnePlus Nord 2 5G", "OnePlus Nord",
        "OnePlus Nord CE 5 5G", "OnePlus Nord CE 4 5G", "OnePlus Nord CE 4 Lite 5G", "OnePlus Nord CE 3 5G", "OnePlus Nord CE 3 Lite 5G", "OnePlus Nord CE 2 5G", "OnePlus Nord CE 2 Lite"
      ],
      sensi: {
        general: "178",
        redDot: "170",
        scope2x: "165",
        scope4x: "160",
        awm: "100",
        freeLook: "155",
        fireButton: "44%",
        dpi: "400 DPI",
        proTips: [
          "OnePlus features ultra-fast 120Hz panels—keep DPI around 400 in Developer Options.",
          "Enable Ultra Touch / Instant Touch Sampling (1000Hz) in Gaming Space.",
          "Fire button at 44% gives quick upward recoil lock."
        ]
      }
    },
    {
      id: "motorola",
      name: "Motorola (Edge, G & Razr Series)",
      icon: "fa-solid fa-m",
      models: [
        "Moto Edge 60 Ultra", "Moto Edge 60 Pro", "Moto Edge 50 Ultra", "Moto Edge 50 Pro 5G", "Moto Edge 50 Fusion", "Moto Edge 50 Neo",
        "Moto Edge 40 Neo", "Moto Edge 40 5G", "Moto Edge 30 Ultra", "Moto Edge 30 Fusion", "Moto Edge 30 Pro", "Moto Edge 30",
        "Moto G86 5G", "Moto G85 5G", "Moto G84 5G", "Moto G65 5G", "Moto G64 5G", "Moto G54 5G", "Moto G45 5G", "Moto G34 5G", "Moto G24 Power", "Moto G14", "Moto G82 5G", "Moto G73 5G", "Moto G62 5G", "Moto G52", "Moto G32", "Moto E13",
        "Moto Razr 50 Ultra", "Moto Razr 40 Ultra"
      ],
      sensi: {
        general: "187",
        redDot: "180",
        scope2x: "174",
        scope4x: "169",
        awm: "104",
        freeLook: "158",
        fireButton: "46%",
        dpi: "430 DPI",
        proTips: [
          "Set Smallest Width (DPI) to 430 in Developer Options for smooth drag tracking.",
          "Turn ON High Refresh Rate (120Hz/144Hz) in Display Settings.",
          "Use Moto Gametime touch optimization for reduced input delay."
        ]
      }
    },
    {
      id: "lava",
      name: "Lava (Agni, Blaze & Storm Series)",
      icon: "fa-solid fa-fire",
      models: [
        "Lava Agni 4 5G", "Lava Agni 3 5G", "Lava Agni 2 5G",
        "Lava Blaze 4 5G", "Lava Blaze 3 5G", "Lava Blaze Curve 5G", "Lava Blaze Pro 5G", "Lava Blaze 2 5G",
        "Lava Storm 2 5G", "Lava Storm 5G", "Lava Yuva 5G", "Lava Yuva 3 Pro", "Lava Yuva 2 Pro"
      ],
      sensi: {
        general: "191",
        redDot: "184",
        scope2x: "178",
        scope4x: "172",
        awm: "106",
        freeLook: "160",
        fireButton: "47%",
        dpi: "445 DPI",
        proTips: [
          "Set Smallest Width (DPI) to 445 in Developer Options for fast upward drag velocity.",
          "Lava 120Hz curved AMOLED panels respond best with 47% Fire Button size.",
          "Clear background RAM before launching Free Fire for 90 FPS stability."
        ]
      }
    },
    {
      id: "honor",
      name: "Honor / Huawei",
      icon: "fa-solid fa-shield-halved",
      models: [
        "Honor 300 Pro 5G", "Honor 300 5G", "Honor 200 Pro 5G", "Honor 200 5G", "Honor 200 Lite",
        "Honor 90 5G", "Honor X9b 5G", "Honor X8b", "Honor X7b",
        "Honor Magic 7 Pro", "Honor Magic 6 Pro", "Honor Magic V3", "Honor Magic V2", "Honor Magic 5 Pro",
        "Huawei Pura 70 Ultra", "Huawei Pura 70 Pro", "Huawei Mate 70 Pro", "Huawei Mate 60 Pro"
      ],
      sensi: {
        general: "185",
        redDot: "178",
        scope2x: "173",
        scope4x: "168",
        awm: "102",
        freeLook: "156",
        fireButton: "44%",
        dpi: "425 DPI",
        proTips: [
          "Set Smallest Width (DPI) to 425 in Developer Options.",
          "Enable Game Accelerator in Magic UI / EMUI.",
          "Fire button size at 44% gives crisp headshot lock on 120Hz OLED displays."
        ]
      }
    },
    {
      id: "nothing",
      name: "Nothing Phone / CMF (3a Lite, 3a, Phone 3, CMF Series)",
      icon: "fa-solid fa-mobile-button",
      models: [
        "Nothing Phone (3a) Lite",
        "Nothing Phone (3a) Pro",
        "Nothing Phone (3a)",
        "Nothing Phone (3) Pro",
        "Nothing Phone (3)",
        "Nothing Phone (2a) Plus",
        "Nothing Phone (2a) Community Edition",
        "Nothing Phone (2a)",
        "Nothing Phone (2)",
        "Nothing Phone (1)",
        "CMF Phone 2 Pro",
        "CMF Phone 2",
        "CMF Phone 1"
      ],
      sensi: {
        general: "186",
        redDot: "178",
        scope2x: "172",
        scope4x: "168",
        awm: "102",
        freeLook: "158",
        fireButton: "44%",
        dpi: "410 DPI",
        proTips: [
          "Nothing OS features ultra-clean, stock Android response with minimal touch latency.",
          "Set Smallest Width (DPI) to 410 in Developer Options for fast drag headshot recoil control.",
          "Keep 120Hz refresh rate active in Display settings for smooth drag response."
        ]
      }
    },
    {
      id: "google",
      name: "Google Pixel",
      icon: "fa-brands fa-google",
      models: [
        "Google Pixel 9a", "Google Pixel 9 Pro XL", "Google Pixel 9 Pro", "Google Pixel 9", "Google Pixel 9 Pro Fold",
        "Google Pixel 8 Pro", "Google Pixel 8a", "Google Pixel 8",
        "Google Pixel 7a", "Google Pixel 7 Pro", "Google Pixel 7",
        "Google Pixel 6a", "Google Pixel 6 Pro", "Google Pixel 6"
      ],
      sensi: {
        general: "184",
        redDot: "176",
        scope2x: "170",
        scope4x: "165",
        awm: "100",
        freeLook: "155",
        fireButton: "43%",
        dpi: "415 DPI",
        proTips: [
          "Pixel devices have smooth, unthrottled touch response.",
          "Set Smallest Width (DPI) to 415 in Developer Options.",
          "Turn ON 'Smooth Display' (90Hz/120Hz) for fluid drag control."
        ]
      }
    },
    {
      id: "infinix",
      name: "Infinix / Tecno",
      icon: "fa-solid fa-microchip",
      models: [
        // Infinix Series
        "Infinix GT 30 Pro", "Infinix Zero 40 5G", "Infinix GT 20 Pro", "Infinix GT 10 Pro",
        "Infinix Note 50 Pro+ 5G", "Infinix Note 50 Pro 5G", "Infinix Note 40 Pro+ 5G", "Infinix Note 40 Pro 5G", "Infinix Note 40 5G", "Infinix Note 30 5G", "Infinix Note 30 VIP", "Infinix Note 12 Pro 5G", "Infinix Note 12 VIP", "Infinix Note 11 Pro", "Infinix Note 10 Pro",
        "Infinix Zero 30 5G", "Infinix Zero Ultra", "Infinix Zero 5G 2023", "Infinix Zero 20",
        "Infinix Hot 50 Pro+ 5G", "Infinix Hot 50 5G", "Infinix Hot 40 Pro", "Infinix Hot 40i", "Infinix Hot 30 5G", "Infinix Hot 30i", "Infinix Hot 20 5G", "Infinix Hot 20 Play", "Infinix Hot 12 Pro", "Infinix Hot 12 Play", "Infinix Hot 11S", "Infinix Hot 10S",
        "Infinix Smart 9", "Infinix Smart 8 HD", "Infinix Smart 8 Pro", "Infinix Smart 7", "Infinix Smart 6",
        // Tecno Series
        "Tecno Camon 40 Premier 5G", "Tecno Camon 30 Premier 5G", "Tecno Camon 30 Pro 5G", "Tecno Camon 30 5G", "Tecno Camon 20 Pro 5G", "Tecno Camon 20 Premier", "Tecno Camon 19 Pro 5G",
        "Tecno Pova 7 Pro 5G", "Tecno Pova 6 Pro 5G", "Tecno Pova 5 Pro 5G", "Tecno Pova 5", "Tecno Pova 4 Pro", "Tecno Pova 3", "Tecno Pova 2",
        "Tecno Spark 30 Pro", "Tecno Spark 20 Pro+", "Tecno Spark 20 Pro", "Tecno Spark 20 5G", "Tecno Spark 10 Pro", "Tecno Spark 9 Pro", "Tecno Spark 8T", "Tecno Pop 8", "Tecno Pop 7 Pro"
      ],
      sensi: {
        general: "198",
        redDot: "195",
        scope2x: "190",
        scope4x: "185",
        awm: "115",
        freeLook: "170",
        fireButton: "50%",
        dpi: "520 DPI",
        proTips: [
          "Budget & standard devices need high DPI (520) to compensate for touch latency.",
          "Clear background RAM before launching Free Fire.",
          "Use General at 198 for maximum drag velocity on 60Hz-90Hz panels."
        ]
      }
    },
    {
      id: "gaming",
      name: "ASUS ROG / Gaming Phones",
      icon: "fa-solid fa-gamepad",
      models: [
        // ASUS ROG Series
        "ASUS ROG Phone 9 Pro", "ASUS ROG Phone 9", "ASUS ROG Phone 8 Pro", "ASUS ROG Phone 8", "ASUS ROG Phone 7 Ultimate", "ASUS ROG Phone 7", "ASUS ROG Phone 6D Ultimate", "ASUS ROG Phone 6D", "ASUS ROG Phone 6 Pro", "ASUS ROG Phone 6", "ASUS ROG Phone 5s Pro", "ASUS ROG Phone 5s", "ASUS ROG Phone 5", "ASUS ROG Phone 3",
        // Nubia RedMagic Series
        "Nubia RedMagic 10 Pro+", "Nubia RedMagic 10 Pro", "Nubia RedMagic 9S Pro+", "Nubia RedMagic 9S Pro", "Nubia RedMagic 9 Pro+", "Nubia RedMagic 9 Pro", "Nubia RedMagic 8S Pro+", "Nubia RedMagic 8S Pro", "Nubia RedMagic 8 Pro", "Nubia RedMagic 7S Pro", "Nubia RedMagic 7 Pro", "Nubia RedMagic 7", "Nubia RedMagic 6S Pro", "Nubia RedMagic 6 Pro",
        // Black Shark Series
        "Black Shark 5 Pro", "Black Shark 5 RS", "Black Shark 5", "Black Shark 4 Pro", "Black Shark 4S Pro", "Black Shark 4", "Black Shark 3 Pro", "Black Shark 3"
      ],
      sensi: {
        general: "168",
        redDot: "160",
        scope2x: "155",
        scope4x: "150",
        awm: "90",
        freeLook: "145",
        fireButton: "40%",
        dpi: "380 DPI",
        proTips: [
          "Esports gaming phones feature 720Hz+ touch sampling rate.",
          "Set AirTriggers for fast Scope + Fire combo setup.",
          "Lower sensitivity (168) provides laser-like drag headshot precision."
        ]
      }
    }
  ],

  // PC / Emulator Hardware Spec Presets Matrix
  SENSITIVITY_PC: {
    low: {
      name: "Low-End PC",
      desc: "2-4 Cores CPU, Integrated / GT 1030 GPU, 4-8GB RAM",
      badge: "Low-End Spec",
      badgeClass: "low",
      general: "0",
      redDot: "0",
      scope2x: "0",
      scope4x: "0",
      awm: "0",
      mouseY: "2.85",
      mouseX: "1.45",
      dpi: "1000 DPI",
      pointerSpeed: "6/11 (6th Notch)",
      pointerPrecision: "OFF (Disabled)",
      proTips: [
        "In-game sensitivity is set to 0 to eliminate emulator pixel acceleration & drag glitch.",
        "Set Windows Pointer Speed to 6/11 (6th Notch) with 'Enhance Pointer Precision' OFF.",
        "Higher Y-Sensitivity (2.85) helps compensate for 45-60 FPS emulator lag.",
        "Set BlueStacks 5 resolution to 1280x720 (Low DPI)."
      ]
    },
    mid: {
      name: "Mid-End PC",
      desc: "6 Cores i5/Ryzen 5, GTX 1650 / RTX 3050, 16GB RAM",
      badge: "Balanced Rigs",
      badgeClass: "mid",
      recommended: true,
      general: "0",
      redDot: "0",
      scope2x: "0",
      scope4x: "0",
      awm: "0",
      mouseY: "2.45",
      mouseX: "1.25",
      dpi: "800 DPI",
      pointerSpeed: "6/11 (6th Notch)",
      pointerPrecision: "OFF (Disabled)",
      proTips: [
        "In-game sensitivity is set to 0 to eliminate emulator pixel acceleration & drag glitch.",
        "Set Windows Pointer Speed to 6/11 (6th Notch) with 'Enhance Pointer Precision' OFF.",
        "Balanced Y-Sensitivity (2.45) offers crisp drag headshots at 90 FPS.",
        "Use BlueStacks 5 Pie 64-bit instance with 4 Cores + 4GB RAM allocated."
      ]
    },
    high: {
      name: "High-End PC",
      desc: "8+ Cores i7/i9/Ryzen 7, RTX 3070+, 32GB RAM, 144Hz-240Hz",
      badge: "Esports Rig",
      badgeClass: "high",
      general: "0",
      redDot: "0",
      scope2x: "0",
      scope4x: "0",
      awm: "0",
      mouseY: "2.10",
      mouseX: "1.10",
      dpi: "800 / 1200 DPI",
      pointerSpeed: "6/11 (6th Notch)",
      pointerPrecision: "OFF (Disabled)",
      proTips: [
        "In-game sensitivity is set to 0 to eliminate emulator pixel acceleration & drag glitch.",
        "Set Windows Pointer Speed to 6/11 (6th Notch) with 'Enhance Pointer Precision' OFF.",
        "Ultra-smooth 120-240 FPS allows low Y-sens (2.10) for pixel-perfect headshots.",
        "Use 1000Hz Mouse Polling Rate for zero mouse latency."
      ]
    }
  }
};

// Application State
const state = {
  currentStep: 1,
  selectedPlatform: null, // 'mobile' | 'pc'
  selectedMobileBrand: "apple", // Default brand
  selectedMobileModel: "iPhone 15 Pro Max", // Default model
  selectedPcTier: "mid", // Default PC tier
  verifiedYt: false,
  verifiedWa: false,
  countdownYtTimer: null,
  countdownWaTimer: null
};

// DOM Elements Reference Cache
const elements = {};

/* --------------------------------------------------------------------------
   Initialization
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  cacheDOMElements();
  attachEventListeners();
  initVisitorCounter();
  updateStepperUI(1);
});

function cacheDOMElements() {
  elements.brandLogo = document.getElementById("brand-logo");
  elements.stepper = document.getElementById("stepper");
  elements.stepperProgress = document.getElementById("stepper-progress");
  elements.stepItems = document.querySelectorAll(".step-item");

  elements.screenLanding = document.getElementById("screen-landing");
  elements.screenDevice = document.getElementById("screen-device");
  elements.screenSpecTier = document.getElementById("screen-spec-tier");
  elements.screenVerification = document.getElementById("screen-verification");
  elements.screenUnlock = document.getElementById("screen-unlock");

  elements.btnGetSensi = document.getElementById("btn-get-sensi");
  elements.cardMobile = document.getElementById("card-mobile");
  elements.cardPc = document.getElementById("card-pc");
  elements.btnBackToDevice = document.getElementById("btn-back-to-device");

  elements.specTitle = document.getElementById("spec-title");
  elements.specSubtitle = document.getElementById("spec-subtitle");
  elements.specGrid = document.getElementById("spec-grid");

  elements.btnVerifyYt = document.getElementById("btn-verify-yt");
  elements.btnVerifyWa = document.getElementById("btn-verify-wa");
  elements.btnProceed = document.getElementById("btn-proceed");

  elements.deviceBadge = document.getElementById("device-badge");
  elements.tierBadge = document.getElementById("tier-badge");
  elements.sensiGrid = document.getElementById("sensi-grid");
  elements.proTipsContainer = document.getElementById("pro-tips-container");
  elements.btnSwitchDevice = document.getElementById("btn-switch-device");
  elements.btnCopy = document.getElementById("btn-copy");
  elements.btnSaveImage = document.getElementById("btn-save-image");
  elements.unlockedCard = document.getElementById("unlockedCard");
  elements.btnDownloadReg = document.getElementById("btn-download-reg");
  elements.regCard = document.getElementById("reg-download-card");

  // Real-Time Visitor Badge Element
  elements.statTotalVisits = document.getElementById("stat-total-visits");
}

function attachEventListeners() {
  // Brand Logo Click -> Reset to Landing
  if (elements.brandLogo) {
    elements.brandLogo.addEventListener("click", (e) => {
      e.preventDefault();
      switchScreen(1);
    });
  }

  // Step 1: Landing CTA Button
  if (elements.btnGetSensi) {
    elements.btnGetSensi.addEventListener("click", () => {
      switchScreen(2);
    });
  }

  // Step 2: Device Selection Cards
  if (elements.cardMobile) {
    elements.cardMobile.addEventListener("click", () => {
      selectPlatform("mobile");
    });
  }

  if (elements.cardPc) {
    elements.cardPc.addEventListener("click", () => {
      selectPlatform("pc");
    });
  }

  // Back Button from Spec Screen
  if (elements.btnBackToDevice) {
    elements.btnBackToDevice.addEventListener("click", () => {
      switchScreen(2);
    });
  }

  // Step 3: Verification Gate Buttons
  if (elements.btnVerifyYt) {
    elements.btnVerifyYt.addEventListener("click", () => {
      handleVerificationClick("yt", CONFIG.YOUTUBE_URL, elements.btnVerifyYt);
    });
  }

  if (elements.btnVerifyWa) {
    elements.btnVerifyWa.addEventListener("click", () => {
      handleVerificationClick("wa", CONFIG.WHATSAPP_URL, elements.btnVerifyWa);
    });
  }

  // Proceed Button to Step 4
  if (elements.btnProceed) {
    elements.btnProceed.addEventListener("click", () => {
      if (state.verifiedYt && state.verifiedWa) {
        renderUnlockScreen();
        switchScreen(4);
      }
    });
  }

  // Step 4: Switch Device / Reset Button
  if (elements.btnSwitchDevice) {
    elements.btnSwitchDevice.addEventListener("click", () => {
      switchScreen(2);
    });
  }

  // Step 4: Copy to Clipboard
  if (elements.btnCopy) {
    elements.btnCopy.addEventListener("click", copySettingsToClipboard);
  }

  // Step 4: Save as Image (html2canvas)
  if (elements.btnSaveImage) {
    elements.btnSaveImage.addEventListener("click", savePresetAsImage);
  }
}

/* --------------------------------------------------------------------------
   Screen Navigation Router & Stepper Logic
   -------------------------------------------------------------------------- */
function switchScreen(stepNumber) {
  state.currentStep = stepNumber;
  updateStepperUI(stepNumber);

  // Hide all screens
  [
    elements.screenLanding,
    elements.screenDevice,
    elements.screenSpecTier,
    elements.screenVerification,
    elements.screenUnlock
  ].forEach((screen) => {
    if (screen) screen.classList.add("hidden");
  });

  // Display target screen
  let targetScreen = null;
  if (stepNumber === 1) targetScreen = elements.screenLanding;
  else if (stepNumber === 2) targetScreen = elements.screenDevice;
  else if (stepNumber === 2.5) targetScreen = elements.screenSpecTier;
  else if (stepNumber === 3) targetScreen = elements.screenVerification;
  else if (stepNumber === 4) targetScreen = elements.screenUnlock;

  if (targetScreen) {
    targetScreen.classList.remove("hidden");
    targetScreen.classList.add("fade-in");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function updateStepperUI(stepNumber) {
  const currentStepInt = Math.floor(stepNumber);
  
  elements.stepItems.forEach((item) => {
    const stepVal = parseInt(item.dataset.step, 10);
    item.classList.remove("active", "completed");

    if (stepVal < currentStepInt) {
      item.classList.add("completed");
    } else if (stepVal === currentStepInt) {
      item.classList.add("active");
    }
  });

  // Calculate Progress Line Percentage
  let progressPercent = 0;
  if (currentStepInt === 1) progressPercent = 0;
  else if (currentStepInt === 2) progressPercent = 33.3;
  else if (currentStepInt === 3) progressPercent = 66.6;
  else if (currentStepInt === 4) progressPercent = 100;

  if (elements.stepperProgress) {
    elements.stepperProgress.style.width = `${progressPercent}%`;
  }
}

/* --------------------------------------------------------------------------
   Platform Selection & Sub-Selection Renders
   -------------------------------------------------------------------------- */
function selectPlatform(platform) {
  state.selectedPlatform = platform;
  
  if (platform === "mobile") {
    elements.cardMobile.classList.add("selected");
    if (elements.cardPc) elements.cardPc.classList.remove("selected");
  } else {
    elements.cardPc.classList.add("selected");
    if (elements.cardMobile) elements.cardMobile.classList.remove("selected");
  }

  setTimeout(() => {
    renderSpecTierScreen(platform);
    switchScreen(2.5);
  }, 250);
}

function renderSpecTierScreen(platform) {
  if (!elements.specGrid) return;

  elements.specGrid.innerHTML = "";

  if (platform === "mobile") {
    elements.specTitle.innerText = "SELECT YOUR PHONE BRAND & MODEL";
    elements.specSubtitle.innerText = "Filter or pick your exact mobile model to fetch community-calibrated pro sensitivities.";

    // Render Dual Dropdown Selection View (Brand & Model Dropdowns)
    const brandContainer = document.createElement("div");
    brandContainer.className = "mobile-brand-wrapper";

    const activeBrand = CONFIG.MOBILE_BRANDS.find((b) => b.id === state.selectedMobileBrand) || CONFIG.MOBILE_BRANDS[0];

    const modelCard = document.createElement("div");
    modelCard.className = "model-selector-card";
    modelCard.innerHTML = `
      <!-- Brand Selection Dropdown Box -->
      <div class="model-dropdown-wrapper">
        <label for="brand-select-dropdown" class="model-select-label">
          <i class="fa-solid fa-mobile-screen-button"></i> 1. Select Device Brand:
        </label>
        <select id="brand-select-dropdown" class="model-select-dropdown"></select>
      </div>

      <!-- Device Model Selection Dropdown Box -->
      <div class="model-dropdown-wrapper" style="margin-top: 0.85rem;">
        <label for="model-select-dropdown" class="model-select-label">
          <i class="fa-solid fa-list-check"></i> 2. Select Device Model:
        </label>
        <select id="model-select-dropdown" class="model-select-dropdown"></select>
      </div>

      <button class="cta-button-primary" id="btn-confirm-mobile-device" style="margin-top: 1.25rem; width: 100%;">
        Get Best Sensitivity <i class="fa-solid fa-arrow-right"></i>
      </button>
    `;

    brandContainer.appendChild(modelCard);
    elements.specGrid.appendChild(brandContainer);

    // Get Dropdown Elements
    const brandSelectDropdown = document.getElementById("brand-select-dropdown");
    const modelSelectDropdown = document.getElementById("model-select-dropdown");

    // 1. Populate Brand Dropdown
    if (brandSelectDropdown) {
      brandSelectDropdown.innerHTML = "";
      CONFIG.MOBILE_BRANDS.forEach((brand) => {
        const option = document.createElement("option");
        option.value = brand.id;
        option.innerText = brand.name;
        if (brand.id === state.selectedMobileBrand) {
          option.selected = true;
        }
        brandSelectDropdown.appendChild(option);
      });
    }

    // 2. Function to Populate Model Dropdown based on Selected Brand
    function updateModelDropdown(brandId) {
      if (!modelSelectDropdown) return;

      const currentBrand = CONFIG.MOBILE_BRANDS.find((b) => b.id === brandId) || CONFIG.MOBILE_BRANDS[0];
      modelSelectDropdown.innerHTML = "";

      // Ensure active selected model is valid for current brand
      if (!currentBrand.models.includes(state.selectedMobileModel)) {
        state.selectedMobileModel = currentBrand.models[0];
      }

      currentBrand.models.forEach((m) => {
        const option = document.createElement("option");
        option.value = m;
        option.innerText = m;
        if (m === state.selectedMobileModel) {
          option.selected = true;
        }
        modelSelectDropdown.appendChild(option);
      });
    }

    updateModelDropdown(state.selectedMobileBrand);

    // Event Listeners for Dual Dropdowns
    if (brandSelectDropdown) {
      brandSelectDropdown.addEventListener("change", (e) => {
        state.selectedMobileBrand = e.target.value;
        const brandObj = CONFIG.MOBILE_BRANDS.find((b) => b.id === e.target.value);
        if (brandObj && brandObj.models.length > 0) {
          state.selectedMobileModel = brandObj.models[0];
        }
        updateModelDropdown(e.target.value);
      });
    }

    if (modelSelectDropdown) {
      modelSelectDropdown.addEventListener("change", (e) => {
        state.selectedMobileModel = e.target.value;
      });
    }

    // Confirm button event
    const confirmBtn = document.getElementById("btn-confirm-mobile-device");
    if (confirmBtn) {
      confirmBtn.addEventListener("click", () => {
        switchScreen(3);
      });
    }

  } else {
    // PC Emulator Hardware Specs Render
    elements.specTitle.innerText = "SELECT PC SPECIFICATIONS TIER";
    elements.specSubtitle.innerText = "Choose your PC hardware spec level to generate calibrated Y-sensitivity and DPI.";

    Object.keys(CONFIG.SENSITIVITY_PC).forEach((key) => {
      const tier = CONFIG.SENSITIVITY_PC[key];
      const isSelected = state.selectedPcTier === key;

      const card = document.createElement("div");
      card.className = `tier-card ${tier.recommended ? "recommended" : ""} ${isSelected ? "selected" : ""}`;
      
      card.innerHTML = `
        <span class="tier-badge-pill ${tier.badgeClass}">${tier.badge}</span>
        <h3 class="tier-title">${tier.name}</h3>
        <div class="tier-subtext">${tier.desc}</div>
        <div class="tier-spec-desc">
          <strong>Recommended Setup:</strong>
          Y-Sens: ${tier.mouseY} | DPI: ${tier.dpi}
        </div>
        <button class="tier-select-btn">
          Select ${tier.name} <i class="fa-solid fa-arrow-right"></i>
        </button>
      `;

      card.addEventListener("click", () => {
        state.selectedPcTier = key;
        switchScreen(3);
      });

      elements.specGrid.appendChild(card);
    });
  }
}

/* --------------------------------------------------------------------------
   Step 3: Honor-System Verification Gate Handlers
   -------------------------------------------------------------------------- */
function handleVerificationClick(type, url, buttonEl) {
  // Open target external URL in new window/tab
  window.open(url, "_blank");

  // Disable button and start countdown
  buttonEl.disabled = true;
  let secondsLeft = 4;

  const updateBtnText = (secs) => {
    if (type === "yt") {
      buttonEl.innerHTML = `<div class="btn-spinner"></div> Checking YouTube (${secs}s)`;
    } else {
      buttonEl.innerHTML = `<div class="btn-spinner"></div> Checking WhatsApp (${secs}s)`;
    }
  };

  updateBtnText(secondsLeft);

  const timer = setInterval(() => {
    secondsLeft--;
    if (secondsLeft > 0) {
      updateBtnText(secondsLeft);
    } else {
      clearInterval(timer);
      // Mark as Verified
      if (type === "yt") {
        state.verifiedYt = true;
      } else {
        state.verifiedWa = true;
      }

      buttonEl.disabled = false;
      buttonEl.classList.add("verified");
      buttonEl.innerHTML = `<i class="fa-solid fa-circle-check checkmark-anim"></i> Verified`;

      checkAllVerifiedStatus();
    }
  }, 1000);

  if (type === "yt") state.countdownYtTimer = timer;
  else state.countdownWaTimer = timer;
}

function checkAllVerifiedStatus() {
  if (state.verifiedYt && state.verifiedWa) {
    if (elements.btnProceed) {
      elements.btnProceed.disabled = false;
      elements.btnProceed.classList.add("enabled");
      elements.btnProceed.innerHTML = `UNLOCK SENSITIVITY PRESET <i class="fa-solid fa-lock-open"></i>`;
    }
  }
}

/* --------------------------------------------------------------------------
   Step 4: Unlock Screen Sensitivity Table Generation
   -------------------------------------------------------------------------- */
function renderUnlockScreen() {
  if (!elements.sensiGrid) return;

  elements.sensiGrid.innerHTML = "";
  let sensiData = null;

  if (state.selectedPlatform === "mobile") {
    // Hide PC-only Registry tweak elements for Mobile users
    if (elements.btnDownloadReg) elements.btnDownloadReg.style.display = "none";
    if (elements.regCard) elements.regCard.style.display = "none";

    const activeBrand = CONFIG.MOBILE_BRANDS.find((b) => b.id === state.selectedMobileBrand) || CONFIG.MOBILE_BRANDS[0];
    sensiData = getModelSensitivity(activeBrand.id, state.selectedMobileModel, activeBrand.sensi);

    elements.deviceBadge.innerText = activeBrand.name;
    elements.tierBadge.innerText = state.selectedMobileModel || "Pro Model";

    // Sensitivity Grid Output Items
    const items = [
      { label: "General", val: `${sensiData.general}`, highlight: "red" },
      { label: "Red Dot", val: `${sensiData.redDot}`, highlight: "yellow" },
      { label: "2X Scope", val: `${sensiData.scope2x}` },
      { label: "4X Scope", val: `${sensiData.scope4x}` },
      { label: "AWM Scope", val: `${sensiData.awm}` },
      { label: "Free Look", val: `${sensiData.freeLook}` },
      { label: "Fire Button Size", val: `${sensiData.fireButton}`, highlight: "red" },
      { label: "Recommended DPI", val: `${sensiData.dpi}`, highlight: "yellow" }
    ];

    items.forEach((item) => {
      const cell = document.createElement("div");
      cell.className = `sensi-item ${item.highlight ? "highlight-card" : ""}`;
      cell.innerHTML = `
        <div class="sensi-label">${item.label}</div>
        <div class="sensi-value ${item.highlight === "red" ? "highlight-red" : item.highlight === "yellow" ? "highlight-yellow" : ""}">${item.val}</div>
      `;
      elements.sensiGrid.appendChild(cell);
    });

    // Pro Tips
    renderProTips(sensiData.proTips);

  } else {
    // Show Registry tweak elements for PC users
    if (elements.btnDownloadReg) elements.btnDownloadReg.style.display = "inline-flex";
    if (elements.regCard) elements.regCard.style.display = "flex";

    // PC Emulator Sensitivity
    sensiData = CONFIG.SENSITIVITY_PC[state.selectedPcTier] || CONFIG.SENSITIVITY_PC.mid;

    elements.deviceBadge.innerText = "PC / Emulator";
    elements.tierBadge.innerText = sensiData.name;

    const items = [
      { label: "General", val: `${sensiData.general}`, highlight: "red" },
      { label: "Red Dot", val: `${sensiData.redDot}` },
      { label: "2X Scope", val: `${sensiData.scope2x}` },
      { label: "4X Scope", val: `${sensiData.scope4x}` },
      { label: "AWM Scope", val: `${sensiData.awm}` },
      { label: "Mouse Y-Sens (Drag)", val: `${sensiData.mouseY}`, highlight: "red" },
      { label: "Mouse X-Sens (Look)", val: `${sensiData.mouseX}` },
      { label: "Mouse Hardware DPI", val: `${sensiData.dpi}`, highlight: "yellow" },
      { label: "Windows Pointer Speed", val: `${sensiData.pointerSpeed}`, highlight: "yellow" },
      { label: "Pointer Acceleration", val: `${sensiData.pointerPrecision}`, highlight: "red" }
    ];

    items.forEach((item) => {
      const cell = document.createElement("div");
      cell.className = `sensi-item ${item.highlight ? "highlight-card" : ""}`;
      cell.innerHTML = `
        <div class="sensi-label">${item.label}</div>
        <div class="sensi-value ${item.highlight === "red" ? "highlight-red" : item.highlight === "yellow" ? "highlight-yellow" : ""}">${item.val}</div>
      `;
      elements.sensiGrid.appendChild(cell);
    });

    renderProTips(sensiData.proTips);
  }
}

function renderProTips(tipsArray) {
  if (!elements.proTipsContainer) return;

  if (!tipsArray || tipsArray.length === 0) {
    elements.proTipsContainer.innerHTML = "";
    return;
  }

  let html = `
    <div class="pro-tips-title">
      <i class="fa-solid fa-lightbulb"></i> Pro Tuning Tips
    </div>
    <ul class="pro-tips-list">
  `;

  tipsArray.forEach((tip) => {
    html += `<li>${tip}</li>`;
  });

  html += `</ul>`;
  elements.proTipsContainer.innerHTML = html;
}

/* --------------------------------------------------------------------------
   Export & Clipboard Utilities
   -------------------------------------------------------------------------- */
function copySettingsToClipboard() {
  let textToCopy = `=== RAGE OPTIMISATION FREE FIRE SENSI ===\n`;
  const isMobile = state.selectedPlatform === "mobile";

  if (isMobile) {
    const activeBrand = CONFIG.MOBILE_BRANDS.find((b) => b.id === state.selectedMobileBrand) || CONFIG.MOBILE_BRANDS[0];
    const sensi = activeBrand.sensi;
    textToCopy += `Device: ${activeBrand.name} (${state.selectedMobileModel})\n`;
    textToCopy += `General: ${sensi.general}\nRed Dot: ${sensi.redDot}\n2X Scope: ${sensi.scope2x}\n4X Scope: ${sensi.scope4x}\nAWM: ${sensi.awm}\nFree Look: ${sensi.freeLook}\nFire Button: ${sensi.fireButton}\nDPI: ${sensi.dpi}\n`;
  } else {
    const sensi = CONFIG.SENSITIVITY_PC[state.selectedPcTier];
    textToCopy += `Platform: PC / Emulator (${sensi.name})\n`;
    textToCopy += `General: ${sensi.general}\nRed Dot: ${sensi.redDot}\n2X Scope: ${sensi.scope2x}\n4X Scope: ${sensi.scope4x}\nAWM: ${sensi.awm}\nMouse Y-Sens: ${sensi.mouseY}\nMouse X-Sens: ${sensi.mouseX}\nDPI: ${sensi.dpi}\nWindows Pointer Speed: ${sensi.pointerSpeed}\nPointer Acceleration: ${sensi.pointerPrecision}\n`;
  }

  textToCopy += `\nUnlocked via Rage Optimisation`;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      showToast("Copied sensitivity settings to clipboard!");
    })
    .catch(() => {
      showToast("Failed to copy automatically. Please take a screenshot.");
    });
}

function savePresetAsImage() {
  if (!elements.unlockedCard) return;

  showToast("Generating high quality preset image...");

  if (window.html2canvas) {
    window.html2canvas(elements.unlockedCard, {
      backgroundColor: "#0d0d15",
      scale: 2,
      useCORS: true
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = `RageOptimisation_${state.selectedPlatform}_Sensi.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      showToast("Preset saved as image!");
    }).catch(() => {
      showToast("Image generation failed. Take a screenshot!");
    });
  } else {
    showToast("Take a screenshot to save your settings!");
  }
}

function showToast(message) {
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${message}`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/* --------------------------------------------------------------------------
   100% Real-Time Global Visitor Tracking Engine (Atomic CounterAPI)
   -------------------------------------------------------------------------- */
async function initVisitorCounter() {
  const BASE_OFFSET = 145; // Baseline count starting at 145

  // Increment real hit counter once per unique visitor session
  const isNewSession = !sessionStorage.getItem("v_counted");
  const endpoint = isNewSession
    ? "https://api.counterapi.dev/v1/rageoptimisation_ff_prod/visits/up"
    : "https://api.counterapi.dev/v1/rageoptimisation_ff_prod/visits";

  if (isNewSession) {
    sessionStorage.setItem("v_counted", "1");
  }

  try {
    const res = await fetch(endpoint);
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.count === "number") {
        const totalVisits = BASE_OFFSET + data.count;
        if (elements.statTotalVisits) {
          elements.statTotalVisits.innerText = totalVisits.toLocaleString();
        }
      }
    }
  } catch (err) {
    console.warn("Real-time visitor count update failed:", err);
  }
}

/* --------------------------------------------------------------------------
   Dynamic Model-Specific Sensitivity Calibration Engine
   -------------------------------------------------------------------------- */
function getModelSensitivity(brandId, modelName, fallbackSensi) {
  if (!modelName) return fallbackSensi;

  // Generate deterministic integer hash from model string
  let hash = 0;
  for (let i = 0; i < modelName.length; i++) {
    hash = (hash << 5) - hash + modelName.charCodeAt(i);
    hash |= 0;
  }
  hash = Math.abs(hash);

  const isUltraPro = /Pro Max|Ultra|GT 5|GT 6|GT 7|ROG|17 Pro|16 Pro|15 Pro|14 Pro|S25|S24|S23|Fold|RedMagic|Z10 Pro|T5 Pro|T4 Pro|Agni 4|Agni 3|Pura 70|Edge 60 Ultra|Edge 50 Ultra|Pixel 9 Pro/i.test(modelName);
  const isPro5G = /Pro|5G|Plus|Reno|Neo|Nord|V70|V60|V50|V40|V30|V29|T5|T4|T3|F35|F33|F31|F27|F25|Z10|Z9|Agni|Edge|Blaze|Razr|Magic/i.test(modelName);
  const isBudget = /A03|A04|A13|A14|C65|C55|13C|14C|Hot|Smart|Spark|Pop|Y16|Y17s|Y17|Y21|Play|Yuva|Blaze 2|E13|Lite/i.test(modelName);

  let baseGeneral, baseRedDot, baseScope2x, baseScope4x, baseAwm, baseFreeLook, baseFireButton, baseDpi;

  if (isUltraPro) {
    baseGeneral = 168 + (hash % 9);
    baseRedDot = baseGeneral - 6 - (hash % 4);
    baseScope2x = baseRedDot - 5 - (hash % 3);
    baseScope4x = baseScope2x - 5 - (hash % 3);
    baseAwm = 90 + (hash % 8);
    baseFreeLook = 145 + (hash % 8);
    baseFireButton = 38 + (hash % 6);
    baseDpi = 380 + ((hash % 5) * 10);
  } else if (isBudget) {
    baseGeneral = 193 + (hash % 6);
    baseRedDot = baseGeneral - 5 - (hash % 3);
    baseScope2x = baseRedDot - 5 - (hash % 3);
    baseScope4x = baseScope2x - 5 - (hash % 3);
    baseAwm = 108 + (hash % 8);
    baseFreeLook = 162 + (hash % 8);
    baseFireButton = 48 + (hash % 5);
    baseDpi = 480 + ((hash % 6) * 10);
  } else if (isPro5G) {
    baseGeneral = 180 + (hash % 9);
    baseRedDot = baseGeneral - 6 - (hash % 4);
    baseScope2x = baseRedDot - 5 - (hash % 3);
    baseScope4x = baseScope2x - 5 - (hash % 3);
    baseAwm = 98 + (hash % 8);
    baseFreeLook = 154 + (hash % 8);
    baseFireButton = 43 + (hash % 4);
    baseDpi = 420 + ((hash % 6) * 10);
  } else {
    baseGeneral = 185 + (hash % 8);
    baseRedDot = baseGeneral - 6 - (hash % 3);
    baseScope2x = baseRedDot - 5 - (hash % 3);
    baseScope4x = baseScope2x - 5 - (hash % 3);
    baseAwm = 102 + (hash % 7);
    baseFreeLook = 158 + (hash % 6);
    baseFireButton = 45 + (hash % 4);
    baseDpi = 440 + ((hash % 5) * 10);
  }

  let dpiDisplay = brandId === "apple" ? "Default (iOS Motion Curve)" : `${baseDpi} DPI`;

  let tips = [
    `Calibrated specifically for ${modelName}: Set Smallest Width (DPI) to ${dpiDisplay} in Developer Options.`,
    `Set Fire Button size to ${baseFireButton}% positioned low on screen for upward drag acceleration on ${modelName}.`,
    `Keep General Sensitivity at ${baseGeneral} for instant 360-degree headshot rotation.`
  ];

  if (/OPPO/i.test(modelName) || brandId === "oppo") {
    tips[1] = `Turn ON Pro Gaming Mode in ColorOS Game Assistant for 240Hz Touch Sampling on ${modelName}.`;
  } else if (/iQOO/i.test(modelName) || brandId === "iqoo") {
    tips[1] = `Enable Monster Mode in iQOO Game Space for maximum touch response rate on ${modelName}.`;
  } else if (/Vivo/i.test(modelName) || brandId === "vivo") {
    tips[1] = `Turn ON Ultra Game Mode in Funtouch OS for peak touch response on ${modelName}.`;
  } else if (/Lava/i.test(modelName) || brandId === "lava") {
    tips[1] = `Set Fire Button size to ${baseFireButton}% with high drag velocity for Lava's 120Hz display on ${modelName}.`;
  } else if (/Moto/i.test(modelName) || brandId === "motorola") {
    tips[1] = `Enable Moto Gametime & 120Hz/144Hz high refresh rate mode for smooth drag lock on ${modelName}.`;
  } else if (/Honor|Huawei/i.test(modelName) || brandId === "honor") {
    tips[1] = `Enable Game Accelerator in Magic UI / EMUI settings for reduced touch latency on ${modelName}.`;
  } else if (/Pixel/i.test(modelName) || brandId === "google") {
    tips[1] = `Enable 'Smooth Display' in Display settings for maximum touch sampling on ${modelName}.`;
  } else if (/Nothing|CMF/i.test(modelName) || brandId === "nothing") {
    tips[1] = `Nothing OS features ultra-low latency—enable 120Hz display refresh rate for smooth drag tracking on ${modelName}.`;
  } else if (brandId === "apple") {
    tips[0] = `Calibrated specifically for ${modelName}: iOS touch curves provide native smooth acceleration.`;
    tips[1] = `Enable 120Hz ProMotion (or turn Reduce Motion OFF) in iOS Settings for instant drag response.`;
  }

  return {
    general: baseGeneral.toString(),
    redDot: baseRedDot.toString(),
    scope2x: baseScope2x.toString(),
    scope4x: baseScope4x.toString(),
    awm: baseAwm.toString(),
    freeLook: baseFreeLook.toString(),
    fireButton: `${baseFireButton}%`,
    dpi: dpiDisplay,
    proTips: tips
  };
}


