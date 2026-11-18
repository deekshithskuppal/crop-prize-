import React, { useState, useMemo } from 'react';
import { 
  Award, 
  MapPin, 
  TrendingUp, 
  Droplets, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  DollarSign, 
  BarChart2, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { CROPS_DATA, DISTRICTS_DATA } from '../data/agriData';
import { rankCropRecommendations } from '../utils/mlEngine';
import { TRANSLATIONS } from '../utils/translations';

export default function RecommenderTab({
  lang,
  onSelectCropForAnalysis,
  sharedState,
  setSharedState
}) {
  const t = TRANSLATIONS[lang];

  const [selectedState, setSelectedState] = useState(sharedState?.stateName || "Karnataka");
  const [selectedDistrictId, setSelectedDistrictId] = useState(sharedState?.districtId || "shivamogga");
  const [selectedSeason, setSelectedSeason] = useState(sharedState?.season || "Kharif");
  const [landArea, setLandArea] = useState(sharedState?.landArea || 2);
  const [areaUnit, setAreaUnit] = useState(sharedState?.areaUnit || "acre");

  const districts = DISTRICTS_DATA[selectedState] || DISTRICTS_DATA["Karnataka"];
  const currentDistrict = districts.find(d => d.id === selectedDistrictId) || districts[0];

  const areaInHectares = areaUnit === 'acre' ? landArea / 2.47105 : landArea;

  // Calculate rankings dynamically
  const rankedCrops = useMemo(() => {
    return rankCropRecommendations({
      districtId: selectedDistrictId,
      stateName: selectedState,
      season: selectedSeason,
      areaInHectares
    });
  }, [selectedDistrictId, selectedState, selectedSeason, areaInHectares]);

  const topCrop = rankedCrops[0];

  // Chart data for top 6 crops
  const chartData = rankedCrops.slice(0, 6).map(item => ({
    name: lang === 'kn' ? item.crop.kannadaName : item.crop.name.split(' ')[0],
    fullName: item.crop.name,
    netProfit: item.economics.netProfit,
    cost: item.economics.totalCost,
    revenue: item.economics.grossRevenue,
    roi: item.economics.roi
  }));

  const handleSelectCrop = (cropId) => {
    setSharedState(prev => ({
      ...prev,
      stateName: selectedState,
      districtId: selectedDistrictId,
      season: selectedSeason,
      cropId,
      landArea,
      areaUnit
    }));
    onSelectCropForAnalysis(cropId);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-300/30 px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <Award className="w-4 h-4 text-amber-300" />
            <span>Integrated Profitability Optimization Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            {t.recommenderTitle}
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            {t.recommenderSubtitle} {lang === 'kn' 
              ? 'ಪ್ರತಿಯೊಂದು ಬೆಳೆಯ ಇಳುವರಿ, ಬೆಸಾಯ ವೆಚ್ಚ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಮುನ್ಸೂಚನೆಯನ್ನು ಸಂಯೋಜಿಸಿ ಅತ್ಯಂತ ಲಾಭದಾಯಕ ಬೆಳೆಗಳ ಶ್ರೇಯಾಂಕ ಇಲ್ಲಿದೆ.' 
              : 'Our dual model runs simultaneous yield regressions and time-series price forecasts across all crop candidates to evaluate maximum expected net returns for your specific farm parameters.'}
          </p>
        </div>
      </div>

      {/* Filter Ribbon: District, Season, Land Area */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2 min-w-[200px]">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <div className="w-full">
              <label className="block text-[11px] text-slate-500 mb-1">{t.districtLabel}</label>
              <select
                value={selectedDistrictId}
                onChange={(e) => setSelectedDistrictId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {districts.map(d => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.kannadaName})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 min-w-[160px]">
            <div className="w-full">
              <label className="block text-[11px] text-slate-500 mb-1">{t.seasonLabel}</label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Kharif">Kharif / ಮುಂಗಾರು</option>
                <option value="Rabi">Rabi / ಹಿಂಗಾರು</option>
                <option value="Summer">Summer / ಬೇಸಿಗೆ</option>
                <option value="Whole Year">Whole Year / ವಾರ್ಷಿಕ</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 min-w-[170px]">
            <div className="w-full">
              <label className="block text-[11px] text-slate-500 mb-1">{t.landAreaLabel}</label>
              <div className="flex border border-slate-300 rounded-xl overflow-hidden">
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={landArea}
                  onChange={(e) => setLandArea(Math.max(0.5, parseFloat(e.target.value) || 1))}
                  className="w-16 bg-slate-50 px-2 py-1.5 text-xs font-bold text-slate-900 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setAreaUnit(areaUnit === 'acre' ? 'hectare' : 'acre')}
                  className="bg-slate-100 hover:bg-slate-200 px-2 py-1.5 text-[11px] font-bold text-slate-700 border-l border-slate-300"
                >
                  {areaUnit === 'acre' ? t.unitAcre : t.unitHectare}
                </button>
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 text-slate-500 text-[11px]">
            <span>Agro Zone: <strong>{currentDistrict.zone}</strong></span>
          </div>
        </div>
      </div>

      {/* Featured Top Recommendation Card */}
      {topCrop && (
        <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 text-white rounded-2xl p-6 sm:p-7 shadow-md relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-6 opacity-10 pointer-events-none">
            <Award className="w-64 h-64 text-white" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-4xl shadow-inner">
                {topCrop.crop.icon}
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-wide mb-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.topRecommendationBadge} (#1 Rank)</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl sm:text-3xl font-black">
                    {topCrop.crop.name}
                  </h3>
                  <span className="text-lg font-semibold text-emerald-200">
                    ({topCrop.crop.kannadaName})
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-emerald-100 mt-1 max-w-xl">
                  {lang === 'kn' ? topCrop.crop.advisoryKannada : topCrop.crop.advisoryEnglish}
                </p>
              </div>
            </div>

            {/* Financial Highlights */}
            <div className="flex flex-wrap sm:flex-col items-end gap-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:min-w-[220px]">
              <div className="text-right">
                <span className="text-[11px] text-emerald-200 block uppercase font-bold tracking-wider">
                  {t.estNetProfit} ({landArea} {areaUnit})
                </span>
                <span className="text-2xl sm:text-3xl font-black text-amber-300">
                  ₹{topCrop.economics.netProfit.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-emerald-100 pt-1">
                <span>ROI: <strong className="text-white">+{topCrop.economics.roi}%</strong></span>
                <span>•</span>
                <span>Match: <strong className="text-white">{topCrop.suitabilityScore}%</strong></span>
              </div>

              <button
                type="button"
                onClick={() => handleSelectCrop(topCrop.crop.id)}
                className="w-full mt-2 inline-flex items-center justify-center gap-1.5 bg-white hover:bg-emerald-50 text-emerald-900 font-bold px-3 py-2 rounded-xl text-xs shadow-md transition-all"
              >
                <span>{t.selectCrop}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Visual Chart: Profit Comparison Across Crops */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-emerald-600" />
              <span>Comparative Net Profit & Cultivation Cost Analysis (₹)</span>
            </h4>
            <p className="text-xs text-slate-500">
              Evaluated for {currentDistrict.name} ({currentDistrict.kannadaName}) for {landArea} {areaUnit === 'acre' ? 'Acres' : 'Hectares'}
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
            Top 6 Candidates
          </span>
        </div>

        <div className="h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 20, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#475569' }} />
              <YAxis 
                tick={{ fontSize: 11, fill: '#64748b' }} 
                tickFormatter={(val) => `₹${(val / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(val) => [`₹${Number(val).toLocaleString('en-IN')}`, '']}
                contentStyle={{ borderRadius: '12px', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
              <Bar dataKey="netProfit" name="Estimated Net Profit (₹)" fill="#10b981" radius={[6, 6, 0, 0]} />
              <Bar dataKey="cost" name="Cultivation Cost (₹)" fill="#f43f5e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Comprehensive Crop Ranking Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <h4 className="font-bold text-slate-900 text-base">
            {lang === 'kn' ? 'ಸಂಪೂರ್ಣ ಬೆಳೆಗಳ ಹೋಲಿಕೆ ಮತ್ತು ಶ್ರೇಯಾಂಕ ಕೋಷ್ಟಕ' : 'Complete Crop Ranking & Profitability Matrix'}
          </h4>
          <span className="text-xs text-slate-500">
            {rankedCrops.length} {lang === 'kn' ? 'ಬೆಳೆಗಳು ವಿಶ್ಲೇಷಿಸಲಾಗಿದೆ' : 'crops analyzed'}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] font-bold tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-3 text-center">{t.rankHeader}</th>
                <th className="py-3 px-4">{t.cropHeader}</th>
                <th className="py-3 px-3">{t.yieldEstimate}</th>
                <th className="py-3 px-3">{t.expectedPrice}</th>
                <th className="py-3 px-3">{t.estCost}</th>
                <th className="py-3 px-3">{t.estRevenue}</th>
                <th className="py-3 px-4 text-emerald-800">{t.estNetProfit}</th>
                <th className="py-3 px-3">ROI</th>
                <th className="py-3 px-3 text-center">{t.suitabilityScore}</th>
                <th className="py-3 px-3 text-right">{t.actionHeader}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {rankedCrops.map((item, idx) => {
                const isTop = idx === 0;
                return (
                  <tr 
                    key={item.crop.id} 
                    className={`hover:bg-emerald-50/40 transition-colors ${
                      isTop ? 'bg-emerald-50/30 font-semibold' : ''
                    }`}
                  >
                    <td className="py-3 px-3 text-center">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                        idx === 0 ? 'bg-amber-400 text-slate-900 shadow-sm' :
                        idx === 1 ? 'bg-slate-300 text-slate-800' :
                        idx === 2 ? 'bg-amber-700/20 text-amber-800' :
                        'text-slate-400'
                      }`}>
                        {idx + 1}
                      </span>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{item.crop.icon}</span>
                        <div>
                          <div className="font-bold text-slate-900 flex items-center gap-1.5">
                            <span>{item.crop.name}</span>
                            {item.isDirectMatch && (
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-medium">
                                Zone Match
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {item.crop.kannadaName} • {item.crop.category}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">
                        {item.yieldResult.totalQuintals} qtl
                      </div>
                      <div className="text-[10px] text-slate-500">
                        ({item.yieldResult.rfYieldPerHa} qtl/ha)
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">
                        ₹{item.priceResult.predictedHarvestPrice.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        /quintal
                      </div>
                    </td>

                    <td className="py-3 px-3 text-rose-700">
                      ₹{item.economics.totalCost.toLocaleString('en-IN')}
                    </td>

                    <td className="py-3 px-3 font-semibold text-slate-800">
                      ₹{item.economics.grossRevenue.toLocaleString('en-IN')}
                    </td>

                    <td className="py-3 px-4">
                      <div className="font-extrabold text-sm text-emerald-700">
                        ₹{item.economics.netProfit.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        ₹{item.economics.profitPerAcre.toLocaleString('en-IN')}/acre
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <span className={`font-bold ${
                        item.economics.roi > 80 ? 'text-emerald-700' :
                        item.economics.roi > 40 ? 'text-slate-800' :
                        'text-amber-700'
                      }`}>
                        +{item.economics.roi}%
                      </span>
                    </td>

                    <td className="py-3 px-3 text-center">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
                        {item.suitabilityScore}%
                      </span>
                    </td>

                    <td className="py-3 px-3 text-right">
                      <button
                        type="button"
                        onClick={() => handleSelectCrop(item.crop.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs transition-colors"
                      >
                        <span>{t.selectCrop}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
