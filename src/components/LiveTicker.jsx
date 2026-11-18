import React from 'react';
import { TrendingUp, TrendingDown, Minus, Radio } from 'lucide-react';
import { LIVE_MANDI_RATES } from '../data/agriData';

export default function LiveTicker({ lang }) {
  return (
    <div className="bg-slate-900 text-slate-100 border-b border-slate-800 text-xs overflow-hidden py-2 select-none relative">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* Badge */}
        <div className="flex items-center gap-1.5 bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[10px] shrink-0 mr-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>{lang === 'kn' ? 'ನೇರ ಮಾರುಕಟ್ಟೆ ಆವಕ ದರ' : 'Live Mandi Ticker'}</span>
        </div>

        {/* Marquee ticker */}
        <div className="relative flex overflow-x-hidden w-full whitespace-nowrap">
          <div className="animate-marquee flex gap-6 items-center">
            {LIVE_MANDI_RATES.concat(LIVE_MANDI_RATES).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300">
                <span className="text-slate-400 font-medium">[{item.mandi}]</span>
                <span className="font-semibold text-white">{item.crop}:</span>
                <span className="font-bold text-amber-300">₹{item.price.toLocaleString('en-IN')}/qtl</span>
                <span className={`inline-flex items-center text-[11px] font-medium ${
                  item.trend === 'up' ? 'text-emerald-400' : item.trend === 'down' ? 'text-rose-400' : 'text-slate-400'
                }`}>
                  {item.trend === 'up' && <TrendingUp className="w-3 h-3 mr-0.5" />}
                  {item.trend === 'down' && <TrendingDown className="w-3 h-3 mr-0.5" />}
                  {item.trend === 'neutral' && <Minus className="w-3 h-3 mr-0.5" />}
                  {item.change}
                </span>
                <span className="text-slate-600">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
