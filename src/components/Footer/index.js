import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

function MyFooter() {
  return (
    <Footer style={{ background: "black", color: "white", padding: '20px 50px' }}>
      <div style={{ height: '1px', background: 'white', width: '82%', margin: '0 auto' }}></div>
      <Row gutter={[32, 16]} style={{ paddingTop: '20px' }}>
        <Col span={6} style={{ paddingLeft: '10%' }}>
          <div>SA+P DUSPMIT</div>
          <div>For more information of the Senseable City Lab,</div>
          <div>Please visit <a href="#" style={{ color: "white" }}>Senseable Database</a>.</div>
        </Col>
        <Col span={6}>
          <div>Senseable City Laboratory</div>
          <div>MIT 9-216</div>
          <div>77 Massachusetts Avenue</div>
          <div>Cambridge, MA 02139 USA</div>
        </Col>
        <Col span={6}>
          <div><i className="fas fa-phone"></i> 1-617-324-4474</div>
          <div><i className="fas fa-fax"></i> 1-617-258-8081</div>
          <div><i className="fas fa-globe"></i> <a href="#" style={{ color: "white" }}>senseable.mit.edu</a></div>
          <div><i className="fas fa-envelope"></i> senseable-contacts@mit.edu</div>
        </Col>
      </Row>
    </Footer>
  );
}

export default MyFooter;
