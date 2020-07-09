import React, { Component } from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import FilterProduct from './FilterProduct';
import {
  Row,
  Col,
  Breadcrumb,
  Select,
  Pagination,
  Tag,
  Collapse,
  Checkbox,
  Button
} from 'antd';

const { Option } = Select;
const { Panel } = Collapse;

const sortOptions = [
  `What's New`,
  'Popularity',
  'Price:Low to High',
  'Price:High To Low',
  'Better Discount'
];
const items = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  78,
  9,
  9,
  90,
  67,
  56,
  456546,
  457,
  457457,
  7
];

const BreadcrumbComponent = ({}) => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href=''>Clothing</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href=''>Tshirts</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Tshirt for Men & Women</Breadcrumb.Item>
  </Breadcrumb>
);
const PaginationComponent = ({ currentPageNumber, totalProductCount }) => (
  <Row className='border-top xs-pt-20'>
    <Col span={8}>
      <div className='align-center'>Page 1 of 100</div>
    </Col>
    <Col span={16}>
      <Pagination
        onChange=''
        current={currentPageNumber}
        total={totalProductCount}
        pageSize={4}
      />
    </Col>
  </Row>
);

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageNumber: 1,
      totalProductCount: 30
    };
  }
  render() {
    const { currentPageNumber, totalProductCount } = this.state;

    return (
      <div>
        <Header />
        <div className='xs-m-20 onlydesktop'>
          <Row>
            <Col span={5}>
              <div className='d-flex justify-between xs-mt-40 xs-mr-10'>
                <h3>FILTERS</h3>
                <div className='danger bold'>CLEAR ALL</div>
              </div>
              <div className='xs-mt-20'>
                <FilterProduct />
              </div>
            </Col>
            <Col span={19}>
              <div className='d-flex justify-end'>
                <BreadcrumbComponent />
              </div>
              <div className='d-flex justify-between xs-mt-20'>
                <div className='xs-ml-10'>
                  {['test1', 'test2', 'test4'].map(tag => (
                    <Tag closable className='tag-item'>
                      {tag}
                    </Tag>
                  ))}
                </div>
                <div className='d-flex'>
                  <h3 className='xs-mr-5 d-flex align-center'>SORT BY</h3>
                  <Select className='select-sort'>
                    {sortOptions.map(option => (
                      <Option value={option}>{option}</Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className='d-flex flex-wrap xs-mt-20'>
                {items.map(item => (
                  <div className='tab-content'>
                    <ProductCard
                      productImages={[
                        require('../../assets/images/accessory.jpeg')
                      ]}
                    />
                  </div>
                ))}
              </div>
              <PaginationComponent
                currentPageNumber={currentPageNumber}
                totalProductCount={totalProductCount}
              />
            </Col>
          </Row>
        </div>
        <div className='onlymobile xs-ml-20 xs-mr-20'>
          <div>
            <BreadcrumbComponent />
          </div>
          <div className='d-flex justify-between xs-mt-20 xs-mb-20'>
            <Button type='primary'>FILTER</Button>
            <div className='d-flex'>
              <h3 className='xs-mr-5 d-flex align-center'>SORT BY</h3>
              <Select className='select-sort'>
                {sortOptions.map(option => (
                  <Option value={option}>{option}</Option>
                ))}
              </Select>
            </div>
          </div>
          <div>
            {['test1', 'test2', 'test4'].map(tag => (
              <Tag closable className='tag-item'>
                {tag}
              </Tag>
            ))}
          </div>
          <div className='d-flex flex-wrap xs-mt-20'>
            {items.map(item => (
              <div className='tab-content'>
                <ProductCard
                  productImages={[
                    require('../../assets/images/accessory.jpeg')
                  ]}
                />
              </div>
            ))}
          </div>
          <PaginationComponent
            currentPageNumber={currentPageNumber}
            totalProductCount={totalProductCount}
          />
        </div>
      </div>
    );
  }
}

export default Product;
