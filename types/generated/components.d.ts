import type { Schema, Struct } from '@strapi/strapi';

export interface CarTypeCarType extends Struct.ComponentSchema {
  collectionName: 'components_car_type_car_types';
  info: {
    description: '';
    displayName: 'Car Type';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
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

export interface TaxTax extends Struct.ComponentSchema {
  collectionName: 'components_tax_taxes';
  info: {
    description: '';
    displayName: 'Tax';
  };
  attributes: {
    tax: Schema.Attribute.Decimal & Schema.Attribute.Required;
    threshold: Schema.Attribute.BigInteger & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'car-type.car-type': CarTypeCarType;
      'tax.tax': TaxTax;
    }
  }
}
