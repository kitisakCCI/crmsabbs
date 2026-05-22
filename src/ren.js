import React, { useState } from 'react';
import {
    Users, Briefcase, Handshake, FileText, BarChart3,
    Wallet, UserCheck, ClipboardList, HelpCircle,
    FileSignature, RefreshCw, MessageSquare, CheckSquare,
    FolderKanban, LayoutDashboard, Plus, Trash2, Send,
    Search, Bell, QrCode, Sparkles, Award, Zap
} from 'lucide-react';

// === INITIAL MOCK DATA ===
const initialLeads = [
    {
        id: 1,
        contactName: "คุณสมชาย ใจดี",
        company: "ABC Tech Solutions Co., Ltd.",
        email: "somchai@abctech.co.th",
        phone: "081-546-5687",
        jobTitle: "Marketing Coordinator",
        source: "Facebook Ads",
        stage: "Qualification",
        confidence: 85,
        value: 168000,
        daysInFunnel: 16,
        daysInStage: 14,
        emailsSent: 6,
        callsMade: 4,
        assignee: "พชร จิตร์ประสงค์ (นักศึกษาทีม A)",
        notes: "ลูกค้าต้องการระบบจัดการ CRM ขนาดเล็กเพื่อซ้อมมือก่อนนำไปขยายผล สนใจโมเดลแบบ Server License"
    },
    {
        id: 2,
        contactName: "คุณกานดา รักเรียน",
        company: "EduConnect Thailand Group",
        email: "kanda@educonnect.or.th",
        phone: "089-775-1212",
        jobTitle: "Academic Director",
        source: "Inquiry Form",
        stage: "Proposal",
        confidence: 60,
        value: 245000,
        daysInFunnel: 8,
        daysInStage: 3,
        emailsSent: 2,
        callsMade: 1,
        assignee: "ณัฐพล พูนสุข (นักศึกษาทีม B)",
        notes: "กำลังขออนุมัติงบประมาณจากบอร์ดบริหาร ต้องการฟีเจอร์พิมพ์ใบเสนอราคาด่วน"
    }
];

const mockInquiries = [
    { id: 1, name: "คุณวิภาวรรณ สวยดี", channel: "LINE OA", message: "สนใจคอร์สพัฒนาผู้บริหารระดับสูงค่ะ มีเรตบริษัทไหมคะ?", time: "5 นาทีที่แล้ว" },
    { id: 2, name: "บริษัท สยามซอฟต์ จำกัด", channel: "Facebook Inbox", message: "ขอใบเสนอราคาระบบ CRM แบบ 50 ที่นั่งใช้งานแบบ On-Premise", time: "20 นาทีที่แล้ว" }
];

