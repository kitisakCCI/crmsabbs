import React, { useState } from 'react';
import { initialDocuments } from './quotesData';

export default function QuotesAndInvoices() {
  const [documents, setDocuments] = useState(initialDocuments);

  // ฟังก์ชันสลับการเปิด/ปิดกล่อง Subitems ย่อย
  const toggleExpand = (id) => {
    setDocuments(documents.map(doc => 
      doc.id === id ? { ...doc, isExpanded: !doc.isExpanded } : doc
    ));
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans p-6 flex flex-col overflow-hidden">
      
      {/* ─── TOP HEADER BAR ─── */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 shrink-0">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Quotes & Invoices</h1>
          <span className="text-slate-400 text-sm cursor-pointer hover:text-slate-600">▼</span>
        </div>
        
        {/* แถวเครื่องมือจัดการระบบขวาบน */}
        <div className="flex items-center flex-wrap gap-3 text-sm text-slate-600 font-medium">
          <button className="hover:bg-slate-100 px-3 py-2 rounded flex items-center gap-2 transition-colors">💬 Feedback</button>
          <button className="hover:bg-slate-100 px-3 py-2 rounded flex items-center gap-2 transition-colors">💡 AI suggestions <span className="bg-sky-100 text-sky-600 font-bold text-xs px-1 rounded">New</span></button>
          <button className="hover:bg-slate-100 px-3 py-2 rounded flex items-center gap-2 transition-colors">🔄 Integrate <span className="w-4 h-4 bg-emerald-600 text-white text-xs font-bold rounded-full flex items-center justify-center scale-90">M</span></button>
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded flex items-center gap-1 transition-colors">🤖 Automate</button>
          <button className="hover:bg-slate-100 px-2.5 py-1.5 rounded flex items-center gap-1 transition-colors">👥 Agents</button>
          <span className="text-slate-300">|</span>
          <div className="w-7 h-7 bg-slate-800 text-white font-bold rounded-full flex items-center justify-center text-xs">P</div>
          <button className="border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 rounded font-semibold shadow-sm transition-colors">Invite / 1</button>
          <button className="border border-slate-200 bg-white hover:bg-slate-50 p-1.5 rounded shadow-sm transition-colors">🔗</button>
          <button className="text-slate-400 hover:text-slate-600 px-1">•••</button>
        </div>
      </header>

      {/* ─── TABS VIEW NAV ─── */}
      <div className="border-b border-slate-200 mb-4 flex items-center gap-6 text-sm shrink-0 font-medium">
        <div className="border-b-2 border-indigo-600 pb-2 font-bold text-slate-900 cursor-pointer">Main table</div>
        <button className="text-slate-400 hover:text-slate-600 pb-2">Quotes</button>
        <button className="text-slate-400 hover:text-slate-600 pb-2">Invoices</button>
        <button className="text-slate-400 hover:text-indigo-600 pb-2 text-base">+</button>
      </div>

      {/* ─── TOOLBAR CONTROLS ─── */}
      <div className="py-3 flex items-center justify-between gap-4 border-b border-slate-100 shrink-0 text-sm">
        <div className="flex items-center flex-wrap gap-1.5">
          <div className="inline-flex rounded-md shadow-sm">
            <button className="bg-[#0073ea] hover:bg-[#0060b9] text-white px-4 py-2 rounded-l-md font-medium text-sm transition-colors">
              ➕ Create
            </button>
            <button className="bg-[#0060b9] text-white px-3 py-2 rounded-r-md border-l border-sky-700 text-sm hover:bg-[#0050a0]">▼</button>
          </div>
          <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">🔍 Search</button>
          <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">👤 Person</button>
          <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">Filter ▼</button>
          <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-slate-100 rounded text-slate-500 transition-colors">Group by</button>
          <button className="text-slate-300 px-1 hover:text-slate-500">•••</button>
        </div>
        <button className="text-slate-400 border border-slate-200 px-2 py-1 rounded bg-slate-50 text-sm hover:bg-slate-100">▲</button>
      </div>

      {/* ─── TABLE AREA ─── */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="overflow-x-auto border border-slate-200 rounded-md shadow-sm bg-white">
          <table className="w-full text-left text-sm border-collapse min-w-[1100px]">
            
            {/* Header ของตารางหลัก */}
            <thead>
              <tr className="bg-[#f5f7fa] text-slate-500 border-b border-slate-200 h-9 select-none">
                <th className="w-10 border-r border-slate-200"></th>
                <th className="px-3 font-medium border-r border-slate-200 w-56">Document #</th>
                <th className="px-3 font-medium border-r border-slate-200 w-32 text-center">Type</th>
                <th className="px-3 font-medium border-r border-slate-200 w-32">Amount</th>
                <th className="px-3 font-medium border-r border-slate-200 w-52">Recipient</th>
                <th className="px-3 font-medium border-r border-slate-200 w-44">File</th>
                <th className="px-3 font-medium border-r border-slate-200 w-32 text-center">Status</th>
                <th className="px-3 font-medium border-r border-slate-200 w-36">Issue date</th>
                <th className="px-2 font-medium border-r border-slate-200 w-16 text-center">Owner</th>
                <th className="px-2 font-medium border-r border-slate-200 w-16 text-center">Owner</th>
                <th className="w-10 text-center text-slate-400 font-bold cursor-pointer">+</th>
              </tr>
            </thead>

            {/* Body ของตารางหลัก */}
            <tbody className="text-slate-700">
              {documents.map((doc) => (
                <React.Fragment key={doc.id}>
                  {/* แถวข้อมูลหลัก (Parent Row) */}
                  <tr className="hover:bg-slate-50/80 h-10 border-b border-slate-200 font-medium group/row">
                    {/* ปุ่มกดกาง Subitems และ แถบสีน้ำเงินสไตล์ monday */}
                    <td className="text-center border-r border-slate-200 border-l-4 border-indigo-500">
                      <button 
                        onClick={() => toggleExpand(doc.id)} 
                        className="text-sm text-slate-400 p-1 hover:text-slate-800 font-mono transition-transform"
                      >
                        {doc.isExpanded ? '▼' : '▶'}
                      </button>
                    </td>
                    
                    {/* เลขที่เอกสาร */}
                    <td className="px-3 font-semibold text-slate-900 border-r border-slate-200 flex items-center justify-between h-10">
                      <span>{doc.documentNo}</span>
                      <span className="text-slate-400 text-sm border border-slate-200 px-2 py-1 rounded bg-slate-50 opacity-0 group-hover/row:opacity-100 transition-opacity cursor-pointer flex items-center gap-1">
                        <span>💬</span> Subitem <span className="bg-slate-200 text-slate-600 px-1 rounded-full text-xs">{doc.subitems.length}</span>
                      </span>
                    </td>

                    {/* ประเภทเอกสาร */}
                    <td className="p-1 border-r border-slate-200">
                      <div className={`mx-auto rounded text-center py-1 font-normal w-24 text-sm ${doc.typeBg || 'bg-slate-100 text-slate-600'}`}>
                        {doc.type}
                      </div>
                    </td>

                    {/* ยอดเงินสุทธิ */}
                    <td className="px-3 border-r border-slate-200 font-semibold">{doc.amount}</td>

                    {/* ผู้รับเอกสาร */}
                    <td className="px-3 border-r border-slate-200 text-slate-600">{doc.recipient}</td>

                    {/* ลิงก์ไฟล์เอกสาร */}
                    <td className="px-3 border-r border-slate-200 text-sky-600 cursor-pointer hover:underline truncate">{doc.file}</td>

                    {/* สถานะเอกสาร */}
                    <td className="p-1 border-r border-slate-200">
                      <div className={`mx-auto rounded text-center py-1 font-semibold w-24 text-sm ${doc.statusBg || 'bg-slate-400 text-white'}`}>
                        {doc.status}
                      </div>
                    </td>

                    {/* วันที่ออกเอกสาร */}
                    <td className="px-3 border-r border-slate-200 text-slate-500">{doc.issueDate}</td>

                    {/* พนักงานผู้รับผิดชอบ 1 & 2 */}
                    <td className="px-2 border-r border-slate-200 text-center text-sm opacity-70 cursor-pointer hover:opacity-100">{doc.owner1}</td>
                    <td className="px-2 border-r border-slate-200 text-center text-sm opacity-70 cursor-pointer hover:opacity-100">{doc.owner2}</td>
                    <td className="bg-white"></td>
                  </tr>

                  {/* ─── ส่วนของ SUBITEMS EXPANDABLE (ตารางย่อยด้านใน) ─── */}
                  {doc.isExpanded && (
                    <tr className="bg-[#fcfdfe]">
                      <td className="border-r border-slate-200 border-l-4 border-indigo-300"></td>
                      <td colSpan="10" className="p-4 pl-8 border-b border-slate-200">
                        
                        {/* โครงสร้างตารางย่อย (Subitems Table) */}
                        <div className="border border-slate-200 rounded shadow-sm overflow-hidden max-w-[1100px]">
                          <table className="w-full text-left text-sm border-collapse">
                            <thead>
                              <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 h-7 font-semibold">
                                <th className="w-8 text-center border-r border-slate-200"><input type="checkbox" className="scale-75" /></th>
                                <th className="px-3 border-r border-slate-200 w-44">Subitem</th>
                                <th className="px-3 border-r border-slate-200 w-48">Description</th>
                                <th className="px-3 border-r border-slate-200 w-24">Unit price</th>
                                <th className="px-3 border-r border-slate-200 w-16 text-center">Quantity</th>
                                <th className="px-3 border-r border-slate-200 w-24 text-center">Total multipliers</th>
                                <th className="px-3 border-r border-slate-200 w-24">Base price</th>
                                <th className="px-3 border-r border-slate-200 w-20 text-center">Discount rate</th>
                                <th className="px-3 border-r border-slate-200 w-24">Discount value</th>
                                <th className="px-3 border-r border-slate-200 w-20 text-center">Fee rate</th>
                                <th className="px-3 border-r border-slate-200 w-24">Fee value</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-600">
                              {doc.subitems.map((sub) => (
                                <tr key={sub.id} className="hover:bg-slate-100/50 h-8">
                                  <td className="text-center border-r border-slate-100"><input type="checkbox" className="scale-75" /></td>
                                  <td className="px-3 border-r border-slate-100 font-medium text-slate-800">{sub.title}</td>
                                  <td className="px-3 border-r border-slate-100 text-slate-500 italic truncate max-w-[180px]">{sub.description}</td>
                                  <td className="px-3 border-r border-slate-100 font-mono">{sub.unitPrice}</td>
                                  <td className="px-3 border-r border-slate-100 text-center font-mono">{sub.quantity}</td>
                                  <td className="px-3 border-r border-slate-100 text-center font-mono text-slate-400">{sub.totalMultipliers}</td>
                                  <td className="px-3 border-r border-slate-100 font-mono font-medium text-slate-700">{sub.basePrice}</td>
                                  <td className="px-3 border-r border-slate-100 text-center text-amber-600 font-medium">{sub.discountRate}</td>
                                  <td className="px-3 border-r border-slate-100 font-mono text-amber-600">{sub.discountValue}</td>
                                  <td className="px-3 border-r border-slate-100 text-center text-slate-400">{sub.feeRate}</td>
                                  <td className="px-3 border-r border-slate-100 font-mono text-slate-400">{sub.feeValue}</td>
                                </tr>
                              ))}
                              {/* แถวกดเพิ่มรายการสินค้าแบบด่วน */}
                              <tr className="text-slate-400 hover:bg-slate-100/50 h-8">
                                <td className="border-r border-slate-100"></td>
                                <td colSpan="10" className="px-3 text-left cursor-pointer font-light text-slate-400">+ Add subitem</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}

              {/* แถวกดสร้างเอกสารใหม่แบบรวดเร็ว */}
              <tr className="text-slate-400 hover:bg-slate-50 h-10 border-b border-slate-200">
                <td className="border-r border-slate-200 border-l-4 border-indigo-500"></td>
                <td colSpan="10" className="px-3 text-left cursor-pointer font-normal text-slate-400">+ Add item</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}