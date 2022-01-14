import React, { ReactNode } from 'react';
import { Collapse } from 'antd';

import './index.scss';

interface IMouListBlock {
  title: string;
  children: ReactNode;
};

const MouListBlock: React.FC<IMouListBlock> = ({ title, children }) => {
  return (
    <div className="command">
      <h2>MOU 备忘录</h2>
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel header={title} key="1" className="command-list">
          {children}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default MouListBlock;