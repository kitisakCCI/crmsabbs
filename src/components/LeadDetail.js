/* 1. CREATIO DETAIL VIEW (Similar to image_75e661.jpg) */
<div className="flex-1 min-h-0 flex gap-6">

    {/* LEFT PANELS: General Info, Confidence Level, Contacts */}
    <div className="w-1/3 flex flex-col gap-6 overflow-y-auto pr-2">

        {/* LEADS LIST (Quick Switcher) */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">เลือกลูกค้าเพื่อศึกษางาน</h3>
            <div className="space-y-2">
                {leads.map(lead => (
                    <div
                        key={lead.id}
                        onClick={() => setSelectedLeadId(lead.id)}
                        className={`p-3 rounded-lg border cursor-pointer transition ${lead.id === selectedLeadId
                            ? "border-[#D32F2F] bg-red-50/50"
                            : "border-slate-200 hover:bg-slate-50"
                            }`}
                    >
                        <div className="flex justify-between items-start">
                            <h4 className="font-bold text-xs text-slate-800">{lead.contactName}</h4>
                            <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full font-bold text-slate-600 uppercase">{lead.stage}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">{lead.company}</p>
                        <div className="flex justify-between items-center mt-2 text-[10px] text-slate-400">
                            <span>ผู้รับผิดชอบ: {lead.assignee.split(' ')[0]}</span>
                            <strong className="text-[#D32F2F]">{lead.value.toLocaleString()} ฿</strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* CONFIDENCE & VALUE METER */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">สัดส่วนความเชื่อมั่นในการปิดดีล</h3>

            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5">
                        <span>Confidence Level (ความมั่นใจ)</span>
                        <span className="text-[#D32F2F] text-sm">{selectedLead.confidence}%</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={selectedLead.confidence}
                        onChange={(e) => updateLeadConfidence(e.target.value)}
                        className="w-full accent-[#D32F2F] cursor-ew-resize"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>0% (โอกาสหลุด)</span>
                        <span>50% (กึ่งกลาง)</span>
                        <span>100% (ปิดชัวร์)</span>
                    </div>
                </div>

                <div className="h-[1px] bg-slate-100"></div>

                <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider">มูลค่าประเมินโครงการ (Contract Value)</p>
                    <p className="text-2xl font-black text-slate-800 mt-1">
                        ฿ {selectedLead.value.toLocaleString()}
                    </p>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                        จัดทำโดย {selectedLead.assignee}
                    </span>
                </div>
            </div>
        </div>

        {/* CONTACT CARD */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">ข้อมูลผู้ติดต่อ (Contact Person)</h3>
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-base border border-slate-300">
                    {selectedLead.contactName.substring(3, 5)}
                </div>
                <div>
                    <h4 className="font-bold text-sm text-slate-800">{selectedLead.contactName}</h4>
                    <p className="text-xs text-slate-500">{selectedLead.jobTitle}</p>
                </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-envelope text-slate-400 w-4"></i>
                    <span>{selectedLead.email}</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-phone text-slate-400 w-4"></i>
                    <span>{selectedLead.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-building text-slate-400 w-4"></i>
                    <span>{selectedLead.company}</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-bullhorn text-slate-400 w-4"></i>
                    <span>ที่มา: {selectedLead.source}</span>
                </div>
            </div>
        </div>

    </div>

    {/* MIDDLE/RIGHT PANELS: Tabs (Overview, Logs, PDF Quotes) */}
    <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">

        {/* TAB SYSTEM */}
        <div className="border-b border-slate-200 bg-slate-50/50 px-6 py-2 flex items-center justify-between shrink-0">
            <div className="flex gap-4">
                {["Overview", "Processing Activity", "Quotation Generator"].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-3 text-xs font-bold border-b-2 transition ${activeTab === tab
                            ? "border-[#D32F2F] text-slate-800"
                            : "border-transparent text-slate-400 hover:text-slate-600"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <button
                onClick={() => setShowQrModal(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs py-1.5 px-3 rounded-md font-bold flex items-center gap-1.5 transition"
            >
                <QrCode className="w-3.5 h-3.5" /> จำลอง PromptPay จ่ายตังค์
            </button>
        </div>

        {/* TAB CONTENT PANEL */}
        <div className="flex-1 overflow-y-auto p-6">

            {activeTab === "Overview" && (
                <div className="space-y-6 animate-fadeIn">
                    {/* KPI CARDS (Creatio Metric Blocks) */}
                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-sky-50 border border-sky-100 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-sky-800">{selectedLead.daysInFunnel}</p>
                            <p className="text-[10px] font-bold text-sky-600 uppercase mt-1">Days in Funnel</p>
                        </div>
                        <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-indigo-800">{selectedLead.daysInStage}</p>
                            <p className="text-[10px] font-bold text-indigo-600 uppercase mt-1">Days at Stage</p>
                        </div>
                        <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-amber-800">{selectedLead.emailsSent}</p>
                            <p className="text-[10px] font-bold text-amber-600 uppercase mt-1">Emails Sent</p>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-emerald-800">{selectedLead.callsMade}</p>
                            <p className="text-[10px] font-bold text-emerald-600 uppercase mt-1">Outgoing Calls</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <h4 className="font-bold text-xs text-slate-700 mb-2 uppercase tracking-wide">ความต้องการของลูกค้า</h4>
                            <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded border border-slate-200">
                                {selectedLead.notes}
                            </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
                            <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wide">ทีมงานผู้รับผิดชอบดีลนี้</h4>
                            <div className="flex items-center gap-3 bg-white p-3 rounded border border-slate-200">
                                <Award className="w-5 h-5 text-amber-500 shrink-0" />
                                <div>
                                    <p className="text-xs font-bold text-slate-800">{selectedLead.assignee}</p>
                                    <p className="text-[10px] text-slate-400">สถาบันการจัดการศึกษาบริหารธุรกิจ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "Processing Activity" && (
                <div className="space-y-6 animate-fadeIn">
                    <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wide">บันทึกกิจกรรมความพยายามขาย (Sales Action History)</h4>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="เช่น 'โทรติดต่อเจรจาขอลดราคา 5%'..."
                            value={newLogText}
                            onChange={(e) => setNewLogText(e.target.value)}
                            className="flex-grow text-xs border border-slate-200 p-2.5 rounded-lg outline-none focus:border-[#D32F2F]"
                        />
                        <button
                            onClick={() => {
                                if (!newLogText.trim()) return;
                                setActivityLogs([
                                    { id: Date.now(), type: "call", text: newLogText, date: "วันนี้ " + new Date().toLocaleTimeString() },
                                    ...activityLogs
                                ]);
                                setNewLogText("");
                                triggerLineNotification("📝 เพิ่มบันทึกบันทึกข้อตกลงและติดตามสำเร็จ");
                            }}
                            className="bg-slate-800 hover:bg-slate-700 text-white text-xs px-4 rounded-lg font-bold flex items-center gap-1.5 transition"
                        >
                            <Send className="w-3.5 h-3.5" /> บันทึก Log
                        </button>
                    </div>

                    <div className="relative border-l border-slate-200 pl-4 ml-2 space-y-4">
                        {activityLogs.map(log => (
                            <div key={log.id} className="relative">
                                <div className="absolute -left-[21px] top-1 bg-white border border-slate-300 w-3 h-3 rounded-full flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]"></div>
                                </div>
                                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] uppercase font-bold text-slate-400">{log.type} Activity</span>
                                        <span className="text-[10px] text-slate-400">{log.date}</span>
                                    </div>
                                    <p className="text-xs text-slate-700 font-medium">{log.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === "Quotation Generator" && (
                <div className="space-y-6 animate-fadeIn">
                    <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                        <div className="bg-[#D32F2F] text-white p-4 flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-wider">ใบเสนอราคาจำลอง (Quotation Preview)</h4>
                                <p className="text-[10px] opacity-80">SABB Core Education System</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-xs">เลขที่: QT-2026-009</p>
                                <p className="text-[10px] opacity-80">วันที่: {new Date().toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div className="p-4 space-y-4 bg-white">
                            <div className="grid grid-cols-2 text-xs">
                                <div>
                                    <p className="text-slate-400 font-bold uppercase text-[9px]">ลูกค้าผู้รับใบเสนอราคา:</p>
                                    <p className="font-bold text-slate-800 mt-1">{selectedLead.company}</p>
                                    <p className="text-slate-600">{selectedLead.contactName}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-slate-400 font-bold uppercase text-[9px]">ผู้เสนอราคา:</p>
                                    <p className="font-bold text-slate-800 mt-1">{selectedLead.assignee}</p>
                                    <p className="text-slate-600">สถาบันกวดวิชา SABB Academy</p>
                                </div>
                            </div>

                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 font-bold">
                                        <th className="p-2 text-left">รายการวัสดุ/สิทธิ์ใช้งาน</th>
                                        <th className="p-2 text-center">จำนวน</th>
                                        <th className="p-2 text-right">ราคาต่อหน่วย</th>
                                        <th className="p-2 text-right">รวม (บาท)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quotationItems.map(item => (
                                        <tr key={item.id} className="border-b border-slate-100">
                                            <td className="p-2 text-slate-700">{item.description}</td>
                                            <td className="p-2 text-center text-slate-700">{item.qty}</td>
                                            <td className="p-2 text-right text-slate-700">{item.price.toLocaleString()}</td>
                                            <td className="p-2 text-right text-slate-700 font-bold">{(item.qty * item.price).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="flex justify-between items-center pt-2 border-t border-slate-100 text-xs">
                                <span className="text-slate-500 font-bold">รวมทั้งสิ้น (Total Value):</span>
                                <strong className="text-lg text-[#D32F2F]">
                                    {quotationItems.reduce((acc, curr) => acc + (curr.qty * curr.price), 0).toLocaleString()} บาท
                                </strong>
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-[11px] text-amber-800 flex items-start gap-2">
                        <i className="fa-solid fa-lightbulb mt-0.5 shrink-0"></i>
                        <p><strong>แนะนำสำหรับการศึกษา:</strong> ฝึกให้นักศึกษาคำนวณราคาและออกข้อเสนอที่สอดคล้องกับ Budget ของลูกค้า เพื่อจำลองสถานการณ์การเสนอราคาให้ปิดดีลสำเร็จ</p>
                    </div>
                </div>
            )}

        </div>

    </div>

</div>