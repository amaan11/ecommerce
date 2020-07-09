import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ShoppingCartOutlined,
  HeartFilled,
  EyeFilled
} from '@ant-design/icons';
import { Tooltip, Rate } from 'antd';

const ProductCard = ({
  productImages,
  isNewProduct,
  cartHandler,
  viewDetailHandler,
  wishlistHandler,
  rating,
  productColorOptions
}) => {
  const [isIconVisible, setVisble] = useState(false);
  const [imageIndex, setIndex] = useState(0);

  const visibleHandler = () => {
    setVisble(!isIconVisible);
  };
  return (
    <div className='xs-mr-10 xs-ml-10 xs-mb-20'>
      <div
        className='product-div'
        onMouseEnter={visibleHandler}
        onMouseLeave={visibleHandler}
      >
        {productImages.map(
          (image, index) =>
            index == imageIndex && <img className='product-image' src={image} />
        )}

        <div className='new-div d-flex justify-center align-center'>NEW</div>
        <div>
          {productImages.map((image, index) => (
            <img
              src={image}
              onClick={() => {
                setIndex(index);
              }}
              className={`product-option-image ${
                imageIndex == index ? 'transaparent' : 'blur'
              }`}
              style={{
                position: 'absolute',
                left: 0,
                bottom: index * 50
              }}
            />
          ))}
        </div>
        {isIconVisible && (
          <div>
            <Tooltip title='Add To Cart' placement='left'>
              <ShoppingCartOutlined className='font-24 product-icon cart-icon' />
            </Tooltip>
            <Tooltip title='Add To Wishlist' placement='left'>
              <HeartFilled className='font-24 product-icon wishlist-icon' />
            </Tooltip>
            <Tooltip title='View Details' placement='left'>
              <EyeFilled className='font-24 product-icon view-icon' />
            </Tooltip>
          </div>
        )}
      </div>
      <Rate disabled defaultValue={rating} className='xs-mt-10' />
      <div className='font-24 gray'>Pocket T-Shirt</div>
      <h3>$200</h3>
      {/* <div className='d-flex'>
        {productColorOptions &&
          productColorOptions.length > 0 &&
          productColorOptions.map((color, index) => (
            <div
              className='color-div xs-mr-10'
              style={{ background: color }}
              onClick={() => {
                setIndex(index);
              }}
            ></div>
          ))}
      </div> */}
    </div>
  );
};

ProductCard.propTypes = {
  productImages: PropTypes.array.isRequired,
  isNewProduct: PropTypes.bool,
  cartHandler: PropTypes.func.isRequired,
  wishlistHandler: PropTypes.func.isRequired,
  viewDetailHandler: PropTypes.func.isRequired
  //   productColorOptions: PropTypes.array.isRequired
};
ProductCard.defaultProps = {
  isNewProduct: false
};
export default ProductCard;
