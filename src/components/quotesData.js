export const initialDocuments = [
  {
    id: "doc-1",
    documentNo: "INV-2026-001",
    type: "Invoice",
    typeBg: "bg-slate-200 text-slate-700",
    amount: "$2,850.00",
    recipient: "Robert Thompson (Amazon)",
    file: "📄 invoice_amazon.pdf",
    status: "Sent",
    statusBg: "bg-blue-500 text-white",
    issueDate: "May 12, 2026",
    owner1: "👤",
    owner2: "👥",
    isExpanded: true, // ตั้งค่าเริ่มต้นให้กางข้อมูล Subitem ออกมาดู
    subitems: [
      {
        id: "sub-1",
        title: "Premium CRM License",
        description: "Annual subscription for enterprise tier",
        unitPrice: "$1,500.00",
        quantity: 2,
        totalMultipliers: "1.0",
        basePrice: "$3,000.00",
        discountRate: "5%",
        discountValue: "$150.00",
        feeRate: "0%",
        feeValue: "$0.00"
      },
      {
        id: "sub-2",
        title: "Onboarding Training",
        description: "Team setup and integration support session",
        unitPrice: "$0.00",
        quantity: 1,
        totalMultipliers: "1.0",
        basePrice: "$0.00",
        discountRate: "0%",
        discountValue: "$0.00",
        feeRate: "0%",
        feeValue: "$0.00"
      }
    ]
  }
];