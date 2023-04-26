import React from 'react'
import { Carousel } from 'react-bootstrap';
function Car() {
  return (
    <div>
    <Carousel >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1"
        alt="red car"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:* " alt="blue car"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1612956946766-7c5a0ce957b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80"
        alt="yellow car"
      />
    </Carousel.Item>
  </Carousel>
    </div>
    );
}
export default Car
