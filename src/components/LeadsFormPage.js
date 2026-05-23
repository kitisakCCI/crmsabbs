import React, { useState } from 'react';
import EditableComboBox from './EditableComboBox';

export default function LeadFormSample({ onCancel }) {
    // 1. จำลองข้อมูลที่จะบันทึกจริงเข้าฐานข้อมูล (สเตทของแถวข้อมูล)
    const [leadSource, setLeadSource] = useState('Website');
    const [industryType, setIndustryType] = useState('Software');

    // 2. จำลอง Master Data Options (ที่ในอนาคตคุณจะใช้ fetch() ดึงมาจากตารางในฐานข้อมูล)
    const [sourceOptions, setSourceOptions] = useState([
        { value: 'Website', label: 'Website', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
        { value: 'Cold Call', label: 'Cold Call', color: 'bg-amber-50 text-amber-700 border-amber-200' },
        { value: 'Referral', label: 'Referral', color: 'bg-sky-50 text-sky-700 border-sky-200' },
        { value: 'Partner', label: 'Partner', color: 'bg-purple-50 text-purple-700 border-purple-200' }
    ]);

    const [industryOptions, setIndustryOptions] = useState([
        { value: 'Software', label: 'Software', color: 'bg-slate-100 text-slate-700 border-slate-200' },
        { value: 'Commercial', label: 'Commercial', color: 'bg-blue-100 text-blue-700 border-blue-200' }
    ]);

    // ฟังก์ชันจัดการเพิ่มข้อมูลตัวเลือกใหม่ของ Lead Source คืนสู่สเตทส่วนกลาง
    const handleAddLeadSource = (newLabel) => {
        // จำลองการจับคู่สุ่มโทนสีให้รายการใหม่
        const newSource = {
            value: newLabel,
            label: newLabel,
            color: 'bg-rose-50 text-rose-700 border-rose-200'
        };
        setSourceOptions([...sourceOptions, newSource]);
        setLeadSource(newLabel); // เลือกตัวเลือกใหม่ให้ทันทีหลังจากกดเพิ่ม
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-white border border-slate-200 rounded-xl shadow-md p-6 my-6 text-slate-800 text-xs">
            <div className="border-b border-slate-100 pb-3 mb-5">
                <h2 className="text-sm font-bold text-slate-800">📄 การประกอบร่าง Generic Component ร่วมกับหน้าฟอร์ม CRM</h2>
                <p className="text-[11px] text-slate-400 mt-0.5">ทดสอบคลิกเลือกสลับหัวข้อ หรือกรอกพิมพ์คำค้นหาเพื่อเพิ่มชนิดข้อมูลใหม่</p>
            </div>

            <div className="space-y-5">
                {/* นำ Generic Component มาใช้งานจุดที่ 1: Lead Source */}
                <div>
                    <label className="block text-slate-600 font-semibold mb-2">ช่องทางที่มาของลูกค้า (Lead Source)</label>
                    <EditableComboBox
                        options={sourceOptions}
                        selectedValue={leadSource}
                        onSelect={(val) => setLeadSource(val)}
                        onAddOption={handleAddLeadSource}
                    />
                    <span className="text-[10px] text-slate-400 block mt-1.5 font-mono">Current DB State: "{leadSource}"</span>
                </div>

                <hr className="border-slate-100" />

                {/* นำ Generic Component ตัวเดิมมาใช้ซ้ำในจุดที่ 2: Industry */}
                <div>
                    <label className="block text-slate-600 font-semibold mb-2">ประเภทกลุ่มธุรกิจ (Industry)</label>
                    <EditableComboBox
                        options={industryOptions}
                        selectedValue={industryType}
                        onSelect={(val) => setIndustryType(val)}
                        onAddOption={(newVal) => {
                            const newInd = { value: newVal, label: newVal, color: 'bg-slate-100 text-slate-700 border-slate-200' };
                            setIndustryOptions([...industryOptions, newInd]);
                            setIndustryType(newVal);
                        }}
                    />
                    <span className="text-[10px] text-slate-400 block mt-1.5 font-mono">Current DB State: "{industryType}"</span>
                </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end gap-3">
                {onCancel && (
                    <button 
                        type="button"
                        onClick={onCancel}
                        className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 px-4 py-2 rounded font-medium shadow-sm transition-colors"
                    >
                        Cancel
                    </button>
                )}
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded font-medium shadow-sm">
                    Save Record to Database
                </button>
            </div>
        </div>
    );
}