import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  MapPin, 
  Calendar, 
  Sliders, 
  Layers, 
  TrendingUp, 
  Coins, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp, 
  Droplets, 
  Thermometer, 
  FlaskConical,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  BarChart2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CROPS_DATA, DISTRICTS_DATA } from '../data/agriData';
import { predictYield, generatePriceForecast, calculateEconomics } from '../utils/mlEngine';
import { TRANSLATIONS } from '../utils/translations';

export default function PredictorTab({
  lang,
  onNavigateToRecommender,
  onNavigateToModels,
  onPrintReport,
  sharedState,
  setSharedState
}) {
  const t = TRANSLATIONS[lang];

  // Form State
  const [selectedState, setSelectedState] = useState(sharedState?.stateName || "Karnataka");
  const [selectedDistrictId, setSelectedDistrictId] = useState(sharedState?.districtId || "shivamogga");
  const [selectedCropId, setSelectedCropId] = useState(sharedState?.cropId || "paddy");
  const [selectedSeason, setSelectedSeason] = useState(sharedState?.season || "Kharif");
  const [landArea, setLandArea] = useState(sharedState?.landArea || 2);
  const [areaUnit, setAreaUnit] = useState(sharedState?.areaUnit || "acre"); // 'acre' or 'hectare'

  // Soil & Weather Customization
  const [isCustomSoilOpen, setIsCustomSoilOpen] = useState(false);
  const [customParams, setCustomParams] = useState({
    rainfall: 1820,
    temp: 26.5,
    humidity: 78,
    n: 110,
    p: 45,
    k: 55,
    ph: 6.2
  });

  // Prediction Output State
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);

  const districts = DISTRICTS_DATA[selectedState] || DISTRICTS_DATA["Karnataka"];
  const currentDistrict = districts.find(d => d.id === selectedDistrictId) || districts[0];
  const currentCrop = CROPS_DATA[selectedCropId] || CROPS_DATA.paddy;

  // Whenever district changes, update default soil & weather params
  useEffect(() => {
    if (currentDistrict) {
      setCustomParams({
        rainfall: currentDistrict.avgRainfall,
        temp: currentDistrict.avgTemp,
        humidity: currentDistrict.avgHumidity,
        n: currentDistrict.defaultNPK.n,
        p: currentDistrict.defaultNPK.p,
        k: currentDistrict.defaultNPK.k,
        ph: currentDistrict.defaultNPK.ph
      });
    }
  }, [selectedDistrictId, selectedState]);

  // Initial prediction on load or when incoming shared state changes
  useEffect(() => {
    handleRunPrediction();
  }, [selectedCropId, selectedDistrictId, selectedSeason, landArea, areaUnit]);

  const handleRunPrediction = () => {
    setIsLoading(true);

    setTimeout(() => {
      // Area conversion to hectares for internal ML model
      const areaInHectares = areaUnit === 'acre' ? landArea / 2.47105 : landArea;

      const yieldRes = predictYield({
        cropId: selectedCropId,
        districtId: selectedDistrictId,
        stateName: selectedState,
        areaInHectares,
        season: selectedSeason,
        soilNPK: {
          n: customParams.n,
          p: customParams.p,
          k: customParams.k,
          ph: customParams.ph
        },
        weatherParams: {
          rainfall: customParams.rainfall,
          temp: customParams.temp,
          humidity: customParams.humidity
        }
      });

      const priceRes = generatePriceForecast(selectedCropId, selectedDistrictId);

      const econRes = calculateEconomics({
        yieldResult: yieldRes,
        priceResult: priceRes,
        areaInHectares,
        cropId: selectedCropId
      });

      const newResults = {
        yield: yieldRes,
        price: priceRes,
        economics: econRes,
        district: currentDistrict,
        crop: currentCrop,
        areaInHectares,
        landArea,
        areaUnit,
        season: selectedSeason
      };

      setResults(newResults);
      setSharedState(prev => ({
        ...prev,
        stateName: selectedState,
        districtId: selectedDistrictId,
        cropId: selectedCropId,
        season: selectedSeason,
        landArea,
        areaUnit,
        latestResult: newResults
      }));

      setIsLoading(false);

      if (econRes.netProfit > 60000) {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    }, 350);
  };

  const handleResetDefaults = () => {
    if (currentDistrict) {
      setCustomParams({
        rainfall: currentDistrict.avgRainfall,
        temp: currentDistrict.avgTemp,
        humidity: currentDistrict.avgHumidity,
        n: currentDistrict.defaultNPK.n,
        p: currentDistrict.defaultNPK.p,
        k: currentDistrict.defaultNPK.k,
        ph: currentDistrict.defaultNPK.ph
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 rounded-2xl text-white p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-10 translate-y-10">
          <Sprout className="w-80 h-80 text-white" />
        </div>

        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 px-3 py-1 rounded-full text-xs font-semibold text-emerald-100 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Random Forest Yield Regression + LSTM Price Forecasting Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            {lang === 'kn' ? 'ಬೆಳೆ ಇಳುವರಿ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಮುನ್ಸೂಚನೆ' : 'Smart Dual Yield & Market Price Predictor'}
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            {lang === 'kn' 
              ? 'ನಿಮ್ಮ ಜಮೀನಿನ ಮಣ್ಣು, ಸ್ಥಳೀಯ ಹವಾಮಾನ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಆವಕದ ದತ್ತಾಂಶವನ್ನು ಆಧರಿಸಿ ಎಷ್ಟು ಇಳುವರಿ ಬರುತ್ತದೆ ಹಾಗೂ ಕೊಯ್ಲಿನ ಸಮಯದಲ್ಲಿ ಎಷ್ಟು ಬೆಲೆ ಸಿಗುತ್ತದೆ ಎಂಬುದನ್ನು ಒಟ್ಟಿಗೆ ಅಂದಾಜಿಸಿ.'
              : 'Overcomes the limitations of single-sided tools by uniting district-level soil-climate yield models with time-series mandi price forecasts to calculate complete expected farm revenue and net profit.'}
          </p>
        </div>
      </div>

      {/* Main Grid: Input Form (Left) & Results Dashboard (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 text-base">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>{t.locationHeader}</span>
              </h3>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                Step 1 of 2
              </span>
            </div>

            {/* State & District Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t.stateLabel}
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => {
                    const newState = e.target.value;
                    setSelectedState(newState);
                    const newDists = DISTRICTS_DATA[newState] || [];
                    if (newDists.length > 0) setSelectedDistrictId(newDists[0].id);
                  }}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                >
                  {Object.keys(DISTRICTS_DATA).map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t.districtLabel}
                </label>
                <select
                  value={selectedDistrictId}
                  onChange={(e) => setSelectedDistrictId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                >
                  {districts.map(d => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.kannadaName})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* District Agro-Climatic Zone info chip */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 text-xs text-emerald-900 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-emerald-950">
                  {currentDistrict.name} Agro-Climatic Zone:
                </div>
                <div className="text-emerald-800">
                  {currentDistrict.zone} • Soil: {currentDistrict.soilType}
                </div>
                <div className="text-emerald-700 text-[11px] mt-0.5">
                  Benchmark Mandi: <strong className="font-semibold">{currentDistrict.majorMandi}</strong>
                </div>
              </div>
            </div>

            {/* Target Crop & Season */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t.cropLabel}
                </label>
                <select
                  value={selectedCropId}
                  onChange={(e) => setSelectedCropId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                >
                  {Object.values(CROPS_DATA).map(crop => (
                    <option key={crop.id} value={crop.id}>
                      {crop.icon} {crop.name} ({crop.kannadaName})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t.seasonLabel}
                </label>
                <select
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                >
                  <option value="Kharif">Kharif / ಮುಂಗಾರು (Jun - Oct)</option>
                  <option value="Rabi">Rabi / ಹಿಂಗಾರು (Nov - Mar)</option>
                  <option value="Summer">Summer / ಬೇಸಿಗೆ (Feb - May)</option>
                  <option value="Whole Year">Whole Year / ವಾರ್ಷಿಕ</option>
                </select>
              </div>
            </div>

            {/* Farm Land Area & Unit Toggle */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.landAreaLabel}
              </label>
              <div className="flex rounded-xl overflow-hidden border border-slate-300 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500">
                <input
                  type="number"
                  min="0.1"
                  step="0.25"
                  value={landArea}
                  onChange={(e) => setLandArea(Math.max(0.1, parseFloat(e.target.value) || 1))}
                  className="w-full bg-slate-50 px-3 py-2 text-sm font-bold text-slate-900 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setAreaUnit('acre')}
                  className={`px-3 py-2 text-xs font-bold transition-colors ${
                    areaUnit === 'acre'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t.unitAcre}
                </button>
                <button
                  type="button"
                  onClick={() => setAreaUnit('hectare')}
                  className={`px-3 py-2 text-xs font-bold transition-colors ${
                    areaUnit === 'hectare'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t.unitHectare}
                </button>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                {areaUnit === 'acre' 
                  ? `≈ ${(landArea / 2.47105).toFixed(2)} Hectares`
                  : `≈ ${(landArea * 2.47105).toFixed(2)} Acres`}
              </p>
            </div>
          </div>

          {/* Soil & Weather Card (Auto-filled with district baseline, expandable for custom test inputs) */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                  <FlaskConical className="w-4 h-4 text-emerald-600" />
                  <span>{t.soilWeatherHeader}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.autoFilledNote} <strong className="text-slate-700">{currentDistrict.name}</strong>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCustomSoilOpen(!isCustomSoilOpen)}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200 transition-colors flex items-center gap-1"
              >
                <span>{isCustomSoilOpen ? 'Hide Sliders' : 'Fine-Tune'}</span>
                {isCustomSoilOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Quick Metrics Badges (Always visible) */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2">
                <div className="text-[10px] text-slate-500 uppercase font-bold flex items-center justify-center gap-1">
                  <Droplets className="w-3 h-3 text-sky-500" /> Rain
                </div>
                <div className="text-xs font-extrabold text-slate-800 mt-0.5">{customParams.rainfall} mm</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2">
                <div className="text-[10px] text-slate-500 uppercase font-bold flex items-center justify-center gap-1">
                  <Thermometer className="w-3 h-3 text-amber-500" /> Temp
                </div>
                <div className="text-xs font-extrabold text-slate-800 mt-0.5">{customParams.temp} °C</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2">
                <div className="text-[10px] text-slate-500 uppercase font-bold">N-P-K</div>
                <div className="text-xs font-extrabold text-slate-800 mt-0.5">
                  {customParams.n}-{customParams.p}-{customParams.k}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2">
                <div className="text-[10px] text-slate-500 uppercase font-bold">Soil pH</div>
                <div className="text-xs font-extrabold text-emerald-700 mt-0.5">{customParams.ph}</div>
              </div>
            </div>

            {/* Expandable Custom Sliders */}
            {isCustomSoilOpen && (
              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-700">{t.toggleCustomSoil}</span>
                  <button
                    type="button"
                    onClick={handleResetDefaults}
                    className="text-[11px] text-emerald-700 hover:underline inline-flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>{t.useDefaultValues}</span>
                  </button>
                </div>

                {/* Rainfall Slider */}
                <div>
                  <div className="flex justify-between text-slate-600 mb-1">
                    <span>{t.rainfallLabel}:</span>
                    <span className="font-bold text-slate-900">{customParams.rainfall} mm</span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="4500"
                    step="50"
                    value={customParams.rainfall}
                    onChange={(e) => setCustomParams({ ...customParams, rainfall: Number(e.target.value) })}
                    className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Temp Slider */}
                <div>
                  <div className="flex justify-between text-slate-600 mb-1">
                    <span>{t.tempLabel}:</span>
                    <span className="font-bold text-slate-900">{customParams.temp} °C</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="42"
                    step="0.5"
                    value={customParams.temp}
                    onChange={(e) => setCustomParams({ ...customParams, temp: Number(e.target.value) })}
                    className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                </div>

                {/* N-P-K Sliders Grid */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>N:</span>
                      <span className="font-bold">{customParams.n}</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="250"
                      value={customParams.n}
                      onChange={(e) => setCustomParams({ ...customParams, n: Number(e.target.value) })}
                      className="w-full accent-emerald-600 h-1 bg-slate-200 rounded cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>P:</span>
                      <span className="font-bold">{customParams.p}</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="120"
                      value={customParams.p}
                      onChange={(e) => setCustomParams({ ...customParams, p: Number(e.target.value) })}
                      className="w-full accent-emerald-600 h-1 bg-slate-200 rounded cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>K:</span>
                      <span className="font-bold">{customParams.k}</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="150"
                      value={customParams.k}
                      onChange={(e) => setCustomParams({ ...customParams, k: Number(e.target.value) })}
                      className="w-full accent-emerald-600 h-1 bg-slate-200 rounded cursor-pointer"
                    />
                  </div>
                </div>

                {/* Soil pH Slider */}
                <div>
                  <div className="flex justify-between text-slate-600 mb-1">
                    <span>{t.phLabel}:</span>
                    <span className="font-bold text-slate-900">{customParams.ph}</span>
                  </div>
                  <input
                    type="range"
                    min="4.5"
                    max="9.0"
                    step="0.1"
                    value={customParams.ph}
                    onChange={(e) => setCustomParams({ ...customParams, ph: Number(e.target.value) })}
                    className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* Run Prediction CTA Button */}
            <button
              type="button"
              onClick={handleRunPrediction}
              disabled={isLoading}
              className="w-full mt-2 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-emerald-700/25 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{t.predicting}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{t.predictButton}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Prediction Results Dashboard */}
        <div className="lg:col-span-7 space-y-5">
          {results && (
            <>
              {/* Top Summary Banner */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-emerald-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2 bg-emerald-50 rounded-2xl border border-emerald-200">
                    {currentCrop.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        {currentCrop.name}
                      </h3>
                      <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                        {currentCrop.kannadaName}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      {currentDistrict.name} ({currentDistrict.kannadaName}) • {selectedSeason} Season • {landArea} {areaUnit === 'acre' ? 'Acres' : 'Hectares'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>ML Validated</span>
                  </span>
                </div>
              </div>

              {/* Dual Forecaster Cards: Yield (Left) & Price (Right) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Yield Forecast Card */}
                <div className="bg-gradient-to-b from-white to-emerald-50/40 rounded-2xl p-5 shadow-sm border border-emerald-200 flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                        <Sprout className="w-4 h-4 text-emerald-600" />
                        <span>{t.yieldCardTitle}</span>
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {results.yield.confidenceScore}% {lang === 'kn' ? 'ನಿಖರತೆ' : 'Confidence'}
                      </span>
                    </div>

                    <div>
                      <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        {areaUnit === 'acre' 
                          ? `${(results.yield.rfYieldPerHa / 2.47105).toFixed(1)} qtl/acre`
                          : `${results.yield.rfYieldPerHa} qtl/ha`}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {areaUnit === 'acre' 
                          ? `≈ ${results.yield.rfYieldPerHa} quintals/hectare`
                          : `≈ ${(results.yield.rfYieldPerHa / 2.47105).toFixed(1)} quintals/acre`}
                      </p>
                    </div>

                    <div className="bg-white/80 rounded-xl p-3 border border-emerald-100 space-y-1.5 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">{t.totalProduction}:</span>
                        <span className="font-bold text-slate-900">
                          {results.yield.totalQuintals.toLocaleString()} Quintals
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] text-slate-500">
                        <span>Metric Tonnes:</span>
                        <span className="font-semibold text-slate-700">{results.yield.totalTonnes} Tonnes</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-emerald-100/80 text-[11px] text-slate-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Random Forest (Best):</span>
                      <strong className="text-emerald-700">{results.yield.rfYieldPerHa} qtl/ha</strong>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>XGBoost comparison:</span>
                      <span>{results.yield.xgbYieldPerHa} qtl/ha</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Linear Regression baseline:</span>
                      <span>{results.yield.lrYieldPerHa} qtl/ha</span>
                    </div>
                  </div>
                </div>

                {/* 2. Price Forecast Card */}
                <div className="bg-gradient-to-b from-white to-amber-50/40 rounded-2xl p-5 shadow-sm border border-amber-200 flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-amber-600" />
                        <span>{t.priceCardTitle}</span>
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        LSTM Model
                      </span>
                    </div>

                    <div>
                      <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        ₹{results.price.predictedHarvestPrice.toLocaleString('en-IN')}{' '}
                        <span className="text-sm font-semibold text-slate-500">/quintal</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {t.priceRange}: ₹{results.price.expectedPriceRange.min.toLocaleString('en-IN')} - ₹{results.price.expectedPriceRange.max.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="bg-white/80 rounded-xl p-3 border border-amber-100 space-y-1.5 text-xs">
                      {results.price.msp > 0 ? (
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">{t.mspFloor}:</span>
                          <span className="font-bold text-slate-800">
                            ₹{results.price.msp.toLocaleString('en-IN')}/qtl
                          </span>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center text-slate-500">
                          <span>MSP Status:</span>
                          <span className="italic">Open Market Driven</span>
                        </div>
                      )}

                      {results.price.mspGainPercent !== null && (
                        <div className="flex justify-between items-center text-[11px] text-emerald-700 font-semibold">
                          <span>{t.mspGain}:</span>
                          <span>+{results.price.mspGainPercent}% over MSP</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-amber-100/80 text-[11px] text-slate-600 space-y-1">
                    <div className="flex justify-between items-center">
                      <span>{t.optimalSellMonth}:</span>
                      <span className="font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                        {results.price.optimalSellingWindow} (₹{results.price.optimalSellingPrice.toLocaleString('en-IN')})
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 truncate" title={currentDistrict.majorMandi}>
                      Mandi: {currentDistrict.majorMandi}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Financial Profitability Card (The Combined Advantage!) */}
              <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-2xl p-5 sm:p-6 shadow-md space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-amber-400" />
                    <h4 className="font-bold text-base text-white">
                      {t.financialSummary}
                    </h4>
                  </div>
                  <div className="text-xs text-emerald-300 font-medium">
                    {areaUnit === 'acre' 
                      ? `${landArea} Acres cultivation economics`
                      : `${landArea} Hectares cultivation economics`}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Gross Revenue */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <div className="text-xs text-slate-400 font-medium">{t.grossRevenue}</div>
                    <div className="text-xl sm:text-2xl font-black text-amber-300 mt-1">
                      ₹{results.economics.grossRevenue.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {results.yield.totalQuintals} qtl × ₹{results.price.predictedHarvestPrice}/qtl
                    </div>
                  </div>

                  {/* Cultivation Cost */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <div className="text-xs text-slate-400 font-medium">{t.cultivationCost}</div>
                    <div className="text-xl sm:text-2xl font-black text-rose-300 mt-1">
                      ₹{results.economics.totalCost.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Seed, fertilizer, labor & harvesting
                    </div>
                  </div>

                  {/* Expected Net Profit */}
                  <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-xl p-3.5">
                    <div className="text-xs text-emerald-300 font-bold uppercase tracking-wider">{t.netProfit}</div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-300 mt-1">
                      ₹{results.economics.netProfit.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[11px] text-emerald-200 mt-0.5 flex items-center gap-2">
                      <span>ROI: <strong>+{results.economics.roi}%</strong></span>
                      <span>•</span>
                      <span>{areaUnit === 'acre' ? `₹${results.economics.profitPerAcre.toLocaleString('en-IN')}/acre` : `₹${results.economics.profitPerHectare.toLocaleString('en-IN')}/ha`}</span>
                    </div>
                  </div>
                </div>

                {/* Break-even & risk advisory strip */}
                <div className="flex flex-wrap items-center justify-between text-xs text-slate-300 pt-1 gap-2">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>
                      {t.breakEven}: <strong className="text-white">₹{results.economics.breakEvenPrice}/qtl</strong> (safety buffer)
                    </span>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    Expected Net Range: ₹{results.economics.minProfit.toLocaleString('en-IN')} to ₹{results.economics.maxProfit.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* 4. Agronomic Advisory & Crop Profile */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-emerald-600" />
                    <span>{t.agronomicAdvisory}</span>
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {currentCrop.category}
                  </span>
                </div>

                <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-100 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <p className="font-medium text-emerald-950 mb-1">
                    {currentCrop.advisoryKannada}
                  </p>
                  <p className="text-xs text-slate-600">
                    {currentCrop.advisoryEnglish}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">{t.waterRequirement}</span>
                    <span className="font-bold text-slate-800">{currentCrop.waterNeed}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">{t.growthPeriod}</span>
                    <span className="font-bold text-slate-800">{currentCrop.growthDays} {t.days}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Volatility</span>
                    <span className="font-bold text-amber-700">{currentCrop.volatility}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Compare with all crops & Print */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onNavigateToRecommender}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <span>{t.compareAllCrops} in {currentDistrict.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onNavigateToModels}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all"
                >
                  <BarChart2 className="w-4 h-4 text-emerald-600" />
                  <span>{t.viewResearch}</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
