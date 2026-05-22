import React, { useState } from 'react';
import { initialProjectGroups } from './projectsData';

export default function ClientProjectsPage() {
  const [groups, setGroups] = useState(initialProjectGroups);

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans p-6 selection:bg-indigo-100 flex flex-col overflow-hidden">
      
      {/* ─── TOP ACTION BAR (แถวบนสุด: ชื่อส่วนการทำงาน และกลุ่มเมนูการตั้งค่าขวา) ─── */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 shrink-0">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Client Projects</h1>
          <span className="text-slate-400 text-xs cursor-pointer hover:text-slate-600">▼</span>
        </div>
        
        {/* กลุ่มปุ่มคำสั่งด้านขวาพรีเมียมตามภาพ */}
        <div className="flex items-center flex-wrap gap-3 text-xs text-slate-600 font-medium">
          <button className="border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-1.5 rounded flex items-center gap-1 transition-colors shadow-sm">
            ✨ AI suggestions <span className="text-[9px] bg-sky-100 text-sky-700 px-1 rounded font-bold ml-0.5">New</span>
          </button>
          <button className="hover:bg-slate-100 px-2 py-1.5 rounded flex items-center gap-1 transition-colors">🔄 Integrate</button>
          <button className="hover:bg-slate-100 px-2 py-1.5 rounded flex items-center gap-1 transition-colors">🤖 Automate / 1</button>
          <button className="hover:bg-slate-100 px-2 py-1.5 rounded flex items-center gap-1 transition-colors">👥 Agents</button>
          <span className="text-slate-300">|</span>
          <div className="w-6 h-6 bg-slate-800 text-white font-bold rounded-full flex items-center justify-center text-[10px]">P</div>
          <button className="border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 rounded font-semibold shadow-sm transition-colors">Invite / 1</button>
          <button className="border border-slate-200 bg-white hover:bg-slate-50 p-1.5 rounded shadow-sm transition-colors">🔗</button>
          <button className="text-slate-400 hover:text-slate-600 px-1">•••</button>
        </div>
      </header>

      {/* ─── SUB NAVIGATION TABS (แถบสลับมุมมองงานตาราง / Gantt Chart) ─── */}
      <div className="border-b border-slate-200 mb-4 flex items-center gap-6 text-xs shrink-0 font-medium">
        <div className="border-b-2 border-indigo-600 pb-2 font-bold text-slate-900 cursor-pointer">Main table</div>
        <div className="text-slate-400 hover:text-slate-700 pb-2 cursor-pointer transition-colors">Gantt</div>
        <button className="text-slate-400 hover:text-indigo-600 pb-2 text-base">+</button>
      </div>

      {/* ─── TOOLBAR & FILTER BAR (เครื่องมือตัวค้นหาและคัดกรองจัดกลุ่ม) ─── */}
      <div className="py-2.5 flex items-center justify-between gap-4 border-b border-slate-100 shrink-0 text-xs">
        <div className="flex items-center flex-wrap gap-1.5">
          {/* ปุ่ม New Project */}
          <div className="inline-flex rounded-md shadow-sm">
            <button className="bg-[#0073ea] hover:bg-[#0060b9] text-white px-3 py-1.5 rounded-l-md font-medium text-[11px] transition-colors">
              New project
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

      {/* ─── MAIN PROJECTS TABLES WINDOW (โซนกลุ่มตาราง) ─── */}
      <div className="flex-1 overflow-y-auto space-y-8 py-5 pr-1">
        {groups.map((group) => (
          <div key={group.id} className="relative">
            
            {/* หัวข้อเปิด-ปิดกลุ่มตาราง */}
            <div className="flex items-center gap-1.5 mb-2 cursor-pointer group w-fit select-none">
              <span className={`text-[10px] transition-transform ${group.textColor}`}>▼</span>
              <h2 className={`font-bold text-sm tracking-tight ${group.textColor}`}>{group.title}</h2>
            </div>

            {/* โครงสร้างเลื่อนสกรอลล์แนวนอน */}
            <div className="overflow-x-auto border border-slate-200 rounded-md shadow-sm bg-white">
              <table className="w-full text-left text-[11px] border-collapse min-w-[1200px]">
                
                {/* แกนตารางหลัก (Header) */}
                <thead>
                  <tr className="bg-[#f5f7fa] text-slate-500 border-b border-slate-200 h-9 select-none">
                    <th className="w-10 text-center border-r border-slate-200"><input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" /></th>
                    <th className="px-3 font-medium border-r border-slate-200 w-60">Project</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-16 text-center">Owner</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-28 text-center">Priority</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-44 text-center">Timeline</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-32 text-center">Status</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-36">Deals</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-36">Contact</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-36">Accounts</th>
                    <th className="w-10 text-center text-slate-400 font-bold cursor-pointer">+</th>
                  </tr>
                </thead>

                {/* รายละเอียดแต่ละโปรเจกต์ */}
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {group.projects.length > 0 ? (
                    group.projects.map((proj) => (
                      <tr key={proj.id} className="hover:bg-slate-50/80 h-9 group/row transition-colors">
                        <td className={`text-center border-r border-slate-200 border-l-4 ${group.color}`}>
                          <input type="checkbox" className="rounded border-slate-300 opacity-0 group-hover/row:opacity-100 transition-opacity" />
                        </td>
                        
                        {/* คอลัมน์ Project Name + ป้ายตัวเลขสับไอเทม */}
                        <td className="px-3 font-medium text-slate-900 border-r border-slate-200 flex items-center justify-between h-9">
                          <div className="flex items-center gap-1.5">
                            {proj.count && <span className="text-[8px] text-slate-400 cursor-pointer">▶</span>}
                            <span className="truncate max-w-[160px]">{proj.name}</span>
                            {proj.count && (
                              <span className="bg-slate-100 text-slate-500 text-[9px] px-1.5 border border-slate-200 rounded-md font-normal">
                                {proj.count}
                              </span>
                            )}
                          </div>
                          <span className="text-slate-300 opacity-0 group-hover/row:opacity-100 cursor-pointer hover:text-slate-500">💬</span>
                        </td>

                        {/* ผู้ดูแล (Owner) */}
                        <td className="px-3 border-r border-slate-200 text-center text-sm opacity-60">
                          <span className="cursor-pointer hover:opacity-100">{proj.owner}</span>
                        </td>

                        {/* ระดับความสำคัญ (Priority Block) */}
                        <td className={`p-0 border-r border-slate-200 text-center font-semibold ${proj.priorityColor}`}>
                          <div className="w-full h-full flex items-center justify-center min-h-[35px] text-[11px]">
                            {proj.priority || "-"}
                          </div>
                        </td>

                        {/* คอลัมน์ช่วงไทม์ไลน์แบบแคปซูลสวยงามตามสไตล์บอร์ดจริง */}
                        <td className="px-3 border-r border-slate-200 text-center">
                          {proj.timelineStart ? (
                            <div className={`w-full ${proj.timelineProgress} text-white rounded-full py-0.5 px-2 font-medium relative text-[10px] shadow-sm flex justify-between select-none`}>
                              <span>{proj.timelineStart}</span>
                              <span className="font-bold">-</span>
                              <span>{proj.timelineEnd}</span>
                            </div>
                          ) : (
                            <div className="w-full bg-slate-100 text-slate-400 rounded-full py-0.5 text-center font-mono text-[10px]">
                              -
                            </div>
                          )}
                        </td>

                        {/* ป้ายสลับสถานะชิ้นงาน (Status Block) */}
                        <td className={`p-0 border-r border-slate-200 text-center font-semibold ${proj.statusColor}`}>
                          <div className="w-full h-full flex items-center justify-center min-h-[35px] text-[11px]">{proj.status}</div>
                        </td>

                        {/* ป้ายดีลเชื่อมต่อ */}
                        <td className="px-3 border-r border-slate-200">
                          {proj.deal && (
                            <span className="inline-block bg-slate-50 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded shadow-sm hover:bg-slate-100 cursor-pointer max-w-[120px] truncate">
                              💲 {proj.deal}
                            </span>
                          )}
                        </td>

                        {/* ป้ายผู้ติดต่อ */}
                        <td className="px-3 border-r border-slate-200">
                          {proj.contact && (
                            <span className="inline-block bg-slate-50 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded shadow-sm hover:bg-slate-100 cursor-pointer max-w-[120px] truncate">
                              👤 {proj.contact}
                            </span>
                          )}
                        </td>

                        {/* ป้ายหน่วยงานองค์กรบริษัทลูกค้า */}
                        <td className="px-3 border-r border-slate-200">
                          {proj.account && (
                            <span className="inline-block bg-slate-50 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded shadow-sm hover:bg-slate-100 cursor-pointer max-w-[110px] truncate">
                              🏢 {proj.account}
                            </span>
                          )}
                        </td>

                        <td className="bg-white"></td>
                      </tr>
                    ))
                  ) : (
                    /* แสดงแถวเปล่ากรณีไม่มีข้อมูลในกลุ่มนั้น ๆ เช่นกลุ่ม Completed */
                    <tr className="h-9 text-slate-300 text-center">
                      <td className={`border-r border-slate-200 border-l-4 ${group.color}`}></td>
                      <td colSpan="9" className="text-left px-3 italic text-slate-300">No projects in this group</td>
                    </tr>
                  )}

                  {/* แถวกดคลิกพิมพ์เพิ่มรายชื่อโปรเจกต์แบบด่วน */}
                  <tr className="text-slate-400 hover:bg-slate-50 h-9 transition-colors">
                    <td className={`border-r border-slate-200 border-l-4 ${group.color}`}></td>
                    <td colSpan="9" className="px-3 text-left cursor-pointer font-normal text-slate-400">+ Add project</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* ปุ่มใหญ่ล่างสุดสำหรับขยายฐานกลุ่มเพิ่ม */}
        <button className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-600 font-bold px-3 py-1.5 rounded-md text-xs shadow-sm transition-colors">
          + Add new group
        </button>
      </div>

    </div>
  );
}