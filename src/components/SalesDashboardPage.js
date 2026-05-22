import React from 'react';
import { 
  ResponsiveContainer, PieChart, Pie, Cell, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';
import { 
  dealStatusData, actualRevenueData, pipelineConversionData, 
  activityTrackerData, revenueByStageData, dealProgressData 
} from './salesDashboardData';

export default function SalesDashboardPage() {
  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] text-slate-800 font-sans p-6 overflow-y-auto">
      
      {/* ─── TOP HEADER BAR ─── */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6 bg-white p-4 rounded-lg shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            Sales Dashboard <span className="text-slate-300 text-sm font-normal">⭐</span>
          </h1>
        </div>
        
        {/* กลุ่มปุ่มคำสั่ง Export และ Invite ด้านบนขวา */}
        <div className="flex items-center gap-2 self-end text-xs font-semibold">
          <button className="border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 rounded shadow-sm flex items-center gap-1 transition-colors text-slate-600">
            📤 Export <span className="text-[10px]">▼</span>
          </button>
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded shadow-sm flex items-center gap-1 transition-colors">
            👤 Invite
          </button>
          <button className="text-slate-400 hover:text-slate-600 px-1 text-base">•••</button>
        </div>
      </header>

      {/* ─── FILTER CONTROL BAR ─── */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center flex-wrap gap-2">
          <button className="bg-[#0073ea] hover:bg-[#0060b9] text-white px-3 py-1.5 rounded font-medium shadow-sm">
            ➕ Add widget
          </button>
          <button className="border border-slate-200 px-3 py-1.5 rounded bg-slate-50 text-slate-600 hover:bg-slate-100 font-medium">
            📋 1 connected board
          </button>
          <div className="relative">
            <input 
              type="text" 
              placeholder="🔍 Type to filter" 
              className="border border-slate-200 rounded px-2.5 py-1.5 w-44 focus:outline-none focus:border-indigo-500 bg-slate-50/50"
            />
          </div>
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded text-slate-500">👤 People</button>
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded text-slate-500">🔻 Filter</button>
        </div>
        <button className="text-slate-400 hover:text-slate-600">⚙️</button>
      </div>

      {/* =========================================================
          ROW 1: TARGET GAUGE CHARTS & TOTAL METRIC CARDS (ภาพที่ 1)
          ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* วิดเจ็ตที่ 1: Annual Target Gauge (เกจวัดเป้าหมายรายปี) */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
            <span>Annual Target 🎯</span>
            <span className="text-slate-300">•••</span>
          </div>
          <div className="flex flex-col items-center justify-center py-2 relative">
            {/* วาดรูปเกจครึ่งวงกลมจำลองด้วย SVG ครอบสไตล์ไล่เฉด */}
            <svg className="w-48 h-24" viewBox="0 0 100 50">
              <path d="M 10,50 A 40,40 0 0,1 90,50" fill="none" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round"/>
              <path d="M 10,50 A 40,40 0 0,1 78,24" fill="none" stroke="url(#gaugeGradient)" strokeWidth="12" strokeLinecap="round"/>
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#66bb6a" />
                  <stop offset="50%" stopColor="#42a5f5" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>
              </defs>
              {/* เข็มชี้วัดของเกจ */}
              <line x1="50" y1="50" x2="72" y2="20" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="50" cy="50" r="3" fill="#1e293b" />
            </svg>
            
            {/* ตัวเลขกำกับหัว-ท้ายเกจ */}
            <div className="w-full flex justify-between text-[10px] text-slate-400 font-mono px-4 -mt-1">
              <span>0</span>
              <span>20k</span>
              <span>40k</span>
              <span>60k</span>
              <span>80k</span>
              <span>100k</span>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-slate-100 pt-3 text-center">
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Actual</p>
              <p className="text-lg font-black text-slate-800">85K</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Target</p>
              <p className="text-lg font-black text-slate-800">100K</p>
            </div>
          </div>
        </div>

        {/* วิดเจ็ตที่ 2: Monthly Target Bar (เป้าหมายรายเดือนแบบสะสมแถบสี) */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
            <span>Monthly Target 📅</span>
            <span className="text-slate-300">•••</span>
          </div>
          <div className="py-6">
            {/* แถบหลอดแก้วแสดงเปอร์เซ็นต์สะสมความสำเร็จ */}
            <div className="w-full h-9 bg-slate-100 rounded border border-slate-200 relative overflow-hidden shadow-inner">
              <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-l" style={{ width: '100%' }}></div>
            </div>
            <div className="w-full flex justify-between text-[10px] text-slate-400 font-mono mt-1.5">
              <span>0</span><span>2000</span><span>4000</span><span>6000</span><span>8000</span><span>10000</span>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-slate-100 pt-3">
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Monthly Actual</p>
              <p className="text-lg font-black text-slate-800">30K</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 font-bold uppercase">This Month's Target</p>
              <p className="text-lg font-black text-slate-800">10K</p>
            </div>
          </div>
        </div>

        {/* คอลัมน์ขวาสุด: มัดรวมการแสดงผลการ์ดสถิติตัวเลขใหญ่ (Metric Cards) */}
        <div className="grid grid-rows-2 gap-4">
          {/* วิดเจ็ตที่ 3: Average Deal Value */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col justify-center relative">
            <span className="text-slate-400 absolute top-3 right-4 text-[10px]">•••</span>
            <p className="text-xs font-bold text-slate-700 mb-1">Average Deal Value 💎</p>
            <p className="text-3xl font-normal text-slate-800 tracking-tight">$42,500</p>
          </div>
          
          {/* วิดเจ็ตที่ 4: Active deals - Forecasted Revenue */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col justify-center relative">
            <span className="text-slate-400 absolute top-3 right-4 text-[10px]">•••</span>
            <p className="text-xs font-bold text-slate-700 mb-1">Active deals - Forecasted Revenue 💰</p>
            <p className="text-3xl font-normal text-slate-800 tracking-tight">$133,000</p>
          </div>
        </div>

      </div>

      {/* =========================================================
          ROW 2: DEAL DISTRIBUTION & REVENUE CHART (ภาพที่ 1 ครึ่งล่าง)
          ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* วิดเจ็ตที่ 5: Deal status distribution (กราฟวงกลมแยกสีตามสถานะ) */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-700 mb-4">Deal status distribution 📊</p>
          <div className="w-full h-56 flex flex-col sm:flex-row items-center justify-around gap-2">
            <div className="w-44 h-44">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dealStatusData}
                    cx="50%" cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {dealStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* ชุดคำอธิบายรายสีข้างกราฟพาย */}
            <div className="grid grid-cols-1 gap-2 text-[11px] text-slate-600 font-medium">
              {dealStatusData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* วิดเจ็ตที่ 6: Actual Revenue by Month (Deals won) (กราฟแท่งรายรับจริง) */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-700 mb-4">Actual Revenue by Month (Deals won) 💵</p>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={actualRevenueData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis 
                  tick={{ fontSize: 10, fill: '#64748b' }} 
                  axisLine={false} 
                  tickLine={false}
                  tickFormatter={(v) => `$${v.toLocaleString()}`}
                />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                <Bar dataKey="value" fill="#6495ed" barSize={70} radius={[4, 4, 0, 0]}>
                  {/* แสดงข้อความยอดเงินสถิติลอยเหนือยอดแท่ง */}
                  <span className="hidden">label</span>
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* =========================================================
          ROW 3: PIPELINE CONVERSION & ACTIVITY TRACKER (ภาพที่ 2)
          ========================================================= */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        
        {/* วิดเจ็ตที่ 7: Pipeline conversion (กราฟแท่งลาดเอียงจำลองกรวยการขาย) */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-700 mb-6">Pipeline conversion 📉</p>
          <div className="w-full min-h-[140px] flex items-center justify-between gap-1 border-b border-slate-100 pb-4 relative">
            {pipelineConversionData.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center relative group">
                {/* ตัวเลขจำนวนนับหัวคอลัมน์ */}
                <span className="text-[11px] font-bold text-slate-800 mb-1">{item.count}</span>
                {/* แท่งกราฟ */}
                <div 
                  className="w-full rounded-sm shadow-sm transition-all group-hover:brightness-95 flex items-center justify-center text-white text-[10px] font-bold" 
                  style={{ height: `${item.count * 20}px`, backgroundColor: item.fill }}
                >
                  {/* ป้ายเปอร์เซ็นต์ลอยตรงกลางแถบลาดเอียง */}
                  <span className="absolute -top-6 bg-slate-50 text-slate-600 border border-slate-200 text-[9px] px-1 rounded shadow-sm">
                    {item.percentage}
                  </span>
                </div>
                {/* ชื่อแกนสถานะล่างสุด */}
                <span className="text-[10px] text-slate-500 font-medium mt-2">{item.stage}</span>
              </div>
            ))}
            
            {/* อัตราเปอร์เซ็นต์สรุปภาพรวมขวาสุดของกรวย */}
            <div className="w-24 flex flex-col items-center justify-center border-l border-slate-100 pl-4 text-center">
              <span className="text-emerald-500 text-2xl font-black">40 %</span>
              <span className="text-[9px] text-slate-400 font-medium leading-tight mt-0.5">Conversion to Won</span>
            </div>
          </div>
        </div>

        {/* วิดเจ็ตที่ 8: Activity tracker (กราฟแท่งแนวนอนบันทึกประเภทงาน) */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-700 mb-4">Activity tracker ⏱️</p>
          <div className="w-full h-28">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityTrackerData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 10, fill: '#475569' }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
                <Bar dataKey="Email" stackId="a" fill="#6495ed" barSize={25} />
                <Bar dataKey="Meeting" stackId="a" fill="#9333ea" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* =========================================================
          ROW 4: FORECASTED REVENUE & REVENUE BY MONTH ADDED (ภาพที่ 3)
          ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* วิดเจ็ตที่ 9: Forecasted Revenue by month */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-700 mb-4">Forecasted Revenue by month 📅</p>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[{month: 'June 2026', value: 133000}]} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v.toLocaleString()}`} />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Value']} />
                {/* เส้นประสีเขียวบ่งชี้เส้นชัย Goal */}
                <Bar dataKey="value" fill="#6495ed" barSize={100} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* วิดเจ็ตที่ 10: Forecasted Revenue by Stage */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-700 mb-4">Forecasted Revenue by Stage 💎</p>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueByStageData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="stage" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v.toLocaleString()}`} />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                <Bar dataKey="value" barSize={60} radius={[4, 4, 0, 0]}>
                  {revenueByStageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* วิดเจ็ตที่ 11: Deals Stages by Rep (กล่องสถานะจำลองเคสว่างไม่พบผลลัพธ์) */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm min-h-[240px] flex flex-col justify-between">
          <p className="text-xs font-bold text-slate-700">Deals Stages by Rep 👥</p>
          <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
            <div className="flex items-end gap-1 mb-2">
              <div className="w-5 h-12 bg-emerald-400 rounded-sm"></div>
              <div className="w-5 h-20 bg-indigo-500 rounded-sm relative -translate-y-2 rotate-6"></div>
              <div className="w-5 h-16 bg-emerald-400 rounded-sm"></div>
            </div>
            <h4 className="text-slate-700 font-bold text-xs">No results were found</h4>
            <p className="text-slate-400 text-[10px] mt-0.5">Check your settings & filters</p>
          </div>
        </div>

        {/* วิดเจ็ตที่ 12: Deal Progress based on Month Added (กราฟแท่งซ้อน 3 สี) */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-700 mb-4">Deal Progress based on Month Added 📈</p>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dealProgressData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
                <Bar dataKey="Discovery" stackId="a" fill="#6495ed" />
                <Bar dataKey="Proposal" stackId="a" fill="#90caf9" />
                <Bar dataKey="Won" stackId="a" fill="#66bb6a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
}