import React, { useState } from 'react';
import { initialAccountGroups } from './accountsData'; // ดึงข้อมูลม็อกอัปมาใช้

export default function AccountsPage() {
  const [groups, setGroups] = useState(initialAccountGroups);

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans p-6 selection:bg-sky-100 flex flex-col overflow-hidden">
      
      {/* ─── TOP ACTION BAR (แถวบนสุด: ชื่อบอร์ดและเมนูจัดการฝั่งขวา) ─── */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 shrink-0">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Accounts</h1>
          <span className="text-slate-400 text-xs cursor-pointer hover:text-slate-600">▼</span>
        </div>
        
        {/* เมนูจัดการถอดตามแบบในรูปภาพ */}
        <div className="flex items-center flex-wrap gap-3 text-xs text-slate-600 font-medium">
          <button className="hover:bg-slate-100 px-2 py-1.5 rounded flex items-center gap-1 transition-colors">📥 Import</button>
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

      {/* ─── SUB NAVIGATION TABS (แท็บมุมมองย่อย Main View / Main table) ─── */}
      <div className="border-b border-slate-200 mb-4 flex items-center gap-6 text-xs shrink-0 font-medium">
        <div className="text-slate-400 hover:text-slate-700 pb-2 cursor-pointer transition-colors flex items-center gap-1">📌 Main View</div>
        <div className="border-b-2 border-indigo-600 pb-2 font-bold text-slate-900 cursor-pointer">Main table</div>
        <button className="text-slate-400 hover:text-indigo-600 pb-2 text-base">+</button>
      </div>

      {/* ─── TOOLBAR & FILTER BAR (แถบค้นหาและตัวกรองตาราง) ─── */}
      <div className="py-2.5 flex items-center justify-between gap-4 border-b border-slate-100 shrink-0 text-xs">
        <div className="flex items-center flex-wrap gap-1.5">
          {/* ปุ่มสีน้ำเงินแบรนด์ New Account */}
          <div className="inline-flex rounded-md shadow-sm">
            <button className="bg-[#0073ea] hover:bg-[#0060b9] text-white px-3 py-1.5 rounded-l-md font-medium text-[11px] transition-colors">
              New account
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

      {/* ─── ACCOUNTS DATA TABLES WINDOW (ตารางเลื่อนไหลแนวราบ) ─── */}
      <div className="flex-1 overflow-y-auto space-y-8 py-5 pr-1">
        {groups.map((group) => (
          <div key={group.id} className="relative">
            
            {/* ตัวสลับยุบ/ขยายกลุ่มตาราง */}
            <div className="flex items-center gap-1.5 mb-2 cursor-pointer group w-fit select-none">
              <span className={`text-[10px] transition-transform ${group.textColor}`}>▼</span>
              <h2 className={`font-bold text-sm tracking-tight ${group.textColor}`}>{group.title}</h2>
            </div>

            {/* โครงสร้างครอบแนวตารางกว้างขวางรองรับข้อมูลยาว */}
            <div className="overflow-x-auto border border-slate-200 rounded-md shadow-sm bg-white">
              <table className="w-full text-left text-[11px] border-collapse min-w-[1350px]">
                
                {/* หัวข้อแกนตาราง (Table Header) */}
                <thead>
                  <tr className="bg-[#f5f7fa] text-slate-500 border-b border-slate-200 h-9 select-none">
                    <th className="w-10 text-center border-r border-slate-200"><input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" /></th>
                    <th className="px-3 font-medium border-r border-slate-200 w-52">Account</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-44">Domain</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-56">Industry</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-64">Description</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-28 text-center">No. of employees</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-48">Headquarters location</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-36">Activities timeline</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-36">Contacts</th>
                    <th className="px-3 font-medium border-r border-slate-200 w-36">Deals</th>
                    <th className="w-10 text-center text-slate-400 font-bold cursor-pointer">+</th>
                  </tr>
                </thead>

                {/* เนื้อหาตารางรายบริษัท */}
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {group.accounts.map((acc) => (
                    <tr key={acc.id} className="hover:bg-slate-50/80 h-9 group/row transition-colors">
                      {/* เส้นแถบสีฟ้าแบ่งกลุ่มด้านหน้าสุด */}
                      <td className={`text-center border-r border-slate-200 border-l-4 ${group.color}`}>
                        <input type="checkbox" className="rounded border-slate-300 opacity-0 group-hover/row:opacity-100 transition-opacity" />
                      </td>
                      
                      {/* รายชื่อ Account หลัก */}
                      <td className="px-3 font-medium text-slate-900 border-r border-slate-200 flex items-center justify-between h-9">
                        <span className="truncate">{acc.name}</span>
                        <span className="text-slate-300 opacity-0 group-hover/row:opacity-100 cursor-pointer hover:text-slate-500">📄</span>
                      </td>

                      {/* ลิงก์ URL ของ Domain บอร์ดสีกรมท่าอ่อน ๆ */}
                      <td className="px-3 border-r border-slate-200 text-sky-600 hover:underline cursor-pointer truncate max-w-[150px]">
                        {acc.domain}
                      </td>

                      {/* คอลัมน์แท็กอุตสาหกรรม (Industry Badges) ซ้อนหลากสี */}
                      <td className="px-2 border-r border-slate-200">
                        <div className="flex flex-wrap items-center gap-1 max-w-[210px]">
                          {acc.industries.map((ind, i) => (
                            <span key={i} className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${ind.color} truncate max-w-[70px]`}>
                              {ind.text}
                            </span>
                          ))}
                          {acc.hasMoreIndustries && (
                            <span className="bg-slate-800 text-white text-[9px] px-1 py-0.5 rounded font-bold">
                              +2
                            </span>
                          )}
                        </div>
                      </td>

                      {/* คำอธิบายยาวจำกัดขอบเขตข้อมูลไม่ให้ล้น */}
                      <td className="px-3 border-r border-slate-200 text-slate-400 truncate max-w-[240px]" title={acc.description}>
                        {acc.description}
                      </td>

                      {/* จำนวนพนักงานประจำบริษัท */}
                      <td className="px-3 border-r border-slate-200 text-center text-slate-700 font-medium">
                        {acc.employees}
                      </td>

                      {/* ที่ตั้งสำนักงานใหญ่ */}
                      <td className="px-3 border-r border-slate-200 text-slate-500 truncate max-w-[180px]">
                        {acc.location}
                      </td>

                      {/* มินิไทม์ไลน์สีสันกิจกรรม */}
                      <td className="px-3 border-r border-slate-200">
                        <div className="flex gap-0.5 h-3.5 items-center">
                          <div className="w-2 h-full bg-indigo-300 rounded-sm"></div>
                          <div className="w-2 h-full bg-pink-400 rounded-sm"></div>
                          <div className="w-2 h-full bg-sky-300 rounded-sm"></div>
                          <span className="ml-2 text-[9px] text-slate-300 cursor-pointer hover:text-slate-500">+</span>
                        </div>
                      </td>

                      {/* ข้อมูลการผูกผู้ติดต่อ (Contact Badge) */}
                      <td className="px-3 border-r border-slate-200">
                        <span className="inline-block bg-slate-50 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded shadow-sm hover:bg-slate-100 cursor-pointer max-w-[110px] truncate">
                          👤 {acc.contact}
                        </span>
                      </td>

                      {/* รายละเอียดดีลที่ผูกกันไว้ (Deals Badge) */}
                      <td className="px-3 border-r border-slate-200">
                        <span className="inline-block bg-slate-50 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded shadow-sm hover:bg-slate-100 cursor-pointer max-w-[110px] truncate">
                          💲 {acc.deal}
                        </span>
                      </td>
                      
                      <td className="bg-white"></td>
                    </tr>
                  ))}

                  {/* แถวกดเพิ่มบัญชีด่วน */}
                  <tr className="text-slate-400 hover:bg-slate-50 h-9 transition-colors">
                    <td className={`border-r border-slate-200 border-l-4 ${group.color}`}></td>
                    <td colSpan="10" className="px-3 text-left cursor-pointer font-normal text-slate-400">+ Add account</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* ปุ่มสร้างกลุ่มใหม่ */}
        <button className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-600 font-bold px-3 py-1.5 rounded-md text-xs shadow-sm transition-colors">
          + Add new group
        </button>
      </div>

    </div>
  );
}