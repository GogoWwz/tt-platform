import React from 'react';
import DashboardBlock from "../DashboardBlock";
import MouListBlock from "../MouListBlock";


const Framepack: React.FC = () => {
  return (
    <div className="content-layout">
      <DashboardBlock type="video" />
      <MouListBlock title="哈哈哈">
        <h4>ffmpeg -i ./static/demo.mp4 -i ./static/demo.mp4 -filter_complex framepack=tab</h4>
      </MouListBlock>
    </div>
  );
};

export default Framepack;