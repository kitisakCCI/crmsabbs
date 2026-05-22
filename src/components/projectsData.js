export const initialProjectGroups = [
  {
    id: "new-projects",
    title: "New Projects",
    color: "border-indigo-600", // แถบเส้นขอบสีน้ำเงินประจำกลุ่มนิวโปรเจกต์
    textColor: "text-indigo-700",
    projects: [
      {
        id: 1,
        name: "Project - Google deal",
        count: 2,
        owner: "👤",
        priority: "Medium",
        priorityColor: "bg-blue-600 text-white",
        timelineStart: "May 4",
        timelineEnd: "Jun 6",
        timelineProgress: "bg-[#0073ea]", // สีพื้นหลังแถบไทม์ไลน์หลัก
        status: "Working on it",
        statusColor: "bg-amber-500 text-white",
        deal: "Google deal",
        contact: "Steven Scott",
        account: "Google"
      },
      {
        id: 2,
        name: "Project - Amazon deal",
        count: null,
        owner: "👤",
        priority: "High",
        priorityColor: "bg-indigo-900 text-white",
        timelineStart: "May 22",
        timelineEnd: "Jun 12",
        timelineProgress: "bg-slate-800",
        status: "Not Started",
        statusColor: "bg-slate-400 text-white",
        deal: "Amazon deal",
        contact: "Robert Thompson",
        account: "Amazon"
      },
      {
        id: 3,
        name: "Apple deal - New project",
        count: null,
        owner: "👤",
        priority: "",
        priorityColor: "bg-slate-100", // กรณีว่างไม่มีระดับความสำคัญ
        timelineStart: null,
        timelineEnd: null,
        timelineProgress: "bg-slate-300",
        status: "Not Started",
        statusColor: "bg-slate-400 text-white",
        deal: "Apple deal",
        contact: "",
        account: ""
      }
    ]
  },
  {
    id: "completed-projects",
    title: "Completed",
    color: "border-emerald-500", // แถบสีเขียวสำหรับงานที่เสร็จสิ้นแล้ว
    textColor: "text-emerald-700",
    projects: [] // กลุ่มว่างเพื่อรองรับปุ่มกดลากวางหรือเพิ่มรายการใหม่
  }
];