// Comprehensive Agricultural & Climate Dataset for Smart Crop Predictor
// Special focus on Karnataka districts & ICAR / data.gov.in / Agmarknet benchmark data

export const DISTRICTS_DATA = {
  "Karnataka": [
    {
      id: "shivamogga",
      name: "Shivamogga",
      kannadaName: "ಶಿವಮೊಗ್ಗ",
      zone: "Southern Malnad & Transition Zone",
      avgRainfall: 1820,
      avgTemp: 26.5,
      avgHumidity: 78,
      soilType: "Red Sandy Loam & Laterite",
      defaultNPK: { n: 110, p: 45, k: 55, ph: 6.2 },
      majorMandi: "Shivamogga APMC Yard",
      suitableCrops: ["paddy", "arecanut", "maize", "ginger", "banana", "ragi"]
    },
    {
      id: "belagavi",
      name: "Belagavi",
      kannadaName: "ಬೆಳಗಾವಿ",
      zone: "Northern Transitional & Dry Zone",
      avgRainfall: 850,
      avgTemp: 25.8,
      avgHumidity: 68,
      soilType: "Medium Black & Red Loam",
      defaultNPK: { n: 130, p: 55, k: 70, ph: 7.4 },
      majorMandi: "Belagavi APMC",
      suitableCrops: ["sugarcane", "maize", "cotton", "bengal_gram", "groundnut", "paddy"]
    },
    {
      id: "davanagere",
      name: "Davanagere",
      kannadaName: "ದಾವಣಗೆರೆ",
      zone: "Central Dry Zone",
      avgRainfall: 680,
      avgTemp: 27.5,
      avgHumidity: 62,
      soilType: "Red Loamy & Deep Black",
      defaultNPK: { n: 120, p: 50, k: 60, ph: 7.1 },
      majorMandi: "Davanagere APMC Market",
      suitableCrops: ["maize", "paddy", "cotton", "ragi", "sunflower", "arecanut"]
    },
    {
      id: "mysuru",
      name: "Mysuru",
      kannadaName: "ಮೈಸೂರು",
      zone: "Southern Dry Zone",
      avgRainfall: 790,
      avgTemp: 25.0,
      avgHumidity: 70,
      soilType: "Red Gravelly & Loamy",
      defaultNPK: { n: 105, p: 48, k: 50, ph: 6.8 },
      majorMandi: "Bandipalya APMC Mysuru",
      suitableCrops: ["paddy", "ragi", "cotton", "sugarcane", "banana", "groundnut"]
    },
    {
      id: "mandya",
      name: "Mandya",
      kannadaName: "ಮಂಡ್ಯ",
      zone: "Southern Dry / Canal Irrigated Zone",
      avgRainfall: 720,
      avgTemp: 26.2,
      avgHumidity: 72,
      soilType: "Red Loam & Alluvial",
      defaultNPK: { n: 140, p: 60, k: 75, ph: 6.9 },
      majorMandi: "Mandya APMC",
      suitableCrops: ["sugarcane", "paddy", "ragi", "banana", "maize"]
    },
    {
      id: "dharwad",
      name: "Dharwad",
      kannadaName: "ಧಾರವಾಡ",
      zone: "Northern Transition Zone",
      avgRainfall: 760,
      avgTemp: 26.0,
      avgHumidity: 65,
      soilType: "Medium to Deep Black Cotton Soil",
      defaultNPK: { n: 115, p: 52, k: 68, ph: 7.6 },
      majorMandi: "Amargol APMC Hubballi-Dharwad",
      suitableCrops: ["cotton", "bengal_gram", "groundnut", "maize", "onion", "sunflower"]
    },
    {
      id: "ballari",
      name: "Ballari",
      kannadaName: "ಬಳ್ಳಾರಿ",
      zone: "North-Eastern Dry Zone",
      avgRainfall: 560,
      avgTemp: 29.5,
      avgHumidity: 55,
      soilType: "Deep Black Cotton & Red Sandy",
      defaultNPK: { n: 125, p: 48, k: 65, ph: 7.8 },
      majorMandi: "Ballari APMC Yard",
      suitableCrops: ["cotton", "maize", "paddy", "sunflower", "bengal_gram", "onion"]
    },
    {
      id: "hassan",
      name: "Hassan",
      kannadaName: "ಹಾಸನ",
      zone: "Southern Transition & Malnad Zone",
      avgRainfall: 1040,
      avgTemp: 24.5,
      avgHumidity: 76,
      soilType: "Red Sandy Loam & Lateritic",
      defaultNPK: { n: 110, p: 50, k: 58, ph: 6.3 },
      majorMandi: "Hassan APMC",
      suitableCrops: ["potato", "coffee", "ragi", "maize", "paddy", "ginger"]
    },
    {
      id: "chikkamagaluru",
      name: "Chikkamagaluru",
      kannadaName: "ಚಿಕ್ಕಮಗಳೂರು",
      zone: "Hill & Malnad Zone",
      avgRainfall: 1950,
      avgTemp: 23.5,
      avgHumidity: 82,
      soilType: "Laterite & Forest Loam",
      defaultNPK: { n: 95, p: 42, k: 50, ph: 5.8 },
      majorMandi: "Chikkamagaluru APMC",
      suitableCrops: ["coffee", "arecanut", "pepper", "paddy", "ginger"]
    },
    {
      id: "tumakuru",
      name: "Tumakuru",
      kannadaName: "ತುಮಕೂರು",
      zone: "Central Dry Zone",
      avgRainfall: 690,
      avgTemp: 27.0,
      avgHumidity: 60,
      soilType: "Red Sandy Loam",
      defaultNPK: { n: 100, p: 40, k: 52, ph: 6.7 },
      majorMandi: "Tumakuru APMC",
      suitableCrops: ["groundnut", "ragi", "arecanut", "maize", "tomato"]
    },
    {
      id: "kalaburagi",
      name: "Kalaburagi (Gulbarga)",
      kannadaName: "ಕಲಬುರಗಿ",
      zone: "North-Eastern Dry Zone (Pulse Bowl)",
      avgRainfall: 740,
      avgTemp: 29.8,
      avgHumidity: 58,
      soilType: "Deep Black Clay Soil",
      defaultNPK: { n: 90, p: 55, k: 70, ph: 8.0 },
      majorMandi: "Kalaburagi APMC Nehru Gunj",
      suitableCrops: ["red_gram", "bengal_gram", "cotton", "sunflower", "jowar"]
    },
    {
      id: "vijayapura",
      name: "Vijayapura (Bijapur)",
      kannadaName: "ವಿಜಯಪುರ",
      zone: "Northern Dry Zone",
      avgRainfall: 590,
      avgTemp: 29.0,
      avgHumidity: 52,
      soilType: "Deep Black & Shallow Black",
      defaultNPK: { n: 100, p: 45, k: 65, ph: 7.9 },
      majorMandi: "Vijayapura APMC",
      suitableCrops: ["sugarcane", "bengal_gram", "onion", "maize", "sunflower"]
    },
    {
      id: "udupi",
      name: "Udupi",
      kannadaName: "ಉಡುಪಿ",
      zone: "Coastal Zone",
      avgRainfall: 3950,
      avgTemp: 28.0,
      avgHumidity: 88,
      soilType: "Coastal Sandy Alluvium & Laterite",
      defaultNPK: { n: 90, p: 35, k: 45, ph: 5.5 },
      majorMandi: "Udupi APMC Adi Udupi",
      suitableCrops: ["paddy", "arecanut", "banana"]
    },
    {
      id: "dakshina_kannada",
      name: "Dakshina Kannada (Mangaluru)",
      kannadaName: "ದಕ್ಷಿಣ ಕನ್ನಡ",
      zone: "Coastal Zone",
      avgRainfall: 4050,
      avgTemp: 28.2,
      avgHumidity: 89,
      soilType: "Coastal Alluvium & Laterite",
      defaultNPK: { n: 92, p: 38, k: 48, ph: 5.6 },
      majorMandi: "Baikampady APMC Mangaluru",
      suitableCrops: ["arecanut", "paddy", "banana", "pepper"]
    },
    {
      id: "raichur",
      name: "Raichur",
      kannadaName: "ರಾಯಚೂರು",
      zone: "Krishna-Tungabhadra Doab",
      avgRainfall: 620,
      avgTemp: 30.2,
      avgHumidity: 54,
      soilType: "Deep Black Cotton & Sandy Loam",
      defaultNPK: { n: 120, p: 52, k: 65, ph: 7.7 },
      majorMandi: "Raichur APMC",
      suitableCrops: ["cotton", "paddy", "groundnut", "sunflower", "bengal_gram"]
    },
    {
      id: "chamarajanagar",
      name: "Chamarajanagar",
      kannadaName: "ಚಾಮರಾಜನಗರ",
      zone: "Southern Dry Zone",
      avgRainfall: 750,
      avgTemp: 26.5,
      avgHumidity: 65,
      soilType: "Red Sandy Loam",
      defaultNPK: { n: 105, p: 44, k: 52, ph: 6.6 },
      majorMandi: "Chamarajanagar APMC",
      suitableCrops: ["ragi", "banana", "turmeric", "maize", "paddy"]
    },
    {
      id: "kolar",
      name: "Kolar",
      kannadaName: "ಕೋಲಾರ",
      zone: "Eastern Dry Zone",
      avgRainfall: 710,
      avgTemp: 25.5,
      avgHumidity: 64,
      soilType: "Red Sandy & Loamy",
      defaultNPK: { n: 115, p: 58, k: 60, ph: 6.8 },
      majorMandi: "Kolar APMC (Asia's 2nd largest tomato market)",
      suitableCrops: ["tomato", "ragi", "groundnut", "potato", "maize"]
    },
    {
      id: "haveri",
      name: "Haveri",
      kannadaName: "ಹಾವೇರಿ",
      zone: "Northern Transition Zone",
      avgRainfall: 750,
      avgTemp: 26.8,
      avgHumidity: 67,
      soilType: "Red Sandy Loam & Medium Black",
      defaultNPK: { n: 118, p: 50, k: 62, ph: 7.2 },
      majorMandi: "Byadgi APMC (Famous Chilli Mandi) & Haveri APMC",
      suitableCrops: ["maize", "cotton", "groundnut", "paddy", "sunflower"]
    }
  ],
  "Maharashtra": [
    {
      id: "pune",
      name: "Pune",
      kannadaName: "ಪುಣೆ",
      zone: "Western Maharashtra Plateau",
      avgRainfall: 720,
      avgTemp: 26.0,
      avgHumidity: 65,
      soilType: "Medium Black Soil",
      defaultNPK: { n: 120, p: 50, k: 60, ph: 7.2 },
      majorMandi: "Gultekdi APMC Pune",
      suitableCrops: ["sugarcane", "onion", "tomato", "soybean", "cotton"]
    },
    {
      id: "nashik",
      name: "Nashik",
      kannadaName: "ನಾಸಿಕ್",
      zone: "Northern Maharashtra",
      avgRainfall: 810,
      avgTemp: 25.0,
      avgHumidity: 68,
      soilType: "Black Cotton Soil",
      defaultNPK: { n: 125, p: 55, k: 65, ph: 7.1 },
      majorMandi: "Lasalgaon APMC (Asia's largest onion market)",
      suitableCrops: ["onion", "tomato", "soybean", "maize", "grapes"]
    }
  ],
  "Tamil Nadu": [
    {
      id: "coimbatore",
      name: "Coimbatore",
      kannadaName: "ಕೊಯಮತ್ತೂರು",
      zone: "Western Agro Climatic Zone",
      avgRainfall: 690,
      avgTemp: 26.5,
      avgHumidity: 68,
      soilType: "Red Loamy Soil",
      defaultNPK: { n: 110, p: 48, k: 58, ph: 6.9 },
      majorMandi: "Coimbatore APMC",
      suitableCrops: ["cotton", "banana", "maize", "groundnut", "tomato"]
    },
    {
      id: "thanjavur",
      name: "Thanjavur",
      kannadaName: "ತಂಜಾವೂರು",
      zone: "Cauvery Delta Zone (Rice Bowl)",
      avgRainfall: 1050,
      avgTemp: 28.5,
      avgHumidity: 78,
      soilType: "Alluvial Clay Loam",
      defaultNPK: { n: 135, p: 55, k: 65, ph: 7.0 },
      majorMandi: "Thanjavur Regulated Market",
      suitableCrops: ["paddy", "sugarcane", "groundnut", "banana", "pulses"]
    }
  ],
  "Andhra Pradesh": [
    {
      id: "guntur",
      name: "Guntur",
      kannadaName: "ಗುಂಟೂರು",
      zone: "Krishna Delta & Coastal",
      avgRainfall: 890,
      avgTemp: 29.0,
      avgHumidity: 72,
      soilType: "Black Cotton & Coastal Alluvium",
      defaultNPK: { n: 130, p: 58, k: 68, ph: 7.5 },
      majorMandi: "Guntur Mirchi Yard",
      suitableCrops: ["cotton", "paddy", "maize", "bengal_gram", "tobacco"]
    }
  ]
};

