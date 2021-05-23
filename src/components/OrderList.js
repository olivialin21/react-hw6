import { useEffect, useContext } from "react";
// import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "antd";
// import { LoadingOutlined } from '@ant-design/icons';
import { getOrderList } from "../actions"
import { StoreContext } from "../store";

export default function OrderList() {
  const { state: { orderList , dispatch } } = useContext(StoreContext);
  // const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;

  useEffect(() => {
    getOrderList(dispatch);
  }, []);

  return (
    <Row>
      {(orderList === []) ?
        (
          <Col
            md={{ span: 24 }}
          >
            <div>Cart is empty</div>
          </Col>
        ) : (
          <>
            {orderList.map( order => (
              <Col
              md={{ span: 24 }}
              >
              <div className="card card-body">
                <h2 style={{ color: 'white' }}>Order Summary</h2>
                <div className="row">
                  <div>Items</div>
                  <div>${order.itemsPrice}</div>
                </div>
                <div className="row">
                  <div>Shipping</div>
                  <div>${order.shippingPrice}</div>
                </div>
                <div className="row">
                  <div>Tax</div>
                  <div>${order.taxPrice}</div>
                </div>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>${order.totalPrice}</strong>
                  </div>
                </div>
              </div>
            </Col>
          ))}
          </>
      )}
    </Row>
  );
}

