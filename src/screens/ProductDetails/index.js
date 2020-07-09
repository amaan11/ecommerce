import React, { Component } from 'react';
import Header from '../../components/Header';
import { Breadcrumb, Row, Col, Button } from 'antd';
import ProductInfo from './ProductInfo';
import { Slide } from 'react-slideshow-image';
import SimilarProductCard from './SimilarProductCard';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
      pauseOnHover: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    };
    return (
      <React.Fragment>
        <Header />
        <div className='xs-ml-20 xs-mt-20 xs-mr-20'>
          <div>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='/product'>Clothing</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href=''>Tshirts</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span className='bold'>Tshirts By Wrogn</span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className='onlydesktop'>
            <Row>
              <Col span={15}>
                <div className='d-flex flex-wrap xs-mt-30'>
                  <img
                    src={require('../../assets/images/men-fashion.jpeg')}
                    className='product-full-image xs-mr-20 xs-mb-20'
                  />
                  <img
                    src={require('../../assets/images/men-fashion.jpeg')}
                    className='product-full-image xs-mr-20 xs-mb-20'
                  />
                  <img
                    src={require('../../assets/images/men-fashion.jpeg')}
                    className='product-full-image xs-mr-20 xs-mb-20'
                  />
                  <img
                    src={require('../../assets/images/men-fashion.jpeg')}
                    className='product-full-image xs-mr-20 xs-mb-20'
                  />
                  <img
                    src={require('../../assets/images/men-fashion.jpeg')}
                    className='product-full-image xs-mr-20 xs-mb-20'
                  />
                </div>
              </Col>
              <Col span={9} className='xs-mt-20'>
                <ProductInfo />
              </Col>
            </Row>
          </div>
          <div className='onlymobile xs-mt-20'>
            <Slide {...properties}>
              <div className='each-slide'>
                <img
                  src={require('../../assets/images/men-fashion.jpeg')}
                  className='product-full-image xs-mr-20 xs-mb-20'
                />
              </div>
              <div className='each-slide'>
                <img
                  src={require('../../assets/images/women-fashion.jpeg')}
                  className='product-full-image xs-mr-20 xs-mb-20'
                />
              </div>
              <div className='each-slide'>
                <img
                  src={require('../../assets/images/shoes.jpeg')}
                  className='product-full-image xs-mr-20 xs-mb-20'
                />
              </div>
            </Slide>
            <div className='xs-mt-10'>
              <ProductInfo />
            </div>
          </div>
          <div className='xs-mt-20'>
            <div className='color-black bold  xs-mb-10'>SIMILAR PRODUCTS</div>
            <div className='d-flex flex-wrap'>
              <SimilarProductCard />
              <SimilarProductCard />
              <SimilarProductCard />
              <SimilarProductCard />
              <SimilarProductCard />
              <SimilarProductCard />
              <SimilarProductCard />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
