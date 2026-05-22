export const initialProducts = [
  {
    id: 1,
    name: "New item",
    description: "",
    price: "$0",
    sku: "",
    type: "Service" // สถานะตัวอย่างแบบกล่องสีเทา
  }
];

export const initialStats = {
  availableProductsCount: 1,
  hasProductTypes: false, // เอาไว้ใช้สลับวิดเจ็ตในรูปภาพ (ถ้าเป็น false จะขึ้น No results found)
  hasFiles: false // ตัวแปรสำหรับเช็คกล่องแสดงผลไฟล์แกลเลอรีว่างเปล่า
};