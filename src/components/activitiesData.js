export const initialActivityGroups = [
  {
    id: "account-activities",
    title: "Account Activities",
    color: "border-indigo-500", // แถบเส้นขอบสีน้ำเงินสไตล์มอนเดย์สำหรับกลุ่มกิจกรรมหลัก
    textColor: "text-indigo-700",
    activities: [
      {
        id: 1,
        title: "Phone call with Robert",
        owner: "👤",
        type: "Call summary",
        typeColor: "bg-amber-400 text-slate-800", // สีส้มอบอุ่นตามภาพ
        startTime: "May 6, 10:00 PM",
        endTime: "May 6, 10:30 PM",
        status: "Done",
        statusColor: "bg-lime-500 text-white", // สีเขียวตองอ่อนสะดุดตาตามต้นฉบับ
        relatedItem: "Amazon deal"
      },
      {
        id: 2,
        title: "Meeting with Steven",
        owner: "👤",
        type: "Meeting",
        typeColor: "bg-indigo-950 text-white", // สีกรมท่าเข้มชัดเจน
        startTime: "May 17, 1:00 AM",
        endTime: "May 17, 1:30 AM",
        status: "Done",
        statusColor: "bg-lime-500 text-white",
        relatedItem: "Google deal"
      },
      {
        id: 3,
        title: "Meeting with Robert",
        owner: "👤",
        type: "Meeting",
        typeColor: "bg-indigo-950 text-white",
        startTime: "May 29, 12:00 AM",
        endTime: "May 29, 1:00 AM",
        status: "Done",
        statusColor: "bg-lime-500 text-white",
        relatedItem: "Amazon deal"
      }
    ]
  }
];