import React, { useState } from 'react';
import { initialDealGroups } from './dealsData';
import DealDetailPage from './DealDetailPage';

export default function DealsPage() {
  const [groups, setGroups] = useState(initialDealGroups);
  const [showDealDetails, setShowDealDetails] = useState(false);

  const handleOpenDealDetails = () => {
    setShowDealDetails(true);
  };

  if (showDealDetails) {
    return <DealDetailPage onBack={() => setShowDealDetails(false)} />;
  }

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans p-6">
      
      {/* 1. TOP ACTION BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-800">Deals</h1>
          <span className="text-slate-400 text-xs cursor-pointer">▼</span>
        </div>
        
        {/* Actions ขวาบน */}
        <div className="flex items-center flex-wrap gap-3 text-sm text-slate-600">
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded-md flex items-center gap-1">📥 Import</button>
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded-md flex items-center gap-1">🔄 Integrate</button>
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded-md flex items-center gap-1">🤖 Automate / 8</button>
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded-md flex items-center gap-1">👥 Agents</button>
          <span className="text-slate-300">|</span>
          <div className="w-7 h-7 bg-slate-800 text-white font-bold rounded-full flex items-center justify-center text-xs">P</div>
          <button className="border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-md font-medium">Invite / 1</button>
          <button className="border border-slate-200 hover:bg-slate-50 p-1.5 rounded-md">🔗</button>
          <button className="text-slate-400 hover:text-slate-600">•••</button>
        </div>
      </div>

      {/* บอร์ดแท็บย่อย (Main table, Sales report, Pipeline) */}
      <div className="border-b border-slate-200 mb-4 flex items-center gap-6 text-sm">
        <div className="border-b-2 border-indigo-600 pb-2 font-medium text-slate-900 cursor-pointer">Main table</div>
        <div className="text-slate-500 hover:text-slate-800 pb-2 cursor-pointer">Sales report</div>
        <div className="text-slate-500 hover:text-slate-800 pb-2 cursor-pointer">Pipeline</div>
        <button className="text-slate-400 hover:text-indigo-600 pb-2 text-base">+</button>
      </div>

      {/* 2. FILTER & TOOLBAR */}
      <div className="flex items-center justify-between gap-4 mb-6 text-sm">
        <div className="flex items-center flex-wrap gap-2">
          <div className="inline-flex rounded-md shadow-sm">
            <button onClick={handleOpenDealDetails} className="bg-sky-700 hover:bg-sky-800 text-white px-5 py-2.5 rounded-l-md font-medium text-sm">
              New deal
            </button>
            <button className="bg-sky-800 hover:bg-sky-900 text-white px-3 py-2.5 rounded-r-md border-l border-sky-900 text-sm">
              ▼
            </button>
          </div>
          <div className="flex items-center gap-1 px-3 py-2 hover:bg-slate-50 rounded-md cursor-pointer text-slate-600 text-sm">
            <span>🔍</span> <span>Search</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-2 hover:bg-slate-50 rounded-md cursor-pointer text-slate-600 text-sm">
            <span>👤</span> <span>Person</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-2 hover:bg-slate-50 rounded-md cursor-pointer text-slate-600 text-sm">
            <span>Filter</span> <span className="text-xs">▼</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 hover:bg-slate-50 rounded-md cursor-pointer text-slate-600">
            <span>Group by</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 px-2">•••</button>
        </div>
        <button className="text-slate-400 hover:text-slate-600 text-sm bg-slate-50 p-1.5 rounded border border-slate-200">▲</button>
      </div>

      {/* 3. TABLES SECTION */}
      <div className="space-y-10">
        {groups.map((group) => (
          <div key={group.id}>
            {/* หัวข้อกลุ่ม */}
            <div className="flex items-center gap-2 mb-2 cursor-pointer w-fit">
              <span className={`text-sm ${group.textColor}`}>▼</span>
              <h2 className={`font-semibold text-base ${group.textColor}`}>{group.title}</h2>
            </div>

            {/* โครงสร้างตารางหลัก */}
            <div className="overflow-x-auto border border-slate-200 rounded-md shadow-sm">
              <table className="w-full text-left text-sm border-collapse min-w-[1300px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 h-10">
                    <th className="w-12 text-center border-r border-slate-200"><input type="checkbox" className="rounded" /></th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-64">Deal</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-44">Activities timeline</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-36 text-center">Stage</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-20 text-center">Owner</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-32">Deal Value</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-40">Contacts</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-36">Accounts</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-12 text-center"></th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-36">Expected Close Date</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-32 text-center">Close Probability</th>
                    <th className="px-4 font-normal text-slate-600 w-32">Forecast Value</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {group.deals.map((deal) => (
                    <tr key={deal.id} className="hover:bg-slate-50 h-10 group/row">
                      {/* แถบสีด้านซ้ายสุด */}
                      <td className={`text-center border-r border-slate-200 border-l-4 ${group.color}`}>
                        <input type="checkbox" className="rounded opacity-0 group-hover/row:opacity-100 transition-opacity" />
                      </td>
                      
                      {/* คอลัมน์ชื่อดีล + ปุ่มขยายเลเยอร์ย่อยถ้ามี (Subitems) */}
                      <td className="px-4 font-medium text-slate-900 border-r border-slate-200 flex items-center gap-2 h-10 justify-between">
                        <div className="flex items-center gap-1.5">
                          {deal.subItemsCount && <span className="text-sm text-slate-400 cursor-pointer hover:text-slate-600">▶</span>}
                          <span>{deal.name}</span>
                          {deal.subItemsCount && (
                            <span className="bg-slate-100 text-slate-500 text-sm px-2 py-0.5 rounded border border-slate-200 font-normal">
                              {deal.subItemsCount}
                            </span>
                          )}
                        </div>
                        <span className="text-slate-300 opacity-0 group-hover/row:opacity-100 cursor-pointer">📄</span>
                      </td>

                      {/* Timeline จอจำลอง */}
                      <td className="px-4 border-r border-slate-200">
                        <div className="flex gap-0.5 h-4 items-center">
                          <div className="w-2 h-full bg-indigo-300 rounded-sm"></div>
                          <div className="w-2 h-full bg-pink-400 rounded-sm"></div>
                          <div className="w-2 h-full bg-sky-400 rounded-sm"></div>
                          <span className="ml-2 text-sm text-slate-400 cursor-pointer">+</span>
                        </div>
                      </td>

                      {/* สเตจของดีล ถมเต็มช่อง */}
                      <td className={`p-0 border-r border-slate-200 text-center font-medium ${deal.stageColor}`}>
                        <div className="w-full h-full flex items-center justify-center min-h-[38px]">{deal.stage}</div>
                      </td>

                      {/* ผู้ดูแลดีล */}
                      <td className="px-4 border-r border-slate-200 text-center text-base">
                        <span className="cursor-pointer opacity-70 hover:opacity-100">{deal.ownerInitials}</span>
                      </td>

                      {/* มูลค่าดีล */}
                      <td className="px-4 border-r border-slate-200 font-mono font-medium text-slate-900">
                        ${deal.value.toLocaleString()}
                      </td>

                      {/* รายชื่อผู้ติดต่อ */}
                      <td className="px-4 border-r border-slate-200">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-slate-200 rounded text-slate-600 bg-slate-50">
                          👤 {deal.contact}
                        </span>
                      </td>

                      {/* บริษัท */}
                      <td className="px-4 border-r border-slate-200">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-slate-200 rounded text-slate-600 bg-slate-50">
                          🏢 {deal.account}
                        </span>
                      </td>

                      {/* เช็คบ็อกซ์สถานะกลมๆ ในรูป */}
                      <td className="px-2 border-r border-slate-200 text-center text-slate-300 text-sm">
                        {deal.stage === "Won" ? "✓" : "○"}
                      </td>

                      <td className="px-4 border-r border-slate-200 text-slate-500 font-medium">{deal.expectedClose}</td>
                      <td className="px-4 border-r border-slate-200 text-center font-mono text-slate-600">{deal.probability || "-"}</td>
                      <td className="px-4 font-mono font-medium text-slate-600 bg-slate-50/50">{deal.forecastValue}</td>
                    </tr>
                  ))}

                  {/* แถวเพิ่มข้อมูลดีลแบบเร็ว */}
                  <tr className="text-slate-400 hover:bg-slate-50 h-10">
                    <td className={`border-r border-slate-200 border-l-4 ${group.color}`}></td>
                    <td colSpan="11" className="px-4 text-left cursor-pointer">+ Add deal</td>
                  </tr>

                  {/* 📊 4. FOOTER SUM ROW (แถวรวมผลลัพธ์ท้ายตาราง ถอดแบบจากรูปเป๊ะๆ) */}
                  <tr className="bg-slate-50 border-t border-slate-200 font-medium h-12 text-slate-600">
                    <td className={`border-r border-slate-200 border-l-4 ${group.color}`}></td>
                    <td className="border-r border-slate-200"></td>
                    <td className="border-r border-slate-200"></td>
                    
                    {/* แถบหลากสีสรุปสัดส่วนคอลัมน์ Stage (ลูกเล่นเอกลักษณ์ของ monday.com) */}
                    <td className="p-2 border-r border-slate-200">
                      <div className="flex h-5 w-full rounded overflow-hidden shadow-inner">
                        {group.summary.stageBars.map((bar, i) => (
                          <div key={i} className={`${bar.color} ${bar.width} h-full transition-all`}></div>
                        ))}
                      </div>
                    </td>
                    
                    <td className="border-r border-slate-200"></td>
                    
                    {/* คอลัมน์แสดงยอดรวม (Sum Value) */}
                    <td className="px-4 border-r border-slate-200 font-mono text-center align-middle">
                      <div className="text-slate-900 font-bold">{group.summary.totalValue}</div>
                      <div className="text-xs text-slate-400 font-sans tracking-tight">sum</div>
                    </td>
                    <td className="border-r border-slate-200 text-center text-slate-400">-</td>
                    <td className="border-r border-slate-200 text-center text-slate-400">-</td>
                    <td className="border-r border-slate-200"></td>
                    <td className="border-r border-slate-200"></td>
                    <td className="border-r border-slate-200"></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* ปุ่มสร้างกลุ่มตารางดีลชุดใหม่ */}
        <button className="border border-slate-300 hover:bg-slate-50 text-slate-600 font-medium px-4 py-2 rounded-md text-sm">
          + Add new group
        </button>
      </div>

    </div>
  );
}