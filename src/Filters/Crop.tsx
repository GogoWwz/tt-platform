import React from 'react';
import DashboardBlock from "../DashboardBlock";
import MouListBlock from "../MouListBlock";

const Crop: React.FC = () => {
  return (
    <div className="content-layout">
      <DashboardBlock type="video" />
      <MouListBlock title="裁剪">
        <h4>左上角裁剪一半宽高：-vf crop=iw/2:ih/2:0:0:keep_aspect=1</h4>
      </MouListBlock>
    </div>
  );
};

export default Crop;