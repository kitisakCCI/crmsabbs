import React, { useState } from 'react';
import { initialProducts, initialStats } from './productsData';

export default function ProductsServicesPage() {
  // สเตทสำหรับสลับมุมมองระหว่าง 'table' และ 'dashboard'
  const [activeTab, setActiveTab] = useState('table');
  const [products, setProducts] = useState(initialProducts);
  const [stats, setStats] = useState(initialStats);

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans p-6 selection:bg-sky-100 flex flex-col overflow-hidden">
      
      {/* ─── TOP ACTION BAR (แถวส่วนหัว: ชื่อหน้าระบบและเมนูจัดการฝั่งขวา) ─── */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 shrink-0">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Products & Services</h1>
          <span className="text-slate-400 text-xs cursor-pointer hover:text-slate-600">▼</span>
        </div>
        
        {/* กลุ่มปุ่มตั้งค่าขวาบนถอดแบบสไตล์พรีเมียม */}
        <div className="flex items-center flex-wrap gap-3 text-xs text-slate-600 font-medium">
          <button className="border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-1.5 rounded flex items-center gap-1 transition-colors shadow-sm">
            ✨ AI suggestions <span className="text-[9px] bg-sky-100 text-sky-700 px-1 rounded font-bold ml-0.5">New</span>
          </button>
          <button className="hover:bg-slate-100 px-2 py-1.5 rounded flex items-center gap-1.5 transition-colors">
            🔄 Integrate <span className="w-4 h-4 bg-emerald-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center scale-90">qb</span>
          </button>
          <button className="hover:bg-slate-100 px-2 py-1.5 rounded flex items-center gap-1 transition-colors">🤖 Automate</button>
          <button className="hover:bg-slate-100 px-2 py-1.5 rounded flex items-center gap-1 transition-colors">👥 Agents</button>
          <span className="text-slate-300">|</span>
          <div className="w-6 h-6 bg-slate-800 text-white font-bold rounded-full flex items-center justify-center text-[10px]">P</div>
          <button className="border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 rounded font-semibold shadow-sm transition-colors">Invite / 1</button>
          <button className="border border-slate-200 bg-white hover:bg-slate-50 p-1.5 rounded shadow-sm transition-colors">🔗</button>
          <button className="text-slate-400 hover:text-slate-600 px-1">•••</button>
        </div>
      </header>

      {/* ─── SUB NAVIGATION TABS (แถบสลับหน้าย่อยจำลองด้วย State ของ React) ─── */}
      <div className="border-b border-slate-200 mb-4 flex items-center gap-6 text-xs shrink-0 font-medium">
        <button 
          onClick={() => setActiveTab('table')}
          className={`pb-2 transition-all cursor-pointer ${activeTab === 'table' ? 'border-b-2 border-indigo-600 font-bold text-slate-900' : 'text-slate-400 hover:text-slate-700'}`}
        >
          Main table
        </button>
        <button 
          onClick={() => setActiveTab('dashboard')}
          className={`pb-2 transition-all cursor-pointer ${activeTab === 'dashboard' ? 'border-b-2 border-indigo-600 font-bold text-slate-900' : 'text-slate-400 hover:text-slate-700'}`}
        >
          Dashboard
        </button>
        <button className="text-slate-400 hover:text-indigo-600 pb-2 text-base">+</button>
      </div>

      {/* ─── SUB TOOLBAR BAR (แถวเครื่องมือฟิลเตอร์ที่จะเปลี่ยนไปตามหน้าที่เลือก) ─── */}
      <div className="py-2.5 flex items-center justify-between gap-4 border-b border-slate-100 shrink-0 text-xs mb-4">
        <div className="flex items-center flex-wrap gap-2">
          {/* ปุ่มคำสั่งหลักซ้ายมือ */}
          <div className="inline-flex rounded-md shadow-sm">
            <button className="bg-[#0073ea] hover:bg-[#0060b9] text-white px-3 py-1.5 rounded-l-md font-medium text-[11px] transition-colors">
              New item
            </button>
            <button className="bg-[#0060b9] text-white px-1.5 py-1.5 rounded-r-md border-l border-sky-700 text-[10px] hover:bg-[#0050a0]">
              ▼
            </button>
          </div>

          {/* ปุ่มพิเศษกรณีอยู่หน้า Dashboard */}
          {activeTab === 'dashboard' && (
            <button className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-2.5 py-1.5 rounded font-medium shadow-sm flex items-center gap-1 transition-colors">
              ➕ Add widget
            </button>
          )}

          <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">🔍 Search</button>
          <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">👤 Person</button>
          <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">Filter ▼</button>
          
          {activeTab === 'table' && (
            <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">Group by</button>
          )}
        </div>

        {/* ปุ่ม Export ขวาสุดเฉพาะหน้า แดชบอร์ด */}
        {activeTab === 'dashboard' ? (
          <button className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 px-3 py-1.5 rounded text-xs flex items-center gap-1 shadow-sm transition-colors">
            📤 Export <span>▼</span>
          </button>
        ) : (
          <button className="text-slate-400 border border-slate-200 p-1 rounded bg-slate-50 text-[10px] hover:bg-slate-100">▲</button>
        )}
      </div>

      {/* ─── DYNAMIC CONTENT AREA (สลับคอนเทนต์ตามการกดแท็บซ้ายบน) ─── */}
      <div className="flex-1 overflow-y-auto">
        
        {/* ----------------- SUB-MENU VIEW 1: MAIN TABLE ----------------- */}
        {activeTab === 'table' && (
          <div className="overflow-x-auto border border-slate-200 rounded-md shadow-sm bg-white">
            <table className="w-full text-left text-[11px] border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#f5f7fa] text-slate-500 border-b border-slate-200 h-9 select-none">
                  <th className="w-10 text-center border-r border-slate-200">
                    <input type="checkbox" className="rounded border-slate-300 text-indigo-600" />
                  </th>
                  <th className="px-3 font-medium border-r border-slate-200 w-48">Item</th>
                  <th className="px-3 font-medium border-r border-slate-200 w-64">Description</th>
                  <th className="px-3 font-medium border-r border-slate-200 w-28 text-right">Price</th>
                  <th className="px-3 font-medium border-r border-slate-200 w-28">SKU</th>
                  <th className="px-3 font-medium border-r border-slate-200 w-32 text-center">Type</th>
                  <th className="w-12"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {products.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 h-9 group/row transition-colors bg-sky-50/20">
                    <td className="text-center border-r border-slate-200 border-l-4 border-indigo-400">
                      <input type="checkbox" className="rounded border-slate-300 opacity-0 group-hover/row:opacity-100 transition-opacity" />
                    </td>
                    <td className="px-3 font-medium text-slate-900 border-r border-slate-200 flex items-center justify-between h-9">
                      <span className="truncate">{item.name}</span>
                      <span className="text-slate-300 opacity-0 group-hover/row:opacity-100 cursor-pointer hover:text-slate-500">💬</span>
                    </td>
                    <td className="px-3 border-r border-slate-200 text-slate-400 italic"></td>
                    <td className="px-3 border-r border-slate-200 text-right font-mono text-slate-800 font-medium">{item.price}</td>
                    <td className="px-3 border-r border-slate-200 text-slate-400"></td>
                    
                    {/* บล็อกประเภทสินค้า สีกรอบเทาถมเรียบเนียน */}
                    <td className="p-0 border-r border-slate-200 text-center bg-slate-300 text-slate-700 font-semibold text-[10px]">
                      <div className="w-full h-full flex items-center justify-center min-h-[35px]">{item.type}</div>
                    </td>
                    <td className="bg-white"></td>
                  </tr>
                ))}
                {/* แถวกดคลิกพิมพ์เพิ่มสินค้าแบบด่วน */}
                <tr className="text-slate-400 hover:bg-slate-50 h-9 transition-colors">
                  <td className="border-r border-slate-200 border-l-4 border-indigo-400"></td>
                  <td colSpan="6" className="px-3 text-left cursor-pointer font-normal text-slate-400">+ Add item</td>
                </tr>
                {/* แถวสรุปยอดราคารวมท้ายตาราง */}
                <tr className="bg-[#f5f7fa] border-t border-slate-200 font-semibold h-11 text-slate-500 select-none">
                  <td className="border-r border-slate-200 border-l-4 border-indigo-400"></td>
                  <td className="border-r border-slate-200"></td>
                  <td className="border-r border-slate-200"></td>
                  <td className="px-3 border-r border-slate-200 text-right text-slate-800">
                    <div className="text-xs font-bold leading-none">$0</div>
                    <span className="text-[9px] text-slate-400 font-normal tracking-tight">sum</span>
                  </td>
                  <td className="border-r border-slate-200"></td>
                  <td className="p-1 border-r border-slate-200">
                    <div className="w-full h-4 bg-slate-300 rounded shadow-inner"></div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* ----------------- SUB-MENU VIEW 2: DASHBOARD ----------------- */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            
            {/* กล่องวิดเจ็ตครึ่งบนแบ่งออกเป็น 2 คอลัมน์ซ้ายขวา */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* วิดเจ็ตฝั่งซ้าย: Product types (วิดเจ็ตแสดงผลสถานะว่างเปล่า) */}
              <div className="border border-slate-200 bg-white rounded-md p-4 min-h-[180px] shadow-sm flex flex-col justify-between relative group">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span>Product types</span>
                    <span className="text-slate-400 cursor-pointer text-[10px]">⏳</span>
                  </div>
                  <span className="text-slate-400 opacity-0 group-hover:opacity-100 cursor-pointer">•••</span>
                </div>
                
                <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                  <div className="text-slate-300 text-xl mb-1">🔍</div>
                  <h4 className="text-slate-700 font-bold text-xs">No results were found</h4>
                  <p className="text-slate-400 text-[10px] mt-0.5">Check your settings & filters</p>
                </div>
              </div>

              {/* วิดเจ็ตฝั่งขวา: Available products (แสดงสถิติจำนวนรวมตัวเลขขนาดใหญ่) */}
              <div className="border border-slate-200 bg-white rounded-md p-4 min-h-[180px] shadow-sm flex flex-col justify-between relative group">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span>Available products</span>
                    <span className="text-slate-400 cursor-pointer text-[10px]">⏳</span>
                  </div>
                  <span className="text-slate-400 opacity-0 group-hover:opacity-100 cursor-pointer">•••</span>
                </div>
                
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-slate-800 text-6xl font-normal select-none tracking-tighter">
                    {stats.availableProductsCount}
                  </span>
                </div>
              </div>

            </div>

            {/* วิดเจ็ตแถวยาวครึ่งล่าง: Files Gallery แหล่งรวมงานเอกสาร */}
            <div className="border border-slate-200 bg-white rounded-md p-4 min-h-[280px] shadow-sm flex flex-col justify-between relative group">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-1.5">
                  <span>Files Gallery</span>
                  <span className="text-slate-400 cursor-pointer text-[10px]">⏳</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-slate-100 p-0.5 rounded border border-slate-200 gap-0.5 scale-95">
                    <button className="bg-white shadow-sm p-1 rounded text-slate-700 text-[10px]">🎴</button>
                    <button className="p-1 text-slate-400 text-[10px] hover:text-slate-600">☰</button>
                  </div>
                  <span className="text-slate-300 text-xs">📥</span>
                  <span className="text-slate-400 opacity-0 group-hover:opacity-100 cursor-pointer">•••</span>
                </div>
              </div>

              {/* ส่วนแสดงไอคอนกราฟิกความว่างเปล่าของการอัพโหลดไฟล์ */}
              <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
                <div className="flex items-end justify-center gap-1.5 mb-3 opacity-80 scale-105">
                  <div className="w-10 h-10 bg-amber-400 rounded-md flex items-center justify-center text-white text-sm shadow-sm rotate-6">▶</div>
                  <div className="w-12 h-14 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-md relative z-10 -translate-x-2">A</div>
                  <div className="w-10 h-10 bg-emerald-400 rounded-md flex items-center justify-center text-white text-sm shadow-sm -rotate-6 -translate-x-4">🏔</div>
                </div>
                <h4 className="text-slate-700 font-bold text-xs">No files were found</h4>
                <p className="text-slate-400 text-[10px] max-w-sm mt-1 leading-relaxed">
                  Please upload files to any item's file column, gallery or updates so they will be displayed here.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}