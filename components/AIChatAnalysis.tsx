
import React, { useState } from 'react';
import { getAIAnalysis } from '../services/geminiService';
import { Send, Sparkles, Loader2, Search } from 'lucide-react';

const AIChatAnalysis: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ text: string, sources: any[] } | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await getAIAnalysis(query);
      setResult(data);
    } catch (err) {
      alert("Đã xảy ra lỗi khi kết nối AI. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    "Dự báo thị trường sơn Việt Nam 2025?",
    "So sánh chiến lược marketing Dulux và Jotun?",
    "Thách thức cho thương hiệu sơn mới vào Việt Nam?",
    "Xu hướng sơn xanh, thân thiện môi trường tại VN?"
  ];

  return (
    <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden text-white border border-slate-700">
      <div className="p-6 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center">
        <Sparkles className="w-6 h-6 mr-3 text-yellow-300" />
        <div>
          <h3 className="text-xl font-bold">Chuyên gia Phân tích AI</h3>
          <p className="text-blue-100 text-sm">Hỗ trợ bởi Gemini - Phân tích dữ liệu thời gian thực</p>
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleAnalyze} className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Nhập câu hỏi phân tích thị trường của bạn..."
              className="w-full bg-slate-800 border border-slate-600 rounded-xl py-4 pl-4 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-100"
            />
            <button
              disabled={loading}
              className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 rounded-lg transition-colors"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {suggestions.map(s => (
              <button
                key={s}
                type="button"
                onClick={() => setQuery(s)}
                className="text-[11px] bg-slate-800 border border-slate-700 hover:bg-slate-700 px-3 py-1 rounded-full text-slate-400 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </form>

        {result && (
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 animate-in fade-in slide-in-from-bottom-4">
            <h4 className="font-bold text-blue-400 mb-4 flex items-center">
              <Search className="w-4 h-4 mr-2" /> Phân tích chiến lược
            </h4>
            <div className="prose prose-invert prose-sm max-w-none text-slate-300 leading-relaxed whitespace-pre-wrap">
              {result.text}
            </div>
            {result.sources.length > 0 && (
              <div className="mt-6 pt-4 border-t border-slate-700">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Nguồn dữ liệu tham khảo:</p>
                <div className="flex flex-wrap gap-3">
                  {result.sources.map((chunk, idx) => (
                    chunk.web && (
                      <a 
                        key={idx} 
                        href={chunk.web.uri} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs text-blue-400 hover:underline flex items-center bg-blue-900/30 px-2 py-1 rounded"
                      >
                        {chunk.web.title || 'Nguồn tin'}
                      </a>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIChatAnalysis;
