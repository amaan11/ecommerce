import React, { Component } from 'react';
import {
  MenuOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  HeartOutlined,
  CloseOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Drawer, Input, Modal, Menu, Dropdown } from 'antd';
import { get } from 'lodash';
import Login from './Login';
import Signup from './Signup';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchInputOpen: false,
      isDrawerOpen: false,
      modal: false,
      modalContent: 'login',
      selectedCategory: ''
    };
  }
  handleDrawer = () => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  };
  handleSearchInput = () => {
    this.setState({
      isSearchInputOpen: !this.state.isSearchInputOpen
    });
  };
  modalHandler = () => {
    this.setState({
      modal: !this.state.modal,
      modalContent: 'login'
    });
  };
  handleModalContent = value => {
    this.setState({
      modalContent: value
    });
  };
  handleCategoryType = key => {
    this.setState({
      selectedCategory: key
    });
  };

  getProfileMenu = () => (
    <Menu>
      <Menu.Item>
        <Link to=''>Orders</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to=''>Wishlist</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to=''>Coupons</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to=''>Edit Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <span onClick={this.props.logoutHandler}>Logout</span>
      </Menu.Item>
    </Menu>
  );
  getCategoryMenu = () => {
    const { categories } = this.props;

    if (Object.keys(categories).length > 0) {
      return (
        <Menu>
          {Object.keys(categories).map(element => (
            <Menu.ItemGroup title={element}>
              {categories[element].length > 0 &&
                categories[element].map(subCategory => (
                  <Menu.Item>{subCategory.name}</Menu.Item>
                ))}
            </Menu.ItemGroup>
          ))}
        </Menu>
      );
    } else {
      // <Menu>
      //     {Object.keys(categories).map(element => (
      //       <Menu.ItemGroup title={element}>
      //         {categories[element].length > 0 &&
      //           categories[element].map(subCategory => (
      //             <Menu.Item>{subCategory.name}</Menu.Item>
      //           ))}
      //       </Menu.ItemGroup>
      //     ))}
      //   </Menu>
    }
  };

  render() {
    const { isDrawerOpen, isSearchInputOpen, modal, modalContent } = this.state;

    const menu = this.getProfileMenu();
    const categoryMenu = this.getCategoryMenu();
    console.log('categoryMenu', categoryMenu);
    const { currentUser } = this.props;
    return (
      <div className='d-flex justify-between xs-m-20'>
        <div className='d-flex justify-between'>
          <MenuOutlined
            className='font-24 xs-mr-10 xs-mt-5'
            onClick={this.handleDrawer}
          />
          {!isSearchInputOpen && <div className='heading '>E-Commerce</div>}
          <div className='d-flex onlydesktop xs-ml-40 xs-mt-5'>
            <Dropdown
              overlay={categoryMenu}
              onMouseEnter={() => {
                this.handleCategoryType('men');
              }}
            >
              <div className='font-16 xs-mr-20'>MEN</div>
            </Dropdown>
            <Dropdown
              overlay={menu}
              onMouseEnter={() => {
                this.handleCategoryType('women');
              }}
            >
              <div className='font-16 xs-mr-20'>WOMEN</div>
            </Dropdown>
            <Dropdown
              overlay={menu}
              onMouseEnter={() => {
                this.handleCategoryType('kid');
              }}
            >
              <div className='font-16'>KIDS</div>
            </Dropdown>
          </div>
        </div>

        <div className='d-flex'>
          <div className='onlydesktop'>
            <Input
              size='medium'
              placeholder='Search'
              prefix={<SearchOutlined />}
            />
          </div>

          {isSearchInputOpen ? (
            <Input
              placeholder='Search'
              suffix={<CloseOutlined onClick={this.handleSearchInput} />}
            />
          ) : (
            <div className='d-flex'>
              {Object.keys(currentUser).length == 0 && (
                <div
                  className='onlydesktop xs-ml-20 xs-mr-20 xs-mt-5 login-text'
                  onClick={this.modalHandler}
                >
                  LOGIN
                </div>
              )}
              <SearchOutlined
                className='onlymobile font-24 xs-mt-5 xs-mr-10'
                onClick={this.handleSearchInput}
              />
              {Object.keys(currentUser).length > 0 && (
                <Dropdown overlay={menu}>
                  <UserOutlined className='onlydesktop font-24 xs-mr-10 xs-mt-5 xs-ml-10' />
                </Dropdown>
              )}
              {Object.keys(currentUser).length > 0 && (
                <React.Fragment>
                  <HeartOutlined className='font-24 xs-mr-10 xs-mt-5' />
                  <ShoppingCartOutlined className='font-24 xs-mt-5' />
                </React.Fragment>
              )}
            </div>
          )}
        </div>
        <Modal
          visible={modal}
          title={
            modalContent === 'login' ? (
              <p className='text-center bold'>LOGIN</p>
            ) : (
              <p className='text-center bold'>SIGNUP</p>
            )
          }
          onCancel={this.modalHandler}
          footer=''
        >
          {modalContent === 'login' ? (
            <Login
              handleModalContent={value => this.handleModalContent(value)}
              closeModal={this.modalHandler}
            />
          ) : (
            <Signup
              handleModalContent={value => this.handleModalContent(value)}
              closeModal={this.modalHandler}
            />
          )}
        </Modal>
        {/* <Drawer
          title={
            <div className='d-flex' onClick={this.handleDrawer}>
              <div>
                <LeftOutlined style={styles.icon} />
              </div>
              <div style={styles.backText}>Back</div>
            </div>
          }
          placement='left'
          closable={false}
          onClose={this.handleDrawer}
          visible={isDrawerOpen}
        >
          <div
            className='d-flex align-center justify-between'
            onMouseEnter={() => {
              this.setState({ test: true });
            }}
            onMouseLeave={() => {
              this.setState({ test: false });
            }}
          >
            <div className='font-16'>CLOTHING</div>
            <RightOutlined className='font-16' />
          </div>
        </Drawer> */}
      </div>
    );
  }
}

export default Header;
