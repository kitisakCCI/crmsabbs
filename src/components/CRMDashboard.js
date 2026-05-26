import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { DollarSign, Target, Users, TrendingUp } from 'lucide-react';

export default function CRMDashboard() {
  // 1. 📊 จำลองข้อมูลจาก Database สำหรับทำกราฟ Sales Pipeline (แบ่งตาม Stage)
  const pipelineData = [
    { stage: 'Discovery', count: 12, value: 340000 },
    { stage: 'Proposal', count: 8, value: 210000 },
    { stage: 'Negotiation', count: 4, value: 155000 }, // เช่น ดีลของ Amazon
    { stage: 'Won 🎯', count: 6, value: 450000 },
    { stage: 'Lost ❌', count: 3, value: 90000 },
  ];

  // 2. 🎯 จำลองข้อมูลจาก Database สำหรับทำกราฟ Lead Source (ที่มาของลูกค้า)
  const leadSourceData = [
    { name: 'Website', value: 45 },
    { name: 'Cold Call', value: 20 },
    { name: 'Referral', value: 25 },
    { name: 'Partner', value: 10 },
  ];

  // กำหนดโทนสีให้กราฟวงกลม (ใช้ชุดสีมินิมอลแบบ Tailwind)
  const COLORS = ['#10b981', '#f59e0b', '#3b82f6', '#8b5cf6'];

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] text-slate-800 font-sans p-6">
      
      {/* ส่วนหัวของรายงาน */}
      <header className="mb-6">
        <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          📊 Executive CRM Dashboard
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">สรุปสถิติตัวชี้วัดและข้อมูลเชิงลึกจากการเชื่อมโยงฐานข้อมูล (Relational Data)</p>
      </header>

      {/* ─── 1. TOP STATS CARDS (กล่องสรุปตัวเลขด่วน) ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-xs">
        
        {/* Card 1: ยอดรวมดีลทั้งหมด */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Pipeline Value</p>
            <h3 className="text-lg font-black text-slate-900 mt-1 font-mono">$1,245,000</h3>
            <span className="text-[10px] text-emerald-600 font-medium">▲ +12% จากเดือนที่แล้ว</span>
          </div>
          <div className="p-2.5 bg-indigo-50 rounded-lg text-indigo-600"><DollarSign size={20} /></div>
        </div>

        {/* Card 2: อัตราการปิดดีล (Win Rate) */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Win Rate</p>
            <h3 className="text-lg font-black text-slate-900 mt-1 font-mono">66.6%</h3>
            <span className="text-[10px] text-slate-400 font-medium">คำนวณจากตาราง Deals Won</span>
          </div>
          <div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-600"><Target size={20} /></div>
        </div>

        {/* Card 3: รายชื่อผู้ติดต่อทั้งหมดในระบบ */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Total Contacts</p>
            <h3 className="text-lg font-black text-slate-900 mt-1 font-mono">1,420 ราย</h3>
            <span className="text-[10px] text-sky-600 font-medium">ซิงค์กับตาราง Contacts</span>
          </div>
          <div className="p-2.5 bg-sky-50 rounded-lg text-sky-600"><Users size={20} /></div>
        </div>

        {/* Card 4: เป้าหมายยอดขายไตรมาสนี้ */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Quarterly Goal</p>
            <h3 className="text-lg font-black text-slate-900 mt-1 font-mono">82% Achieved</h3>
            <span className="text-[10px] text-amber-600 font-medium">ขาดอีก $150,000 จะถึงเป้า</span>
          </div>
          <div className="p-2.5 bg-amber-50 rounded-lg text-amber-600"><TrendingUp size={20} /></div>
        </div>

      </div>

      {/* ─── 2. CHARTS AREA (พื้นที่แสดงผลกราฟ Recharts) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
        
        {/* กราฟฝั่งซ้าย (กว้าง 2 ส่วน): Sales Pipeline Value แยกตามขั้นตอน */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm p-5 flex flex-col">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-800">📊 Sales Pipeline & Stage Analytics</h3>
            <p className="text-[11px] text-slate-400">เปรียบเทียบมูลค่าเงินรวม (USD) ที่หมุนเวียนอยู่ในแต่ละสถานะของดีล</p>
          </div>
          
          {/* กล่องบรรจุกราฟแท่ง (Bar Chart) ทำงานร่วมกับ Tailwind CSS */}
          <div className="w-full h-64 mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={pipelineData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="stage" stroke="#94a3b8" fontSize={10} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '11px' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, 'มูลค่ารวม']}
                />
                <Legend wrapperStyle={{ fontSize: '10px', pt: 10 }} />
                {/* แท่งกราฟดึงสไตล์สีคราม (Indigo) มาแมปเข้ากับ Tailwind */}
                <Bar dataKey="value" name="Deal Value ($)" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* กราฟฝั่งขวา (กว้าง 1 ส่วน): สัดส่วนที่มาลูกค้า Lead Source */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5 flex flex-col">
          <div className="mb-2">
            <h3 className="text-sm font-bold text-slate-800">🎯 Lead Source Performance</h3>
            <p className="text-[11px] text-slate-400">สัดส่วนช่องทางที่มาลูกค้าที่สร้างดีลได้มากที่สุด</p>
          </div>

          {/* กล่องบรรจุกราฟวงกลม (Pie Chart) */}
          <div className="w-full h-56 relative my-auto flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}  // ทำเป็น Donut Chart เพื่อความโมเดิร์น
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {leadSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'สัดส่วน']} />
              </PieChart>
            </ResponsiveContainer>
            
            {/* ข้อความตรงกลางโดนัท (Center Label) */}
            <div className="absolute text-center select-none pointer-events-none">
              <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Top Source</p>
              <p className="text-sm font-black text-emerald-600">Website</p>
            </div>
          </div>

          {/* คำอธิบายสัญลักษณ์สีของกราฟวงกลมด้านล่าง (Custom Legend) */}
          <div className="grid grid-cols-2 gap-2 border-t border-slate-50 pt-3 text-[10px] font-medium text-slate-600">
            {leadSourceData.map((item, index) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index] }}></span>
                <span>{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ─── 3. BOTTOM TABLE: ข้อมูลธุรกรรมล่าสุด ─── */}
      <div className="mt-6 bg-white border border-slate-200 rounded-xl shadow-sm p-5 text-xs">
        <div className="mb-4">
          <h3 className="text-sm font-bold text-slate-800">📋 High-Value Deals Waiting for Action</h3>
          <p className="text-[11px] text-slate-400">ดึงข้อมูลรายการดีลขนาดใหญ่ที่อยู่ในสถานะต่อรองเจรจา (Cross-Table Checking)</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[11px]">
            <thead>
              <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 h-8 font-medium">
                <th className="px-3">Deal Name</th>
                <th className="px-3">Account</th>
                <th className="px-3">Stage</th>
                <th className="px-3 text-right">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="h-9 hover:bg-slate-50/60 font-medium">
                <td className="px-3 font-semibold text-slate-900">Amazon Enterprise CRM Implementation</td>
                <td className="px-3">🏢 Amazon Web Services</td>
                <td className="px-3"><span className="bg-amber-50 text-amber-700 border border-amber-100 px-1.5 py-0.5 rounded text-[10px]">Proposal</span></td>
                <td className="px-3 text-right font-mono font-bold text-emerald-600">$155,000</td>
              </tr>
              <tr className="h-9 hover:bg-slate-50/60 font-medium">
                <td className="px-3 font-semibold text-slate-900">Google Workspace Extension Deal</td>
                <td className="px-3">🏢 Google Thailand</td>
                <td className="px-3"><span className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-1.5 py-0.5 rounded text-[10px]">Negotiation</span></td>
                <td className="px-3 text-right font-mono font-bold text-emerald-600">$95,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}