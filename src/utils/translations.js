// Bilingual (English & Kannada) translations dictionary

export const TRANSLATIONS = {
  en: {
    appTitle: "Smart Crop Yield & Price Predictor",
    appSubtitle: "AI-Powered Dual Agricultural Forecasting & Profit Optimization System",
    affiliation: "Dept. of Computer Science & Engineering | JNNCE Shivamogga | VTU Belagavi",
    projectBatch: "VTU Mini-Project Batch: A2 (2026)",
    
    // Navigation Tabs
    tabPredictor: "Dual Predictor",
    tabRecommender: "Best Crop Advisor",
    tabMandi: "Mandi Rates & Trends",
    tabModels: "ML Models & Research",
    tabSynopsis: "Project Synopsis",

    // Farmer Form
    locationHeader: "1. Land & Location Details",
    stateLabel: "State",
    districtLabel: "District",
    seasonLabel: "Crop Season",
    cropLabel: "Target Crop",
    landAreaLabel: "Farm Land Area",
    unitAcre: "Acres",
    unitHectare: "Hectares",
    
    // Soil & Weather
    soilWeatherHeader: "2. Soil & Climate Parameters",
    autoFilledNote: "Auto-synced with Soil Health Card & IMD/NASA POWER Weather benchmarks for",
    toggleCustomSoil: "Customize Soil & Weather Sliders",
    useDefaultValues: "Use District Standards",
    rainfallLabel: "Annual / Seasonal Rainfall",
    tempLabel: "Average Temperature",
    humidityLabel: "Relative Humidity",
    nitrogenLabel: "Soil Nitrogen (N)",
    phosphorusLabel: "Soil Phosphorus (P)",
    potassiumLabel: "Soil Potassium (K)",
    phLabel: "Soil pH Level",
    unitKgHa: "kg/ha",
    unitMm: "mm",
    unitCelsius: "°C",

    // Action Buttons
    predictButton: "Predict Yield & Market Price",
    predicting: "Running Random Forest & LSTM Models...",
    printCard: "Print Kisan Advisory Card",
    compareAllCrops: "Compare All Crops",
    viewResearch: "View Model Validation (R² 0.934)",

    // Result Headings
    resultTitle: "Forecast Results & Economic Advisory",
    yieldCardTitle: "Crop Yield Forecast",
    yieldPerUnit: "Yield per Hectare",
    yieldPerAcre: "Yield per Acre",
    totalProduction: "Total Estimated Production",
    modelConfidence: "Model Confidence Score",
    modelAlgorithm: "Regression Algorithm",

    // Price Card
    priceCardTitle: "Market Price Forecast (LSTM)",
    expectedModalPrice: "Expected Harvest Modal Price",
    priceRange: "Expected Mandi Range",
    mspFloor: "Govt. MSP Benchmark",
    mspGain: "Gain over MSP",
    optimalSellMonth: "Best Month to Sell",
    nearestMandi: "Primary Benchmark Mandi",

    // Economics
    financialSummary: "Farm Financial Profitability Projection",
    grossRevenue: "Gross Market Revenue",
    cultivationCost: "Total Cultivation Cost",
    netProfit: "Expected Net Profit",
    roiPercent: "Return on Investment (ROI)",
    breakEven: "Break-Even Price",
    profitPerAcre: "Net Profit / Acre",
    profitPerHectare: "Net Profit / Hectare",

    // Advisory
    agronomicAdvisory: "Agronomic & Mandi Advisory",
    waterRequirement: "Water Requirement",
    cropCategory: "Category",
    growthPeriod: "Growth Duration",
    days: "days",

    // Recommender
    recommenderTitle: "Crop Profitability & Suitability Rankings",
    recommenderSubtitle: "Which crop should you cultivate in this district for maximum return?",
    rankHeader: "Rank",
    cropHeader: "Crop",
    yieldEstimate: "Est. Yield",
    expectedPrice: "Est. Price",
    estRevenue: "Est. Revenue",
    estCost: "Est. Cost",
    estNetProfit: "Net Profit",
    suitabilityScore: "Match Score",
    actionHeader: "Action",
    selectCrop: "Select & Analyze",
    topRecommendationBadge: "Highest Profit Potential",

    // Live Mandi
    liveMandiTitle: "Live APMC Mandi Rates & Time-Series Forecasting",
    liveMandiSubtitle: "Real-time market price arrivals & 6-month forward neural network forecasts",
    historicalTrend: "Past 12-Month Arrivals vs. 6-Month LSTM Future Projection",
    viewCrop: "Select Commodity for Forecast Curve",
    volatilityWarning: "Extreme seasonal swings observed. Consider staggered harvesting.",

    // Models & Research
    researchTitle: "Machine Learning Architecture & Comparative Evaluation",
    researchSubtitle: "Benchmarking Regression & Deep Learning models on district-level agricultural data",
    yieldModelsTitle: "Yield Prediction Models (Regression Evaluation)",
    priceModelsTitle: "Price Forecasting Models (Time-Series Evaluation)",
    featureImportanceTitle: "Random Forest Feature Importance Analysis",
    dataSourcesTitle: "Government & Satellite Datasets Used",
    methodologyTitle: "System Pipeline & Workflow",

    // Synopsis Modal
    synopsisTitle: "Mini-Project Synopsis (VTU / JNNCE)",
    synopsisSubtitle: "Department of Computer Science & Engineering, JNNCE Shivamogga - 577204",
    studentsHeader: "Project Batch No: A2",
    guideHeader: "Under the Guidance of",
    problemIdentifiedTitle: "1. Problem Identified",
    existingSolutionsTitle: "2. Existing Solutions & Limitations",
    proposedSolutionTitle: "3. Proposed Solution & Advantages",
    objectivesTitle: "4. Objectives",
    datasetsTitle: "5. Dataset Description",
    mlModelsTitle: "6. Machine Learning Models",
    expectedOutcomesTitle: "7. Expected Outcomes",
    closeBtn: "Close Synopsis"
  },
  kn: {
    appTitle: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಇಳುವರಿ ಮತ್ತು ಬೆಲೆ ಮುನ್ಸೂಚಕ",
    appSubtitle: "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಆಧಾರಿತ ದ್ವಿಮುಖ ಕೃಷಿ ಮುನ್ಸೂಚನೆ ಮತ್ತು ಲಾಭ ಆಪ್ಟಿಮೈಸೇಶನ್ ವ್ಯವಸ್ಥೆ",
    affiliation: "ಗಣಕ ವಿಜ್ಞಾನ ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್ ವಿಭಾಗ | ಜೆಎನ್‌ಎನ್‌ಸಿಇ ಶಿವಮೊಗ್ಗ | ವಿಟಿಯು ಬೆಳಗಾವಿ",
    projectBatch: "ವಿಟಿಯು ಮಿನಿ-ಪ್ರಾಜೆಕ್ಟ್ ಬ್ಯಾಚ್: ಎ2 (2026)",
    
    // Navigation Tabs
    tabPredictor: "ದ್ವಿಮುಖ ಮುನ್ಸೂಚಕ",
    tabRecommender: "ಉತ್ತಮ ಬೆಳೆ ಸಲಹೆಗಾರ",
    tabMandi: "ಮಾರುಕಟ್ಟೆ ದರಗಳು ಮತ್ತು ಟ್ರೆಂಡ್ಸ್",
    tabModels: "ಎಂಎಲ್ ಮಾದರಿಗಳು ಮತ್ತು ಸಂಶೋಧನೆ",
    tabSynopsis: "ಪ್ರಾಜೆಕ್ಟ್ ಸಾರಾಂಶ",

    // Farmer Form
    locationHeader: "೧. ಭೂಮಿ ಮತ್ತು ಪ್ರದೇಶದ ವಿವರಗಳು",
    stateLabel: "ರಾಜ್ಯ",
    districtLabel: "ಜಿಲ್ಲೆ",
    seasonLabel: "ಬೆಳೆ ಹಂಗಾಮು",
    cropLabel: "ಉದ್ದೇಶಿತ ಬೆಳೆ",
    landAreaLabel: "ಕೃಷಿ ಭೂಮಿಯ ವಿಸ್ತೀರ್ಣ",
    unitAcre: "ಎಕರೆಗಳು",
    unitHectare: "ಹೆಕ್ಟೇರ್‌ಗಳು",
    
    // Soil & Weather
    soilWeatherHeader: "೨. ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ನಿಯತಾಂಕಗಳು",
    autoFilledNote: "ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಮತ್ತು ಹವಾಮಾನ ಉಪಗ್ರಹ ದತ್ತಾಂಶದೊಂದಿಗೆ ಜೋಡಿಸಲಾಗಿದೆ:",
    toggleCustomSoil: "ಸ್ವಂತ ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ಮೌಲ್ಯಗಳನ್ನು ಹೊಂದಿಸಿ",
    useDefaultValues: "ಜಿಲ್ಲಾ ಗುಣಮಟ್ಟದ ಮೌಲ್ಯಗಳನ್ನು ಬಳಸಿ",
    rainfallLabel: "ವಾರ್ಷಿಕ / ಹಂಗಾಮಿನ ಮಳೆ",
    tempLabel: "ಸರಾಸರಿ ತಾಪಮಾನ",
    humidityLabel: "ಸಾಮಾನ್ಯ ತೇವಾಂಶ",
    nitrogenLabel: "ಮಣ್ಣಿನ ಸಾರಜನಕ (N)",
    phosphorusLabel: "ಮಣ್ಣಿನ ರಂಜಕ (P)",
    potassiumLabel: "ಮಣ್ಣಿನ ಪೊಟ್ಯಾಷ್ (K)",
    phLabel: "ಮಣ್ಣಿನ ಆಮ್ಲೀಯತೆ (pH)",
    unitKgHa: "ಕೆಜಿ/ಹೆಕ್ಟೇರ್",
    unitMm: "ಮಿ.ಮೀ",
    unitCelsius: "°ಸೆ",

    // Action Buttons
    predictButton: "ಇಳುವರಿ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಅಂದಾಜಿಸಿ",
    predicting: "ಮಾಡೆಲ್ ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತಿದೆ...",
    printCard: "ಕಿಸಾನ್ ವರದಿ ಕಾರ್ಡ್ ಮುದ್ರಿಸಿ",
    compareAllCrops: "ಎಲ್ಲಾ ಬೆಳೆಗಳನ್ನು ಹೋಲಿಕೆ ಮಾಡಿ",
    viewResearch: "ಎಂಎಲ್ ಮಾದರಿ ಪರಿಶೀಲನೆ (R² 0.934)",

    // Result Headings
    resultTitle: "ಮುನ್ಸೂಚನಾ ಫಲಿತಾಂಶಗಳು ಮತ್ತು ಆರ್ಥಿಕ ಸಲಹೆ",
    yieldCardTitle: "ಬೆಳೆ ಇಳುವರಿ ಮುನ್ಸೂಚನೆ",
    yieldPerUnit: "ಹೆಕ್ಟೇರ್‌ಗೆ ಇಳುವರಿ",
    yieldPerAcre: "ಎಕರೆಗೆ ಇಳುವರಿ",
    totalProduction: "ಒಟ್ಟು ನಿರೀಕ್ಷಿತ ಉತ್ಪಾದನೆ",
    modelConfidence: "ಮಾದರಿಯ ನಿಖರತೆ ಸ್ಕೋರ್",
    modelAlgorithm: "ಬಳಸಿದ ಎಂಎಲ್ ಅಲ್ಗಾರಿದಮ್",

    // Price Card
    priceCardTitle: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಮುನ್ಸೂಚನೆ (LSTM)",
    expectedModalPrice: "ಕೊಯ್ಲಿನ ಸಮಯದ ನಿರೀಕ್ಷಿತ ದರ",
    priceRange: "ನಿರೀಕ್ಷಿತ ಎಪಿಎಂಸಿ ದರ ಶ್ರೇಣಿ",
    mspFloor: "ಸರ್ಕಾರದ ಕನಿಷ್ಠ ಬೆಂಬಲ ಬೆಲೆ (MSP)",
    mspGain: "ಬೆಂಬಲ ಬೆಲೆಗಿಂತ ಹೆಚ್ಚಿನ ಲಾಭ",
    optimalSellMonth: "ಮಾರಾಟಕ್ಕೆ ಸೂಕ್ತ ತಿಂಗಳು",
    nearestMandi: "ಪ್ರಮುಖ ಎಪಿಎಂಸಿ ಮಾರುಕಟ್ಟೆ",

    // Economics
    financialSummary: "ಕೃಷಿ ಆರ್ಥಿಕ ಲಾಭದ ಮುನ್ನೋಟ",
    grossRevenue: "ಒಟ್ಟು ಮಾರುಕಟ್ಟೆ ಆದಾಯ",
    cultivationCost: "ಒಟ್ಟು ಬೇಸಾಯ ವೆಚ್ಚ",
    netProfit: "ನಿರೀಕ್ಷಿತ ನಿವ್ವಳ ಲಾಭ",
    roiPercent: "ಹೂಡಿಕೆಯ ಮೇಲಿನ ಲಾಭಾಂಶ (ROI)",
    breakEven: "ಖರ್ಚು ಸರಿದೂಗುವ ದರ",
    profitPerAcre: "ಎಕರೆಗೆ ನಿವ್ವಳ ಲಾಭ",
    profitPerHectare: "ಹೆಕ್ಟೇರ್‌ಗೆ ನಿವ್ವಳ ಲಾಭ",

    // Advisory
    agronomicAdvisory: "ಕೃಷಿ ಸಲಹೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ತಂತ್ರ",
    waterRequirement: "ನೀರಿನ ಅಗತ್ಯತೆ",
    cropCategory: "ಬೆಳೆಯ ವರ್ಗ",
    growthPeriod: "ಬೆಳೆಯ ಅವಧಿ",
    days: "ದಿನಗಳು",

    // Recommender
    recommenderTitle: "ಬೆಳೆಗಳ ಲಾಭದಾಯಕತೆ ಮತ್ತು ಶ್ರೇಯಾಂಕ ಪಟ್ಟಿ",
    recommenderSubtitle: "ಹೆಚ್ಚಿನ ಆದಾಯ ಪಡೆಯಲು ಈ ಜಿಲ್ಲೆಯಲ್ಲಿ ಯಾವ ಬೆಳೆಯನ್ನು ಬೆಳೆಯಬೇಕು?",
    rankHeader: "ಶ್ರೇಣಿ",
    cropHeader: "ಬೆಳೆ",
    yieldEstimate: "ಅಂದಾಜು ಇಳುವರಿ",
    expectedPrice: "ನಿರೀಕ್ಷಿತ ದರ",
    estRevenue: "ಅಂದಾಜು ಆದಾಯ",
    estCost: "ಬೇಸಾಯ ವೆಚ್ಚ",
    estNetProfit: "ನಿವ್ವಳ ಲಾಭ",
    suitabilityScore: "ಹೊಂದಾಣಿಕೆ ಅಂಕ",
    actionHeader: "ಕ್ರಮ",
    selectCrop: "ಆಯ್ಕೆಮಾಡಿ ವಿಶ್ಲೇಷಿಸಿ",
    topRecommendationBadge: "ಅತ್ಯಂತ ಲಾಭದಾಯಕ ಬೆಳೆ",

    // Live Mandi
    liveMandiTitle: "ನೇರ ಎಪಿಎಂಸಿ ಮಾರುಕಟ್ಟೆ ದರಗಳು ಮತ್ತು ಬೆಲೆ ಮುನ್ನೋಟ",
    liveMandiSubtitle: "ನೈಜ ಸಮಯದ ಮಾರುಕಟ್ಟೆ ಆವಕ ದರಗಳು ಮತ್ತು ೬ ತಿಂಗಳ ಮುಂದಿನ ಮುನ್ಸೂಚನೆ",
    historicalTrend: "ಕಳೆದ ೧೨ ತಿಂಗಳ ದರಗಳು vs ೬ ತಿಂಗಳ LSTM ಮುಂದಿನ ಮುನ್ನೋಟ",
    viewCrop: "ಬೆಲೆಯ ಗ್ರಾಫ್ ವೀಕ್ಷಿಸಲು ಬೆಳೆಯನ್ನು ಆರಿಸಿ",
    volatilityWarning: "ಹೆಚ್ಚಿನ ಬೆಲೆ ಏರಿಳಿತವಿದೆ. ಹಂತ ಹಂತವಾಗಿ ಮಾರಾಟ ಮಾಡುವುದು ಸೂಕ್ತ.",

    // Models & Research
    researchTitle: "ಯಂತ್ರ ಕಲಿಕೆ (ML) ವಿನ್ಯಾಸ ಮತ್ತು ತುಲನಾತ್ಮಕ ಅಧ್ಯಯನ",
    researchSubtitle: "ಜಿಲ್ಲಾ ಮಟ್ಟದ ಕೃಷಿ ದತ್ತಾಂಶದ ಮೇಲೆ ರಿಗ್ರೆಷನ್ ಮತ್ತು ಡೀಪ್ ಲರ್ನಿಂಗ್ ಮಾದರಿಗಳ ಮೌಲ್ಯಮಾಪನ",
    yieldModelsTitle: "ಇಳುವರಿ ಮುನ್ಸೂಚನೆ ಮಾದರಿಗಳು (ರಿಗ್ರೆಷನ್ ಮೌಲ್ಯಮಾಪನ)",
    priceModelsTitle: "ಬೆಲೆ ಮುನ್ಸೂಚನೆ ಮಾದರಿಗಳು (ಟೈಮ್ ಸೀರೀಸ್ ಮೌಲ್ಯಮಾಪನ)",
    featureImportanceTitle: "ರ್ಯಾಂಡಮ್ ಫಾರೆಸ್ಟ್ ಪ್ರಮುಖ ನಿಯತಾಂಕಗಳ ಪ್ರಭಾವ",
    dataSourcesTitle: "ಬಳಸಿದ ಸರ್ಕಾರಿ ಮತ್ತು ಉಪಗ್ರಹ ದತ್ತಾಂಶ ಮೂಲಗಳು",
    methodologyTitle: "ವ್ಯವಸ್ಥೆಯ ಹಂತಗಳು ಮತ್ತು ಕಾರ್ಯವಿಧಾನ",

    // Synopsis Modal
    synopsisTitle: "ವಿಟಿಯು ಮಿನಿ-ಪ್ರಾಜೆಕ್ಟ್ ಸಾರಾಂಶ (JNNCE)",
    synopsisSubtitle: "ಗಣಕ ವಿಜ್ಞಾನ ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್ ವಿಭಾಗ, ಜೆಎನ್‌ಎನ್‌ಸಿಇ ಶಿವಮೊಗ್ಗ - 577204",
    studentsHeader: "ಯೋಜನಾ ತಂಡ (ಬ್ಯಾಚ್ ಸಂಖ್ಯೆ: A2)",
    guideHeader: "ಮಾರ್ಗದರ್ಶಕರು",
    problemIdentifiedTitle: "೧. ಗುರುತಿಸಲಾದ ಸಮಸ್ಯೆ (Problem Identified)",
    existingSolutionsTitle: "೨. ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಪರಿಹಾರಗಳು (Existing Solutions)",
    proposedSolutionTitle: "೩. ಪ್ರಸ್ತಾಪಿತ ಪರಿಹಾರ ಮತ್ತು ಅನುಕೂಲಗಳು (Proposed Solution)",
    objectivesTitle: "೪. ಉದ್ದೇಶಗಳು (Objectives)",
    datasetsTitle: "೫. ದತ್ತಾಂಶ ವಿವರಣೆ (Dataset Description)",
    mlModelsTitle: "೬. ಮೆಷಿನ್ ಲರ್ನಿಂಗ್ ಮಾದರಿಗಳು (Machine Learning Model)",
    expectedOutcomesTitle: "೭. ನಿರೀಕ್ಷಿತ ಫಲಿತಾಂಶಗಳು (Expected Outcomes)",
    closeBtn: "ಮುಚ್ಚಿರಿ"
  }
};
