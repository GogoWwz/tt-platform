import React from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import DashboardBlock from "../DashboardBlock";
import MouListBlock from "../MouListBlock";

const Colorkey: React.FC = () => {
  return (
    <div className="content-layout">
      <DashboardBlock type="video" />
      <MouListBlock title="颜色抠图">
        <h4>将黑色，容差为0.5的像素扣除： -vf colorkey=black:0.5</h4>
        <button onClick={() => {
          axios.post('http://localhost:3001/demo').then((res) => {
            console.log(123123)
          });
        }}>
          点击
        </button>
      </MouListBlock>
    </div>
  );
};

export default Colorkey;