import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Dropdown, Space, Flex } from "antd";
import styles from "./index.module.scss";

const { Header, Content, Sider, Footer } = Layout;

const items: MenuProps["items"] = [
    {
        key: "1",
        label: <Link href="/about">用户中心</Link>
    },
    {
        key: "2",
        label: <Link href="/about">登出</Link>
    }
];

const navItems: MenuProps["items"] = [
    {
        key: "book",
        label: "图书管理",
        children: [
            {
                key: "/book",
                label: "图书列表"
            },
            {
                key: "/book/add",
                label: "图书添加"
            }
        ]
    },
    {
        key: "borrow",
        label: "借阅管理",
        children: [
            {
                key: "/borrow",
                label: "借阅列表"
            },
            {
                key: "/borrow/add",
                label: "借阅添加"
            }
        ]
    },
    {
        key: "category",
        label: "分类管理",
        children: [
            {
                key: "/category",
                label: "分类列表"
            },
            {
                key: "/category/add",
                label: "分类添加"
            }
        ]
    },
    {
        key: "user",
        label: "用户管理",
        children: [
            {
                key: "/user",
                label: "用户列表"
            },
            {
                key: "/user/add",
                label: "用户添加"
            }
        ]
    }
];

const App = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    console.log(router);

    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header className={styles.header}>
                <Flex justify="space-between" align="center">
                    <div className={styles.logo}>图书管理系统</div>
                    <Dropdown menu={{ items }} placement="bottom">
                        <Space>
                            <div className={styles.username}>林梓滨</div>
                            <DownOutlined />
                        </Space>
                    </Dropdown>
                </Flex>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: colorBgContainer }}>
                    <Menu
                        mode="inline"
                        selectedKeys={[router.route]}
                        defaultOpenKeys={["book"]}
                        style={{ height: "100%", borderRight: 0 }}
                        items={navItems}
                        onSelect={({ key }) => {
                            router.push(key);
                        }}
                    />
                </Sider>
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{ textAlign: "center" }}>bingduyishui</Footer>
        </Layout>
    );
};

export default App;
