import { Layout, theme, Typography } from "antd";
import React, { useState } from "react";
import MenuComp from "../MenuComp";
import Main from "../Main";

const { Header, Content, Sider } = Layout;

const LayoutC: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG, colorBgLayout, colorText },
  } = theme.useToken();
  const { Title } = Typography;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={350}
      >
        <Title style={{ color: colorText }} level={4}>
          Modulos
        </Title>
        <MenuComp></MenuComp>
      </Sider>
      <Layout>
        <Header style={{ padding: 1, background: colorBgContainer }}>
          <Title style={{ color: colorText }} level={2}>
            Golang videos
          </Title>
        </Header>
        <Content style={{ margin: "0 0 0 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: colorBgLayout,
              borderRadius: borderRadiusLG,
            }}
          >
            <Main />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutC;
