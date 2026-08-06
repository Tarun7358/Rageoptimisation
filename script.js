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
        "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
        "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
        "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
        "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini",
        "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini",
        "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
        "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X",
        "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7",
        "iPhone SE (2022)", "iPhone SE (2020)",
        "iPad Pro 12.9 (M1/M2/M4)", "iPad Pro 11 (M1/M2/M4)", "iPad Air (M1/M2)", "iPad Mini 6", "iPad 10th Gen", "iPad 9th Gen"
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
      id: "xiaomi",
      name: "Xiaomi / POCO / Redmi",
      icon: "fa-solid fa-mobile-screen-button",
      models: [
        // POCO Series
        "POCO X6 Pro 5G", "POCO X6 5G", "POCO X5 Pro 5G", "POCO X5 5G", "POCO X4 Pro 5G", "POCO X3 Pro", "POCO X3 NFC", "POCO X3",
        "POCO F6 Pro", "POCO F6", "POCO F5 Pro", "POCO F5", "POCO F4 5G", "POCO F3 GT", "POCO F3",
        "POCO M6 Pro 5G", "POCO M6 5G", "POCO M5", "POCO M4 Pro 5G", "POCO M3 Pro 5G", "POCO C65", "POCO C55", "POCO C51",
        // Redmi Note Series
        "Redmi Note 13 Pro+ 5G", "Redmi Note 13 Pro 5G", "Redmi Note 13 5G", "Redmi Note 13 4G",
        "Redmi Note 12 Pro+ 5G", "Redmi Note 12 Pro 5G", "Redmi Note 12 5G", "Redmi Note 12 4G", "Redmi Note 12 Turbo",
        "Redmi Note 11 Pro+ 5G", "Redmi Note 11 Pro 5G", "Redmi Note 11S", "Redmi Note 11",
        "Redmi Note 10 Pro Max", "Redmi Note 10 Pro", "Redmi Note 10S", "Redmi Note 10", "Redmi Note 10T 5G",
        "Redmi Note 9 Pro Max", "Redmi Note 9 Pro", "Redmi Note 9S", "Redmi Note 9", "Redmi Note 8 Pro", "Redmi Note 8",
        // Redmi Budget & Xiaomi Flagships
        "Redmi 13C 5G", "Redmi 13C", "Redmi 12 5G", "Redmi 12", "Redmi 11 Prime 5G", "Redmi 10C", "Redmi 10", "Redmi 9A", "Redmi 9C", "Redmi A3", "Redmi A2+",
        "Xiaomi 14 Ultra", "Xiaomi 14 Pro", "Xiaomi 14", "Xiaomi 13T Pro", "Xiaomi 13T", "Xiaomi 13 Pro", "Xiaomi 13 Ultra",
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
        "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24",
        "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S23 FE",
        "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22",
        "Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21", "Galaxy S21 FE 5G",
        "Galaxy S20 Ultra", "Galaxy S20+", "Galaxy S20", "Galaxy S20 FE 5G", "Galaxy S10+", "Galaxy S10", "Galaxy S9+",
        // A-Series
        "Galaxy A55 5G", "Galaxy A54 5G", "Galaxy A53 5G", "Galaxy A52s 5G", "Galaxy A52 5G", "Galaxy A52", "Galaxy A51",
        "Galaxy A35 5G", "Galaxy A34 5G", "Galaxy A33 5G", "Galaxy A32 5G", "Galaxy A32",
        "Galaxy A25 5G", "Galaxy A24", "Galaxy A23 5G", "Galaxy A23", "Galaxy A22 5G",
        "Galaxy A15 5G", "Galaxy A14 5G", "Galaxy A14", "Galaxy A13", "Galaxy A12", "Galaxy A05s", "Galaxy A04s", "Galaxy A03s",
        // M & F Series
        "Galaxy M55 5G", "Galaxy M54 5G", "Galaxy M53 5G", "Galaxy M52 5G", "Galaxy M34 5G", "Galaxy M33 5G", "Galaxy M32 5G",
        "Galaxy M14 5G", "Galaxy M13 5G", "Galaxy M12", "Galaxy F54 5G", "Galaxy F34 5G", "Galaxy F14 5G", "Galaxy F23 5G",
        // Z-Series Foldables
        "Galaxy Z Fold 5", "Galaxy Z Fold 4", "Galaxy Z Fold 3", "Galaxy Z Flip 5", "Galaxy Z Flip 4"
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
      id: "realme",
      name: "Realme / OPPO / Vivo",
      icon: "fa-solid fa-mobile",
      models: [
        // Realme Series
        "Realme 12 Pro+ 5G", "Realme 12 Pro 5G", "Realme 12+ 5G", "Realme 12 5G", "Realme 12x 5G",
        "Realme 11 Pro+ 5G", "Realme 11 Pro 5G", "Realme 11 5G", "Realme 11x 5G",
        "Realme 10 Pro+ 5G", "Realme 10 Pro 5G", "Realme 10 5G", "Realme 10",
        "Realme 9 Pro+ 5G", "Realme 9 Pro 5G", "Realme 9i 5G", "Realme 9 5G", "Realme 8 Pro", "Realme 8 5G", "Realme 8", "Realme 7 Pro",
        "Realme GT 5 Pro", "Realme GT 5", "Realme GT 3", "Realme GT 2 Pro", "Realme GT 2", "Realme GT Neo 6 SE", "Realme GT Neo 5", "Realme GT Neo 3T", "Realme GT Neo 3", "Realme GT Neo 2", "Realme GT Master Edition",
        "Realme Narzo 70 Pro 5G", "Realme Narzo 70x 5G", "Realme Narzo 60 Pro 5G", "Realme Narzo 60x 5G", "Realme Narzo 50 Pro 5G", "Realme Narzo 50", "Realme Narzo 30 5G",
        "Realme C67 5G", "Realme C55", "Realme C53", "Realme C35", "Realme C33", "Realme C31", "Realme C25s",
        // OPPO Series
        "OPPO Reno 11 Pro 5G", "OPPO Reno 11 5G", "OPPO Reno 10 Pro+ 5G", "OPPO Reno 10 Pro 5G", "OPPO Reno 10 5G",
        "OPPO Reno 8 Pro 5G", "OPPO Reno 8 5G", "OPPO Reno 7 Pro 5G", "OPPO Reno 6 Pro 5G",
        "OPPO F25 Pro 5G", "OPPO F23 5G", "OPPO F21s Pro 5G", "OPPO F21 Pro 5G", "OPPO F19 Pro+ 5G",
        "OPPO A79 5G", "OPPO A59 5G", "OPPO A78 5G", "OPPO A58 5G", "OPPO A38", "OPPO A18", "OPPO A17",
        // Vivo Series
        "Vivo V30 Pro", "Vivo V30", "Vivo V30e", "Vivo V29 Pro", "Vivo V29", "Vivo V29e", "Vivo V27 Pro", "Vivo V27", "Vivo V25 Pro", "Vivo V23 Pro",
        "Vivo T3 5G", "Vivo T3x 5G", "Vivo T2 Pro 5G", "Vivo T2 5G", "Vivo T2x 5G", "Vivo T1 Pro 5G", "Vivo T1 5G",
        "Vivo Y200e 5G", "Vivo Y200 5G", "Vivo Y100 5G", "Vivo Y56 5G", "Vivo Y36 5G", "Vivo Y28 5G", "Vivo Y27 5G", "Vivo Y16", "Vivo Y21"
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
      name: "OnePlus / iQOO",
      icon: "fa-solid fa-bolt",
      models: [
        // OnePlus Series
        "OnePlus 12", "OnePlus 12R", "OnePlus 11", "OnePlus 11R",
        "OnePlus 10 Pro", "OnePlus 10T", "OnePlus 10R",
        "OnePlus 9 Pro", "OnePlus 9RT", "OnePlus 9", "OnePlus 9R",
        "OnePlus 8T", "OnePlus 8 Pro", "OnePlus 8", "OnePlus 7T Pro", "OnePlus 7T", "OnePlus 7 Pro",
        "OnePlus Nord 4", "OnePlus Nord 3 5G", "OnePlus Nord 2T 5G", "OnePlus Nord 2 5G", "OnePlus Nord",
        "OnePlus Nord CE 4 5G", "OnePlus Nord CE 3 5G", "OnePlus Nord CE 3 Lite 5G", "OnePlus Nord CE 2 5G", "OnePlus Nord CE 2 Lite",
        // iQOO Series
        "iQOO 12 Pro", "iQOO 12", "iQOO 11 5G", "iQOO 9 Pro", "iQOO 9T", "iQOO 9 5G", "iQOO 9 SE", "iQOO 7 Legend", "iQOO 7",
        "iQOO Neo 9 Pro", "iQOO Neo 7 Pro", "iQOO Neo 7", "iQOO Neo 6",
        "iQOO Z9 5G", "iQOO Z9x 5G", "iQOO Z7 Pro 5G", "iQOO Z7 5G", "iQOO Z7s 5G", "iQOO Z6 Pro 5G", "iQOO Z6 5G", "iQOO Z6 Lite 5G"
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
          "OnePlus & iQOO have ultra-fast touch panels—keep DPI around 400.",
          "Enable Ultra Touch / Instant Touch Sampling (1000Hz) in Gaming Space.",
          "Fire button at 44% gives quick upward recoil lock."
        ]
      }
    },
    {
      id: "infinix",
      name: "Infinix / Tecno / Moto / Budget",
      icon: "fa-solid fa-microchip",
      models: [
        // Infinix Series
        "Infinix GT 20 Pro", "Infinix GT 10 Pro",
        "Infinix Note 40 Pro+ 5G", "Infinix Note 40 Pro 5G", "Infinix Note 40 5G", "Infinix Note 30 5G", "Infinix Note 30 VIP", "Infinix Note 12 Pro 5G", "Infinix Note 12 VIP", "Infinix Note 11 Pro", "Infinix Note 10 Pro",
        "Infinix Zero 30 5G", "Infinix Zero Ultra", "Infinix Zero 5G 2023", "Infinix Zero 20",
        "Infinix Hot 40 Pro", "Infinix Hot 40i", "Infinix Hot 30 5G", "Infinix Hot 30i", "Infinix Hot 20 5G", "Infinix Hot 20 Play", "Infinix Hot 12 Pro", "Infinix Hot 12 Play", "Infinix Hot 11S", "Infinix Hot 10S",
        "Infinix Smart 8 HD", "Infinix Smart 8 Pro", "Infinix Smart 7", "Infinix Smart 6",
        // Tecno Series
        "Tecno Camon 30 Premier 5G", "Tecno Camon 30 Pro 5G", "Tecno Camon 30 5G", "Tecno Camon 20 Pro 5G", "Tecno Camon 20 Premier", "Tecno Camon 19 Pro 5G",
        "Tecno Pova 6 Pro 5G", "Tecno Pova 5 Pro 5G", "Tecno Pova 5", "Tecno Pova 4 Pro", "Tecno Pova 3", "Tecno Pova 2",
        "Tecno Spark 20 Pro+", "Tecno Spark 20 Pro", "Tecno Spark 20 5G", "Tecno Spark 10 Pro", "Tecno Spark 9 Pro", "Tecno Spark 8T", "Tecno Pop 8", "Tecno Pop 7 Pro",
        // Motorola Series
        "Moto Edge 50 Pro", "Moto Edge 50 Ultra", "Moto Edge 40 Neo", "Moto Edge 40", "Moto Edge 30 Ultra", "Moto Edge 30 Fusion", "Moto Edge 30 Pro", "Moto Edge 30",
        "Moto G84 5G", "Moto G54 5G", "Moto G34 5G", "Moto G24 Power", "Moto G14", "Moto G82 5G", "Moto G73 5G", "Moto G62 5G", "Moto G52", "Moto G32", "Moto E13",
        // Google Pixel
        "Google Pixel 8 Pro", "Google Pixel 8a", "Google Pixel 8", "Google Pixel 7a", "Google Pixel 7 Pro", "Google Pixel 7", "Google Pixel 6a", "Google Pixel 6 Pro", "Google Pixel 6"
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
        "ASUS ROG Phone 8 Pro", "ASUS ROG Phone 8", "ASUS ROG Phone 7 Ultimate", "ASUS ROG Phone 7", "ASUS ROG Phone 6D Ultimate", "ASUS ROG Phone 6D", "ASUS ROG Phone 6 Pro", "ASUS ROG Phone 6", "ASUS ROG Phone 5s Pro", "ASUS ROG Phone 5s", "ASUS ROG Phone 5", "ASUS ROG Phone 3",
        // Nubia RedMagic Series
        "Nubia RedMagic 9 Pro+", "Nubia RedMagic 9 Pro", "Nubia RedMagic 8S Pro+", "Nubia RedMagic 8S Pro", "Nubia RedMagic 8 Pro", "Nubia RedMagic 7S Pro", "Nubia RedMagic 7 Pro", "Nubia RedMagic 7", "Nubia RedMagic 6S Pro", "Nubia RedMagic 6 Pro",
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
      general: "180",
      redDot: "175",
      scope2x: "165",
      scope4x: "160",
      awm: "100",
      mouseY: "2.85",
      mouseX: "1.45",
      dpi: "1000 DPI",
      proTips: [
        "Higher Y-Sensitivity (2.85) helps compensate for 45-60 FPS emulator lag.",
        "Set BlueStacks 5 resolution to 1280x720 (Low DPI).",
        "Enable ASTC Textures to 'Disabled' for higher FPS stability."
      ]
    },
    mid: {
      name: "Mid-End PC",
      desc: "6 Cores i5/Ryzen 5, GTX 1650 / RTX 3050, 16GB RAM",
      badge: "Balanced Rigs",
      badgeClass: "mid",
      recommended: true,
      general: "165",
      redDot: "160",
      scope2x: "150",
      scope4x: "145",
      awm: "90",
      mouseY: "2.45",
      mouseX: "1.25",
      dpi: "800 DPI",
      proTips: [
        "Balanced Y-Sensitivity (2.45) offers crisp drag headshots at 90 FPS.",
        "Use BlueStacks 5 Pie 64-bit instance with 4 Cores + 4GB RAM allocated.",
        "Disable 'Enhance Pointer Precision' in Windows Mouse Settings."
      ]
    },
    high: {
      name: "High-End PC",
      desc: "8+ Cores i7/i9/Ryzen 7, RTX 3070+, 32GB RAM, 144Hz-240Hz",
      badge: "Esports Rig",
      badgeClass: "high",
      general: "152",
      redDot: "145",
      scope2x: "140",
      scope4x: "135",
      awm: "80",
      mouseY: "2.10",
      mouseX: "1.10",
      dpi: "800 / 1200 DPI",
      proTips: [
        "Ultra-smooth 120-240 FPS allows low Y-sens (2.10) for pixel-perfect headshots.",
        "Set Emulator display to 240Hz mode with High Frame Rate enabled.",
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

    // Render Brand Tabs & Model Selection View
    const brandContainer = document.createElement("div");
    brandContainer.className = "mobile-brand-wrapper";

    // 1. Brand Selection Pills Grid
    const brandPillsGrid = document.createElement("div");
    brandPillsGrid.className = "brand-pills-grid";

    CONFIG.MOBILE_BRANDS.forEach((brand) => {
      const isSelected = brand.id === state.selectedMobileBrand;
      const brandBtn = document.createElement("button");
      brandBtn.className = `brand-pill-btn ${isSelected ? "selected" : ""}`;
      brandBtn.innerHTML = `<i class="${brand.icon}"></i> ${brand.name}`;
      brandBtn.addEventListener("click", () => {
        state.selectedMobileBrand = brand.id;
        state.selectedMobileModel = brand.models[0];
        renderSpecTierScreen("mobile");
      });
      brandPillsGrid.appendChild(brandBtn);
    });

    brandContainer.appendChild(brandPillsGrid);

    // 2. Models Selection Box for Active Brand with Live Search Filter
    const activeBrand = CONFIG.MOBILE_BRANDS.find((b) => b.id === state.selectedMobileBrand) || CONFIG.MOBILE_BRANDS[0];
    
    const modelCard = document.createElement("div");
    modelCard.className = "model-selector-card";
    modelCard.innerHTML = `
      <div class="model-card-header">
        <i class="${activeBrand.icon}"></i> <strong>${activeBrand.name} Models (${activeBrand.models.length}+ Devices)</strong>
      </div>
      <div class="search-model-wrapper">
        <input type="text" id="search-model-input" placeholder="🔍 Search any iPhone or Android model (e.g. Poco X3, S24 Ultra, iPhone 15...)" />
      </div>
      <p class="model-card-sub">Tap your exact phone model below:</p>
      <div class="model-pills-grid" id="model-pills-grid"></div>
      <div class="custom-model-wrapper">
        <label for="custom-model-input">Selected Model / Type Custom:</label>
        <input type="text" id="custom-model-input" placeholder="e.g. Poco X3 Pro, Galaxy A52..." value="${state.selectedMobileModel}" />
      </div>
      <button class="cta-button-primary" id="btn-confirm-mobile-device" style="margin-top: 1rem; width: 100%;">
        Get Best ${activeBrand.name} Sensitivity <i class="fa-solid fa-arrow-right"></i>
      </button>
    `;

    brandContainer.appendChild(modelCard);
    elements.specGrid.appendChild(brandContainer);

    // Populate model pills with search filter logic
    const modelPillsGrid = document.getElementById("model-pills-grid");
    const searchInput = document.getElementById("search-model-input");
    const customInput = document.getElementById("custom-model-input");

    function populateModelPills(filterQuery = "") {
      modelPillsGrid.innerHTML = "";
      const query = filterQuery.toLowerCase().trim();

      let targetModels = activeBrand.models;

      // If user typed search query, search across ALL brands' models if needed!
      if (query.length > 0) {
        let matched = activeBrand.models.filter((m) => m.toLowerCase().includes(query));
        if (matched.length === 0) {
          // Fallback to searching all brands
          CONFIG.MOBILE_BRANDS.forEach(b => {
            b.models.forEach(m => {
              if (m.toLowerCase().includes(query) && !matched.includes(m)) {
                matched.push(m);
              }
            });
          });
        }
        targetModels = matched;
      }

      if (targetModels.length === 0) {
        modelPillsGrid.innerHTML = `<div class="no-model-found">No exact match found. Type custom name in box below!</div>`;
        return;
      }

      targetModels.forEach((m) => {
        const isSelected = m === state.selectedMobileModel;
        const pill = document.createElement("div");
        pill.className = `model-pill ${isSelected ? "selected" : ""}`;
        pill.innerText = m;
        pill.addEventListener("click", () => {
          state.selectedMobileModel = m;
          if (customInput) customInput.value = m;
          document.querySelectorAll(".model-pill").forEach(p => p.classList.remove("selected"));
          pill.classList.add("selected");
        });
        modelPillsGrid.appendChild(pill);
      });
    }

    populateModelPills();

    // Live search input listener
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        populateModelPills(e.target.value);
      });
    }

    // Custom model input handler
    if (customInput) {
      customInput.addEventListener("input", (e) => {
        if (e.target.value.trim()) {
          state.selectedMobileModel = e.target.value.trim();
        }
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
    const activeBrand = CONFIG.MOBILE_BRANDS.find((b) => b.id === state.selectedMobileBrand) || CONFIG.MOBILE_BRANDS[0];
    sensiData = activeBrand.sensi;

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
      { label: "Mouse Hardware DPI", val: `${sensiData.dpi}`, highlight: "yellow" }
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
    textToCopy += `General: ${sensi.general}\nRed Dot: ${sensi.redDot}\n2X Scope: ${sensi.scope2x}\n4X Scope: ${sensi.scope4x}\nAWM: ${sensi.awm}\nMouse Y-Sens: ${sensi.mouseY}\nMouse X-Sens: ${sensi.mouseX}\nDPI: ${sensi.dpi}\n`;
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
