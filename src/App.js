import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/NavHeader';
import Layout from 'antd/es/layout/layout';
import Dashboard from './pages/Dashboard';
import ConfirmList from './pages/ConfirmList';
import MyWork from './pages/MyWork';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header />
          <Content style={{ padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/confirmlist" element={<ConfirmList />} />
              <Route path="/mywork" element={<MyWork />} />

            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;