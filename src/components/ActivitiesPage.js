import React, { useState } from 'react';
import { initialActivityGroups } from './activitiesData';

export default function ActivitiesPage() {
  const [groups, setGroups] = useState(initialActivityGroups);

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans p-6 selection:bg-indigo-100 flex flex-col overflow-hidden">
      
      {/* ─── TOP ACTION BAR (ส่วนหัวแสดงชื่อบอร์ด และ แถบเครื่องมือตั้งค่าขวาบน) ─── */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 shrink-0">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Activities</h1>
          <span className="text-slate-400 text-xs cursor-pointer hover:text-slate-600">▼</span>
        </div>
        
        {/* ชุดเครื่องมือจัดการแถวบนดีไซน์คลีน */}
        <div className="flex items-center flex-wrap gap-3 text-xs text-slate-600 font-medium">
          <button className="hover:bg-slate-100 px-2 py-1.5 rounded flex items-center gap-1 transition-colors">
            🔄 Integrate <span className="w-4 h-4 bg-emerald-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center scale-90">qb</span>
          </button>
          <button className="hover:bg-slate-100 px-2 py-1.5 rounded flex items-center gap-1 transition-colors">🤖 Automate / 1</button>
          <button className="hover:bg-slate-100 px-2 py-1.5 rounded flex items-center gap-1 transition-colors">👥 Agents</button>
          <span className="text-slate-300">|</span>
          <div className="w-6 h-6 bg-slate-800 text-white font-bold rounded-full flex items-center justify-center text-[10px]">P</div>
          <button className="border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 rounded font-semibold shadow-sm transition-colors">Invite / 1</button>
          <button className="border border-slate-200 bg-white hover:bg-slate-50 p-1.5 rounded shadow-sm transition-colors">🔗</button>
          <button className="text-slate-400 hover:text-slate-600 px-1">•••</button>
        </div>
      </header>

      {/* ─── NAVIGATION TABS VIEW ─── */}
      <div className="border-b border-slate-200 mb-4 flex items-center gap-6 text-xs shrink-0 font-medium">
        <div className="border-b-2 border-indigo-600 pb-2 font-bold text-slate-900 cursor-pointer">Main table</div>
        <button className="text-slate-400 hover:text-indigo-600 pb-2 text-base">+</button>
      </div>

      {/* ─── TOOLBAR & FILTER BAR (แถบค้นหาและตัวกรองตาราง) ─── */}
      <div className="py-2.5 flex items-center justify-between gap-4 border-b border-slate-100 shrink-0 text-xs">
        <div className="flex items-center flex-wrap gap-1.5">
          {/* ปุ่มสีน้ำเงินแบรนด์ New activity */}
          <div className="inline-flex rounded-md shadow-sm">
            <button className="bg-[#0073ea] hover:bg-[#0060b9] text-white px-3 py-1.5 rounded-l-md font-medium text-[11px] transition-colors">
              New activity
            </button>
            <button className="bg-[#0060b9] text-white px-1.5 py-1.5 rounded-r-md border-l border-sky-700 text-[10px] hover:bg-[#0050a0]">
              ▼
            </button>
          </div>
          <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">🔍 Search</button>
          <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">👤 Person</button>
          <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">Filter ▼</button>
          <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">Group by</button>
          <button className="text-slate-300 px-1 hover:text-slate-500">•••</button>
        </div>
        <button className="text-slate-400 border border-slate-200 p-1 rounded bg-slate-50 text-[10px] hover:bg-slate-100">▲</button>
      </div>

      {/* ─── ACTIVITIES TABLES WINDOW (ส่วนตารางแผงบันทึกตารางงาน) ─── */}
      <div className="flex-1 overflow-y-auto space-y-8 py-5 pr-1">
        {groups.map((group) => (
          <div key={group.id} className="relative">
            
            {/* ตัวสลับยุบ/เปิดกลุ่ม */}
            <div className="flex items-center gap-1.5 mb-2 cursor-pointer group w-fit select-none">
              <span className={`text-[10px] transition-transform ${group.textColor}`}>▼</span>
              <h2 className={`font-bold text-sm tracking-tight ${group.textColor}`}>{group.title}</h2>
            </div>

            {/* บล็อกครอบโครงตารางกันข้อมูลล้น */}
            <div className="overflow-x-auto border border-slate-200 rounded-md shadow-sm bg-white">
              <table className="w-full text-left text-[11px] border-collapse min-w-[1050px]">
                
                {/* ส่วนหัวของแกนคอลัมน์ (Table Header) */}
                <thead>
                  <tr className="bg-[#f5f7fa] text-slate-500 border-b border-slate-200 h-9 select-none">
                    <th className="w-10 text-center border-r border-slate-200"><input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" /></th>
                    <th className="px-3 font-medium border-r border-slate-200 w-52">Activity</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-16 text-center">Owner</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-32 text-center">Activity Type</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-44">Start time</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-44">End time</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-28 text-center">Status</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-40">Related item</th>
                    <th className="w-10 text-center text-slate-400 font-bold cursor-pointer">+</th>
                  </tr>
                </thead>

                {/* รายการกิจกรรมรายแถว (Table Body) */}
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {group.activities.map((act) => (
                    <tr key={act.id} className="hover:bg-slate-50/80 h-9 group/row transition-colors">
                      {/* แถบสีแบ่งกลุ่มด้านหน้าสุด */}
                      <td className={`text-center border-r border-slate-200 border-l-4 ${group.color}`}>
                        <input type="checkbox" className="rounded border-slate-300 opacity-0 group-hover/row:opacity-100 transition-opacity" />
                      </td>
                      
                      {/* ชื่อกิจกรรมนัดหมาย */}
                      <td className="px-3 font-medium text-slate-900 border-r border-slate-200 flex items-center justify-between h-9">
                        <span className="truncate">{act.title}</span>
                        <span className="text-slate-300 opacity-0 group-hover/row:opacity-100 cursor-pointer hover:text-slate-500">📄</span>
                      </td>

                      {/* ผู้รับผิดชอบ (Owner) */}
                      <td className="px-3 border-r border-slate-200 text-center text-sm opacity-60">
                        <span className="cursor-pointer hover:opacity-100">{act.owner}</span>
                      </td>

                      {/* แถบประเภทกิจกรรม (Activity Type Badge แบบเต็มบล็อก) */}
                      <td className={`p-0 border-r border-slate-200 text-center font-semibold text-[10px] ${act.typeColor}`}>
                        <div className="w-full h-full flex items-center justify-center min-h-[35px]">{act.type}</div>
                      </td>

                      {/* เวลาเริ่ม - สิ้นสุดกิจกรรม */}
                      <td className="px-3 border-r border-slate-200 text-slate-700 font-medium">{act.startTime}</td>
                      <td className="px-3 border-r border-slate-200 text-slate-700 font-medium">{act.endTime}</td>

                      {/* สถานะประเมินผล (Status บล็อกสีเขียวสว่างระบุเสร็จสิ้น) */}
                      <td className={`p-0 border-r border-slate-200 text-center font-semibold text-[11px] ${act.statusColor}`}>
                        <div className="w-full h-full flex items-center justify-center min-h-[35px]">{act.status}</div>
                      </td>

                      {/* ดีลลูกค้าที่เกี่ยวข้องกัน (Related item Link Badge) */}
                      <td className="px-3 border-r border-slate-200">
                        <span className="inline-block bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded shadow-sm hover:bg-slate-100 cursor-pointer text-[10px]">
                          💲 {act.relatedItem}
                        </span>
                      </td>
                      
                      <td className="bg-white"></td>
                    </tr>
                  ))}

                  {/* แถวกดพิมพ์ข้อความสร้างกิจกรรมแบบด่วน */}
                  <tr className="text-slate-400 hover:bg-slate-50 h-9 transition-colors">
                    <td className={`border-r border-slate-200 border-l-4 ${group.color}`}></td>
                    <td colSpan="8" className="px-3 text-left cursor-pointer font-normal text-slate-400">+ Add activity</td>
                  </tr>

                  {/* แถบแถวว่างสรุปสถิติท้ายกลุ่มตารางตามภาพ */}
                  <tr className="bg-[#f5f7fa] border-t border-slate-200 font-semibold h-10 text-slate-500 select-none">
                    <td className={`border-r border-slate-200 border-l-4 ${group.color}`}></td>
                    <td className="border-r border-slate-200"></td>
                    <td className="border-r border-slate-200"></td>
                    <td className="border-r border-slate-200"></td>
                    <td className="border-r border-slate-200"></td>
                    <td className="border-r border-slate-200"></td>
                    <td className="p-1 border-r border-slate-200 text-center">
                      <div className="w-20 h-4 bg-lime-500 rounded shadow-inner mx-auto"></div>
                    </td>
                    <td className="border-r border-slate-200"></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* ปุ่มล่างสุดเพิ่มกลุ่มงาน */}
        <button className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-600 font-bold px-3 py-1.5 rounded-md text-xs shadow-sm transition-colors">
          + Add new group
        </button>
      </div>

    </div>
  );
}