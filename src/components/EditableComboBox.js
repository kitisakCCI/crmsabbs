import React, { useState, useRef, useEffect } from 'react';

export default function EditableComboBox({
    label,
    options,
    selectedValue,
    onSelect,
    onAddOption
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [newOptionText, setNewOptionText] = useState('');
    const dropdownRef = useRef(null);

    // ตรวจจับการคลิกด้านนอกคอมโพเนนต์เพื่อปิด Dropdown อัตโนมัติ
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ฟังก์ชันรองรับการกดเพิ่มตัวเลือกใหม่เข้าฐานข้อมูลจำลอง
    const handleAddNewItem = (e) => {
        e.preventDefault();
        if (!newOptionText.trim()) return;

        if (onAddOption) {
            onAddOption(newOptionText.trim());
            setNewOptionText('');
        }
    };

    // ค้นหา Object ของตัวเลือกปัจจุบันเพื่อนำสีมาแสดง
    const currentOption = options.find(opt => opt.value === selectedValue) || { label: selectedValue, color: 'bg-slate-100 text-slate-700 border-slate-200' };

    return (
        <div className="relative inline-block text-left text-[11px] font-sans" ref={dropdownRef}>
            {label && <label className="block text-slate-500 font-medium mb-1">{label}</label>}

            {/* 🔘 ปุ่มกดแสดงค่าปัจจุบัน */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between gap-2 border border-slate-200 rounded px-2.5 py-1.5 bg-white min-w-[140px] hover:bg-slate-50 transition-colors shadow-sm focus:outline-none"
            >
                <span className={`px-2 py-0.5 rounded font-semibold text-[10px] border ${currentOption.color}`}>
                    {currentOption.label}
                </span>
                <span className="text-slate-400 text-[9px]">▼</span>
            </button>

            {/* 📂 กล่องรายการตัวเลือกเมื่อเปิด (Popup List Box) */}
            {isOpen && (
                <div className="absolute left-0 mt-1 w-52 bg-white border border-slate-200 rounded-lg shadow-xl z-50 overflow-hidden animate-fadeIn">

                    {/* ส่วนวนลูปแสดงรายการตัวเลือกที่มีอยู่ */}
                    <div className="max-h-40 overflow-y-auto p-1 space-y-0.5">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    onSelect(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded text-left transition-colors ${selectedValue === option.value
                                    ? 'bg-indigo-50 font-bold text-indigo-700'
                                    : 'hover:bg-slate-50 text-slate-700'
                                    }`}
                            >
                                <span className={`px-2 py-0.5 rounded font-semibold text-[9px] border ${option.color}`}>
                                    {option.label}
                                </span>
                                {selectedValue === option.value && <span className="text-indigo-600 text-[10px]">✓</span>}
                            </button>
                        ))}
                    </div>

                    {/* ➕ ฟอร์มพิมพ์เพิ่มข้อมูลด่วนด้านล่างตารางตัวเลือก (Inline Editor Add) */}
                    <div className="border-t border-slate-100 p-2 bg-slate-50">
                        <div className="flex items-center gap-1">
                            <input
                                type="text"
                                value={newOptionText}
                                onChange={(e) => setNewOptionText(e.target.value)}
                                placeholder="+ Add custom source"
                                className="w-full border border-slate-200 rounded px-2 py-1 bg-white focus:outline-none focus:border-indigo-500 text-[10px]"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        handleAddNewItem(e);
                                    }
                                }}
                            />
                            <button
                                type="button"
                                onClick={handleAddNewItem}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded font-bold text-[10px] transition-colors"
                            >
                                Add
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}