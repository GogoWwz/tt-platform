import React from 'react';
import DashboardBlock from "../DashboardBlock";
import MouListBlock from "../MouListBlock";

const Drawgrid: React.FC = () => {
  return (
    <div className="content-layout">
      <DashboardBlock type="video" />
      <MouListBlock title="绘制网格"> 
        <h4>1000宽度的网格：-vf drawgrid=width=100:height=100:thickness=2:color=red@0.5</h4>
        <h4>3 * 3的网格： -vf drawgrid=w=iw/3:h=ih/3:t=2:c=white@0.5</h4>
      </MouListBlock>
    </div>
  );
};

export default Drawgrid;