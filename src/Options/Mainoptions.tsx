import React from "react";
import DashboardBlock from "../DashboardBlock";
import MouListBlock from "../MouListBlock";

const Mainoptions = () => {
  return (
    <div className="content-layout">
      <DashboardBlock type="video"/>
      <MouListBlock title="主要选项">
        <h4>-f: 指定输入或者输出文件格式。常规可省略而使用依据扩展名的自动指定，但一些选项需要强制明确设定</h4>
        <h4>-i：输入文件</h4>
        <h4>-t：限制输入/输出的时间。如果是在-i前面，就是限定从输入中读取多少时间的数据；如果是用于限定输出文件，则表示写入多少时间数据后就停止</h4>
        <h4>-to：限制输出的时间。-to 和 -t 是互斥的，-t 有更高优先级</h4>
        <h4>-vf：视频滤镜，同 -filter:v</h4>
        <h4>-af：音频滤镜，同 -filter:a</h4>
        <h4>-s：设置分辨率。如：-s 640x360</h4>
        <h4>-r：设置帧率，如：-r 1</h4>
      </MouListBlock>
    </div>
  );
};

export default Mainoptions;