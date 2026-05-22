<div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-scaleUp">
        <div className="text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto text-xl font-bold">
                ฿
            </div>
            <h3 className="text-lg font-black text-slate-800">PromptPay QR Code Generator</h3>
            <p className="text-xs text-slate-500">จำลองสแกนเพื่อจ่ายเงินสำหรับดีลนี้เพื่อจำลองสถาปัตยกรรมตัดบัญชีระบบการศึกษาไทย</p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 inline-block mx-auto relative">
                {/* Simulated QR Code via beautiful SVG layout */}
                <svg className="w-48 h-48 mx-auto" viewBox="0 0 100 100">
                    <rect width="100" height="100" fill="white" />
                    {/* Top-left corner box */}
                    <rect x="10" y="10" width="20" height="20" fill="#2c3e50" />
                    <rect x="14" y="14" width="12" height="12" fill="white" />
                    <rect x="17" y="17" width="6" height="6" fill="#2c3e50" />
                    {/* Top-right corner box */}
                    <rect x="70" y="10" width="20" height="20" fill="#2c3e50" />
                    <rect x="74" y="14" width="12" height="12" fill="white" />
                    <rect x="77" y="17" width="6" height="6" fill="#2c3e50" />
                    {/* Bottom-left corner box */}
                    <rect x="10" y="70" width="20" height="20" fill="#2c3e50" />
                    <rect x="14" y="74" width="12" height="12" fill="white" />
                    <rect x="17" y="77" width="6" height="6" fill="#2c3e50" />
                    {/* Center branding dot */}
                    <circle cx="50" cy="50" r="8" fill="#D32F2F" />
                    <polygon points="46,50 50,46 54,50 50,54" fill="white" />
                    {/* Random noise squares to look like real QR */}
                    <rect x="35" y="15" width="8" height="8" fill="#2c3e50" />
                    <rect x="45" y="25" width="10" height="5" fill="#2c3e50" />
                    <rect x="15" y="45" width="5" height="10" fill="#2c3e50" />
                    <rect x="75" y="45" width="10" height="10" fill="#2c3e50" />
                    <rect x="45" y="75" width="12" height="6" fill="#2c3e50" />
                    <rect x="75" y="75" width="8" height="8" fill="#2c3e50" />
                </svg>
                <div className="text-[10px] font-bold text-[#D32F2F] mt-2">THAI QR PAYMENT SYSTEM</div>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-left">
                <div className="flex justify-between text-xs text-slate-600">
                    <span>ผู้รับเงิน:</span>
                    <strong>SABB Academy Ltd.</strong>
                </div>
                <div className="flex justify-between text-xs text-slate-600 mt-1">
                    <span>จำนวนเงินเรียกเก็บ:</span>
                    <strong className="text-[#D32F2F]">{selectedLead.value.toLocaleString()} บาท</strong>
                </div>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={() => setShowQrModal(false)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs py-2.5 rounded-lg font-bold transition"
                >
                    ปิดหน้าต่าง
                </button>
                <button
                    onClick={() => {
                        updateLeadStage(selectedLead.id, "Closed won");
                        setShowQrModal(false);
                        triggerLineNotification(`💳 ยอดชำระเงิน ${selectedLead.value.toLocaleString()} บาท เข้าบัญชีเรียบร้อย! ข้อมูลได้รับการอัปเกรดสถานะเป็น 'Closed won'`);
                    }}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs py-2.5 rounded-lg font-bold transition"
                >
                    จำลองการสแกนสำเร็จ 📲
                </button>
            </div>
        </div>
    </div>
</div>