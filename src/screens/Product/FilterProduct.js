import React from 'react';
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

const FilterProduct = () => {
  return (
    <React.Fragment>
      <Collapse defaultActiveKey={['1']}>
        <Panel header={<h3>DISCOUNT</h3>} key='1'>
          <div>
            <Checkbox onChange=''>Checkbox</Checkbox>
          </div>
          <div>
            <Checkbox onChange=''>Checkbox</Checkbox>
          </div>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={['1']}>
        <Panel header={<h3>PRICE</h3>} key='1'>
          <div>
            <Checkbox onChange=''>Checkbox</Checkbox>
          </div>
          <div>
            <Checkbox onChange=''>Checkbox</Checkbox>
          </div>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={['1']}>
        <Panel header={<h3>Discount</h3>} key='1'>
          <div>
            <Checkbox onChange=''>Checkbox</Checkbox>
          </div>
          <div>
            <Checkbox onChange=''>Checkbox</Checkbox>
          </div>
        </Panel>
      </Collapse>
    </React.Fragment>
  );
};

export default FilterProduct;
