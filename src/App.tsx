import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Ffmpeg from "./Ffmpeg";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={(
          <div>
            <Link to='/ffmpeg/crop'>Ffmpeg</Link>
            <br></br>
            <Link to='/threejs'>three.js</Link>{/* pano2vr */}
          </div>
        )} />
        <Route path="/ffmpeg/*" element={<Ffmpeg />} />
        <Route path="/threejs/*" element={<Ffmpeg />} />
      </Routes>
    </Router>
  );
};

export default App;