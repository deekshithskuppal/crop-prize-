import React from 'react';
import { Sprout, CheckCircle, ShieldCheck, Printer, Calendar, MapPin, Coins } from 'lucide-react';

export default function PrintableCard({ result, lang, onClose }) {
  if (!result) return null;

  const { crop, district, yield: yieldRes, price: priceRes, economics, landArea, areaUnit, season } = result;

  const todayStr = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div id="printable-farmer-card" className="bg-white text-slate-800 p-6 sm:p-8 max-w-3xl mx-auto border-2 border-emerald-800 rounded-2xl shadow-xl my-6">
      
      {/* Top Formal Letterhead */}
      <div className="border-b-2 border-emerald-800 pb-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-black text-xl">
            <Sprout className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-lg font-black text-emerald-950 uppercase tracking-tight">
              Kisan Crop Advisory & Financial Report
            </h2>
            <div className="text-xs font-semibold text-emerald-800 font-kannada">
              ಕಿಸಾನ್ ಬೆಳೆ ಇಳುವರಿ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಆದಾಯ ಸಲಹಾ ಪತ್ರ
            </div>
            <div className="text-[11px] text-slate-600 font-medium">
              Smart Crop Yield and Price Predictor | Project Batch: A2
            </div>
          </div>
        </div>

        <div className="text-right text-xs">
          <div className="font-mono font-bold text-slate-800">
            REF: KVK-KA-{district.id.toUpperCase()}-2026
          </div>
          <div className="text-slate-500">Date: {todayStr}</div>
          <div className="inline-block bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded text-[10px] mt-1">
            Validated by ML
          </div>
        </div>
      </div>

      {/* Farmer & Land Parameters Table */}
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 mb-4 text-xs">
        <div className="font-extrabold text-slate-900 uppercase text-[11px] mb-2 text-emerald-900">
          1. Field & Crop Parameters (ಕೃಷಿ ವಿವರಗಳು)
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <span className="text-slate-500 block">District & State:</span>
            <span className="font-bold text-slate-900">{district.name} ({district.kannadaName})</span>
          </div>
          <div>
            <span className="text-slate-500 block">Target Crop:</span>
            <span className="font-bold text-slate-900">{crop.name} ({crop.kannadaName})</span>
          </div>
          <div>
            <span className="text-slate-500 block">Season:</span>
            <span className="font-bold text-slate-900">{season} Season</span>
          </div>
          <div>
            <span className="text-slate-500 block">Land Area:</span>
            <span className="font-bold text-slate-900">{landArea} {areaUnit === 'acre' ? 'Acres' : 'Hectares'}</span>
          </div>
          <div>
            <span className="text-slate-500 block">Agro Zone:</span>
            <span className="font-semibold text-slate-800">{district.zone}</span>
          </div>
          <div>
            <span className="text-slate-500 block">Soil Type:</span>
            <span className="font-semibold text-slate-800">{district.soilType}</span>
          </div>
          <div>
            <span className="text-slate-500 block">Rainfall / Temp:</span>
            <span className="font-semibold text-slate-800">{district.avgRainfall}mm / {district.avgTemp}°C</span>
          </div>
          <div>
            <span className="text-slate-500 block">Benchmark Mandi:</span>
            <span className="font-semibold text-slate-800">{district.majorMandi}</span>
          </div>
        </div>
      </div>

      {/* Dual Prediction Highlights */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Yield Box */}
        <div className="border border-emerald-300 bg-emerald-50/60 rounded-xl p-4 text-xs">
          <div className="font-extrabold text-emerald-900 uppercase text-[11px] mb-1">
            Predicted Yield (ಇಳುವರಿ ಮುನ್ಸೂಚನೆ)
          </div>
          <div className="text-2xl font-black text-slate-900 mb-0.5">
            {areaUnit === 'acre' 
              ? `${(yieldRes.rfYieldPerHa / 2.47105).toFixed(1)} qtl/acre`
              : `${yieldRes.rfYieldPerHa} qtl/ha`}
          </div>
          <div className="text-slate-600 font-medium">
            Total Harvest: <strong className="text-slate-900">{yieldRes.totalQuintals} Quintals</strong> ({yieldRes.totalTonnes} Tonnes)
          </div>
          <div className="text-[11px] text-emerald-800 mt-1">
            Random Forest Regressor • Confidence: {yieldRes.confidenceScore}%
          </div>
        </div>

        {/* Price Box */}
        <div className="border border-amber-300 bg-amber-50/60 rounded-xl p-4 text-xs">
          <div className="font-extrabold text-amber-900 uppercase text-[11px] mb-1">
            Market Price Forecast (ಬೆಲೆ ಮುನ್ಸೂಚನೆ)
          </div>
          <div className="text-2xl font-black text-slate-900 mb-0.5">
            ₹{priceRes.predictedHarvestPrice.toLocaleString('en-IN')}{' '}
            <span className="text-xs font-semibold text-slate-500">/quintal</span>
          </div>
          <div className="text-slate-600 font-medium">
            Mandi Range: ₹{priceRes.expectedPriceRange.min.toLocaleString('en-IN')} - ₹{priceRes.expectedPriceRange.max.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-amber-800 mt-1">
            LSTM Model • Best Window: <strong>{priceRes.optimalSellingWindow}</strong>
          </div>
        </div>
      </div>

      {/* Financial Statement */}
      <div className="border border-slate-300 rounded-xl p-4 mb-4 text-xs bg-white">
        <div className="font-extrabold text-slate-900 uppercase text-[11px] mb-2 text-slate-900 flex items-center justify-between">
          <span>2. Financial Projection (ಆರ್ಥಿಕ ಮುನ್ನೋಟ)</span>
          <span className="text-[11px] font-normal text-slate-500">Cultivation on {landArea} {areaUnit}</span>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center border-t border-b border-slate-200 py-2.5 my-1">
          <div>
            <span className="text-slate-500 block text-[11px]">Gross Revenue</span>
            <span className="text-lg font-black text-slate-900">₹{economics.grossRevenue.toLocaleString('en-IN')}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[11px]">Total Cultivation Cost</span>
            <span className="text-lg font-black text-rose-700">₹{economics.totalCost.toLocaleString('en-IN')}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[11px]">Expected Net Profit</span>
            <span className="text-lg font-black text-emerald-700">₹{economics.netProfit.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[11px] text-slate-600 pt-1">
          <span>Return on Investment (ROI): <strong className="text-emerald-800">+{economics.roi}%</strong></span>
          <span>Break-Even Mandi Price: <strong>₹{economics.breakEvenPrice}/qtl</strong></span>
          <span>Per Acre Net Profit: <strong>₹{economics.profitPerAcre.toLocaleString('en-IN')}</strong></span>
        </div>
      </div>

      {/* Farmer Agronomic Advisory */}
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 mb-4 text-xs space-y-1">
        <div className="font-extrabold text-emerald-950 uppercase text-[10px] tracking-wider">
          Agronomic & Marketing Advisory (ಕೃಷಿ ಮತ್ತು ಮಾರಾಟ ಸಲಹೆ)
        </div>
        <p className="font-medium text-emerald-950 font-kannada">
          {crop.advisoryKannada}
        </p>
        <p className="text-slate-600 text-[11px]">
          {crop.advisoryEnglish}
        </p>
      </div>

      {/* Footer & Institutional Signatures */}
      <div className="pt-4 border-t border-slate-300 flex items-end justify-between text-xs text-slate-500">
        <div>
          <div className="font-bold text-slate-800">Jawaharlal Nehru New College of Engineering (JNNCE)</div>
          <div>Shivamogga - 577204, Karnataka</div>
          <div className="text-[10px] text-slate-400 mt-0.5">
            Project Batch A2: Chetan R Naik, Deekshith S Kuppal, Ichith M, Pavan Kumar J R | Guide: Mr. Vedananda D E
          </div>
        </div>

        <div className="text-center shrink-0">
          <div className="h-10 border-b border-dashed border-slate-400 w-32 mb-1"></div>
          <span className="text-[10px] font-bold text-slate-700">Agronomist / Guide Sign</span>
        </div>
      </div>

      {/* Screen action button (hidden in print) */}
      <div className="mt-6 flex justify-end gap-3 no-print">
        <button
          onClick={onClose}
          className="px-4 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100"
        >
          Close
        </button>
        <button
          onClick={() => window.print()}
          className="px-4 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-1.5 shadow"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print Now</span>
        </button>
      </div>
    </div>
  );
}
