import React, { useState } from 'react';
import { initialGroups } from './contactsData'; // ดึงข้อมูลจำลองมาใช้
import CreateContactForm from './CreateContactForm';

export default function ContactsPage() {
  const [groups] = useState(initialGroups);
  const [isCreating, setIsCreating] = useState(false);

  const handleSaveNewContact = (newContactData) => {
    // TODO: บันทึก contact ใหม่ลงตาราง
    console.log('New contact:', newContactData);
    setIsCreating(false);
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans p-6 selection:bg-indigo-100">
      
      {/* 1. TOP ACTION BAR (แถวบนสุด: ชื่อบอร์ด และกลุ่มปุ่มขวา) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-800">Contacts</h1>
          <span className="text-slate-400 text-xs cursor-pointer hover:text-slate-600">▼</span>
        </div>
        
        {/* กลุ่มปุ่มฝั่งขวาถอดแบบจากรูป */}
        <div className="flex items-center flex-wrap gap-3 text-sm text-slate-600">
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded-md flex items-center gap-1">📥 Import</button>
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded-md flex items-center gap-1">🔄 Integrate</button>
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded-md flex items-center gap-1">🤖 Automate / 3</button>
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded-md flex items-center gap-1">👥 Agents</button>
          <span className="text-slate-300">|</span>
          <div className="w-7 h-7 bg-slate-800 text-white font-bold rounded-full flex items-center justify-center text-xs">P</div>
          <button className="border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-md font-medium">Invite / 1</button>
          <button className="border border-slate-200 hover:bg-slate-50 p-1.5 rounded-md">🔗</button>
          <button className="text-slate-400 hover:text-slate-600">•••</button>
        </div>
      </div>

      {/* แท็บย่อย Main table */}
      <div className="border-b border-slate-200 mb-4 flex items-center gap-4 text-sm">
        <div className="border-b-2 border-indigo-600 pb-2 font-medium text-slate-900 cursor-pointer">Main table</div>
        <button className="text-slate-400 hover:text-indigo-600 pb-2 text-base">+</button>
      </div>

      {/* 2. FILTER & SEARCH BAR (แถบค้นหาและตัวกรอง) */}
      <div className="flex items-center justify-between gap-4 mb-6 text-sm">
        <div className="flex items-center flex-wrap gap-2">
          {/* ปุ่ม New Contact สไตล์สีกรมท่าฝั่งซ้าย */}
          <div className="inline-flex rounded-md shadow-sm">
            <button 
              onClick={() => setIsCreating(true)}
              className="bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded-l-md font-medium text-xs transition-colors"
            >
              New contact
            </button>
            <button className="bg-sky-800 hover:bg-sky-900 text-white px-2 py-2 rounded-r-md border-l border-sky-900 text-xs">
              ▼
            </button>
          </div>
          
          {/* ปุ่มเครื่องมือค้นหา */}
          <div className="flex items-center gap-1 px-3 py-1.5 hover:bg-slate-50 rounded-md cursor-pointer text-slate-600">
            <span>🔍</span> <span>Search</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 hover:bg-slate-50 rounded-md cursor-pointer text-slate-600">
            <span>👤</span> <span>Person</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 hover:bg-slate-50 rounded-md cursor-pointer text-slate-600">
            <span>Filter</span> <span className="text-[10px]">▼</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 hover:bg-slate-50 rounded-md cursor-pointer text-slate-600">
            <span>Group by</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 px-2">•••</button>
        </div>
        
        <button className="text-slate-400 hover:text-slate-600 text-xs bg-slate-50 p-1.5 rounded border border-slate-200">▲</button>
      </div>

      {/* 3. GROUPS OF TABLES (ส่วนตารางแยกกลุ่มตามภาพ) หรือ FORM สำหรับเพิ่มข้อมูล */}
      {isCreating ? (
        <CreateContactForm onSave={handleSaveNewContact} onCancel={() => setIsCreating(false)} />
      ) : (
      <div className="space-y-10">
        {groups.map((group) => (
          <div key={group.id} className="relative">
            {/* หัวข้อกลุ่มเปิด/ปิดได้ */}
            <div className="flex items-center gap-2 mb-2 group cursor-pointer w-fit">
              <span className={`text-xs transition-transform ${group.textColor}`}>▼</span>
              <h2 className={`font-semibold text-base ${group.textColor}`}>{group.title}</h2>
            </div>

            {/* ส่วนโครงตาราง */}
            <div className="overflow-x-auto border border-slate-200 rounded-md shadow-sm">
              <table className="w-full text-left text-xs border-collapse min-w-[1200px]">
                
                {/* หัวตาราง */}
                <thead>
                  <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 h-10">
                    <th className="w-12 text-center border-r border-slate-200"><input type="checkbox" className="rounded" /></th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-64">Contact</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-52">Email</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-44">Activities timeline</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-36">Accounts</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-40">Deals</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-32">Deals value</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-44">Phone</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-24">Title</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-32 text-center">Type</th>
                    <th className="px-4 font-normal text-slate-600 border-r border-slate-200 w-32 text-center">Priority</th>
                    <th className="w-10 text-center text-slate-400 hover:text-slate-600 cursor-pointer">+</th>
                  </tr>
                </thead>

                {/* เนื้อหาในตาราง */}
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {group.contacts.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 h-10 group/row">
                      {/* เส้นสีประจำกลุ่มตรงขอบซ้ายสุด */}
                      <td className={`text-center border-r border-slate-200 border-l-4 ${group.color}`}>
                        <input type="checkbox" className="rounded opacity-0 group-hover/row:opacity-100 transition-opacity" />
                      </td>
                      <td className="px-4 font-medium text-slate-900 border-r border-slate-200 flex items-center justify-between h-10">
                        <span>{item.name}</span>
                        <span className="text-slate-300 opacity-0 group-hover/row:opacity-100 cursor-pointer">📄</span>
                      </td>
                      <td className="px-4 border-r border-slate-200 text-sky-600 hover:underline cursor-pointer">{item.email}</td>
                      
                      {/* แท่ง Timeline หลากสีจำลอง */}
                      <td className="px-4 border-r border-slate-200">
                        <div className="flex gap-0.5 h-4 items-center">
                          <div className="w-2 h-full bg-slate-100 rounded-sm"></div>
                          <div className="w-2 h-full bg-indigo-300 rounded-sm"></div>
                          <div className="w-2 h-full bg-pink-400 rounded-sm"></div>
                          <div className="w-2 h-full bg-sky-400 rounded-sm"></div>
                          <span className="ml-2 text-[10px] text-slate-400 cursor-pointer">+</span>
                        </div>
                      </td>
                      
                      {/* Badge บริษัท */}
                      <td className="px-4 border-r border-slate-200">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-slate-200 rounded text-slate-600 bg-slate-50">
                          🏢 {item.account}
                        </span>
                      </td>

                      {/* Badge Deal */}
                      <td className="px-4 border-r border-slate-200">
                        <div className="flex items-center gap-1">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-slate-200 rounded text-slate-600 bg-slate-50 truncate max-w-[100px]">
                            💲 {item.deal}
                          </span>
                          {item.dealBadge && <span className="bg-slate-100 text-slate-500 text-[10px] px-1.5 py-0.5 rounded">{item.dealBadge}</span>}
                        </div>
                      </td>
                      <td className="px-4 border-r border-slate-200 font-mono">{item.dealValue}</td>
                      <td className="px-4 border-r border-slate-200 text-sky-600 hover:underline cursor-pointer">{item.phoneFlag} {item.phone}</td>
                      <td className="px-4 border-r border-slate-200 text-slate-500 font-mono">{item.title}</td>
                      
                      {/* สีประจำประเภท (Type) */}
                      <td className={`p-0 border-r border-slate-200 text-center font-medium ${item.typeColor}`}>
                        <div className="w-full h-full flex items-center justify-center min-h-[38px]">{item.type}</div>
                      </td>

                      {/* สีลำดับความสำคัญ (Priority) */}
                      <td className={`p-0 border-r border-slate-200 text-center font-medium ${item.priorityColor}`}>
                        <div className="w-full h-full flex items-center justify-center min-h-[38px]">{item.priority}</div>
                      </td>
                      <td className="bg-white"></td>
                    </tr>
                  ))}

                  {/* แถวสำหรับกด "+ Add contact" ด้านล่างของกลุ่มตาราง */}
                  <tr className="text-slate-400 hover:bg-slate-50 h-10">
                    <td className={`border-r border-slate-200 border-l-4 ${group.color}`}></td>
                    <td colSpan="11" className="px-4 text-left cursor-pointer text-xs font-normal">
                      + Add contact
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* ปุ่มสร้างกลุ่มใหม่ ด้านล่างสุด */}
        <button className="border border-slate-300 hover:bg-slate-50 text-slate-600 font-medium px-4 py-1.5 rounded-md text-xs mt-4">
          + Add new group
        </button>
      </div>
      )}

    </div>
  );
}