import type { Schema, Struct } from '@strapi/strapi';

export interface BidBid extends Struct.ComponentSchema {
  collectionName: 'components_bid_bids';
  info: {
    displayName: 'Bid';
  };
  attributes: {
    amount: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    bid: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CarTypeCarType extends Struct.ComponentSchema {
  collectionName: 'components_car_type_car_types';
  info: {
    description: '';
    displayName: 'Car Type';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      ['sedan', 'minivan', 'pikup', 'crossover', 'big-crossover']
    > &
      Schema.Attribute.Required;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CoefCoef extends Struct.ComponentSchema {
  collectionName: 'components_coef_coefs';
  info: {
    description: '';
    displayName: 'Component:Coefficient';
    icon: 'connector';
  };
  attributes: {
    field: Schema.Attribute.Enumeration<
      [
        'auctionFee',
        'insurance',
        'portDelivery',
        'cityDelivery',
        'seaTransportation',
        'broker',
        'excise',
        'duty',
        'vat',
        'expedition',
        'certification',
        'registration',
        'companyServices',
      ]
    > &
      Schema.Attribute.Required;
    isPercent: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    value: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
  };
}

export interface ElementElement extends Struct.ComponentSchema {
  collectionName: 'components_element_elements';
  info: {
    description: '';
    displayName: 'element';
  };
  attributes: {
    operation: Schema.Attribute.Enumeration<
      [
        '\u043F\u043B\u044E\u0441',
        '\u043C\u0456\u043D\u0443\u0441',
        '\u0434\u0456\u043B\u0435\u043D\u043D\u044F',
        '\u043C\u043D\u043E\u0436\u0435\u043D\u043D\u044F',
      ]
    >;
    value: Schema.Attribute.Enumeration<
      ['\u0440\u0456\u043A', "\u043E\u0431'\u0454\u043C"]
    >;
  };
}

export interface PercentByValuePercentByValue extends Struct.ComponentSchema {
  collectionName: 'components_percent_by_value_percent_by_values';
  info: {
    displayName: 'Percent By Value';
  };
  attributes: {
    percent: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<3>;
    threshold: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface TaxTax extends Struct.ComponentSchema {
  collectionName: 'components_tax_taxes';
  info: {
    description: '';
    displayName: 'Tax';
  };
  attributes: {
    is_percent: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    tax: Schema.Attribute.Decimal & Schema.Attribute.Required;
    threshold: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ValueByAmountValueByAmount extends Struct.ComponentSchema {
  collectionName: 'components_value_by_amount_value_by_amounts';
  info: {
    displayName: 'Value by amount';
  };
  attributes: {
    amount: Schema.Attribute.Decimal & Schema.Attribute.Required;
    max: Schema.Attribute.Decimal & Schema.Attribute.Required;
    min: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bid.bid': BidBid;
      'car-type.car-type': CarTypeCarType;
      'coef.coef': CoefCoef;
      'element.element': ElementElement;
      'percent-by-value.percent-by-value': PercentByValuePercentByValue;
      'tax.tax': TaxTax;
      'value-by-amount.value-by-amount': ValueByAmountValueByAmount;
    }
  }
}
