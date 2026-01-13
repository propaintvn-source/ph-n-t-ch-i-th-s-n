
import React, { useState } from 'react';
import { Competitor } from '../types';
import { COMPETITORS } from '../constants';
import { Check, X, Info } from 'lucide-react';

const ComparisonTool: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['dulux', 'jotun']);

  const handleToggle = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) setSelectedIds(prev => prev.filter(i => i !== id));
    } else {
      if (selectedIds.length < 3) setSelectedIds(prev => [...prev, id]);
    }
  };

  const selectedCompetitors = COMPETITORS.filter(c => selectedIds.includes(c.id));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">So sánh Trực quan</h3>
          <p className="text-slate-500 text-sm">Chọn tối đa 3 thương hiệu để đối chiếu</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {COMPETITORS.map(c => (
            <button
              key={c.id}
              onClick={() => handleToggle(c.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedIds.includes(c.id) 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-4 text-left text-slate-400 font-medium text-sm border-b bg-slate-50 w-1/4">Đặc tính</th>
              {selectedCompetitors.map(c => (
                <th key={c.id} className="py-4 px-4 text-center border-b bg-slate-50">
                  <div className="flex flex-col items-center">
                    <img src={c.logo} alt={c.name} className="w-12 h-12 object-contain mb-2 rounded-lg" />
                    <span className="font-bold text-slate-800">{c.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-4 font-semibold text-slate-700 border-b">Thị phần</td>
              {selectedCompetitors.map(c => (
                <td key={c.id} className="py-4 px-4 text-center border-b">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-bold">
                    {c.marketShare}%
                  </span>
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-4 px-4 font-semibold text-slate-700 border-b">Phân khúc Giá</td>
              {selectedCompetitors.map(c => (
                <td key={c.id} className="py-4 px-4 text-center border-b text-slate-600">
                  {c.pricing}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-4 px-4 font-semibold text-slate-700 border-b">Sản phẩm Chủ lực</td>
              {selectedCompetitors.map(c => (
                <td key={c.id} className="py-4 px-4 border-b">
                  <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
                    {c.mainProducts.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-4 px-4 font-semibold text-slate-700 border-b">Ưu điểm chính</td>
              {selectedCompetitors.map(c => (
                <td key={c.id} className="py-4 px-4 border-b">
                  <div className="flex flex-col gap-2">
                    {c.strengths.map(s => (
                      <div key={s} className="flex items-start text-xs text-green-700 bg-green-50 p-1.5 rounded">
                        <Check className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-4 px-4 font-semibold text-slate-700">Hạn chế</td>
              {selectedCompetitors.map(c => (
                <td key={c.id} className="py-4 px-4">
                   <div className="flex flex-col gap-2">
                    {c.weaknesses.map(w => (
                      <div key={w} className="flex items-start text-xs text-amber-700 bg-amber-50 p-1.5 rounded">
                        <X className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
                        <span>{w}</span>
                      </div>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTool;
