import React, { useState } from 'react';

export default function CreateAccountForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    accountId: '',
    accountName: '',
    industry: 'Software',
    employeeCount: '',
    headquarters: '',
    description: '',
    // เพิ่มสเตทสำหรับรองรับการเชื่อมตารางอื่นในอนาคต
    relatedContact: '', 
    relatedDeal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accountName) {
      alert("กรุณากรอกชื่อ Account ก่อนครับ");
      return;
    }
    onSave(formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-slate-200 rounded-xl shadow-lg p-6 my-2 transition-all">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">🏢 New Account Creation</h2>
          <p className="text-sm text-slate-500 mt-1">Customers | Contacts | Deals</p>
        </div>
        <button onClick={onCancel} className="text-slate-400 hover:text-slate-600 text-base">✕ Close</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-slate-700 font-medium mb-2">Account ID</label>
            <input type="text" name="accountId" value={formData.accountId} onChange={handleChange} placeholder="e.g. ACC-04" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50" />
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-2">Account Name<span className="text-rose-500">*</span></label>
            <input type="text" name="accountName" value={formData.accountName} onChange={handleChange} placeholder="e.g. Microsoft" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-slate-700 font-medium mb-2">Industry</label>
            <select name="industry" value={formData.industry} onChange={handleChange} className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50">
              <option value="Software">Software</option>
              <option value="Data Services">Data Services</option>
              <option value="Internet">Internet</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-2">No. of employees</label>
            <input type="text" name="employeeCount" value={formData.employeeCount} onChange={handleChange} placeholder="e.g. 500-1000" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50" />
          </div>
        </div>

        {/* ส่วนจำลองรับข้อมูล Foreign Key ไปเชื่อมกับตารางอื่น */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-50 p-4 rounded-lg border border-slate-200">
          <div>
            <label className="block text-indigo-700 font-semibold mb-2">🔗 Contacts</label>
            <input type="text" name="relatedContact" value={formData.relatedContact} onChange={handleChange} placeholder="ใส่ชื่อผู้ติดต่อ เช่น John Doe" className="w-full border border-slate-300 rounded px-3 py-2 bg-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200" />
          </div>
          <div>
            <label className="block text-indigo-700 font-semibold mb-2">🔗 Deals</label>
            <input type="text" name="relatedDeal" value={formData.relatedDeal} onChange={handleChange} placeholder="ใส่ชื่อดีล เช่น Azure Cloud Deal" className="w-full border border-slate-300 rounded px-3 py-2 bg-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200" />
          </div>
        </div>

        <div>
          <label className="block text-slate-700 font-medium mb-2">Headquarters</label>
          <input type="text" name="headquarters" value={formData.headquarters} onChange={handleChange} placeholder="Bangkok, Thailand" className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50" />
        </div>

        <div>
          <label className="block text-slate-700 font-medium mb-2">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="3" placeholder="ระบุข้อมูลสำคัญ..." className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-slate-50 resize-none" />
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-4">
          <button type="button" onClick={onCancel} className="border border-slate-300 px-4 py-2 rounded bg-white hover:bg-slate-50 font-medium text-sm">Cancel</button>
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded font-medium text-sm">Save Account</button>
        </div>
      </form>
    </div>
  );
}