import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Level1 from './pages/level1/level1';
import DownloadPage from './pages/level4/level4';
import FindShareSecretNumber from './pages/level2/level2';
import { Level5 } from './pages/level5/level5';
import Covercyber from './pages/cover cyber/covercyber';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Covercyber" />} />
        <Route path="/c2d6adc3ff8723076e8a6d68ccd861cbc31cc8530b524458c04da57b6d7661f5" element={<Level1 />} />
        <Route path="/006cc294a3f3688df73e08971f12f5e8" element={<DownloadPage/>} />
        <Route path="/Level2" element={<FindShareSecretNumber/>} />
        <Route path="/5003746503edd054450b1ef5703449e11230c420d0be521e80936ddfa1e9e6ad" element={<Level5 />} />
        <Route path="/Covercyber" element={<Covercyber />} />
        
      </Routes>
    </Router>
  );
};

export default App;