export default function App() {
    // === STATE MANAGEMENT ===
    const [leads, setLeads] = useState(initialLeads);
    const [selectedLeadId, setSelectedLeadId] = useState(1);
    const [currentModule, setCurrentModule] = useState("CRM"); // CRM, Project, Quotes, Budget, HR, Claims, Portal etc.
    const [isViewModeKanban, setIsViewModeKanban] = useState(false);

    // Custom states for interactive features
    const [inquiries, setInquiries] = useState(mockInquiries);
    const [activeTab, setActiveTab] = useState("Overview"); // Overview, Processing, Quotes, Activity Log
    const [quotationItems, setQuotationItems] = useState([
        { id: 1, description: "CRM-SABB Core Server License", qty: 1, price: 120000 },
        { id: 2, description: "ระบบติดตั้งออนไซต์และเทรนนิ่ง", qty: 1, price: 48000 }
    ]);
    const [newLogText, setNewLogText] = useState("");
    const [activityLogs, setActivityLogs] = useState([
        { id: 1, type: "call", text: "โทรติดต่อเสนอเบื้องต้น: ลูกค้าสนใจเงื่อนไข Server License ยินดีนัดพรีเซนต์รอบหน้า", date: "14/03/2026 15:11" },
        { id: 2, type: "email", text: "ส่งอีเมลแนะนำข้อมูลหลักสูตร CRM-SABB เรียบร้อย", date: "12/03/2026 10:30" }
    ]);

    // PromptPay Modal State
    const [showQrModal, setShowQrModal] = useState(false);
    const [lineNotification, setLineNotification] = useState(null);

    const selectedLead = leads.find(l => l.id === selectedLeadId) || leads[0];

    // === HELPER FUNCTIONS ===
    const updateLeadStage = (leadId, newStage) => {
        setLeads(leads.map(lead => {
            if (lead.id === leadId) {
                let updateData = { stage: newStage, daysInStage: 0 };
                // Trigger simulation alerts for educational purposes
                if (newStage === "Closed won") {
                    triggerLineNotification(`🎉 ยินดีด้วย! คุณปิดการขายสำเร็จกับ ${lead.company} มูลค่า ${lead.value.toLocaleString()} บาท!`);
                }
                return { ...lead, ...updateData };
            }
            return lead;
        }));
    };

    const updateLeadConfidence = (value) => {
        setLeads(leads.map(lead =>
            lead.id === selectedLeadId ? { ...lead, confidence: parseInt(value) } : lead
        ));
    };

    const triggerLineNotification = (message) => {
        setLineNotification(message);
        setTimeout(() => {
            setLineNotification(null);
        }, 6000);
    };

    const handleAddLead = () => {
        const names = ["คุณพัสกร เจริญรุ่ง", "คุณนลินี รักดี", "คุณกิตติศักดิ์ พัฒนา"];
        const companies = ["บริษัท มั่งคั่ง คอร์ปอเรชั่น", "ร้านค้าดี ทั่วไทย จำกัด", "สถาบันวิจัยการเรียนรู้"];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomCompany = companies[Math.floor(Math.random() * companies.length)];
        const randomValue = Math.floor(Math.random() * 20 + 5) * 10000;

        const newLead = {
            id: Date.now(),
            contactName: randomName,
            company: randomCompany,
            email: `contact@${randomCompany.replace(/\s+/g, '').toLowerCase()}.com`,
            phone: "082-" + Math.floor(1000000 + Math.random() * 9000000),
            jobTitle: "Business Development Manager",
            source: "LINE Official Account",
            stage: "Qualification",
            confidence: 40,
            value: randomValue,
            daysInFunnel: 1,
            daysInStage: 1,
            emailsSent: 0,
            callsMade: 0,
            assignee: "คุณ (ผู้เรียนจำลอง)",
            notes: "ลูกค้ามุ่งหวังรายใหม่จำลองจากการคลิกปุ่ม Demo"
        };

        setLeads([...leads, newLead]);
        setSelectedLeadId(newLead.id);
        triggerLineNotification(`📥 มี Lead ใหม่ถูกสร้างขึ้น: ${randomCompany} (${randomName})`);
    };

    const handleResetSystem = () => {
        if (confirm("ยืนยันการคืนค่าฐานข้อมูลเพื่อเริ่มเวิร์กชอปใหม่ใช่หรือไม่? (ข้อมูลจะถูกรีเซ็ต)")) {
            setLeads(initialLeads);
            setSelectedLeadId(1);
            setActivityLogs([
                { id: 1, type: "call", text: "โทรติดต่อเสนอเบื้องต้น: ลูกค้าสนใจเงื่อนไข Server License ยินดีนัดพรีเซนต์รอบหน้า", date: "14/03/2026 15:11" },
                { id: 2, type: "email", text: "ส่งอีเมลแนะนำข้อมูลหลักสูตร CRM-SABB เรียบร้อย", date: "12/03/2026 10:30" }
            ]);
            triggerLineNotification("🔄 ระบบทำการรีเซ็ตฐานข้อมูลสำหรับคาบเรียนนี้สำเร็จ!");
        }
    };

    // 15 Modules Definition (Matches the uploaded image perfectly)
    const modules = [
        { id: "CRM", label: "CRM", icon: Users, color: "text-[#D32F2F]", bg: "bg-red-50" },
        { id: "Project", label: "Project Management", icon: Briefcase, color: "text-amber-600", bg: "bg-amber-50" },
        { id: "Negotiations", label: "Negotiations", icon: Handshake, color: "text-blue-600", bg: "bg-blue-50" },
        { id: "Quotes", label: "Creating Quotations", icon: FileText, color: "text-emerald-600", bg: "bg-emerald-50" },
        { id: "Sales", label: "Sales Management", icon: BarChart3, color: "text-indigo-600", bg: "bg-indigo-50" },
        { id: "Budget", label: "Budget Control", icon: Wallet, color: "text-pink-600", bg: "bg-pink-50" },
        { id: "Status", label: "Customer Sales Status", icon: UserCheck, color: "text-purple-600", bg: "bg-purple-50" },
        { id: "Report", label: "Daily Report", icon: ClipboardList, color: "text-sky-600", bg: "bg-sky-50" },
        { id: "Inquiry", label: "Inquiry Management", icon: HelpCircle, color: "text-teal-600", bg: "bg-teal-50" },
        { id: "Contract", label: "Contract Management", icon: FileSignature, color: "text-orange-600", bg: "bg-orange-50" },
        { id: "Claims", label: "Claims Management", icon: MessageSquare, color: "text-violet-600", bg: "bg-violet-50" },
        { id: "HR", label: "HR Management", icon: CheckSquare, color: "text-rose-600", bg: "bg-rose-50" },
        { id: "Workflow", label: "Workflow", icon: RefreshCw, color: "text-cyan-600", bg: "bg-cyan-50" },
        { id: "Files", label: "File Management", icon: FolderKanban, color: "text-emerald-700", bg: "bg-emerald-50" },
        { id: "Portal", label: "Portal", icon: LayoutDashboard, color: "text-zinc-600", bg: "bg-zinc-50" }
    ];

    const stages = ["Qualification", "Presentation", "Proposal", "Contracting", "Closed won"];

    return (
        <div className="flex h-screen w-screen bg-slate-100 font-sans overflow-hidden">

            {/* LINE NOTIFICATION MOCK (Top Right Toast) */}
            {lineNotification && (
                <div className="fixed top-4 right-4 z-50 animate-bounce max-w-sm bg-green-500 text-white p-4 rounded-xl shadow-2xl border border-green-600 flex items-start gap-3">
                    <Bell className="w-6 h-6 shrink-0 mt-0.5" />
                    <div>
                        <div className="font-bold flex items-center gap-1.5 text-sm">
                            <Zap className="w-4 h-4 text-yellow-300" /> LINE Notify (จำลองระบบ)
                        </div>
                        <p className="text-xs mt-1">{lineNotification}</p>
                    </div>
                </div>
            )}

            {/* LEFT SIDEBAR PANEL (Customizable Theme with Dark Purple & Crimson Accent) */}
            <aside className="w-72 bg-[#1b1528] text-slate-300 flex flex-col h-full border-r border-[#2d243f] select-none">
                <div className="p-5 border-b border-[#2d243f] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#D32F2F] flex items-center justify-center font-bold text-white tracking-wider text-sm shadow">
                            SABB
                        </div>
                        <div>
                            <span className="font-bold text-lg tracking-wide text-white block leading-none">CRM-SABB</span>
                            <span className="text-[10px] text-red-400 font-semibold tracking-wider">EDUCATION PORTAL</span>
                        </div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">Active</span>
                </div>

                {/* 15 Core Modules list */}
                <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scrollbar-thin scrollbar-thumb-slate-800">
                    <p className="px-3 text-[10px] font-semibold text-slate-500 tracking-wider uppercase mb-2">15 Core Functions (SABB-15)</p>
                    {modules.map((m) => {
                        const IconComponent = m.icon;
                        const isSelected = currentModule === m.id;
                        return (
                            <button
                                key={m.id}
                                onClick={() => {
                                    setCurrentModule(m.id);
                                    if (m.id === "Quotes") setActiveTab("Quotes");
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-150 ${isSelected
                                        ? "bg-[#D32F2F] text-white font-bold shadow-md shadow-red-900/30"
                                        : "hover:bg-[#2c223f] hover:text-white text-slate-400"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-1.5 rounded-md ${isSelected ? "bg-red-800/50" : "bg-slate-800"}`}>
                                        <IconComponent className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-[#D32F2F]"}`} />
                                    </div>
                                    <span className="truncate">{m.label}</span>
                                </div>
                                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </button>
                        );
                    })}
                </div>

                {/* Admin/Teacher Control Panel (For active classroom learning) */}
                <div className="p-4 bg-[#140f1e] border-t border-[#2d243f] space-y-2">
                    <div className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase flex items-center justify-between">
                        <span>เครื่องมือผู้สอน / นักศึกษา</span>
                        <Sparkles className="w-3 h-3 text-red-400" />
                    </div>
                    <button
                        onClick={handleAddLead}
                        className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs py-2 px-3 rounded-md font-medium flex items-center justify-center gap-2 transition"
                    >
                        <Plus className="w-3.5 h-3.5 text-emerald-400" /> สุ่มสร้างข้อมูลลูกค้า (Mock)
                    </button>
                    <button
                        onClick={handleResetSystem}
                        className="w-full bg-red-950/40 hover:bg-red-950/70 text-red-300 text-xs py-2 px-3 rounded-md font-medium flex items-center justify-center gap-2 border border-red-900/30 transition"
                    >
                        <Trash2 className="w-3.5 h-3.5" /> ล้าง/รีเซ็ตห้องเรียน
                    </button>
                </div>
            </aside>

            {/* MAIN LAYOUT WRAPPER */}
            <main className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50">

                {/* TOP STATUS BAR & PATH NAVIGATION */}
                <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-4">
                        <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F]"></span>
                            โมดูลการทำงาน: {modules.find(m => m.id === currentModule)?.label}
                        </h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-xs bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600">
                            สถานะการจำลอง: <strong className="text-emerald-600">เวิร์กชอปที่ 2 (การตกลงดีลและการขาย)</strong>
                        </div>
                        <div className="h-8 w-[1px] bg-slate-200"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#D32F2F] text-white flex items-center justify-center font-bold text-xs">
                                S
                            </div>
                            <div className="text-left leading-none">
                                <p className="text-xs font-bold text-slate-800">นักศึกษาสาขาบริหาร</p>
                                <p className="text-[10px] text-slate-500">บทบาท: ผู้จัดการการขาย (Sales)</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* WORKSPACE AREA (Changes based on Selected Core Module) */}
                <div className="flex-1 overflow-hidden p-6 flex flex-col gap-6">

                    {currentModule === "CRM" && (
                        <>
                            {/* STAGE/PIPELINE BAR (Qualification -> Closed won) */}
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 shrink-0">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">กระบวนการขายแบบปิดดีล (Sales Stage Funnel)</span>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setIsViewModeKanban(false)}
                                            className={`text-xs px-3 py-1 rounded-md font-medium transition ${!isViewModeKanban ? "bg-[#D32F2F] text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-700"}`}
                                        >
                                            <i className="fa-solid fa-address-card mr-1"></i> รายละเอียดดีล (Creatio View)
                                        </button>
                                        <button
                                            onClick={() => setIsViewModeKanban(true)}
                                            className={`text-xs px-3 py-1 rounded-md font-medium transition ${isViewModeKanban ? "bg-[#D32F2F] text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-700"}`}
                                        >
                                            <i className="fa-solid fa-grip mr-1"></i> คัมบังบอร์ด (Kanban)
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-5 gap-2 relative">
                                    {stages.map((stg, idx) => {
                                        const currentIdx = stages.indexOf(selectedLead.stage);
                                        const isCompleted = idx < currentIdx;
                                        const isActive = idx === currentIdx;
                                        return (
                                            <button
                                                key={stg}
                                                onClick={() => updateLeadStage(selectedLead.id, stg)}
                                                className={`py-2.5 px-2 rounded-lg text-xs font-bold transition-all relative flex flex-col items-center justify-center gap-1 border ${isActive
                                                        ? "bg-emerald-600 text-white border-emerald-700 shadow-md shadow-emerald-700/20 scale-[1.02]"
                                                        : isCompleted
                                                            ? "bg-slate-800 text-slate-200 border-slate-900"
                                                            : "bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100"
                                                    }`}
                                            >
                                                <span className="uppercase text-[9px] tracking-wider opacity-85">ขั้นที่ {idx + 1}</span>
                                                <span className="truncate max-w-full">{stg}</span>
                                                {isActive && <div className="absolute -bottom-1.5 w-3 h-3 bg-emerald-600 rotate-45" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* CRM WORKSPACE RENDERING */}
                            {!isViewModeKanban ? (
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
                            ) : (
                                /* 2. KANBAN BOARD INTERACTIVE VIEW */
                                <div className="flex-1 min-h-0 grid grid-cols-5 gap-4 overflow-y-auto pr-1">
                                    {stages.map(stg => {
                                        const stageLeads = leads.filter(l => l.stage === stg);
                                        return (
                                            <div key={stg} className="bg-slate-100 rounded-xl p-3 border border-slate-200 flex flex-col h-full min-h-[400px]">
                                                <div className="flex items-center justify-between mb-3 shrink-0">
                                                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">{stg}</span>
                                                    <span className="bg-slate-200 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full">{stageLeads.length}</span>
                                                </div>

                                                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                                                    {stageLeads.map(lead => (
                                                        <div
                                                            key={lead.id}
                                                            onClick={() => {
                                                                setSelectedLeadId(lead.id);
                                                                setIsViewModeKanban(false); // Switch to detail view when clicked
                                                            }}
                                                            className="bg-white p-3 rounded-lg border border-slate-200 hover:border-[#D32F2F] cursor-pointer transition shadow-sm hover:shadow"
                                                        >
                                                            <div className="flex justify-between items-start gap-1">
                                                                <h4 className="font-bold text-xs text-slate-800 line-clamp-1">{lead.contactName}</h4>
                                                                <span className="text-[9px] bg-red-50 text-red-600 px-1 rounded uppercase shrink-0">{lead.confidence}%</span>
                                                            </div>
                                                            <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">{lead.company}</p>

                                                            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                                                                <span className="text-slate-400">มูลค่า:</span>
                                                                <strong className="text-[#D32F2F]">{lead.value.toLocaleString()} ฿</strong>
                                                            </div>

                                                            {/* Simple move trigger buttons for mobile/tablet ease of touch */}
                                                            <div className="mt-2 flex gap-1 justify-end">
                                                                {stages.indexOf(stg) > 0 && (
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            const prevStage = stages[stages.indexOf(stg) - 1];
                                                                            updateLeadStage(lead.id, prevStage);
                                                                        }}
                                                                        className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px]"
                                                                        title="ย้ายกลับ"
                                                                    >
                                                                        ◀
                                                                    </button>
                                                                )}
                                                                {stages.indexOf(stg) < stages.length - 1 && (
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            const nextStage = stages[stages.indexOf(stg) + 1];
                                                                            updateLeadStage(lead.id, nextStage);
                                                                        }}
                                                                        className="p-1 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-[10px]"
                                                                        title="ย้ายไปขั้นถัดไป"
                                                                    >
                                                                        ▶
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </>
                    )}

                    {/* RENDERING OTHER 15 MODULES TO DEMONSTRATE SCOPE */}
                    {currentModule !== "CRM" && (
                        <div className="flex-grow bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col justify-center items-center text-center animate-fadeIn">
                            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                                {React.createElement(modules.find(m => m.id === currentModule)?.icon || Users, { className: "w-8 h-8 text-[#D32F2F]" })}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 uppercase mb-2">
                                จำลองหน้าจอ: {modules.find(m => m.id === currentModule)?.label}
                            </h3>
                            <p className="text-sm text-slate-500 max-w-md mb-6">
                                นี่คือหน้าจอสำหรับโมดูล "{modules.find(m => m.id === currentModule)?.label}" ในสถาปัตยกรรม CRM-SABB จริง นักศึกษาจะได้ใช้ส่วนนี้เพื่อเรียนรู้วิธีการทำงานร่วมกันระหว่างแผนก (Cross-Functional Department)
                            </p>

                            {currentModule === "Quotes" && (
                                <div className="w-full max-w-xl bg-slate-50 p-4 rounded-lg border border-slate-200 text-left text-xs space-y-4">
                                    <h4 className="font-bold text-slate-700">ฟังก์ชันย่อย:</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                        <li>สร้างเอกสารการขายและข้อเสนอดิจิทัล</li>
                                        <li>ผูกระบบราคาอัตโนมัติจาก Master Database</li>
                                        <li>ส่งอนุมัติใบเสนอราคาผ่าน Workflow ไปยังอาจารย์คุมหลักสูตร</li>
                                    </ul>
                                    <button
                                        onClick={() => setCurrentModule("CRM")}
                                        className="w-full bg-[#D32F2F] text-white py-2 rounded-lg font-bold hover:bg-[#a62424] transition text-center"
                                    >
                                        กลับไปที่ระบบจัดการ CRM หลัก
                                    </button>
                                </div>
                            )}

                            {currentModule !== "Quotes" && (
                                <button
                                    onClick={() => setCurrentModule("CRM")}
                                    className="bg-slate-800 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-slate-700 transition"
                                >
                                    กลับไปจำลองการเจรจาดีล (CRM Stage)
                                </button>
                            )}
                        </div>
                    )}

                </div>
            </main>

            {/* PROMPTPAY SIMULATION MODAL */}
            {showQrModal && (
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
            )}

        </div>
    );
}