export const CROPS_DATA = {
  paddy: {
    id: "paddy",
    name: "Paddy (Rice)",
    kannadaName: "ಭತ್ತ (ಅಕ್ಕಿ)",
    category: "Cereal / ಆಹಾರ ಧಾನ್ಯ",
    icon: "🌾",
    seasons: ["Kharif", "Rabi"],
    baseYieldPerHectare: 44.5, // quintals/ha (approx 4.45 tons/ha)
    minYield: 28.0,
    maxYield: 62.0,
    costPerHectare: 42000, // ₹ per hectare cultivation cost
    msp: 2300, // ₹/quintal (Government Minimum Support Price)
    modalPrice: 2480, // current benchmark mandi price
    priceRange: { min: 2150, max: 2850 },
    volatility: "Low-Medium",
    waterNeed: "High (1200-1500mm)",
    growthDays: 125,
    optimalConditions: {
      rainfall: { min: 1000, optimal: 1400, max: 2500 },
      temperature: { min: 21, optimal: 27, max: 36 },
      ph: { min: 5.5, optimal: 6.5, max: 7.5 },
      n: 120, p: 50, k: 50
    },
    advisoryKannada: "ನೀರಿನ ಸೌಲಭ್ಯವಿರುವ ಪ್ರದೇಶಗಳಿಗೆ ಸೂಕ್ತ. ಸಾವಯವ ಗೊಬ್ಬರ ಮತ್ತು ಯೂರಿಯಾವನ್ನು ಹಂತ ಹಂತವಾಗಿ ನೀಡಿ.",
    advisoryEnglish: "Best for irrigated and high rainfall belts. Apply split doses of Nitrogen (Urea) at tillering and panicle initiation."
  },
  ragi: {
    id: "ragi",
    name: "Finger Millet (Ragi)",
    kannadaName: "ರಾಗಿ",
    category: "Millet / ಸಿರಿಧಾನ್ಯ",
    icon: "🥣",
    seasons: ["Kharif", "Rabi"],
    baseYieldPerHectare: 26.0, // quintals/ha
    minYield: 16.0,
    maxYield: 38.0,
    costPerHectare: 24000,
    msp: 4290,
    modalPrice: 4450,
    priceRange: { min: 3900, max: 4850 },
    volatility: "Low (High MSP Support)",
    waterNeed: "Low (400-600mm)",
    growthDays: 110,
    optimalConditions: {
      rainfall: { min: 500, optimal: 750, max: 1100 },
      temperature: { min: 20, optimal: 26, max: 34 },
      ph: { min: 5.8, optimal: 6.5, max: 7.8 },
      n: 60, p: 35, k: 30
    },
    advisoryKannada: "ಕಡಿಮೆ ಮಳೆಯಲ್ಲೂ ಅತ್ಯುತ್ತಮ ಇಳುವರಿ. ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಬೆಂಬಲ ಬೆಲೆ ಭದ್ರತೆ ಇದೆ.",
    advisoryEnglish: "Highly drought resistant with assured MSP procurement by Karnataka Govt. Low input cost and great nutritional value."
  },
  maize: {
    id: "maize",
    name: "Maize (Corn)",
    kannadaName: "ಮೆಕ್ಕೆಜೋಳ",
    category: "Cereal / ಕೃಷಿ ಧಾನ್ಯ",
    icon: "🌽",
    seasons: ["Kharif", "Rabi", "Summer"],
    baseYieldPerHectare: 52.0, // quintals/ha
    minYield: 35.0,
    maxYield: 75.0,
    costPerHectare: 34000,
    msp: 2225,
    modalPrice: 2320,
    priceRange: { min: 2050, max: 2650 },
    volatility: "Medium (Ethanol & Feed Demand)",
    waterNeed: "Medium (600-800mm)",
    growthDays: 105,
    optimalConditions: {
      rainfall: { min: 550, optimal: 750, max: 1200 },
      temperature: { min: 20, optimal: 28, max: 35 },
      ph: { min: 6.0, optimal: 6.8, max: 7.5 },
      n: 130, p: 60, k: 50
    },
    advisoryKannada: "ಕೋಳಿ ಆಹಾರ ಮತ್ತು ಎಥೆನಾಲ್ ಉದ್ಯಮಗಳಿಂದ ಭಾರಿ ಬೇಡಿಕೆ. ರಂಜಕ ಮತ್ತು ಸಾರಜನಕ ಸಕಾಲದಲ್ಲಿ ನೀಡಿ.",
    advisoryEnglish: "Strong market pull from poultry feed and ethanol distilleries. Control Fall Armyworm (FAW) early."
  },
  sugarcane: {
    id: "sugarcane",
    name: "Sugarcane",
    kannadaName: "ಕಬ್ಬು",
    category: "Commercial / ವಾಣಿಜ್ಯ ಬೆಳೆ",
    icon: "🎋",
    seasons: ["Whole Year", "Kharif"],
    baseYieldPerHectare: 980.0, // quintals/ha (approx 98 tons/ha)
    minYield: 650.0,
    maxYield: 1400.0,
    costPerHectare: 115000,
    msp: 340, // FRP per quintal (₹340/qtl = ₹3400/tonne)
    modalPrice: 355,
    priceRange: { min: 320, max: 385 },
    volatility: "Low (Guaranteed FRP/Sugar Mills)",
    waterNeed: "Very High (1800-2500mm)",
    growthDays: 360,
    optimalConditions: {
      rainfall: { min: 1100, optimal: 1600, max: 2600 },
      temperature: { min: 24, optimal: 30, max: 38 },
      ph: { min: 6.5, optimal: 7.2, max: 8.2 },
      n: 250, p: 100, k: 125
    },
    advisoryKannada: "ಹನಿ ನೀರಾವರಿ ಪದ್ಧತಿ ಅಳವಡಿಸುವುದರಿಂದ ನೀರಿನ ಉಳಿತಾಯ ಮತ್ತು ಇಳುವರಿ ಶೇ. 30ರಷ್ಟು ಹೆಚ್ಚಳ.",
    advisoryEnglish: "Drip irrigation increases sugar recovery and saves 40% water. Assured factory off-take under FRP policy."
  },
  cotton: {
    id: "cotton",
    name: "Cotton",
    kannadaName: "ಹತ್ತಿ",
    category: "Commercial / ವಾಣಿಜ್ಯ ಬೆಳೆ",
    icon: "☁️",
    seasons: ["Kharif"],
    baseYieldPerHectare: 19.5, // quintals/ha
    minYield: 12.0,
    maxYield: 29.0,
    costPerHectare: 46000,
    msp: 7521, // Medium/Long staple MSP
    modalPrice: 7850,
    priceRange: { min: 6900, max: 8900 },
    volatility: "High (Export & Textile Fluctuations)",
    waterNeed: "Medium (650-950mm)",
    growthDays: 165,
    optimalConditions: {
      rainfall: { min: 600, optimal: 850, max: 1300 },
      temperature: { min: 23, optimal: 30, max: 37 },
      ph: { min: 6.5, optimal: 7.5, max: 8.5 },
      n: 120, p: 55, k: 55
    },
    advisoryKannada: "ಕಪ್ಪು ಮಣ್ಣಿನಲ್ಲಿ ಉತ್ತಮ ಇಳುವರಿ. ಕೀಟ ಬಾಧೆ ತಡೆಯಲು ಸಮಗ್ರ ಕೀಟ ನಿಯಂತ್ರಣ (IPM) ಅನುಸರಿಸಿ.",
    advisoryEnglish: "Deep black cotton soils yield best. Monitor pink bollworm using pheromone traps. Sell during post-harvest price recovery."
  },
  groundnut: {
    id: "groundnut",
    name: "Groundnut (Peanut)",
    kannadaName: "ಕಡಲೆಕಾಯಿ",
    category: "Oilseed / ಎಣ್ಣೆಕಾಳು",
    icon: "🥜",
    seasons: ["Kharif", "Rabi"],
    baseYieldPerHectare: 21.0, // quintals/ha
    minYield: 13.0,
    maxYield: 32.0,
    costPerHectare: 33000,
    msp: 6783,
    modalPrice: 6950,
    priceRange: { min: 6200, max: 7700 },
    volatility: "Medium",
    waterNeed: "Low-Medium (500-700mm)",
    growthDays: 115,
    optimalConditions: {
      rainfall: { min: 500, optimal: 680, max: 1000 },
      temperature: { min: 22, optimal: 28, max: 34 },
      ph: { min: 6.0, optimal: 6.8, max: 7.6 },
      n: 30, p: 60, k: 40 // Rhizobium fixes atmospheric nitrogen
    },
    advisoryKannada: "ಮಣ್ಣಿನ ಫಲವತ್ತತೆ ಹೆಚ್ಚಿಸಲು ಜಿಪ್ಸಮ್ (Gypsum) ಹಾಕುವುದು ಮುಖ್ಯ. ಎಣ್ಣೆ ಅಂಶ ಹೆಚ್ಚಿಸಲು ಇದು ನೆರವಾಗುತ್ತದೆ.",
    advisoryEnglish: "Apply gypsum at 45 days after sowing to facilitate pod filling and boost oil content."
  },
  arecanut: {
    id: "arecanut",
    name: "Arecanut (Betelnut)",
    kannadaName: "ಅಡಿಕೆ",
    category: "Plantation / ತೋಟಗಾರಿಕೆ ಬೆಳೆ",
    icon: "🌴",
    seasons: ["Whole Year"],
    baseYieldPerHectare: 24.0, // processed chali/rashi quintals/ha
    minYield: 15.0,
    maxYield: 36.0,
    costPerHectare: 75000,
    msp: 0, // No MSP, open market driven
    modalPrice: 48500, // ₹48,500/quintal
    priceRange: { min: 42000, max: 56000 },
    volatility: "High Profitability / Market Volatility",
    waterNeed: "High (requires regular irrigation & drainage)",
    growthDays: 365,
    optimalConditions: {
      rainfall: { min: 1400, optimal: 2200, max: 4000 },
      temperature: { min: 20, optimal: 27, max: 34 },
      ph: { min: 5.5, optimal: 6.4, max: 7.2 },
      n: 100, p: 40, k: 140
    },
    advisoryKannada: "ಶಿವಮೊಗ್ಗ, ಚಿಕ್ಕಮಗಳೂರು ಮತ್ತು ಮಲೆನಾಡಿಗೆ ಅತಿ ಹೆಚ್ಚು ಲಾಭದಾಯಕ ಬೆಳೆ. ಕೊಳೆ ರೋಗ ತಡೆಗಟ್ಟಲು ಬೋರ್ಡೋ ದ್ರಾವಣ ಸಿಂಪಡಿಸಿ.",
    advisoryEnglish: "Highest revenue crop in Malnad region. Spray 1% Bordeaux mixture before monsoon to prevent fruit rot (Koleroga)."
  },
  bengal_gram: {
    id: "bengal_gram",
    name: "Bengal Gram (Chana)",
    kannadaName: "ಕಡಲೆ (ಚನ್ನಾ)",
    category: "Pulse / ಬೇಳೆಕಾಳು",
    icon: "🌱",
    seasons: ["Rabi"],
    baseYieldPerHectare: 14.5, // quintals/ha
    minYield: 9.0,
    maxYield: 22.0,
    costPerHectare: 22000,
    msp: 5440,
    modalPrice: 5900,
    priceRange: { min: 5200, max: 6600 },
    volatility: "Low-Medium",
    waterNeed: "Low (350-500mm, residual moisture)",
    growthDays: 95,
    optimalConditions: {
      rainfall: { min: 350, optimal: 500, max: 750 },
      temperature: { min: 16, optimal: 24, max: 30 },
      ph: { min: 6.5, optimal: 7.4, max: 8.4 },
      n: 25, p: 50, k: 25
    },
    advisoryKannada: "ರಬಿ ಹಂಗಾಮಿನಲ್ಲಿ ಹಿಂಗಾರು ಮಳೆಯ ತೇವಾಂಶದಲ್ಲಿ ಬೆಳೆಯಬಹುದು. ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ ಅಧಿಕ ಲಾಭ ನೀಡುತ್ತದೆ.",
    advisoryEnglish: "Ideal rabi pulse in black soil on residual moisture. Low input cost, fixes atmospheric nitrogen."
  },
  red_gram: {
    id: "red_gram",
    name: "Red Gram (Tur Dal)",
    kannadaName: "ತೊಗರಿ",
    category: "Pulse / ಬೇಳೆಕಾಳು",
    icon: "🌿",
    seasons: ["Kharif"],
    baseYieldPerHectare: 13.0,
    minYield: 8.0,
    maxYield: 20.0,
    costPerHectare: 26000,
    msp: 7550,
    modalPrice: 8400,
    priceRange: { min: 7400, max: 9600 },
    volatility: "Medium-High (Dal demand)",
    waterNeed: "Low-Medium (550-750mm)",
    growthDays: 160,
    optimalConditions: {
      rainfall: { min: 500, optimal: 700, max: 1000 },
      temperature: { min: 22, optimal: 28, max: 35 },
      ph: { min: 6.5, optimal: 7.5, max: 8.5 },
      n: 30, p: 60, k: 30
    },
    advisoryKannada: "ಕಲಬುರಗಿ ಮತ್ತು ವಿಜಯಪುರ ಪ್ರದೇಶಗಳಿಗೆ ಅತ್ಯಂತ ಸೂಕ್ತ. ಅಂತರ ಬೆಳೆಯಾಗಿ ಹತ್ತಿ ಅಥವಾ ಸೋಯಾಬೀನ್ ಜೊತೆ ಬೆಳೆಯಬಹುದು.",
    advisoryEnglish: "GI-tagged Kalaburagi Red Gram commands premium mandi price. Excellent for intercropping with cotton or soybean."
  },
  tomato: {
    id: "tomato",
    name: "Tomato",
    kannadaName: "ಟೊಮೇಟೊ",
    category: "Horticulture / ತರಕಾರಿ",
    icon: "🍅",
    seasons: ["Kharif", "Rabi", "Summer"],
    baseYieldPerHectare: 240.0, // quintals/ha (24 tons/ha)
    minYield: 140.0,
    maxYield: 380.0,
    costPerHectare: 85000,
    msp: 0,
    modalPrice: 1850, // ₹1,850/quintal (avg ~₹18.5/kg)
    priceRange: { min: 800, max: 4200 }, // highly volatile!
    volatility: "Extreme Volatility (Peak seasonal swings)",
    waterNeed: "Medium (Drip recommended)",
    growthDays: 90,
    optimalConditions: {
      rainfall: { min: 500, optimal: 700, max: 1000 },
      temperature: { min: 19, optimal: 25, max: 32 },
      ph: { min: 6.0, optimal: 6.8, max: 7.5 },
      n: 150, p: 90, k: 120
    },
    advisoryKannada: "ಕೋಲಾರ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಭಾರಿ ಬೇಡಿಕೆ. ಬೆಲೆ ಏರಿಳಿತ ಹೆಚ್ಚಿರುವುದರಿಂದ ಹಂತ ಹಂತವಾಗಿ ಕೊಯ್ಲು ಮಾಡಿ ಮಾರುಕಟ್ಟೆಗೆ ಸಾಗಿಸಿ.",
    advisoryEnglish: "High returns during price peaks. Staggered harvest and mulching reduce disease risk and buffer price volatility."
  },
  onion: {
    id: "onion",
    name: "Onion",
    kannadaName: "ಈರುಳ್ಳಿ",
    category: "Horticulture / ತರಕಾರಿ",
    icon: "🧅",
    seasons: ["Kharif", "Rabi"],
    baseYieldPerHectare: 175.0, // quintals/ha (17.5 tons/ha)
    minYield: 110.0,
    maxYield: 260.0,
    costPerHectare: 68000,
    msp: 0,
    modalPrice: 2100, // ₹2100/qtl (₹21/kg)
    priceRange: { min: 1100, max: 3800 },
    volatility: "High (Subject to export bans & rainfall shocks)",
    waterNeed: "Medium (550-700mm)",
    growthDays: 120,
    optimalConditions: {
      rainfall: { min: 500, optimal: 650, max: 850 },
      temperature: { min: 18, optimal: 25, max: 33 },
      ph: { min: 6.2, optimal: 7.0, max: 7.8 },
      n: 110, p: 50, k: 80
    },
    advisoryKannada: "ಧಾರವಾಡ ಮತ್ತು ನಾಸಿಕ್ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ಬೇಡಿಕೆ. ಕಟಾವಿನ ನಂತರ ಸರಿಯಾಗಿ ಒಣಗಿಸಿ ದಾಸ್ತಾನು ಮಾಡಿದರೆ ಅಧಿಕ ಬೆಲೆ ಪಡೆಯಬಹುದು.",
    advisoryEnglish: "Proper curing and ventilated storage structures (Kanda Chawl) allow holding until off-season price peaks."
  },
  ginger: {
    id: "ginger",
    name: "Ginger",
    kannadaName: "ಶುಂಠಿ",
    category: "Spices / ಸಾಂಬಾರ ಬೆಳೆ",
    icon: "🫚",
    seasons: ["Kharif"],
    baseYieldPerHectare: 155.0, // quintals/ha
    minYield: 90.0,
    maxYield: 230.0,
    costPerHectare: 160000, // High seed rhizome cost
    msp: 0,
    modalPrice: 5600, // ₹5,600/qtl
    priceRange: { min: 3800, max: 8500 },
    volatility: "High Return / Moderate Risk",
    waterNeed: "High (1500-2000mm)",
    growthDays: 240,
    optimalConditions: {
      rainfall: { min: 1400, optimal: 1900, max: 3000 },
      temperature: { min: 21, optimal: 27, max: 33 },
      ph: { min: 5.5, optimal: 6.2, max: 6.8 },
      n: 100, p: 60, k: 120
    },
    advisoryKannada: "ಶಿವಮೊಗ್ಗ, ಉತ್ತರ ಕನ್ನಡ ಮತ್ತು ಹಾಸನ ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಭಾರಿ ಲಾಭ. ಗೆಡ್ಡೆ ಕೊಳೆ ರೋಗ ತಡೆಗಟ್ಟಲು ಬಸಿಗಾಲುವೆ ಮಾಡಿಕೊಳ್ಳಿ.",
    advisoryEnglish: "High capital crop with massive profit potential. Ensure raised bed cultivation to avoid rhizome rot in heavy rains."
  },
  coffee: {
    id: "coffee",
    name: "Coffee (Arabica / Robusta)",
    kannadaName: "ಕಾಫಿ",
    category: "Plantation / ತೋಟಗಾರಿಕೆ ಬೆಳೆ",
    icon: "☕",
    seasons: ["Whole Year"],
    baseYieldPerHectare: 12.5, // quintals clean coffee/ha
    minYield: 8.0,
    maxYield: 18.0,
    costPerHectare: 82000,
    msp: 0,
    modalPrice: 32000, // ₹32,000/qtl for parchment/cherry
    priceRange: { min: 26000, max: 41000 },
    volatility: "High (International ICE futures benchmark)",
    waterNeed: "High (1600-2400mm with blossom showers)",
    growthDays: 365,
    optimalConditions: {
      rainfall: { min: 1500, optimal: 2100, max: 3200 },
      temperature: { min: 16, optimal: 23, max: 29 },
      ph: { min: 5.2, optimal: 6.0, max: 6.5 },
      n: 90, p: 45, k: 90
    },
    advisoryKannada: "ಚಿಕ್ಕಮಗಳೂರು ಮತ್ತು ಕೊಡಗು ಬೆಟ್ಟ ಪ್ರದೇಶಗಳಿಗೆ ಮಾತ್ರ ಸೂಕ್ತ. ನೆರಳು ನಿರ್ವಹಣೆ ಮತ್ತು ಹೂ ಮಳೆ (Blossom showers) ಅತಿ ಮುಖ್ಯ.",
    advisoryEnglish: "Requires two-tier shade trees and timely blossom showers in March-April for high berry set."
  },
  banana: {
    id: "banana",
    name: "Banana (G9 / Yelakki)",
    kannadaName: "ಬಾಳೆ (ಏಲಕ್ಕಿ / ಜಿ-9)",
    category: "Horticulture / ಹಣ್ಣು",
    icon: "🍌",
    seasons: ["Whole Year"],
    baseYieldPerHectare: 520.0, // quintals/ha (52 tons/ha)
    minYield: 350.0,
    maxYield: 750.0,
    costPerHectare: 120000,
    msp: 0,
    modalPrice: 2250, // ₹2,250/qtl
    priceRange: { min: 1600, max: 3200 },
    volatility: "Medium",
    waterNeed: "High (1800-2200mm, drip)",
    growthDays: 330,
    optimalConditions: {
      rainfall: { min: 1200, optimal: 1700, max: 2500 },
      temperature: { min: 22, optimal: 28, max: 36 },
      ph: { min: 6.0, optimal: 6.8, max: 7.8 },
      n: 200, p: 60, k: 300 // Heavy potassium feeder
    },
    advisoryKannada: "ಕಾವೇರಿ ಕೊಳ್ಳ ಮತ್ತು ಮಲೆನಾಡಿನ ತೋಟಗಳಲ್ಲಿ ಉತ್ತಮ ಆದಾಯ. ಪೊಟ್ಯಾಷ್ ಗೊಬ್ಬರ ಗೊಂಚಲಿನ ತೂಕ ಮತ್ತು ಗುಣಮಟ್ಟ ಹೆಚ್ಚಿಸುತ್ತದೆ.",
    advisoryEnglish: "Heavy potassium application during bunch emergence improves finger length and sugar content."
  }
};

