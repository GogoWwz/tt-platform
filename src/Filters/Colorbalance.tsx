import React from 'react';
import DashboardBlock from "../DashboardBlock";
import MouListBlock from "../MouListBlock";

const Colorbalance: React.FC = () => {
  return (
    <div className="content-layout">
      <DashboardBlock type="video" />
      <MouListBlock title="色彩平衡">
        <h4>设置画面上红色、绿色色素块的强度最强：-vf colorbalance=rs=1:gs=1:rm=1:gm=1:rh=1:gh=1</h4>
      </MouListBlock>
    </div>
  );
};

export default Colorbalance;