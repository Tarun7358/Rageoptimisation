/* ==========================================================================
   RAGE OPTIMISATION - Free Fire Brand & Device Sensitivity Application
   ========================================================================== */

// Global Configuration & Sensitivity Data Matrix
const CONFIG = {
  YOUTUBE_URL: "https://www.youtube.com/@clasherliveop",
  WHATSAPP_URL: "https://whatsapp.com/channel/0029Vb6Bqn8FCCoW6zjffR3j",
  DISCORD_URL: "https://discord.gg/JdvKrCHnMJ",

  // Mobile Device Brands & Models Matrix with Calibrated 200% Scale Presets
  MOBILE_BRANDS: [
    {
      id: "apple",
      name: "Apple (iPhone)",
      icon: "fa-brands fa-apple",
      models: ["iPhone 11 / 11 Pro", "iPhone 12 / 12 Pro", "iPhone 13 / 13 Pro", "iPhone 14 / 14 Pro", "iPhone 15 / 15 Pro", "iPhone 16 / 16 Pro", "iPhone XR / XS / X", "Other iPhone Model"],
      sensi: {
        general: "172",
        redDot: "165",
        scope2x: "160",
        scope4x: "155",
        awm: "95",
        freeLook: "150",
        fireButton: "42%",
        dpi: "Default (iOS Curves)",
        proTips: [
          "iOS has built-in smooth touch acceleration—no DPI modification needed.",
          "Keep Fire Button size at 42% positioned slightly lower for clean drag upward.",
          "Enable 120Hz ProMotion in iOS Settings for instant headshot response."
        ]
      }
    },
    {
      id: "xiaomi",
      name: "Xiaomi / POCO / Redmi",
      icon: "fa-solid fa-mobile-screen-button",
      models: ["POCO X3 / X4 / X5 / X6 Pro", "POCO F3 / F4 / F5 / F6", "Redmi Note 10 / 11 / 12 / 13 Pro", "Xiaomi 11T / 12T / 13T / 14", "Redmi 9A / 10C / 12", "Other POCO/Redmi Model"],
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
          "Set Smallest Width (DPI) to 490 in MIUI Developer Options.",
          "Turn ON Game Turbo mode and set Touch Response Speed to Maximum.",
          "Use a smooth sliding thumb sleeve for quick headshot drags."
        ]
      }
    },
    {
      id: "samsung",
      name: "Samsung Galaxy",
      icon: "fa-solid fa-mobile-retro",
      models: ["Galaxy S21 / S22 / S23 / S24 Ultra", "Galaxy A12 / A14 / A23 / A34 / A54", "Galaxy M13 / M33 / M54", "Galaxy FE Series (S20/S21/S23 FE)", "Other Samsung Galaxy Model"],
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
          "Enable 'Touch Sensitivity' mode in Display settings for smooth drags.",
          "Set Game Booster Plugin touch response tuning to High.",
          "Position Fire Button size at 46% near the lower right quadrant."
        ]
      }
    },
    {
      id: "realme",
      name: "Realme / OPPO / Vivo",
      icon: "fa-solid fa-mobile",
      models: ["Realme 8 / 9 / 10 / 11 / 12 Pro", "Realme GT Neo / GT 2 / GT 5", "OPPO Reno 7 / 8 / 10 / 11", "Vivo T1 / T2 / V27 / V29 / V30", "Other Realme/OPPO/Vivo"],
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
          "Turn on Pro Gaming Mode in Game Assistant for 240Hz Touch Rate.",
          "Keep General sensitivity high (192) for fast 360-degree drag rotation."
        ]
      }
    },
    {
      id: "oneplus",
      name: "OnePlus / iQOO",
      icon: "fa-solid fa-bolt",
      models: ["OnePlus 9 / 10 / 11 / 12 Pro", "OnePlus Nord 2 / 3 / CE series", "iQOO 7 / 9 / 11 / 12 Pro", "iQOO Neo 6 / 7 / 9 Pro", "Other OnePlus/iQOO Model"],
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
          "iQOO & OnePlus have ultra-fast touch response—keep DPI around 400.",
          "Enable Instant Touch Sampling (1000Hz) in Gaming Space.",
          "Fire button at 44% gives quick upward recoil lock."
        ]
      }
    },
    {
      id: "infinix",
      name: "Infinix / Tecno / Budget",
      icon: "fa-solid fa-microchip",
      models: ["Infinix Hot 10 / 11 / 12 / 20 / 30", "Infinix Note 11 / 12 / 30 Pro", "Tecno Spark 8 / 9 / 10 / Pova", "Lava / Micromax / Budget Phones", "Other Budget Device"],
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
          "Budget devices need high DPI (520) to compensate for screen latency.",
          "Clear RAM background apps before launching Free Fire.",
          "Use General at 198 for maximum drag velocity on 60Hz panels."
        ]
      }
    },
    {
      id: "gaming",
      name: "ASUS ROG / Gaming Phone",
      icon: "fa-solid fa-gamepad",
      models: ["ASUS ROG Phone 5 / 6 / 7 / 8", "RedMagic 6 / 7 / 8 / 9 Pro", "Black Shark 4 / 5 Pro", "Other Pro Gaming Phone"],
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
          "Esports gaming phones have 720Hz+ touch sampling rate.",
          "Set AirTriggers for fast Scope + Fire combo.",
          "Lower sensitivity (168) provides laser-like headshot precision."
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
  selectedMobileBrand: "xiaomi", // Default brand
  selectedMobileModel: "POCO X3 / X4 / X5 / X6 Pro", // Default model
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
    elements.specSubtitle.innerText = "Choose your device brand and model to fetch pro headshot sensitivities from net.";

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

    // 2. Models Selection Box for Active Brand
    const activeBrand = CONFIG.MOBILE_BRANDS.find((b) => b.id === state.selectedMobileBrand) || CONFIG.MOBILE_BRANDS[0];
    
    const modelCard = document.createElement("div");
    modelCard.className = "model-selector-card";
    modelCard.innerHTML = `
      <div class="model-card-header">
        <i class="${activeBrand.icon}"></i> <strong>${activeBrand.name} Models</strong>
      </div>
      <p class="model-card-sub">Select your exact model or nearest series:</p>
      <div class="model-pills-grid" id="model-pills-grid"></div>
      <div class="custom-model-wrapper">
        <label for="custom-model-input">Or Type Custom Model:</label>
        <input type="text" id="custom-model-input" placeholder="e.g. Poco X3 Pro, Galaxy A52..." value="${state.selectedMobileModel}" />
      </div>
      <button class="cta-button-primary" id="btn-confirm-mobile-device" style="margin-top: 1rem; width: 100%;">
        Get Best ${activeBrand.name} Sensitivity <i class="fa-solid fa-arrow-right"></i>
      </button>
    `;

    brandContainer.appendChild(modelCard);
    elements.specGrid.appendChild(brandContainer);

    // Populate model pills
    const modelPillsGrid = document.getElementById("model-pills-grid");
    activeBrand.models.forEach((m) => {
      const isSelected = m === state.selectedMobileModel;
      const pill = document.createElement("div");
      pill.className = `model-pill ${isSelected ? "selected" : ""}`;
      pill.innerText = m;
      pill.addEventListener("click", () => {
        state.selectedMobileModel = m;
        const customInput = document.getElementById("custom-model-input");
        if (customInput) customInput.value = m;
        document.querySelectorAll(".model-pill").forEach(p => p.classList.remove("selected"));
        pill.classList.add("selected");
      });
      modelPillsGrid.appendChild(pill);
    });

    // Custom model input handler
    const customInput = document.getElementById("custom-model-input");
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
