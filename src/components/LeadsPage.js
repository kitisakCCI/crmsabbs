import React, { useState } from 'react';
import { initialLeadGroups } from './leadsData';

export default function LeadsPage() {
  const [groups] = useState(initialLeadGroups);

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans p-6 selection:bg-sky-100 flex flex-col overflow-hidden">
      
      {/* ─── TOP ACTION BAR (ส่วนหัวและปุ่มเครื่องมือด้านขวา) ─── */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 shrink-0">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Leads</h1>
          <span className="text-slate-400 text-sm cursor-pointer hover:text-slate-600">▼</span>
        </div>
        
        <div className="flex items-center flex-wrap gap-3 text-sm text-slate-600 font-medium">
          <button className="hover:bg-slate-100 px-3 py-2 rounded flex items-center gap-2 transition-colors">✨ AI Agents <span>▼</span></button>
          <button className="hover:bg-slate-100 px-3 py-2 rounded flex items-center gap-1 transition-colors">📥 Import</button>
          <button className="hover:bg-slate-100 px-3 py-2 rounded flex items-center gap-1 transition-colors">🔄 Integrate</button>
          <button className="hover:bg-slate-100 px-3 py-2 rounded flex items-center gap-1 transition-colors">🤖 Automate / 6</button>
          <button className="hover:bg-slate-100 px-3 py-2 rounded flex items-center gap-1 transition-colors">👥 Agents</button>
          <span className="text-slate-300">|</span>
          <div className="w-7 h-7 bg-slate-800 text-white font-bold rounded-full flex items-center justify-center text-xs">P</div>
          <button className="border border-slate-200 bg-white hover:bg-slate-50 px-3 py-2 rounded font-semibold shadow-sm transition-colors">Invite / 1</button>
          <button className="border border-slate-200 bg-white hover:bg-slate-50 px-2 py-2 rounded shadow-sm transition-colors">🔗</button>
          <button className="text-slate-400 hover:text-slate-600 px-2">•••</button>
        </div>
      </header>

      {/* ─── TABS NAVIGATION (แถบสลับตาราง/ฟอร์ม) ─── */}
      <div className="border-b border-slate-200 mb-4 flex items-center gap-6 text-sm shrink-0 font-medium">
        <div className="border-b-2 border-indigo-600 pb-2 font-bold text-slate-900 cursor-pointer">Main table</div>
        <div className="text-slate-400 hover:text-slate-700 pb-2 cursor-pointer transition-colors">Lead submission form</div>
        <button className="text-slate-400 hover:text-indigo-600 pb-2 text-base">+</button>
      </div>

      {/* ─── TOOLBAR & FILTER BAR ─── */}
      <div className="py-3 flex items-center justify-between gap-4 border-b border-slate-100 shrink-0 text-sm">
        <div className="flex items-center flex-wrap gap-2">
          <div className="inline-flex rounded-md shadow-sm">
            <button className="bg-[#0073ea] hover:bg-[#0060b9] text-white px-4 py-2 rounded-l-md font-medium text-sm transition-colors">
              New lead
            </button>
            <button className="bg-[#0060b9] text-white px-3 py-2 rounded-r-md border-l border-sky-700 text-sm hover:bg-[#0050a0]">
              ▼
            </button>
          </div>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded text-slate-500 transition-colors text-sm">🔍 Search</button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded text-slate-500 transition-colors text-sm">👤 Person</button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded text-slate-500 transition-colors text-sm">Filter ▼</button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded text-slate-500 transition-colors text-sm">Group by</button>
          <button className="text-slate-300 px-2 hover:text-slate-500">•••</button>
        </div>
        <button className="text-slate-400 border border-slate-200 px-2 py-1 rounded bg-slate-50 text-sm hover:bg-slate-100 transition-colors">▲</button>
      </div>

      {/* ─── LEADS TABLES AREA ─── */}
      <div className="flex-1 overflow-y-auto space-y-8 py-5 pr-1">
        {groups.map((group) => (
          <div key={group.id} className="relative">
            
            <div className="flex items-center gap-1.5 mb-2 cursor-pointer group w-fit select-none">
              <span className={`text-sm transition-transform ${group.textColor}`}>▼</span>
              <h2 className={`font-bold text-base tracking-tight ${group.textColor}`}>{group.title}</h2>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-md shadow-sm bg-white">
              <table className="w-full text-left text-sm border-collapse min-w-[1250px]">
                
                <thead>
                  <tr className="bg-[#f5f7fa] text-slate-500 border-b border-slate-200 h-9 select-none">
                    <th className="w-10 text-center border-r border-slate-200"><input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" /></th>
                    <th className="px-3 font-medium border-r border-slate-200 w-56">Lead</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-32 text-center">Status</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-40">Activities timeline</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-44 text-center">Create a contact</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-32">Company</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-36">Title</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-44">Email</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-40">Phone</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-32 text-center">Lead Source</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-32">Last Interaction</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-32">Active sequence</th>
                    <th className="w-10 text-center text-slate-400 font-bold cursor-pointer">+</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {group.leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/80 h-9 group/row transition-colors">
                      <td className={`text-center border-r border-slate-200 border-l-4 ${group.color}`}>
                        <input type="checkbox" className="rounded border-slate-300 opacity-0 group-hover/row:opacity-100 transition-opacity" />
                      </td>
                      
                      <td className="px-3 font-medium text-slate-900 border-r border-slate-200 flex items-center justify-between h-9">
                        <span className="truncate">{lead.name}</span>
                        <span className="text-slate-300 opacity-0 group-hover/row:opacity-100 cursor-pointer hover:text-slate-500">📄</span>
                      </td>

                      {/* สถานะลีด (Status) */}
                      <td className={`p-0 border-r border-slate-200 text-center font-semibold ${lead.statusColor}`}>
                        <div className="w-full h-full flex items-center justify-center min-h-[35px]">{lead.status}</div>
                      </td>

                      {/* ไทม์ไลน์จำลอง */}
                      <td className="px-3 border-r border-slate-200">
                        <div className="flex gap-0.5 h-3.5 items-center">
                          <div className="w-2 h-full bg-slate-100 rounded-sm"></div>
                          <div className="w-2 h-full bg-orange-200 rounded-sm"></div>
                          <div className="w-2 h-full bg-indigo-200 rounded-sm"></div>
                          <span className="ml-2 text-sm text-slate-300 cursor-pointer hover:text-slate-500">+</span>
                        </div>
                      </td>

                      {/* ปุ่ม Action "Move to Contacts" ตามในรูป */}
                      <td className="px-3 border-r border-slate-200 text-center">
                        <button className="border border-slate-200 bg-white text-slate-600 px-3 py-1 rounded shadow-sm hover:bg-slate-50 font-medium transition-all">
                          Move to Contacts
                        </button>
                      </td>

                      <td className="px-3 border-r border-slate-200 text-slate-700">{lead.company}</td>
                      <td className="px-3 border-r border-slate-200 text-slate-500">{lead.title}</td>
                      <td className="px-3 border-r border-slate-200 text-sky-600 hover:underline cursor-pointer">{lead.email}</td>
                      <td className="px-3 border-r border-slate-200 text-sky-600 hover:underline cursor-pointer">{lead.phoneFlag} {lead.phone}</td>
                      
                      {/* แหล่งที่มา (Source Badge) */}
                      <td className={`p-0 border-r border-slate-200 text-center font-semibold ${lead.sourceColor}`}>
                        <div className="w-full h-full flex items-center justify-center min-h-[35px] text-sm">{lead.source}</div>
                      </td>

                      <td className="px-3 border-r border-slate-200 text-slate-500 font-medium">{lead.lastInteraction}</td>
                      <td className="px-3 border-r border-slate-200"></td>
                      <td className="bg-white"></td>
                    </tr>
                  ))}

                  <tr className="text-slate-400 hover:bg-slate-50 h-9 transition-colors">
                    <td className={`border-r border-slate-200 border-l-4 ${group.color}`}></td>
                    <td colSpan="12" className="px-3 text-left cursor-pointer font-normal text-slate-400">+ Add lead</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <button className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-600 font-bold px-4 py-2 rounded-md text-sm shadow-sm transition-colors">
          + Add new group
        </button>
      </div>

    </div>
  );
}