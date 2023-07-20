import React from 'react'
import {Layout, Card, Col, Row, Statistic} from 'antd'

const { Content } = Layout;

function Dashboard() {
  return (
    <>
     <Row gutter={[16, 16]} style={{marginBottom: '16px'}}>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card title="Bulk Project Orders" bordered={false} style={{ textAlign: 'center' }}>
            Card content 1
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card title="Individual Project Orders" bordered={false} style={{ textAlign: 'center' }}>
            Card content 2
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card title="Normal Sale Orders" bordered={false} style={{ textAlign: 'center' }}>
            Card content 3
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card title="Bulk Projects " bordered={false} style={{ textAlign: 'center' }}>
            Card content 4
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card title="Indiviual Projects" bordered={false} style={{ textAlign: 'center' }}>
            Card content 5
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card title="Normal Sales" bordered={false} style={{ textAlign: 'center' }}>
            Card content 6
          </Card>
        </Col>
      </Row>
    </>
  )
};

export default Dashboard;