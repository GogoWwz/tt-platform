/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

import Mainoptions from './Options/Mainoptions';

import Crop from './Filters/Crop';
import Boxblur from './Filters/Boxblur';
import Colorbalance from './Filters/Colorbalance';
import Colorkey from './Filters/Colorkey';
import Drawbox from './Filters/Drawbox';
import Drawgrid from './Filters/Drawgrid';
import Flip from './Filters/Flip';
import Framepack from './Filters/Framepack';
import Reference from './Reference';

import 'antd/dist/antd.css';
import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Ffmpeg() {
  return (
    <div className="App">
      <Layout style={{ height: '100%' }}>
        <Header className="header" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#fff', marginRight: 48 }}>返回首页</Link>
          <h1 className="logo" style={{ color: '#fff' }}>Ffmpeg：<a target="_blank" href="https://www.bookstack.cn/read/other-doc-cn-ffmpeg/README.md" style={{ marginBottom: 16 }}>ffmpeg 翻译文档(ffmpeg中文文档)</a></h1>
        </Header>
        <Content>
          <Layout className="site-layout-background" style={{ height: '100%' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['crop']}
                defaultOpenKeys={['filters']}
                style={{ height: '100%' }}
              >
                <SubMenu key="start" icon={<UserOutlined />} title="Base 基础">
                  <Menu.Item key="1">Base</Menu.Item>
                </SubMenu>
                <SubMenu key="options" icon={<UserOutlined />} title="Options 选项">
                  <Menu.Item key="mainoptions"><Link to="/ffmpeg/mainoptions">Main Options</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="filters" icon={<LaptopOutlined />} title="Filters 滤镜">
                  <Menu.Item key="crop"><Link to="/ffmpeg/crop">Crop</Link></Menu.Item>
                  <Menu.Item key="boxblur"><Link to="/ffmpeg/boxblur">Boxblur</Link></Menu.Item>
                  <Menu.Item key="colorbalance"><Link to="/ffmpeg/colorbalance">Colorbalance</Link></Menu.Item>
                  <Menu.Item key="colorkey"><Link to="/ffmpeg/colorkey">Colorkey</Link></Menu.Item>
                  <Menu.Item key="drawbox"><Link to="/ffmpeg/drawbox">Drawbox</Link></Menu.Item>
                  <Menu.Item key="drawgrid"><Link to="/ffmpeg/drawgrid">Drawgrid</Link></Menu.Item>
                  <Menu.Item key="flip"><Link to="/ffmpeg/flip">Flip</Link></Menu.Item>
                  <Menu.Item key="framepack"><Link to="/ffmpeg/framepack">Framepack</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="reference"><Link to="/ffmpeg/reference">参考</Link></Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: 16, minHeight: 280 }}>
              <Routes>
                <Route path="/mainoptions" element={<Mainoptions />} />
                <Route path="/crop" element={<Crop />} />
                <Route path='/boxblur' element={<Boxblur />} />
                <Route path='/colorbalance' element={<Colorbalance />} />
                <Route path='/colorkey' element={<Colorkey />} />
                <Route path='/drawbox' element={<Drawbox />} />
                <Route path='/drawgrid' element={<Drawgrid />} />
                <Route path='/flip' element={<Flip />} />
                <Route path='/framepack' element={<Framepack />} />
                <Route path='/reference' element={<Reference />} />
              </Routes>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default Ffmpeg;
