import React, { useEffect, useRef, useState } from 'react';
import { Row, Col, Button, Input, Select, List, message, Collapse, Layout, Menu, Breadcrumb } from 'antd';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import './index.scss';
const path = require('path');

interface IDashboardBlock {
  type: 'video' | 'image';
};

const { TextArea } = Input;
const { Option } = Select;

let source: EventSource;
const DashboardBlock: React.FC<IDashboardBlock> = ({ type }) => {
  const [input] = useState<string>('demo.mp4');
  const [output] = useState<string>('output.mp4');
  const [command, setCommand] = useState<string>('');
  const [fullCommand, setFullCommand] = useState<string>('');
  const [outputUrl, setOutputUrl] = useState<string>('');
  const [shell, setShell] = useState<string[]>([]);

  const shellRef = useRef<HTMLDivElement>(null);

  const createSSE = () => {
    // create SSE connection
    source = new EventSource('http://localhost:3001/shell');

    source.addEventListener('open', function () {
      console.log(123123)
    })

    source.addEventListener('message', function (evt) {
      setShell(prev => [...prev, evt.data]);
      shellRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }, false);

    source.addEventListener('error', function (e) {
      console.log(e)
    })

    return source;
  };

  const submitCommand = (type?: boolean) => {
    if ((type && !fullCommand) || (!type && !command)) {
      message.warn('请确认命令！')
    } 

    const sse = createSSE();
    setShell([]);

    const result = type ? fullCommand : `
      ffmpeg -i ./static/${input} ${command} ./static/${output} -y
    `.trim();

    axios.post('http://localhost:3001/command', {
      command: result,
      output
    }).then(() => {
      message.success('处理成功');
      setOutputUrl(`http://${path.join('localhost:3001', output)}?timestamp=${Date.now()}`);
      sse.close();
    });
  };

  return (
    <Row className='dashboard'>
      <Col span={24} className='dashboard-control'>
        <div className='dashboard-control-prefix'>ffmpeg -i </div>
        <Select className="dashboard-control-input" value={input}>
          <Option value="demo.mp4">demo.mp4</Option>
          <Option value="demo.jpg">demo.jpg</Option>
        </Select>
        <TextArea className='dashboard-control-command' value={command} onChange={e => setCommand(e.target.value)} />
        <Input className='dashboard-control-output' disabled value={output} />
        <Button disabled={!command} onClick={() => submitCommand()}>执行</Button>
      </Col>
      <Col span={24} className='dashboard-control'>
        <TextArea className='dashboard-control-command' value={fullCommand} onChange={e => setFullCommand(e.target.value)} />
        <Button disabled={!fullCommand} onClick={() => submitCommand(true)}>执行</Button>
      </Col>
      <Col span={24} className="dashboard-preview">
        <div style={{ marginRight: 16 }}>
          {
            type === 'video' ? <video controls src={`http://localhost:3001/${input}`}>不兼容，哈哈哈</video> : <img src={`http://localhost:3001/${input}`} alt="" />
          }
        </div>
        <div>
          预览区域
          {
            outputUrl && (type === 'video' ? <video controls src={outputUrl}>不兼容，哈哈哈</video> : <img src={outputUrl} alt="" />)
          }
        </div>
      </Col>

      <Col span={24}>
        <div className='dashboard-shell'>
          <div ref={shellRef}>
            {
              shell.map(sh => <div>{sh}</div>)
            }
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default DashboardBlock;