import React, { Component } from 'react';
import {
  HeartOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined
} from '@ant-design/icons';
import { Row, Col, Button } from 'antd';

class ProductInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className='font-24 bold color-black'>BRAND</div>
          <div className='font-16'>Black Printed Slim Fit T-shirt</div>
        </div>
        <div className='d-flex xs-mt-20'>
          <div className='font-24 bold color-black'>Rs. 550</div>
          <div className=' xs-ml-10 d-flex align-center text-line-through'>
            Rs. 799
          </div>
          <div className='danger bold xs-ml-10 d-flex align-center'>
            (30% OFF)
          </div>
        </div>
        <div className='xs-mt-20'>
          <div className='color-black bold'>SELECT SIZE</div>
          <div className='d-flex xs-mt-10'>
            <div className='size-tag xs-mr-10 font-24 d-flex justify-center align-center'>
              S
            </div>
            <div className='size-tag selected-tag xs-mr-10 font-24 d-flex justify-center align-center'>
              M
            </div>
            <div>
              <div className='size-tag  xs-mr-10 font-24 d-flex justify-center align-center'>
                L
              </div>
              <div className='size-tag-unavailable'></div>
            </div>
          </div>
        </div>
        <div className='d-flex xs-mt-20'>
          <Button className='danger-btn '>Add To Cart</Button>
          <div className='d-flex xs-ml-20 border xs-p-7 wishlist' onClick=''>
            <HeartOutlined className='font-24 xs-mr-10' />
            <div>Add To Wishlist</div>
          </div>
        </div>
        <div className='xs-mt-20'>
          <div className='color-black bold '>SHARE IT</div>
          <div className='d-flex xs-mt-10'>
            <FacebookOutlined className='font-24 xs-mr-20' />
            <InstagramOutlined className='font-24 xs-mr-20' />
            <TwitterOutlined className='font-24 xs-mr-20' />
          </div>
        </div>
        <div className='xs-mt-20'>
          <div className='color-black bold '>Product Details</div>
          <div>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem,
          </div>
        </div>
        <div className='xs-mt-20'>
          <div className='color-black bold  xs-mb-10'>Specifications</div>
          <Row>
            <Col span={10} className='border-bottom xs-mr-20 xs-pt-5 xs-pb-5'>
              <div className='xs-pb-5'>Spec 1</div>
              <div className='color-black'>Value 1</div>
            </Col>
            <Col span={10} className='border-bottom xs-mr-20 xs-pt-5 xs-pb-5'>
              <div className='xs-pb-5'>Spec 1</div>
              <div className='color-black'>Value 1</div>
            </Col>
            <Col span={10} className='border-bottom xs-mr-20 xs-pt-5 xs-pb-5'>
              <div className='xs-pb-5'>Spec 1</div>
              <div className='color-black'>Value 1</div>
            </Col>
            <Col span={10} className='border-bottom xs-mr-20 xs-pt-5 xs-pb-5'>
              <div className='xs-pb-5'>Spec 1</div>
              <div className='color-black'>Value 1</div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductInfo;
