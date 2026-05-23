import React, { useState } from 'react';
import { amazonDealData } from './dealDetailData';

export default function AmazonDealDetailPage({ onBack }) {
  const [deal, setDeal] = useState(amazonDealData);
  const [activeTab, setActiveTab] = useState('overview'); // tabs: overview, timeline, products

  // สเตทรองรับการจดโน้ตด่วนในดีล
  const [note, setNote] = useState('');

  // ฟังก์ชันคำนวณยอดรวมของสินค้าในดีล
  const calculateTotal = () => {
    return deal.products.reduce((sum, item) => sum + (item.qty * item.unitPrice), 0);
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] text-slate-800 font-sans p-6">
      
      {/* ─── TOP BREADCRUMB & HEADER ─── */}
      <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        {onBack && (
          <button onClick={onBack} className="text-slate-500 hover:text-slate-900 text-xs mb-3">
            ← Back to Deals
          </button>
        )}
        <div className="text-[11px] text-slate-400 flex items-center gap-1 mb-2">
          <span>Deals</span> <span>/</span> <span>{deal.account.name}</span> <span>/</span> <span className="text-slate-600 font-medium">{deal.title}</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-md shadow-amber-500/20">
              $
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">{deal.title}</h1>
              <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                <span>{deal.account.logo} {deal.account.name}</span>
                <span className="text-slate-300">|</span>
                <span>Expected Close: {deal.closeDate}</span>
              </p>
            </div>
          </div>

          {/* ป้ายแสดงยอดเงินหลักของดีล */}
          <div className="text-right bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg">
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Deal Value</p>
            <p className="text-xl font-black text-emerald-600 font-mono">${deal.value.toLocaleString()}</p>
          </div>
        </div>

        {/* ─── PIPELINE STAGE TRACKER (แถบสถานะความคืบหน้าดีล) ─── */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">Deal Stage</p>
          <div className="grid grid-cols-5 gap-1 text-[10px] font-bold text-center">
            {['Discovery', 'Proposal', 'Negotiation', 'Won', 'Lost'].map((stage) => {
              const isCurrent = deal.stage === stage;
              const isWon = deal.stage === 'Won' && stage === 'Won';
              
              let bgStyle = 'bg-slate-100 text-slate-400';
              if (isCurrent) {
                bgStyle = stage === 'Lost' ? 'bg-rose-500 text-white' : 'bg-indigo-600 text-white';
              } else if (stage === 'Discovery' && deal.stage !== 'Lost') {
                bgStyle = 'bg-indigo-50 text-indigo-400'; // ไฮไลท์ทางผ่าน
              }

              return (
                <div key={stage} className={`py-1.5 rounded transition-all shadow-sm ${bgStyle}`}>
                  {stage} {isCurrent && '🎯'}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT: 2 COLUMN LAYOUT ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* คอลัมน์ซ้าย (กว้าง 2 ส่วน): รายละเอียดแท็บ และ รายการสินค้า */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* ส่วนเมนูแท็บภายในดีล */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 bg-slate-50/50 px-4 flex gap-4 text-xs font-medium">
              <button onClick={() => setActiveTab('overview')} className={`py-3 px-2 border-b-2 font-bold transition-all ${activeTab === 'overview' ? 'border-indigo-600 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>Overview</button>
              <button onClick={() => setActiveTab('products')} className={`py-3 px-2 border-b-2 font-bold transition-all ${activeTab === 'products' ? 'border-indigo-600 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>Products ({deal.products.length})</button>
              <button onClick={() => setActiveTab('timeline')} className={`py-3 px-2 border-b-2 font-bold transition-all ${activeTab === 'timeline' ? 'border-indigo-600 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>Activity History</button>
            </div>

            <div className="p-5 text-xs">
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-slate-700 mb-1">Deal Description</h3>
                    <p className="text-slate-500 leading-relaxed bg-slate-50 p-3 rounded border border-slate-100">
                      โครงการจัดระบบ CRM ระดับองค์กรสำหรับ Amazon Web Services ทีมประเทศไทย เพื่อจัดระเบียบข้อมูลลูกค้าและการติดตาม Pipeline การขายใบอนุญาต (License) ซอฟต์แวร์และการบริการ Onboarding คาดว่าจะปิดดีลได้ภายในไตรมาสที่ 3
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="border border-slate-100 p-3 rounded-lg bg-slate-50/50">
                      <span className="text-slate-400 block mb-0.5">Win Probability</span>
                      <span className="text-base font-bold text-indigo-600 font-mono">{deal.probability}%</span>
                    </div>
                    <div className="border border-slate-100 p-3 rounded-lg bg-slate-50/50">
                      <span className="text-slate-400 block mb-0.5">Forecast Category</span>
                      <span className="text-base font-bold text-amber-600">Pipeline</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PRODUCTS TABLE */}
              {activeTab === 'products' && (
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left border-collapse text-[11px]">
                    <thead>
                      <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 h-8 font-medium">
                        <th className="px-3">Product Name</th>
                        <th className="px-3 text-center">Qty</th>
                        <th className="px-3">Unit Price</th>
                        <th className="px-3 text-center">Discount</th>
                        <th className="px-3 text-right">Total Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {deal.products.map((item) => (
                        <tr key={item.id} className="h-9 hover:bg-slate-50">
                          <td className="px-3 font-semibold text-slate-800">{item.name}</td>
                          <td className="px-3 text-center font-mono">{item.qty}</td>
                          <td className="px-3 font-mono">${item.unitPrice.toLocaleString()}</td>
                          <td className="px-3 text-center text-rose-600 font-medium">{item.discount}</td>
                          <td className="px-3 text-right font-mono font-bold text-slate-700">${(item.qty * item.unitPrice).toLocaleString()}</td>
                        </tr>
                      ))}
                      <tr className="bg-slate-50/50 font-bold h-9 text-slate-800 border-t border-slate-200">
                        <td colSpan="4" className="px-3 text-right uppercase text-[10px] text-slate-400">Total Calculated:</td>
                        <td className="px-3 text-right font-mono text-indigo-600 text-xs">${calculateTotal().toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* TAB 3: TIMELINE HISTORY */}
              {activeTab === 'timeline' && (
                <div className="relative pl-4 border-l border-slate-200 space-y-5 ml-2 py-2">
                  {deal.timeline.map((act) => (
                    <div key={act.id} className="relative group">
                      {/* จุดไข่ปลาแยกสีตามประเภทกิจกรรม */}
                      <span className={`absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full ring-4 ring-white ${act.type === 'Meeting' ? 'bg-purple-500' : act.type === 'Email' ? 'bg-sky-500' : 'bg-amber-500'}`}></span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">{act.type}</span>
                          <span className="text-slate-400 text-[10px] font-mono">{act.date}</span>
                          <span className="text-[10px] text-slate-400">by {act.user}</span>
                        </div>
                        <p className="text-slate-500 mt-1 leading-relaxed bg-white border border-slate-100 p-2 rounded shadow-sm">{act.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ⚡ กล่องจดบันทึกด่วนสำหรับพนักงานขาย */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 text-xs">
            <h3 className="font-bold text-slate-700 mb-2 flex items-center gap-1">✍️ Quick Deal Notes</h3>
            <textarea 
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="พิมพ์บันทึกความคืบหน้าการเจรจาหรือจุดที่ต้องระวังเกี่ยวกับดีลของ Amazon ที่นี่..."
              rows="3"
              className="w-full border border-slate-200 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
            <div className="flex justify-end mt-2">
              <button className="bg-slate-800 hover:bg-slate-900 text-white px-3 py-1.5 rounded font-medium shadow-sm">Save Note</button>
            </div>
          </div>

        </div>

        {/* คอลัมน์ขวา (กว้าง 1 ส่วน): ข้อมูลความสัมพันธ์ (Relations Mapping) */}
        <div className="space-y-6 text-xs">
          
          {/* ข้อมูลบริษัทคู่ค้า (Account Card) */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <h3 className="font-bold text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-100 pb-2 mb-3">Linked Account</h3>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-lg">
                {deal.account.logo}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 hover:text-indigo-600 cursor-pointer">{deal.account.name}</h4>
                <a href="#account" className="text-[10px] text-sky-600 block hover:underline">View Account Information →</a>
              </div>
            </div>
          </div>

          {/* ข้อมูลผู้ติดต่อหลัก (Primary Contact Card) */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <h3 className="font-bold text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-100 pb-2 mb-3">Primary Contact Person</h3>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">
                  RT
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{deal.contact.name}</h4>
                  <p className="text-[10px] text-slate-400 font-medium">{deal.contact.title}</p>
                </div>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100 space-y-1 font-mono text-[10px] text-slate-500">
                <p>📧 {deal.contact.email}</p>
                <p>📞 +1 734 844 2393</p>
              </div>
            </div>
          </div>

          {/* สถิติตัวชี้วัดภายหลังดีลสำเร็จ (ROI Metrics) */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-xl p-4 shadow-md">
            <h3 className="font-bold text-indigo-200 uppercase tracking-wider text-[9px] mb-2">Sales Rep Context</h3>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              ดีลนี้เปิดระบบโดยพนักงานขายรหัส <span className="text-amber-400 font-mono">REP-09</span> เมื่อตรวจเช็คสิทธิ์ในระบบ ฐานข้อมูลจะส่งค่าบันทึกสถิติไปยังหน้า Dashboard รายบุคคลโดยอัตโนมัติ
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}