// ข้อมูลสำหรับกราฟพาย: สัดส่วนสถานะของดีลลูกค้า (Deal status distribution)
export const dealStatusData = [
  { name: 'Won: 50.0%', value: 50, color: '#66bb6a' },       // สีเขียว
  { name: 'Discovery: 25.0%', value: 25, color: '#42a5f5' },   // สีฟ้าหลัก
  { name: 'Working on it: 12.5%', value: 12.5, color: '#f2a742' }, // สีส้ม
  { name: 'Proposal: 12.5%', value: 12.5, color: '#90caf9' }  // สีฟ้าอ่อน
];

// ข้อมูลสำหรับกราฟแท่ง: ยอดรายรับจริงแบ่งตามเดือน (Actual Revenue by Month)
export const actualRevenueData = [
  { month: 'April 2026', value: 55000 },
  { month: 'May 2026', value: 30000 }
];

// ข้อมูลสำหรับกราฟฟันเนล: อัตราการแปลงสถานะ (Pipeline conversion)
export const pipelineConversionData = [
  { stage: 'New', count: 5, percentage: '100%', fill: '#6495ed' },
  { stage: 'Discovery', count: 5, percentage: '100%', fill: '#6495ed' },
  { stage: 'Proposal', count: 3, percentage: '60%', fill: '#6495ed' },
  { stage: 'Negotiation', count: 2, percentage: '66.7%', fill: '#6495ed' },
  { stage: 'Won', count: 2, percentage: '100%', fill: '#66bb6a' }
];

// ข้อมูลสำหรับกราฟแท่งแนวนอน: บันทึกกิจกรรมจำแนกตามพนักงาน (Activity tracker)
export const activityTrackerData = [
  { name: 'Kitisak Tangchaidee', Email: 6, Meeting: 3 }
];

// ข้อมูลสำหรับกราฟแท่ง: คาดการณ์รายได้รายขั้นสถานะ (Forecasted Revenue by Stage)
export const revenueByStageData = [
  { stage: 'Discovery', value: 63000, fill: '#6495ed' },
  { stage: 'Proposal', value: 70000, fill: '#90caf9' }
];

// ข้อมูลสำหรับกราฟแท่งแบบซ้อน: ความคืบหน้าของดีลแบ่งตามเดือนที่เพิ่ม (Deal Progress based on Month Added)
export const dealProgressData = [
  { month: 'April 2026', Won: 1, Proposal: 0, Discovery: 0 },
  { month: 'May 2026', Won: 1, Proposal: 0, Discovery: 0 },
  { month: 'June 2026', Won: 0, Proposal: 1, Discovery: 2 }
];