// Mandi Live Ticker simulation data (APMCs in Karnataka)
export const LIVE_MANDI_RATES = [
  { mandi: "Shivamogga APMC", crop: "Arecanut (Rashi)", price: 49200, change: "+₹450", trend: "up" },
  { mandi: "Shivamogga APMC", crop: "Paddy (Jyothi)", price: 2460, change: "+₹30", trend: "up" },
  { mandi: "Belagavi APMC", crop: "Maize (Hybrid)", price: 2310, change: "-₹15", trend: "down" },
  { mandi: "Belagavi APMC", crop: "Sugarcane (FRP)", price: 355, change: "0", trend: "neutral" },
  { mandi: "Davanagere APMC", crop: "Maize (Yellow)", price: 2340, change: "+₹25", trend: "up" },
  { mandi: "Davanagere APMC", crop: "Cotton (DCH-32)", price: 7920, change: "+₹110", trend: "up" },
  { mandi: "Kolar APMC", crop: "Tomato (Hybrid)", price: 1980, change: "+₹140", trend: "up" },
  { mandi: "Kalaburagi APMC", crop: "Red Gram (Tur)", price: 8550, change: "+₹65", trend: "up" },
  { mandi: "Hubballi APMC", crop: "Bengal Gram", price: 5950, change: "-₹20", trend: "down" },
  { mandi: "Chikkamagaluru APMC", crop: "Coffee (Arabica Cherry)", price: 14200, change: "+₹280", trend: "up" },
  { mandi: "Bandipalya Mysuru", crop: "Ragi (Clean)", price: 4480, change: "+₹40", trend: "up" }
];

