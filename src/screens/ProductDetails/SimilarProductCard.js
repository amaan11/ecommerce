import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const SimilarProductCard = () => (
  <Card
    className='similar-product-card xs-mr-20 xs-mb-20'
    hoverable
    cover={
      <img
        alt='example'
        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
      />
    }
  >
    <Meta title='Europe Street beat' description='www.instagram.com' />
  </Card>
);

export default SimilarProductCard;
