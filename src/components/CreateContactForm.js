import React, { useState } from 'react';

export default function CreateContactForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    accounts: '',
    deals: '',
    dealsValue: '',
    phone: '',
    title: '',
    type: 'Customer', // ค่าเริ่มต้นตามระบบตัวเลือก
    priority: 'High'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      alert("กรุณากรอกชื่อผู้ติดต่อ (Name) ก่อนครับ");
      return;
    }
    onSave(formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-xl shadow-xl p-6 my-4 transition-all text-slate-800">
      {/* ส่วนหัวของฟอร์ม */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">👤 New Contact</h2>
          <p className="text-sm text-slate-500 mt-1">กรอกข้อมูลผู้ติดต่อใหม่พร้อมระบุความสัมพันธ์และสถานะในระบบ CRM</p>
        </div>
        <button 
          type="button" 
          onClick={onCancel} 
          className="text-slate-400 hover:text-slate-600 transition-colors text-lg p-1"
        >
          ✕ Close
        </button>
      </div>

      {/* ฟอร์มกรอกข้อมูลแบ่งเป็น 2 ฝั่งคล้าย Mockup */}
      <form onSubmit={handleSubmit} className="text-sm grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ฝั่งซ้าย: ข้อมูลพื้นฐานระบบ */}
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 min-h-[150px]">
            <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded border border-amber-300">Upcoming Timeline</span>
            <div className="mt-4 border-l-2 border-slate-300 pl-3 py-1 text-slate-600">
              <p className="font-semibold text-slate-800">Item created</p>
              <p className="text-sm text-slate-500 mt-1">ระบบจะบันทึกเวลาสร้างอัตโนมัติเมื่อกด Save</p>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">💡 คำแนะนำการเขียนฐานข้อมูล (Coding Note)</h4>
            <p className="text-slate-700 leading-relaxed text-sm">
              ช่อง Accounts และ Deals ในฟอร์มนี้ ออกแบบมาเพื่อรับค่าข้อความสำหรับทดสอบ Frontend ก่อนใช้งานจริง เมื่อทำระบบ Database ควรส่งค่าเป็น Array ของ ID (Foreign Keys) เพื่อนำไป Map จัดทำความสัมพันธ์แบบ Relational Table ครับ
            </p>
          </div>
        </div>

        {/* ฝั่งขวา: ช่องกรอกข้อมูลหลักตามคอลัมน์ของ Contacts */}
        <div className="space-y-4">
          <div>
            <label className="block text-slate-700 font-medium mb-2">ชื่อผู้ติดต่อ (Name) <span className="text-rose-500">*</span></label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="เช่น Robert Thompson" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50 font-medium" />
          </div>

          <div>
            <label className="block text-slate-700 font-medium mb-2">อีเมล (Email)</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="robert@company.com" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 font-medium mb-2">เชื่อมต่อบริษัท (Accounts)</label>
              <input type="text" name="accounts" value={formData.accounts} onChange={handleChange} placeholder="เช่น Amazon" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50" />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-2">เบอร์โทรศัพท์ (Phone)</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 734 844 2393" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50 font-mono" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 font-medium mb-2">ดีลที่เกี่ยวข้อง (Deals)</label>
              <input type="text" name="deals" value={formData.deals} onChange={handleChange} placeholder="เช่น Amazon deal" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50" />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-2">มูลค่าดีล (Deals value)</label>
              <input type="text" name="dealsValue" value={formData.dealsValue} onChange={handleChange} placeholder="$155,000" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50" />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 font-medium mb-2">ตำแหน่ง (Title)</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="เช่น COO / CEO" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 font-medium mb-2">ประเภทกลุ่มเป้าหมาย (Type)</label>
              <select name="type" value={formData.type} onChange={handleChange} className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50 font-medium">
                <option value="Lead">Lead</option>
                <option value="Qualified Lead">Qualified Lead</option>
                <option value="Customer">Customer</option>
                <option value="Partner">Partner</option>
                <option value="Vendor">Vendor</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-2">ความสำคัญ (Priority)</label>
              <select name="priority" value={formData.priority} onChange={handleChange} className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50 font-medium">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* ปุ่มควบคุมคำสั่งท้ายฟอร์ม */}
        <div className="col-span-1 md:col-span-2 flex items-center justify-end gap-3 border-t border-slate-200 pt-5 mt-3">
          <button 
            type="button" 
            onClick={onCancel} 
            className="border border-slate-300 px-5 py-2 rounded bg-white hover:bg-slate-50 transition-colors font-medium text-sm"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded font-medium shadow-sm transition-colors text-sm"
          >
            Save Contact
          </button>
        </div>
      </form>
    </div>
  );
}