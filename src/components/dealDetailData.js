export const amazonDealData = {
  id: "deal-amazon-001",
  title: "Amazon Enterprise CRM Implementation",
  value: 155000,
  currency: "USD",
  stage: "Proposal", // Stages: Discovery, Proposal, Negotiation, Won, Lost
  probability: 60, // โอกาสปิดดีล 60%
  closeDate: "2026-08-15",
  
  // Relational Data (รอเชื่อม ID ในฐานข้อมูล)
  account: {
    id: "acc-amazon",
    name: "Amazon Web Services (AWS)",
    logo: "🏢"
  },
  contact: {
    id: "con-robert",
    name: "Robert Thompson",
    title: "COO",
    email: "robert@amazon.com"
  },

  // 📝 รายการสินค้า/บริการที่เสนอขายในดีลนี้ (Products Linked)
  products: [
    { id: "p-1", name: "Premium CRM License", qty: 2, unitPrice: 1500, discount: "5%" },
    { id: "p-2", name: "Enterprise Cloud Hosting", qty: 12, unitPrice: 500, discount: "0%" },
    { id: "p-3", name: "Onboarding & Custom Training", qty: 1, unitPrice: 2500, discount: "10%" }
  ],

  // ⏱️ บันทึกกิจกรรมที่เกิดขึ้น (Activities Timeline)
  timeline: [
    { id: "t-1", type: "Meeting", date: "May 20, 2026", desc: "Presented the custom solution architecture to Robert.", user: "Kitisak T." },
    { id: "t-2", type: "Email", date: "May 15, 2026", desc: "Sent the official cost breakdown and proposal PDF.", user: "Kitisak T." },
    { id: "t-3", type: "Call", date: "May 12, 2026", desc: "Discovery call: Discussed budget, timeline, and key requirements.", user: "Kitisak T." }
  ]
};