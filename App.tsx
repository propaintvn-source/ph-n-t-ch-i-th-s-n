
import React, { useState } from 'react';
import { 
  Paintbrush, 
  BarChart2, 
  Users, 
  Settings, 
  Search, 
  Bell, 
  LayoutDashboard,
  Zap,
  ChevronRight,
  TrendingUp,
  FileText
} from 'lucide-react';
import { COMPETITORS } from './constants';
import CompetitorCard from './components/CompetitorCard';
import MarketDashboard from './components/MarketDashboard';
import ComparisonTool from './components/ComparisonTool';
import AIChatAnalysis from './components/AIChatAnalysis';

type Tab = 'dashboard' | 'competitors' | 'comparison' | 'ai-analyst';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [selectedCompetitorId, setSelectedCompetitorId] = useState<string | null>(null);

  const selectedCompetitor = COMPETITORS.find(c => c.id === selectedCompetitorId);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900">Tổng quan Thị trường</h1>
                <p className="text-slate-500">Phân tích toàn cảnh ngành sơn Việt Nam 2024</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <FileText className="w-4 h-4 mr-2" /> Xuất Báo cáo
                </button>
              </div>
            </header>
            
            <MarketDashboard />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white">
                <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-1">Quy mô Thị trường</h3>
                <p className="text-3xl font-black mb-2">~$1.1 Tỷ</p>
                <p className="text-blue-100 text-sm">Tăng trưởng dự kiến 8.5% năm nay</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Mảng dẫn đầu</h3>
                <p className="text-3xl font-black text-slate-900 mb-2">Dân dụng</p>
                <p className="text-slate-500 text-sm">Chiếm 65% tổng sản lượng tiêu thụ</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Cạnh tranh</h3>
                <p className="text-3xl font-black text-slate-900 mb-2">600+</p>
                <p className="text-slate-500 text-sm">Doanh nghiệp sơn đang hoạt động tại VN</p>
              </div>
            </div>
          </div>
        );
      case 'competitors':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <header>
                <h1 className="text-2xl font-extrabold text-slate-900">Danh sách Đối thủ</h1>
                <p className="text-slate-500">Phân tích chi tiết 6 "ông lớn" đầu ngành</p>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {COMPETITORS.map(c => (
                  <CompetitorCard key={c.id} competitor={c} onClick={(id) => {
                    setSelectedCompetitorId(id);
                  }} />
                ))}
              </div>

              {selectedCompetitor && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in">
                  <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                          <img src={selectedCompetitor.logo} className="w-20 h-20 object-contain rounded-xl border border-slate-100" />
                          <div>
                            <h2 className="text-3xl font-black text-slate-900">{selectedCompetitor.name}</h2>
                            <p className="text-slate-500">{selectedCompetitor.origin}</p>
                          </div>
                        </div>
                        <button onClick={() => setSelectedCompetitorId(null)} className="p-2 hover:bg-slate-100 rounded-full">
                          <ChevronRight className="w-6 h-6 rotate-90" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">Hồ sơ Công ty</h4>
                          <p className="text-slate-600 text-sm leading-relaxed mb-4">{selectedCompetitor.description}</p>
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-500">Thị phần:</span>
                              <span className="font-bold text-slate-800">{selectedCompetitor.marketShare}%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-500">Phân khúc giá:</span>
                              <span className="font-bold text-slate-800">{selectedCompetitor.pricing}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">Chiến lược Marketing</h4>
                          <p className="text-slate-600 text-sm italic">"{selectedCompetitor.marketingStrategy}"</p>
                          <div className="mt-4">
                            <p className="text-xs font-bold text-slate-400 uppercase mb-2">Sản phẩm chính</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedCompetitor.mainProducts.map(p => (
                                <span key={p} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md">{p}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl">
                        <div>
                          <h5 className="text-green-700 font-bold text-sm mb-3 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2" /> Điểm mạnh Cạnh tranh
                          </h5>
                          <ul className="space-y-2">
                            {selectedCompetitor.strengths.map(s => (
                              <li key={s} className="text-sm text-slate-600 flex items-start">
                                <span className="text-green-500 mr-2">•</span> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-amber-700 font-bold text-sm mb-3">Rủi ro & Hạn chế</h5>
                          <ul className="space-y-2">
                            {selectedCompetitor.weaknesses.map(w => (
                              <li key={w} className="text-sm text-slate-600 flex items-start">
                                <span className="text-amber-500 mr-2">•</span> {w}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        );
      case 'comparison':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header>
              <h1 className="text-2xl font-extrabold text-slate-900">Ma trận So sánh</h1>
              <p className="text-slate-500">Đối chiếu trực tiếp thông số giữa các đối thủ</p>
            </header>
            <ComparisonTool />
          </div>
        );
      case 'ai-analyst':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header>
              <h1 className="text-2xl font-extrabold text-slate-900">AI Market Insight</h1>
              <p className="text-slate-500">Phân tích chuyên sâu dựa trên trí tuệ nhân tạo và tìm kiếm thời gian thực</p>
            </header>
            <AIChatAnalysis />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex-shrink-0 flex flex-col hidden lg:flex">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Paintbrush className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tight">VietPaint<span className="text-blue-500">Insight</span></span>
          </div>
          
          <nav className="space-y-1">
            <NavItem 
              icon={<LayoutDashboard className="w-5 h-5" />} 
              label="Bảng điều khiển" 
              active={activeTab === 'dashboard'} 
              onClick={() => setActiveTab('dashboard')} 
            />
            <NavItem 
              icon={<Users className="w-5 h-5" />} 
              label="Đối thủ cạnh tranh" 
              active={activeTab === 'competitors'} 
              onClick={() => setActiveTab('competitors')} 
            />
            <NavItem 
              icon={<BarChart2 className="w-5 h-5" />} 
              label="So sánh Ma trận" 
              active={activeTab === 'comparison'} 
              onClick={() => setActiveTab('comparison')} 
            />
            <NavItem 
              icon={<Zap className="w-5 h-5" />} 
              label="Chuyên gia AI" 
              active={activeTab === 'ai-analyst'} 
              onClick={() => setActiveTab('ai-analyst')} 
            />
          </nav>
        </div>
        
        <div className="mt-auto p-6 space-y-4">
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-xs text-slate-400 mb-2">Trạng thái dữ liệu</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Cập nhật 2024</span>
            </div>
          </div>
          <NavItem icon={<Settings className="w-5 h-5" />} label="Cài đặt" onClick={() => {}} />
        </div>
      </aside>

      {/* Mobile Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 flex justify-around p-3">
        <MobileNavItem icon={<LayoutDashboard className="w-6 h-6" />} active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
        <MobileNavItem icon={<Users className="w-6 h-6" />} active={activeTab === 'competitors'} onClick={() => setActiveTab('competitors')} />
        <MobileNavItem icon={<BarChart2 className="w-6 h-6" />} active={activeTab === 'comparison'} onClick={() => setActiveTab('comparison')} />
        <MobileNavItem icon={<Zap className="w-6 h-6" />} active={activeTab === 'ai-analyst'} onClick={() => setActiveTab('ai-analyst')} />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="relative w-96 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Tìm kiếm đối thủ, sản phẩm..." 
              className="w-full bg-slate-100 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-900">Admin Strategy</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Doanh nghiệp</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                AS
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="p-8 max-w-7xl mx-auto w-full mb-20 lg:mb-0">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
      active ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-800'
    }`}
  >
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const MobileNavItem: React.FC<{ icon: React.ReactNode, active: boolean, onClick: () => void }> = ({ icon, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`p-2 rounded-xl transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-slate-400'}`}
  >
    {icon}
  </button>
);

export default App;
