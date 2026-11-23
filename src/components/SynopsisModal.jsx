import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Award, 
  Users, 
  GraduationCap, 
  BookOpen, 
  CheckCircle, 
  Layers, 
  Cpu, 
  Target, 
  ExternalLink,
  Building,
  Calendar
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

export default function SynopsisModal({ isOpen, onClose, lang }) {
  if (!isOpen) return null;
  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-extrabold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Project Batch: A2
              </span>
              <span className="text-emerald-200 text-xs">October 2026</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1">
              Smart Crop Yield and Price Predictor Using Machine Learning
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm">
              Jawaharlal Nehru New College of Engineering (JNNCE), Shivamogga - 577204
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-emerald-200 hover:text-white p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors shrink-0 ml-3"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable Document Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          
          {/* Institutional Title & Batch Members Card */}
          <div className="bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50/50 border border-emerald-200 rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="text-center pb-4 border-b border-emerald-200/60 space-y-1">
              <div className="text-sm font-extrabold text-slate-900 pt-1">
                Jawaharlal Nehru New College of Engineering (JNNCE)
              </div>
              <div className="text-xs font-semibold text-emerald-700 font-kannada">
                ಜವಾಹರಲಾಲ್ ನೆಹರು ತಾಂತ್ರಿಕ ಕಾಲೇಜು, ಶಿವಮೊಗ್ಗ - 577204
              </div>
              <div className="text-xs text-slate-600 font-medium">
                Shivamogga - 577204, Karnataka
              </div>
            </div>

            {/* Students and Guide Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
              {/* Students (Batch A2) */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5 mb-2.5">
                  <Users className="w-4 h-4 text-emerald-700" />
                  <span>Submitted by (Project Batch No: A2)</span>
                </h4>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-white border border-slate-200">
                    <span className="font-bold text-slate-900">1. Chetan R Naik</span>
                    <span className="font-mono text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded">4JN24CS031</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-white border border-slate-200">
                    <span className="font-bold text-slate-900">2. Deekshith S Kuppal</span>
                    <span className="font-mono text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded">4JN24CS040</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-white border border-slate-200">
                    <span className="font-bold text-slate-900">3. Ichith M</span>
                    <span className="font-mono text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded">4JN24CS060</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-white border border-slate-200">
                    <span className="font-bold text-slate-900">4. Pavan Kumar J R</span>
                    <span className="font-mono text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded">4JN24CS197</span>
                  </div>
                </div>
              </div>

              {/* Guide Details */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5 mb-2.5">
                  <GraduationCap className="w-4 h-4 text-emerald-700" />
                  <span>Under the Guidance of</span>
                </h4>
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 text-xs">
                  <div className="font-extrabold text-slate-900 text-sm">
                    Mr. Vedananda D E
                  </div>
                  <div className="text-slate-600 font-medium">
                    B.E, M.Tech., (Ph.D)
                  </div>
                  <div className="text-emerald-700 font-semibold pt-1">
                    Assistant Professor
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    Jawaharlal Nehru New College of Engineering, Shivamogga
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Problem Identified */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 border-b border-slate-100 pb-1.5">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">1</span>
              <span>Problem Identified</span>
            </h3>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              Agriculture remains the backbone of the Indian economy, supporting the livelihoods of more than half of the country's population. Despite this, farmers continue to face high uncertainty in deciding which crop to grow, how much to expect from it, and at what price it will sell. Crop yield is influenced by a complex mix of factors such as rainfall, temperature, humidity, soil type, soil nutrients, fertilizer use, and irrigation facilities. Because these factors vary from season to season and region to region, traditional experience-based estimation is often inaccurate.
            </p>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              Climate change has made weather patterns increasingly unpredictable, which further increases the risk of crop failure. In addition, market prices of agricultural commodities fluctuate widely due to demand, supply, transport conditions, and seasonal arrivals in mandis. Many small and marginal farmers lack access to timely price information and are forced to sell at low prices to middlemen. A wrong crop choice or poorly timed sale can lead to heavy financial losses, debt, and in severe cases distress among farming families. Hence, there is a strong need for a data-driven system that supports farmers with reliable yield and price forecasts before they make crucial decisions.
            </p>
          </div>

          {/* Section 2: Existing Solutions */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 border-b border-slate-100 pb-1.5">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">2</span>
              <span>Existing Solutions & Limitations</span>
            </h3>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              Several solutions already exist to assist farmers with agricultural information. Government portals such as Agmarknet and eNAM publish daily mandi prices, while the India Meteorological Department provides weather forecasts and advisories. Mobile applications like Kisan Suvidha and various private agri-tech platforms offer crop advice, weather updates, and market rates. Researchers have also proposed machine learning models such as Linear Regression, Decision Trees, Random Forest, and Support Vector Machines for crop recommendation and yield estimation. Some studies apply deep learning methods like LSTM networks for commodity price forecasting using historical time-series data.
            </p>
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3.5 text-xs text-rose-900 space-y-1">
              <strong>Identified Research Gaps:</strong>
              <ul className="list-disc list-inside space-y-0.5 text-rose-800">
                <li>Existing solutions address only one side of the problem (either yield or price, but not both together).</li>
                <li>Many provide only current or past historical data rather than forward forecasts, leaving farmers to guess.</li>
                <li>Lack of regional language support (specifically Kannada) restricts adoption among rural farmers.</li>
                <li>Generalized models fail to capture district-level soil (ICAR/Soil Health Card) and local climate specifics.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Proposed Solution and its Advantages */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 border-b border-slate-100 pb-1.5">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">3</span>
              <span>Proposed Solution and its Advantages</span>
            </h3>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              The proposed project, <strong>Smart Crop Yield and Price Predictor</strong>, is a machine learning based system that predicts the expected crop yield and the likely market price in a single platform. The system collects historical data on crop production, rainfall, temperature, soil parameters, and mandi prices from open sources such as government datasets and weather APIs. This data is cleaned, normalized, and processed, after which algorithms such as Random Forest, Gradient Boosting (XGBoost), and LSTM are trained and compared to select the best performing model.
            </p>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              The farmer enters inputs such as state, district, crop, season, and land area through a simple web or mobile interface. The system then displays the predicted yield per hectare, the expected price range, and an estimated profit for the selected crop. It can also recommend the most profitable crop for the given location and season, helping farmers plan sowing and selling decisions in advance. The combined prediction of yield and price gives a complete view of expected income, which is the main advantage over existing single-purpose tools. The interface supports regional languages such as Kannada to reach rural users easily.
            </p>
          </div>

          {/* Section 4: Objectives */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 border-b border-slate-100 pb-1.5">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">4</span>
              <span>Objectives</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>To collect and preprocess historical data on crop yield, weather, soil, and market prices.</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>To develop a machine learning model that predicts crop yield (quintals per hectare) for a given district, crop, and season.</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>To develop a forecasting model that predicts the market (modal) price of the crop.</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>To compare multiple algorithms and select the best one using standard evaluation metrics.</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>To recommend the most profitable crop by combining predicted yield and price.</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>To build a simple, user-friendly web/mobile interface, with Kannada language support, for farmers.</span>
              </div>
            </div>
          </div>

          {/* Section 5 & 6: Datasets & Models */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-800">
                5. Dataset Sources
              </h4>
              <ul className="text-xs space-y-1.5 text-slate-700">
                <li>• <strong>Crop Data:</strong> data.gov.in & Directorate of Economics & Statistics.</li>
                <li>• <strong>Weather Data:</strong> India Meteorological Department (IMD) & NASA POWER API.</li>
                <li>• <strong>Soil Data:</strong> Soil Health Card portal & ICAR reports.</li>
                <li>• <strong>Market Data:</strong> Daily mandi arrivals & modal rates from Agmarknet & eNAM.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-800">
                6. Machine Learning Models
              </h4>
              <ul className="text-xs space-y-1.5 text-slate-700">
                <li>• <strong>Yield Prediction:</strong> Random Forest Regressor & XGBoost (handled non-linearities and gave feature importance) vs Linear Regression baseline.</li>
                <li>• <strong>Price Prediction:</strong> LSTM Neural Network (24-month lookback sequence forecasting) compared against ARIMA (2,1,2).</li>
              </ul>
            </div>
          </div>

          {/* Section 7: Expected Outcomes */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 border-b border-slate-100 pb-1.5">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">7</span>
              <span>Expected Outcomes</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Product:</span>
                Working web/mobile application predicting yield & price, suggesting most profitable crop.
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Accuracy:</span>
                Trained and validated ML model with measurable performance (R² 0.934, RMSE, MAE).
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Exhibitions & Contests:</span>
                Live demonstrations at departmental levels, Smart India Hackathon & KSCST project programme.
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Funding:</span>
                Applying for student project funding and grants from KSCST and allied agencies.
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Publications:</span>
                Research paper on comparative analysis of ML models targeted at international conferences/journals.
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Adoption:</span>
                Collaboration with local farmers, Krishi Vigyan Kendras (KVK), and agri-startups.
              </div>
            </div>
          </div>

          {/* Formal Signatures Strip */}
          <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-xs text-slate-600 font-semibold">
            <div className="text-center">
              <div className="h-8 border-b border-dashed border-slate-400 w-36 mb-1"></div>
              <span>Signature of Guide</span>
            </div>
            <div className="text-center">
              <div className="h-8 border-b border-dashed border-slate-400 w-44 mb-1"></div>
              <span>Signature of Project Coordinators</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-colors"
          >
            {t.closeBtn}
          </button>
        </div>

      </div>
    </div>
  );
}
