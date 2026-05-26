import React, { useState, useRef, useEffect } from 'react';

export default function ContactRowWithMenu({ contact, groupColor }) {
    // สเตทสำหรับคุมการเปิด/ปิดเมนูเฉพาะแถวนี้
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // ตรวจจับการคลิกด้านนอกคอมโพเนนต์เพื่อปิดเมนูด่วนอัตโนมัติ
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }
        // เพิ่ม Listener เมื่อเมนูถูกเปิด
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        // Cleanup Listener เมื่อเมนูปิดลง
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <tr className="hover:bg-slate-50/80 h-10 group/row text-slate-700 relative text-[11px]">

            {/* 1. คอลัมน์ด้านหน้าสุด: เช็คบ็อกซ์และแถบสีประจำกลุ่ม */}
            <td className={`text-center border-r border-slate-200 border-l-4 ${groupColor}`}>
                <input type="checkbox" className="rounded border-slate-300 scale-90" />
            </td>

            {/* 2. คอลัมน์ชื่อผู้ติดต่อ */}
            <td className="px-3 font-semibold text-slate-900 border-r border-slate-200 flex items-center justify-between h-10">
                <span className="truncate">{contact.name}</span>
                {/* ป้าย Subitem (จำลองสไตล์ตามในรูปต้นฉบับ) */}
                <span className="text-slate-300 opacity-0 group-hover/row:opacity-100 transition-opacity cursor-pointer">📄</span>
            </td>

            {/* 3. คอลัมน์อื่นๆ จำลอง (Email, Title) */}
            <td className="px-3 border-r border-slate-200 text-sky-600 hover:underline cursor-pointer font-mono">{contact.email}</td>
            <td className="px-3 border-r border-slate-200 text-slate-500">{contact.title}</td>

            {/* 4. 🔴 🔴 🔴 คอลัมน์ ACTION MENU (จุดจุดจุดที่ท้ายแถว) 🔴 🔴 🔴 */}
            <td className="px-2 text-center align-middle bg-white group/action relative" ref={menuRef}>
                <div className="relative inline-block text-left h-full flex items-center justify-center">

                    {/* ปุ่มกดสามจุด (•••) */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-slate-300 hover:text-slate-600 transition-colors p-1"
                    >
                        •••
                    </button>

                    {/* 📂 เมนูเด้งขึ้นมา (PopupMenu List: Edit, View, Delete) */}
                    {isMenuOpen && (
                        <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-slate-200 rounded-lg shadow-xl z-50 overflow-hidden animate-fadeIn font-sans font-medium text-[11px]">

                            {/* รายการเมนูรายหัวข้อ */}
                            <div className="py-1">
                                <button
                                    onClick={() => { console.log(`Edit ${contact.name}`); setIsMenuOpen(false); }}
                                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 text-slate-700 text-left"
                                >
                                    <span className="text-[12px] opacity-70">✏️</span> Edit contact
                                </button>
                                <button
                                    onClick={() => { console.log(`View ${contact.name}`); setIsMenuOpen(false); }}
                                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 text-slate-700 text-left"
                                >
                                    <span className="text-[12px] opacity-70">👁️</span> View detail
                                </button>

                                {/* เส้นคั่นเมนูลบ */}
                                <hr className="border-slate-100 my-1" />

                                <button
                                    onClick={() => { console.log(`Delete ${contact.name}`); setIsMenuOpen(false); }}
                                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-rose-50 text-rose-600 text-left font-semibold"
                                >
                                    <span className="text-[12px] opacity-70">🗑️</span> Delete
                                </button>
                            </div>

                        </div>
                    )}
                </div>
            </td>
        </tr>
    );
}