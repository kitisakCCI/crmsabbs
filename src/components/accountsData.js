export const initialAccountGroups = [
  {
    id: "companies-group",
    title: "Companies",
    color: "border-sky-600", // แถบเส้นขอบหนาสีน้ำเงินสไตล์ monday ของกลุ่มหลัก
    textColor: "text-sky-700",
    accounts: [
      {
        id: 1,
        name: "Google",
        domain: "https://google.com",
        industries: [
          { text: "Software", color: "bg-cyan-100 text-cyan-800" },
          { text: "Data ...", color: "bg-emerald-100 text-emerald-800" },
          { text: "Inter...", color: "bg-indigo-100 text-indigo-800" }
        ],
        hasMoreIndustries: true, // ตัวเลือกแสดงกล่องดำ +2
        description: "Google is a multinational corporation that s...",
        employees: "10000+",
        location: "Mountain View CA USA",
        contact: "Steven Scott",
        deal: "Google deal"
      },
      {
        id: 2,
        name: "Apple",
        domain: "https://apple.com",
        industries: [
          { text: "Inte...", color: "bg-indigo-100 text-indigo-800" },
          { text: "Med...", color: "bg-purple-100 text-purple-800" },
          { text: "Mus...", color: "bg-pink-100 text-pink-800" },
          { text: "Other", color: "bg-slate-100 text-slate-700" }
        ],
        hasMoreIndustries: false,
        description: "Apple Inc. est une multinationale américaine...",
        employees: "1001-5000",
        location: "California, USA",
        contact: "Sam Jones",
        deal: "Apple deal"
      },
      {
        id: 3,
        name: "Amazon",
        domain: "https://amazon.com",
        industries: [
          { text: "Administ...", color: "bg-blue-100 text-blue-800" },
          { text: "Commer...", color: "bg-amber-100 text-amber-800" },
          { text: "Other", color: "bg-slate-100 text-slate-700" }
        ],
        hasMoreIndustries: false,
        description: "Amazon est une entreprise technologique in...",
        employees: "10000+",
        location: "Seattle, État de Washing...",
        contact: "Robert Thompson",
        deal: "Amazon deal"
      }
    ]
  }
];