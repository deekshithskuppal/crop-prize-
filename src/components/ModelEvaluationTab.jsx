import React from 'react';
import { 
  BarChart3, 
  Cpu, 
  Database, 
  CheckCircle, 
  Award, 
  TrendingUp, 
  Sparkles, 
  GitMerge, 
  Layers, 
  FileCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Cell 
} from 'recharts';
import { MODEL_EVALUATION_METRICS } from '../data/agriData';
import { TRANSLATIONS } from '../utils/translations';

export default function ModelEvaluationTab({ lang }) {
  const t = TRANSLATIONS[lang];
  const { yieldModels, priceModels, featureImportance } = MODEL_EVALUATION_METRICS;

  const featureChartData = [...featureImportance].sort((a, b) => b.importance - a.importance);

  const colors = ['#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#ccfbf1'];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <Cpu className="w-4 h-4 text-emerald-300" />
            <span>Academic Synopsis Sections 6 & 7 Verification</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            {t.researchTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.researchSubtitle}. {lang === 'kn'
              ? 'ವಿಟಿಯು ಮಿನಿ-ಪ್ರಾಜೆಕ್ಟ್‌ನ ಅಗತ್ಯತೆಯಂತೆ ಅನೇಕ ಅಲ್ಗಾರಿದಮ್‌ಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ ಅತ್ಯುತ್ತಮ ಮಾದರಿಗಳನ್ನು (Random Forest & LSTM) ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ.'
              : 'Empirical comparison of multiple machine learning and deep learning architectures evaluated across R², RMSE, MAE, and MAPE metrics to power the dual prediction engine.'}
          </p>
        </div>
      </div>

      {/* System Pipeline Architecture Visualizer */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600" />
            <span>End-to-End System Pipeline & Architecture</span>
          </h3>
          <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-lg border border-emerald-200">
            Automated ML Pipeline
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
          {/* Step 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1">Step 1: Data Ingestion</div>
              <h5 className="font-bold text-slate-900 text-xs mb-1.5">Open Govt & APIs</h5>
              <p className="text-[11px] text-slate-600 leading-tight">
                data.gov.in, IMD weather, NASA POWER, Soil Health Card, Agmarknet mandi rates.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-200 text-[10px] text-slate-500 font-medium">
              4 Datasets Unified
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700 mb-1">Step 2: Preprocessing</div>
              <h5 className="font-bold text-slate-900 text-xs mb-1.5">Cleaning & Encoding</h5>
              <p className="text-[11px] text-slate-600 leading-tight">
                Missing value imputation, Min-Max scaling, One-Hot season encoding, outlier filtering.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-200 text-[10px] text-slate-500 font-medium">
              Normalized Matrix
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-emerald-50/80 border border-emerald-300 rounded-xl p-3.5 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1">Step 3: Yield Engine</div>
              <h5 className="font-bold text-emerald-950 text-xs mb-1.5">Random Forest Regressor</h5>
              <p className="text-[11px] text-emerald-900 leading-tight">
                Trained on rainfall, N-P-K, temp, soil type. Evaluated vs XGBoost and Linear Regression.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-200 text-[10px] font-bold text-emerald-800">
              R² = 0.934 (Winner)
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-amber-50/80 border border-amber-300 rounded-xl p-3.5 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 mb-1">Step 4: Price Engine</div>
              <h5 className="font-bold text-amber-950 text-xs mb-1.5">LSTM Neural Network</h5>
              <p className="text-[11px] text-amber-900 leading-tight">
                24-month lookback sequence forecasting seasonal mandi trends. Compared against ARIMA.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-amber-200 text-[10px] font-bold text-amber-800">
              MAPE = 4.2% (Winner)
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-slate-900 text-white rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 mb-1">Step 5: Farmer UI</div>
              <h5 className="font-bold text-white text-xs mb-1.5">Bilingual Web Decision Tool</h5>
              <p className="text-[11px] text-slate-300 leading-tight">
                Computes net profit, recommends best crops, supports Kannada language & printable card.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-700 text-[10px] text-emerald-400 font-semibold">
              Kisan Decision Card
            </div>
          </div>
        </div>
      </div>

      {/* Model Comparison Grid: Yield Regression (Left) & Price Time-Series (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Yield Prediction Benchmark Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  <span>{t.yieldModelsTitle}</span>
                </h4>
                <p className="text-xs text-slate-500">
                  Target: Yield in Quintals per Hectare (Synopsis 6.a)
                </p>
              </div>
              <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                Regression
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] font-bold tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-3.5">Model</th>
                    <th className="py-3 px-2 text-center">R² Score</th>
                    <th className="py-3 px-2 text-center">RMSE</th>
                    <th className="py-3 px-2 text-center">MAE</th>
                    <th className="py-3 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {yieldModels.map((m, idx) => (
                    <tr key={idx} className={idx === 0 ? 'bg-emerald-50/40 font-semibold' : ''}>
                      <td className="py-3.5 px-3.5">
                        <div className="font-bold text-slate-900">{m.name}</div>
                        <div className="text-[10px] text-slate-500">{m.kannadaName}</div>
                      </td>
                      <td className="py-3.5 px-2 text-center font-extrabold text-emerald-700">
                        {m.r2}
                      </td>
                      <td className="py-3.5 px-2 text-center text-slate-700 font-semibold">
                        {m.rmse} qtl/ha
                      </td>
                      <td className="py-3.5 px-2 text-center text-slate-700">
                        {m.mae}
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          idx === 0 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
            <strong>Key Finding:</strong> Random Forest achieved highest R² (0.934) and lowest error (RMSE 3.84 qtl/ha), handling non-linear interactions between rainfall deficit and soil nutrient balance effectively.
          </div>
        </div>

        {/* Price Prediction Benchmark Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-amber-600" />
                  <span>{t.priceModelsTitle}</span>
                </h4>
                <p className="text-xs text-slate-500">
                  Target: Modal Mandi Price (₹/Quintal) (Synopsis 6.b)
                </p>
              </div>
              <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                Time-Series
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] font-bold tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-3.5">Model</th>
                    <th className="py-3 px-2 text-center">MAPE</th>
                    <th className="py-3 px-2 text-center">RMSE</th>
                    <th className="py-3 px-2 text-center">MAE</th>
                    <th className="py-3 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {priceModels.map((m, idx) => (
                    <tr key={idx} className={idx === 0 ? 'bg-amber-50/40 font-semibold' : ''}>
                      <td className="py-3.5 px-3.5">
                        <div className="font-bold text-slate-900">{m.name}</div>
                        <div className="text-[10px] text-slate-500">{m.kannadaName}</div>
                      </td>
                      <td className="py-3.5 px-2 text-center font-extrabold text-amber-800">
                        {m.mape}
                      </td>
                      <td className="py-3.5 px-2 text-center text-slate-700 font-semibold">
                        ₹{m.rmse}/qtl
                      </td>
                      <td className="py-3.5 px-2 text-center text-slate-700">
                        ₹{m.mae}/qtl
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          idx === 0 ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
            <strong>Key Finding:</strong> LSTM neural network captured seasonal arrival troughs and post-harvest price spikes with a low 4.2% mean absolute percentage error, outperforming standard ARIMA.
          </div>
        </div>
      </div>

      {/* Feature Importance Bar Chart */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-600" />
              <span>{t.featureImportanceTitle} (%)</span>
            </h4>
            <p className="text-xs text-slate-500">
              Gini impurity importance breakdown extracted from the Random Forest Regressor
            </p>
          </div>
          <span className="text-xs text-slate-500 font-semibold">
            Total Feature Weight: 100%
          </span>
        </div>

        <div className="h-64 sm:h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={featureChartData} 
              layout="vertical"
              margin={{ top: 10, right: 30, left: 140, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
              <XAxis type="number" unit="%" tick={{ fontSize: 11, fill: '#64748b' }} domain={[0, 35]} />
              <YAxis 
                type="category" 
                dataKey="feature" 
                tick={{ fontSize: 11, fill: '#334155', fontWeight: 600 }}
                width={135}
              />
              <Tooltip 
                formatter={(val) => [`${val}%`, 'Importance Weight']}
                contentStyle={{ borderRadius: '12px', border: '1px solid #cbd5e1' }}
              />
              <Bar dataKey="importance" radius={[0, 6, 6, 0]}>
                {featureChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Dataset Sources Section (Synopsis Section 5) */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-600" />
            <span>{t.dataSourcesTitle} (Synopsis Section 5.1)</span>
          </h4>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
            Open Data Integration
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
            <div className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Crop Statistics</div>
            <h5 className="font-bold text-slate-900 text-sm">Open Govt Data (OGD)</h5>
            <p className="text-xs text-slate-600">
              District-wise, season-wise crop statistics from data.gov.in and Ministry of Agriculture Directorate of Economics.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
            <div className="text-xs font-extrabold text-sky-800 uppercase tracking-wider">Climate & Rain</div>
            <h5 className="font-bold text-slate-900 text-sm">IMD & NASA POWER</h5>
            <p className="text-xs text-slate-600">
              Daily rainfall, temperature, precipitation, and relative humidity records from IMD and NASA POWER API.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
            <div className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">Soil Profile</div>
            <h5 className="font-bold text-slate-900 text-sm">Soil Health Card & ICAR</h5>
            <p className="text-xs text-slate-600">
              Nutrient (N, P, K) indices, pH benchmarks, and soil textural classifications across Karnataka agro-climatic zones.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
            <div className="text-xs font-extrabold text-indigo-800 uppercase tracking-wider">Mandi Rates</div>
            <h5 className="font-bold text-slate-900 text-sm">Agmarknet & eNAM</h5>
            <p className="text-xs text-slate-600">
              Daily mandi commodity arrivals, modal prices, and minimum support price (MSP) benchmark historical logs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
