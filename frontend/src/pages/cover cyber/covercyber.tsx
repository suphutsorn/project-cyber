import React from 'react';
import { useNavigate } from 'react-router-dom';

const Covercyber: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/c2d6adc3ff8723076e8a6d68ccd861cbc31cc8530b524458c04da57b6d7661f5');
  };

  return (
    <div style={styles.container} onClick={handleClick}>
      <div style={styles.overlay}>
        <header style={styles.header}>
          
        </header>
        <main style={styles.main}>
         
        </main>
        <footer style={styles.footer}>
          <p>© 2025 CTF GROUP05.</p>
        </footer>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundImage: `url('/files/68aafa95-46f9-437c-a85b-98f15f6abe5f.webp')`, // ตั้งค่าภาพพื้นหลัง
        backgroundSize: 'cover', // ครอบคลุมทั้งหน้า
        backgroundPosition: 'center top', // จัดให้อยู่ตรงกลางและเลื่อนลงล่าง
        backgroundRepeat: 'no-repeat', // ไม่วนซ้ำ
        height: '100vh', // ความสูงเต็มจอ
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // เพิ่มเลเยอร์พื้นหลังโปร่งแสง
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    padding: '20px 0',
  },
  title: {
    fontSize: '3rem',
    margin: 0,
    color: '#00ADEF',
    textShadow: '0 0 10px #00ADEF, 0 0 20px #00ADEF',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  text: {
    fontSize: '1.5rem',
    color: '#FFFFFF',
    textShadow: '0 0 5px #FFFFFF, 0 0 10px #FFFFFF',
  },
  footer: {
    padding: '10px 0',
    fontSize: '0.9rem',
    color: '#A0A0A0',
  },
};

export default Covercyber;
