import React, { useState } from 'react';
import CreateAccountForm from './CreateAccountForm';

export default function AccountsPage() {
  const [isCreating, setIsCreating] = useState(false);

  // ข้อมูลจำลองตารางหลักที่มีฟิลด์ความสัมพันธ์ระบบ CRM ครบถ้วนตามรูปต้นฉบับ
  const [accounts, setAccounts] = useState([
    { 
      id: 1, 
      accountName: "Google", 
      domain: "https://google.com", 
      industry: "Software", 
      desc: "Google is a multinational corporation...", 
      employees: "10000+", 
      location: "Mountain View CA USA",
      // คอลัมน์พิเศษที่ต้องคงไว้เผื่อทำ relational mapping ในฐานข้อมูล
      activitiesTimeline: ["📞 Phone call", "📧 Email follow up"], 
      contacts: ["👤 Larry Page", "👤 Sundar Pichai"],
      deals: ["💲 Google Workspace Deal", "💲 Cloud Platform Project"]
    },
    { 
      id: 2, 
      accountName: "Apple", 
      domain: "https://apple.com", 
      industry: "Internet", 
      desc: "Apple Inc. est une multinationale américaine...", 
      employees: "1001-5000", 
      location: "California, USA",
      activitiesTimeline: ["🤝 Meeting"],
      contacts: ["👤 Tim Cook"],
      deals: ["💲 Hardware Bulk Purchase"]
    },
    { 
      id: 3, 
      accountName: "Amazon", 
      domain: "https://amazon.com", 
      industry: "Commercial", 
      desc: "Amazon est une entreprise technologique in...", 
      employees: "10000+", 
      location: "Seattle, USA",
      activitiesTimeline: ["📧 Introduction Sent"],
      contacts: ["👤 Jeff Bezos"],
      deals: ["💲 AWS Migration Enterprise"]
    }
  ]);

  const handleSaveNewAccount = (newAccData) => {
    const formattedData = {
      id: Date.now(),
      accountName: newAccData.accountName,
      domain: `https://${newAccData.accountName.toLowerCase().replace(/\s+/g, '')}.com`,
      industry: newAccData.industry,
      desc: newAccData.description || "-",
      employees: newAccData.employeeCount || "-",
      location: newAccData.headquarters || "-",
      // จัดแจงข้อมูลลงอาเรย์เพื่อรองรับลักษณะ Object Array ที่จำลองมาจากฐานข้อมูล
      activitiesTimeline: ["🆕 Account Created"], 
      contacts: newAccData.relatedContact ? [`👤 ${newAccData.relatedContact}`] : [],
      deals: newAccData.relatedDeal ? [`💲 ${newAccData.relatedDeal}`] : []
    };

    setAccounts([...accounts, formattedData]);
    setIsCreating(false);
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans p-6 flex flex-col">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">Accounts</h1>
      </header>

      {/* TOOLBAR CONTROLS */}
      <div className="py-3 flex items-center justify-between gap-4 border-b border-slate-100 text-sm mb-4">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsCreating(true)} 
            className="bg-[#0073ea] hover:bg-[#0060b9] text-white px-4 py-2 rounded font-medium text-sm transition-colors"
          >
            ➕ New account
          </button>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500 font-medium">Main Workspace Table</span>
        </div>
      </div>

      {/* WORKSPACE AREA */}
      <div className="flex-1">
        {isCreating ? (
          <CreateAccountForm onSave={handleSaveNewAccount} onCancel={() => setIsCreating(false)} />
        ) : (
          /* ACCOUNTS DATA TABLES WINDOW - มีคอลัมน์เก็บไว้ครบถ้วนสำหรับผูก Database */
          <div className="overflow-x-auto border border-slate-200 rounded-md shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse min-w-[1300px]">
              <thead>
                <tr className="bg-[#f5f7fa] text-slate-500 border-b border-slate-200 h-9 font-medium select-none">
                  <th className="w-10 border-r border-slate-200"></th>
                  <th className="px-3 border-r border-slate-200 w-36">Account</th>
                  <th className="px-3 border-r border-slate-200 w-36">Industry</th>
                  <th className="px-3 border-r border-slate-200 w-48">Activities timeline</th>
                  <th className="px-3 border-r border-slate-200 w-44">Contacts</th>
                  <th className="px-3 border-r border-slate-200 w-48">Deals</th>
                  <th className="px-3 border-r border-slate-200 w-40">No. of employees</th>
                  <th className="px-3 border-r border-slate-200 w-48">Headquarters location</th>
                  <th className="px-3 border-r border-slate-200 w-52">Description</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody className="text-slate-700 divide-y divide-slate-100">
                {accounts.map((acc) => (
                  <tr key={acc.id} className="hover:bg-slate-50/80 h-10 font-medium">
                    <td className="text-center border-r border-slate-200 border-l-4 border-indigo-500">
                      <input type="checkbox" className="scale-90" />
                    </td>
                    <td className="px-3 font-semibold text-slate-900 border-r border-slate-200">
                      <div>{acc.accountName}</div>
                      <span className="text-xs text-sky-600 block font-normal font-mono truncate">{acc.domain}</span>
                    </td>
                    
                    {/* 1. ช่อง Industry */}
                    <td className="px-3 border-r border-slate-200">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs font-semibold border border-slate-200">{acc.industry}</span>
                    </td>

                    {/* 2. ช่อง Activities timeline */}
                    <td className="px-3 border-r border-slate-200">
                      <div className="flex flex-col gap-0.5 max-h-[34px] overflow-y-auto">
                        {acc.activitiesTimeline.map((act, i) => (
                          <span key={i} className="text-xs text-amber-700 font-medium bg-amber-50 px-1 rounded border border-amber-100 w-fit">{act}</span>
                        ))}
                      </div>
                    </td>

                    {/* 3. ช่อง Contacts */}
                    <td className="px-3 border-r border-slate-200">
                      <div className="flex flex-wrap gap-1">
                        {acc.contacts.map((con, i) => (
                          <span key={i} className="bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded text-xs text-slate-600">{con}</span>
                        ))}
                      </div>
                    </td>

                    {/* 4. ช่อง Deals */}
                    <td className="px-3 border-r border-slate-200">
                      <div className="flex flex-col gap-0.5">
                        {acc.deals.map((deal, i) => (
                          <span key={i} className="text-indigo-600 hover:underline cursor-pointer truncate font-medium">{deal}</span>
                        ))}
                      </div>
                    </td>

                    <td className="px-3 border-r border-slate-200 font-mono text-slate-600">{acc.employees}</td>
                    <td className="px-3 border-r border-slate-200 text-slate-500 truncate max-w-[150px]">{acc.location}</td>
                    <td className="px-3 border-r border-slate-200 text-slate-400 italic truncate max-w-[180px]">{acc.desc}</td>
                    <td className="bg-white"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}