// Model Comparison Benchmarks from Academic Testing (Synopsis Sections 6 & 7)
export const MODEL_EVALUATION_METRICS = {
  yieldModels: [
    {
      name: "Random Forest Regressor",
      kannadaName: "ರ್ಯಾಂಡಮ್ ಫಾರೆಸ್ಟ್ ರಿಗ್ರೆಸರ್",
      r2: 0.934,
      rmse: 3.84, // quintals/ha error
      mae: 2.62,
      trainingTime: "4.2s",
      features: "Area, Rainfall, Temp, N, P, K, pH, Soil Type",
      status: "Selected (Best Performer)"
    },
    {
      name: "Gradient Boosting (XGBoost)",
      kannadaName: "ಎಕ್ಸ್‌ಜಿಬೂಸ್ಟ್ (XGBoost)",
      r2: 0.918,
      rmse: 4.28,
      mae: 3.05,
      trainingTime: "6.8s",
      features: "Area, Rainfall, Temp, N, P, K, pH, Soil Type",
      status: "High Accuracy"
    },
    {
      name: "Linear Regression (Baseline)",
      kannadaName: "ಲೀನಿಯರ್ ರಿಗ್ರೆಷನ್ (ಬೇಸ್‌ಲೈನ್)",
      r2: 0.742,
      rmse: 8.76,
      mae: 6.54,
      trainingTime: "0.4s",
      features: "Area, Rainfall, Temp, N, P, K",
      status: "Baseline"
    }
  ],
  priceModels: [
    {
      name: "LSTM Neural Network (Time-Series)",
      kannadaName: "ಎಲ್‌ಎಸ್‌ಟಿಎಂ ನ್ಯೂರಲ್ ನೆಟ್‌ವರ್ಕ್",
      rmse: 138.4, // ₹/quintal error
      mae: 96.2,
      mape: "4.2%",
      sequenceLength: "24 months lookback",
      status: "Selected (Best Forecaster)"
    },
    {
      name: "ARIMA (AutoRegressive Integrated Moving Average)",
      kannadaName: "ಅರಿಮಾ (ARIMA 2,1,2)",
      rmse: 214.8,
      mae: 158.0,
      mape: "7.8%",
      sequenceLength: "Historical lag terms",
      status: "Traditional Statistical"
    }
  ],
  featureImportance: [
    { feature: "Annual / Seasonal Rainfall", importance: 28.5 },
    { feature: "Soil Nitrogen (N)", importance: 21.4 },
    { feature: "Mean Temperature (°C)", importance: 16.8 },
    { feature: "Soil Potassium (K)", importance: 13.2 },
    { feature: "Soil Phosphorus (P)", importance: 11.5 },
    { feature: "Soil pH Level", importance: 8.6 }
  ]
};
