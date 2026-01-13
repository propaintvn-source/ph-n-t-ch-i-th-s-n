
import React from 'react';
import { Competitor } from '../types';
import { Globe, BarChart3, Tag, Award } from 'lucide-react';

interface Props {
  competitor: Competitor;
  onClick: (id: string) => void;
}

const CompetitorCard: React.FC<Props> = ({ competitor, onClick }) => {
  return (
    <div 
      onClick={() => onClick(competitor.id)}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden border border-slate-200 group"
    >
      <div className="h-40 overflow-hidden bg-slate-100 flex items-center justify-center p-8">
        <img 
          src={competitor.logo} 
          alt={competitor.name} 
          className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-slate-800">{competitor.name}</h3>
          <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-1 rounded">
            {competitor.pricing}
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-slate-600">
            <Globe className="w-4 h-4 mr-2 text-slate-400" />
            <span>Xuất xứ: {competitor.origin}</span>
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <BarChart3 className="w-4 h-4 mr-2 text-slate-400" />
            <span>Thị phần: {competitor.marketShare}%</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {competitor.segments.slice(0, 2).map(s => (
            <span key={s} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitorCard;
