import React from 'react';
import DashboardBlock from "../DashboardBlock";
import MouListBlock from "../MouListBlock";

const Boxblur: React.FC = () => {
  return (
    <div className="content-layout">
      <DashboardBlock type="video" />
      <MouListBlock title="边缘模糊">
        <h4>模糊：-vf boxblur=6</h4>
      </MouListBlock>
    </div>
  );
};

export default Boxblur;