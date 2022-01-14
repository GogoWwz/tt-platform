import React from 'react';
import DashboardBlock from "../DashboardBlock";
import MouListBlock from "../MouListBlock";

const Flip: React.FC = () => {
  return (
    <div className="content-layout">
      <DashboardBlock type="video" />
      <MouListBlock title="翻转"> 
        <h4>垂直翻转：-vf vflip</h4>
        <h4>水平翻转：-vf hflip</h4>
      </MouListBlock>
    </div>
  );
};

export default Flip;