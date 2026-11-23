import React from 'react';
import { Sprout, Globe, FileText, Award, BarChart3, TrendingUp, Sparkles, Printer } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

export default function Navbar({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onOpenSynopsis,
  onPrint
}) {
  const t = TRANSLATIONS[lang];

  return (
    <header className="bg-white border-b border-emerald-100 shadow-sm sticky top-0 z-40">
      {/* Top Academic & Institutional Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-emerald-500/30 text-white font-bold px-2 py-0.5 rounded text-[11px] border border-emerald-400/30">
              JNNCE Shivamogga
            </span>
            <span className="hidden sm:inline text-emerald-200">•</span>
            <span className="font-medium text-emerald-100">
              {lang === 'kn' ? 'ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸಂಶೋಧನಾ ಯೋಜನೆ' : 'Smart Agriculture AI Research Project'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-amber-400/20 text-amber-200 px-2 py-0.5 rounded border border-amber-300/30 font-semibold text-[11px]">
              {t.projectBatch}
            </span>
            <button
              onClick={onOpenSynopsis}
              className="inline-flex items-center gap-1 text-emerald-200 hover:text-white transition-colors underline underline-offset-2 text-[11px] font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'kn' ? 'ಸಾರಾಂಶ ಪತ್ರ ವೀಕ್ಷಿಸಿ' : 'View Synopsis Document'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('predictor')}>
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 flex items-center justify-center shadow-md shadow-emerald-500/20 text-white">
              <Sprout className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                  <span>{t.appTitle}</span>
                </h1>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  ML Powered
                </span>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1">
                {t.appSubtitle}
              </p>
            </div>
          </div>

          {/* Right Action Controls: Language Toggle & Print */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Print Farmer Card button */}
            <button
              onClick={onPrint}
              title={t.printCard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">{t.printCard}</span>
            </button>

            {/* Language Switcher Button */}
            <button
              onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 shadow-sm transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-700" />
              <span>{lang === 'en' ? 'ಕನ್ನಡ (KN)' : 'English (EN)'}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <nav className="flex space-x-1 sm:space-x-2 border-t border-slate-100 overflow-x-auto py-2 no-scrollbar">
          <button
            onClick={() => setActiveTab('predictor')}
            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'predictor'
                ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.tabPredictor}</span>
          </button>

          <button
            onClick={() => setActiveTab('recommender')}
            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'recommender'
                ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>{t.tabRecommender}</span>
          </button>

          <button
            onClick={() => setActiveTab('mandi')}
            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'mandi'
                ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>{t.tabMandi}</span>
          </button>

          <button
            onClick={() => setActiveTab('models')}
            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'models'
                ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>{t.tabModels}</span>
          </button>

          <button
            onClick={onOpenSynopsis}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap text-amber-700 hover:bg-amber-50 transition-all border border-amber-200/60 ml-auto"
          >
            <FileText className="w-4 h-4 text-amber-600" />
            <span>{t.tabSynopsis}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
