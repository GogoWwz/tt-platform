import React from 'react';
import DashboardBlock from "../DashboardBlock";
import MouListBlock from "../MouListBlock";

const Drawbox: React.FC = () => {
  return (
    <div className="content-layout">
      <DashboardBlock type="video" />
      <MouListBlock title="绘制矩形">
        <h4>描边：-vf drawbox=640:0:200:200:red:30</h4>
        <h4>填充：-vf drawbox=640:0:200:200:red@0.5:fill</h4>
      </MouListBlock>
    </div>
  );
};

export default Drawbox;