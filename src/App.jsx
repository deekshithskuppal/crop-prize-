import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LiveTicker from './components/LiveTicker';
import PredictorTab from './components/PredictorTab';
import RecommenderTab from './components/RecommenderTab';
import MarketTrendsTab from './components/MarketTrendsTab';
import ModelEvaluationTab from './components/ModelEvaluationTab';
import SynopsisModal from './components/SynopsisModal';
import PrintableCard from './components/PrintableCard';
import { TRANSLATIONS } from './utils/translations';
import { Sprout, FileText, Heart, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('predictor');
  const [lang, setLang] = useState('en');
  const [isSynopsisOpen, setIsSynopsisOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  // Shared state between Predictor and Recommender
  const [sharedState, setSharedState] = useState({
    stateName: 'Karnataka',
    districtId: 'shivamogga',
    cropId: 'paddy',
    season: 'Kharif',
    landArea: 2,
    areaUnit: 'acre',
    latestResult: null
  });

  const t = TRANSLATIONS[lang];

  const handleSelectCropForAnalysis = (cropId) => {
    setActiveTab('predictor');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar with Academic branding & Language selector */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        onOpenSynopsis={() => setIsSynopsisOpen(true)}
        onPrint={() => setIsPrintModalOpen(true)}
      />

      {/* Scrolling Live APMC Mandi Ticker */}
      <LiveTicker lang={lang} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'predictor' && (
          <PredictorTab
            lang={lang}
            onNavigateToRecommender={() => setActiveTab('recommender')}
            onNavigateToModels={() => setActiveTab('models')}
            onPrintReport={() => setIsPrintModalOpen(true)}
            sharedState={sharedState}
            setSharedState={setSharedState}
          />
        )}

        {activeTab === 'recommender' && (
          <RecommenderTab
            lang={lang}
            onSelectCropForAnalysis={handleSelectCropForAnalysis}
            sharedState={sharedState}
            setSharedState={setSharedState}
          />
        )}

        {activeTab === 'mandi' && (
          <MarketTrendsTab
            lang={lang}
          />
        )}

        {activeTab === 'models' && (
          <ModelEvaluationTab
            lang={lang}
          />
        )}
      </main>

      {/* Academic & University Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-sm">
                Smart Crop Yield and Price Predictor Using Machine Learning
              </div>
              <div className="text-slate-500">
                An Agricultural AI Mini-Project | JNNCE Shivamogga
              </div>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <div className="font-semibold text-slate-700">
              Jawaharlal Nehru New College of Engineering (JNNCE), Shivamogga - 577204
            </div>
            <div className="text-slate-500 text-[11px]">
              Batch A2: Chetan R Naik • Deekshith S Kuppal • Ichith M • Pavan Kumar J R | Guide: Mr. Vedananda D E
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
          <div>
            Built with Random Forest Regressor & LSTM Deep Learning • Open Govt Data (data.gov.in) • Agmarknet • IMD
          </div>
          <button
            onClick={() => setIsSynopsisOpen(true)}
            className="text-emerald-700 hover:text-emerald-800 font-semibold underline flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Read Complete Mini-Project Synopsis</span>
          </button>
        </div>
      </footer>

      {/* Project Synopsis Full Modal */}
      <SynopsisModal
        isOpen={isSynopsisOpen}
        onClose={() => setIsSynopsisOpen(false)}
        lang={lang}
      />

      {/* Printable Kisan Report Modal */}
      {isPrintModalOpen && sharedState.latestResult && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <PrintableCard
            result={sharedState.latestResult}
            lang={lang}
            onClose={() => setIsPrintModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
