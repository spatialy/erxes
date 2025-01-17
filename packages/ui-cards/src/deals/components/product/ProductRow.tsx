import { RemoveRow, TypeBox } from '../../styles';

import { FlexContent } from '@erxes/ui-log/src/activityLogs/styles';
import { IProductData } from '../../types';
import Icon from '@erxes/ui/src/components/Icon';
import React from 'react';
import Tip from '@erxes/ui/src/components/Tip';
import { __ } from '@erxes/ui/src/utils';

type Props = {
  productData: IProductData;
  children: React.ReactNode;
  activeProduct?: string;
  onRemove: () => void;
  changeCurrentProduct: (productId: string) => void;
};

function ProductRow(props: Props) {
  const renderAmmount = (value: number) => {
    if (!value || value === 0) {
      return '-';
    }

    return (
      <>
        {value.toLocaleString()} <strong>{props.productData.currency}</strong>
      </>
    );
  };

  const renderType = (type: string) => {
    if (!type) {
      return (
        <Tip text={__('Unknown')} placement="left">
          <TypeBox color="#AAAEB3">
            <Icon icon="folder-2" />
          </TypeBox>
        </Tip>
      );
    }

    if (type === 'product') {
      return (
        <Tip text={__('Product')} placement="left">
          <TypeBox color="#3B85F4">
            <Icon icon="box" />
          </TypeBox>
        </Tip>
      );
    }

    return (
      <Tip text={__('Service')} placement="left">
        <TypeBox color="#EA475D">
          <Icon icon="invoice" />
        </TypeBox>
      </Tip>
    );
  };

  const {
    product,
    quantity,
    unitPrice,
    discount,
    tax,
    amount,
    uom,
    _id
  } = props.productData;
  const id = product ? product._id : _id;

  const changeCurrent = () => props.changeCurrentProduct(id);

  return (
    <>
      <tr
        id={id}
        className={props.activeProduct === id ? 'active' : ''}
        onClick={changeCurrent}
      >
        <td>
          <FlexContent>
            {renderType(product ? product.type : '')}
            {product ? product.name : __('Not selected')}
          </FlexContent>
        </td>
        <td>
          {quantity} <strong>{uom}</strong>
        </td>
        <td>{renderAmmount(unitPrice)}</td>
        <td>{renderAmmount(discount)}</td>
        <td>{renderAmmount(tax)}</td>
        <td>{renderAmmount(amount)}</td>
        <td>
          <RemoveRow>
            <Icon onClick={props.onRemove} icon="times-circle" />
          </RemoveRow>
        </td>
      </tr>
      {props.children && (
        <tr className="active">
          <td colSpan={7}>{props.children}</td>
        </tr>
      )}
    </>
  );
}

export default ProductRow;
