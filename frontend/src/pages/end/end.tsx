import React from "react";

const End: React.FC = () => {
  return (
    <div style={styles.container}>
      <img
        src="/Cup Victory GIF by Sibur.gif" // ใส่ path ของไฟล์ GIF
        alt="End GIF"
        style={styles.image}
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#000",
  },
  image: {
    width: "80vw", // ปรับให้ GIF ใหญ่ขึ้นตามขนาดของ viewport
    maxWidth: "800px", // กำหนดขนาดสูงสุด
    height: "auto",
  },
};

export default End;
