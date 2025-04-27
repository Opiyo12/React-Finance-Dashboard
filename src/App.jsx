import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, MenuUnfoldOutlined, MenuFoldOutlined, SettingOutlined, DashOutlined, DashboardFilled, TransactionOutlined, DashboardOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Transaction from './components/pages/Transaction';
import { Settings } from 'lucide-react';
import { Router, Routes,Route } from 'react-router-dom';


const { Header, Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (

     <Layout className="h-screen  ">
      <Layout>
        {/* Logic for adding the collapse of the dashboard */}
        <Sider collapsible collapsed={collapsed} trigger={null} className="!p-0">
          {/* Admin Dashboard Text Area */}
          <div className="!text-grey-200 !bg-white text-center text-lg font-bold py-4">
            {!collapsed ? "Admin Dashboard" : "AD"}
          </div>

          {/* Menu */}
          <Menu mode="inline" defaultSelectedKeys={['0']} className="h-full"
           items ={ [
              {
                key: '0',
                icon: <DashboardOutlined size={20} />,
                label: <Link to="">Home</Link>,
              },
              {
                key: '1',
                icon: <DashboardOutlined size={20} />,
                label: <Link to="/dashboard">Dashboard</Link>,
              },
              {
                key: '2',
                icon: <TransactionOutlined size={20} />,
                label: <Link to="/transactions">Transactions</Link>,
                children: [
                  {
                    key: '4-1',
                    label: <Link to="/transactions">All Transactions</Link>
                  },
                  {
                    key: '4-2',
                    label: 'Add Transaction',
                  },
                  {
                    key: '4-3',
                    label: 'Transaction Reports',
                  }],
              },
              
              {
                key: '3',
                icon: <SettingOutlined size={20} />,
                label: <Link to="/settings">Settings</Link>,
              },
              
            ]}
            
          />
          
            
        </Sider>

        <Layout className="mx-0 mb-5">
          {/* Header with Toggle Button */}
          <Header className="!bg-white !p-0  " >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className='!bg-grey-600 w-5'
            />
          </Header>
          {/* Content */}
          <Content className=" p-[24px] m-5">
          <Routes>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/transactions" element={<Transaction/>} />
              <Route path="/settings" element={<Settings/>} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>

  );
}

export default App;
