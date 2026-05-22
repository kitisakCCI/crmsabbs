export const initialGroups = [
  {
    id: "active",
    title: "Active Contacts",
    color: "border-emerald-500", // เส้นสีเขียวหนาด้านซ้ายแบบในรูป
    textColor: "text-emerald-700",
    contacts: [
      {
        id: 1,
        name: "Robert Thompson",
        email: "robert@amazon.com",
        account: "Amazon",
        deal: "Amazon deal",
        dealBadge: "+1",
        dealValue: "$155,000",
        phone: "+1 734 844 2393",
        phoneFlag: "🇺🇸",
        title: "COO",
        type: "Customer",
        typeColor: "bg-sky-400 text-white",
        priority: "High",
        priorityColor: "bg-amber-600 text-white"
      },
      {
        id: 2,
        name: "Steven Scott",
        email: "steven@google.com",
        account: "Google",
        deal: "Google deal",
        dealBadge: null,
        dealValue: "$70,000",
        phone: "+1 415 373 9914",
        phoneFlag: "🇺🇸",
        title: "CEO",
        type: "Partner",
        typeColor: "bg-amber-500 text-white",
        priority: "High",
        priorityColor: "bg-amber-600 text-white"
      },
      {
        id: 3,
        name: "Sam Jones",
        email: "sam@apple.com",
        account: "Apple",
        deal: "Apple deal",
        dealBadge: "+1",
        dealValue: "$85,000",
        phone: "+1 854 722 0477",
        phoneFlag: "🇺🇸",
        title: "CIO",
        type: "Customer",
        typeColor: "bg-sky-400 text-white",
        priority: "High",
        priorityColor: "bg-amber-600 text-white"
      }
    ]
  },
  {
    id: "inactive",
    title: "Inactive Contacts",
    color: "border-rose-800", // เส้นสีแดงหนาด้านซ้ายแบบในรูป
    textColor: "text-rose-800",
    contacts: [] // กลุ่มว่างพร้อมปุ่ม Add contact
  }
];