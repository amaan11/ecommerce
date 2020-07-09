import React, { Component } from 'react';
import {
  LeftOutlined,
  RightOutlined,
  ClockCircleOutlined,
  UndoOutlined,
  ShoppingOutlined
} from '@ant-design/icons';
import Carousel from 'react-multi-carousel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-multi-carousel/lib/styles.css';
import { Button, Tabs, message } from 'antd';
import { get } from 'lodash';
import { Header } from '../../components';
import { homePageImages } from '../../utils/data';
import ProductCard from '../../components/ProductCard';
import * as authActions from '../../redux/actions/authAction';
import * as productActions from '../../redux/actions/productAction';

const { TabPane } = Tabs;

const productImages = [
  require('../../assets/images/women-fashion.jpeg'),
  require('../../assets/images/men-fashion.jpeg'),
  require('../../assets/images/accessory.jpeg')
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      isImageHover: false
    };
    this.timer = null;
  }

  componentDidMount = () => {
    // this.timer = setTimeout(
    //   () =>
    //     this.setState({ currentImageIndex: this.state.currentImageIndex + 1 }),
    //   5000
    // );
    this.props.actions.getCategories('men');
    this.props.actions.getCategories('women');
  };
  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  handleImageHover = () => {
    this.setState({
      isImageHover: !this.state.isImageHover
    });
  };
  slideImageHandler = type => {
    const { currentImageIndex } = this.state;
    if (type == 'right') {
      if (currentImageIndex !== homePageImages.length - 1) {
        this.setState({
          currentImageIndex: currentImageIndex + 1
        });
      } else {
        this.setState({
          currentImageIndex: 0
        });
      }
    } else {
      if (currentImageIndex !== 0) {
        this.setState({
          currentImageIndex: currentImageIndex - 1
        });
      } else {
        this.setState({
          currentImageIndex: homePageImages.length - 1
        });
      }
    }
  };
  logoutHandler = () => {
    this.props.actions.logoutRequest().then(() => {
      if (this.props.logoutResponse.error) {
        message.error(this.props.logoutResponse.error);
      } else {
        message.success(this.props.logoutResponse.data);
      }
    });
  };

  render() {
    const { currentImageIndex, isImageHover } = this.state;
    const currentUser = get(this.props.currentUser, 'data', {});
    const categories = get(this.props, 'categories', {});
    console.log('categories', categories);
    return (
      <div>
        <Header
          currentUser={currentUser}
          logoutHandler={this.logoutHandler}
          categories={categories}
        />
        <div className='xs-mt-20'>
          {homePageImages.map(
            (image, index) =>
              index == currentImageIndex && (
                <div
                  className='image-div'
                  onMouseEnter={this.handleImageHover}
                  onMouseLeave={this.handleImageHover}
                >
                  <img src={image.imageUrl} className='main-image' />
                  <div className='content-div'>
                    <div className='welcome-text text-center'>WELCOME TO</div>
                    <h1 className='heading-text'>{image.title}</h1>
                    <div className='d-flex justify-center'>
                      <Button
                        type='primary'
                        size='large'
                        className='justify-center'
                      >
                        SHOP NOW
                      </Button>
                    </div>
                  </div>
                  {isImageHover && (
                    <React.Fragment>
                      <LeftOutlined
                        className='icon left-icon'
                        onClick={() => this.slideImageHandler('left')}
                      />
                      <RightOutlined
                        className='icon right-icon'
                        onClick={() => this.slideImageHandler('right')}
                      />
                    </React.Fragment>
                  )}
                </div>
              )
          )}
        </div>
        <div className='text-center xs-mt-20 font-24 color-danger'>
          Exclusive Offer
        </div>
        <div className='text-center product-heading'>TOP COLLECTION</div>
        <div className='onlydesktop'>
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            customTransition='all .5'
            transitionDuration={5000}
            deviceType='desktop'
            containerClass='carousel-container'
            removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
            dotListClass='custom-dot-list-style'
            itemClass='carousel-item-padding-40-px'
            className=' xs-mt-20 xs-ml-10 xs-mr-20'
          >
            <ProductCard
              productImages={productImages}
              productColorOptions={['red', 'orange']}
              rating={4}
            />
            <ProductCard
              productImages={[require('../../assets/images/men-fashion.jpeg')]}
              productColorOptions={['red', 'orange']}
            />
            <ProductCard
              productImages={[require('../../assets/images/accessory.jpeg')]}
              productColorOptions={['red', 'orange']}
            />
            <ProductCard
              productImages={[require('../../assets/images/shoes.jpeg')]}
              productColorOptions={['blue', 'orange']}
            />
            <ProductCard
              productImages={productImages}
              productColorOptions={['pink', 'orange']}
            />
            <ProductCard
              productImages={productImages}
              productColorOptions={['red', 'orange']}
            />
          </Carousel>
        </div>
        <div className='onlymobile xs-ml-20 xs-mt-20 xs-mr-20'>
          <ProductCard
            productImages={productImages}
            productColorOptions={['red', 'orange']}
            rating={4}
          />
        </div>
        <div className='text-center xs-mt-20 font-24 color-danger'>
          Fashion Products
        </div>
        <div className='product-heading text-center'>SPECIAL PRODUCTS</div>
        <div>
          <Tabs defaultActiveKey='1'>
            <TabPane tab={<div className='tab-item'>New Products</div>} key='1'>
              <div className='xs-ml-20 xs-mr-20 d-flex flex-wrap'>
                <div className='tab-content'>
                  <ProductCard
                    productImages={[
                      require('../../assets/images/accessory.jpeg')
                    ]}
                    productColorOptions={['red', 'orange']}
                  />
                </div>
                <div className='tab-content'>
                  <ProductCard
                    productImages={[
                      require('../../assets/images/accessory.jpeg')
                    ]}
                    productColorOptions={['red', 'orange']}
                  />
                </div>
                <div className='tab-content'>
                  <ProductCard
                    productImages={[
                      require('../../assets/images/accessory.jpeg')
                    ]}
                    productColorOptions={['red', 'orange']}
                  />
                </div>
                <div className='tab-content'>
                  <ProductCard
                    productImages={[
                      require('../../assets/images/accessory.jpeg')
                    ]}
                    productColorOptions={['red', 'orange']}
                  />
                </div>
                <div className='tab-content'>
                  <ProductCard
                    productImages={[
                      require('../../assets/images/accessory.jpeg')
                    ]}
                    productColorOptions={['red', 'orange']}
                  />
                </div>
                <div className='tab-content'>
                  <ProductCard
                    productImages={[
                      require('../../assets/images/accessory.jpeg')
                    ]}
                    productColorOptions={['red', 'orange']}
                  />
                </div>
                <div className='tab-content'>
                  <ProductCard
                    productImages={[
                      require('../../assets/images/accessory.jpeg')
                    ]}
                    productColorOptions={['red', 'orange']}
                  />
                </div>
                <div className='tab-content'>
                  <ProductCard
                    productImages={[
                      require('../../assets/images/accessory.jpeg')
                    ]}
                    productColorOptions={['red', 'orange']}
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab={<div className='tab-item'>Mens Wear</div>} key='2'>
              Tab 1
            </TabPane>
            <TabPane tab={<div className='tab-item'>Womens Wear</div>} key='3'>
              Tab 1
            </TabPane>
          </Tabs>
        </div>
        <div className='service xs-mt-25 xs-ml-20 xs-mr-20 xs-pt-20 xs-pb-20 d-flex flex-wrap justify-between'>
          <div className='d-flex justify-center xs-mt-20 xs-mb-20 border-right xs-pr-40'>
            <ClockCircleOutlined className='service-icon d-flex align-center xs-mr-10' />
            <div>
              <h3>24 X 7 Customer Service</h3>
              <div>Customer service throughout day in case of any query</div>
            </div>
          </div>
          <div className='d-flex justify-center xs-mt-20 xs-mb-20  border-right xs-pr-40'>
            <UndoOutlined className='service-icon d-flex align-center xs-mr-10' />
            <div>
              <h3>15 Days Return Policy</h3>
              <div>Return any product within 15 days and get full refund</div>
            </div>
          </div>
          <div className='d-flex justify-center xs-mt-20 xs-mb-20  border-right xs-pr-40'>
            <ShoppingOutlined className='service-icon d-flex align-center xs-mr-10' />
            <div>
              <h3>Try And Buy</h3>
              <div>Try the product and then pay for the item</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state>>>', state);
  return {
    logoutResponse: state.auth.logoutResponse,
    currentUser: state.auth.user,
    categories: state.product.categories
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...authActions, ...productActions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
