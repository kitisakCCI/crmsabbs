export const initialDealGroups = [
  {
    id: "active-deals",
    title: "Active Deals",
    color: "border-indigo-500", // เส้นขอบสีน้ำเงินสไตล์ Active
    textColor: "text-indigo-700",
    summary: {
      totalValue: "$225,000",
      // สัดส่วนสีของ Stage สรุปท้ายตาราง (Discovery 2, Proposal 1)
      stageBars: [
        { color: "bg-indigo-500", width: "w-2/3" },
        { color: "bg-sky-400", width: "w-1/3" }
      ]
    },
    deals: [
      {
        id: 1,
        name: "Google deal",
        subItemsCount: 3, // มีเลเยอร์ย่อยตามภาพ
        stage: "Discovery",
        stageColor: "bg-indigo-500 text-white",
        ownerInitials: "👤",
        value: 70000,
        contact: "Steven Scott",
        account: "Google",
        expectedClose: "Jun 11",
        probability: "90%",
        forecastValue: "$63,000"
      },
      {
        id: 2,
        name: "Apple deal",
        subItemsCount: null,
        stage: "Discovery",
        stageColor: "bg-indigo-500 text-white",
        ownerInitials: "👤",
        value: 55000,
        contact: "Sam Jones",
        account: "Apple",
        expectedClose: "Jun 13",
        probability: "",
        forecastValue: "$0"
      },
      {
        id: 3,
        name: "Amazon deal",
        subItemsCount: null,
        stage: "Proposal",
        stageColor: "bg-sky-400 text-white",
        ownerInitials: "👤",
        value: 100000,
        contact: "Robert Thompson",
        account: "Amazon",
        expectedClose: "Jun 3",
        probability: "70%",
        forecastValue: "$70,000"
      }
    ]
  },
  {
    id: "closed-won",
    title: "Closed Won",
    color: "border-emerald-500", // เส้นขอบสีเขียวสำหรับดีลที่ปิดได้
    textColor: "text-emerald-700",
    summary: {
      totalValue: "$85,000",
      stageBars: [
        { color: "bg-emerald-500", width: "w-full" } // Won ทั้งหมด
      ]
    },
    deals: [
      {
        id: 4,
        name: "Amazon deal",
        subItemsCount: null,
        stage: "Won",
        stageColor: "bg-emerald-500 text-white",
        ownerInitials: "👤",
        value: 55000,
        contact: "Robert Thompson",
        account: "Amazon",
        expectedClose: "Apr 8",
        probability: "100%",
        forecastValue: "$55,000"
      },
      {
        id: 5,
        name: "Apple deal",
        subItemsCount: null,
        stage: "Won",
        stageColor: "bg-emerald-500 text-white",
        ownerInitials: "👤",
        value: 30000,
        contact: "Sam Jones",
        account: "Apple",
        expectedClose: "May 14",
        probability: "100%",
        forecastValue: "$30,000"
      }
    ]
  }
];