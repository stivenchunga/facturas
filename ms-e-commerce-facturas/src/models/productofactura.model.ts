/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Factura} from './factura.model';

@model()
export class Productofactura extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  precio_unitario: number;

  @property({
    type: 'number',
    required: true,
  })
  id_producto: number;

  @belongsTo(() => Factura, {name: 'pertenece_a'})
  id_factura: number;

  constructor(data?: Partial<Productofactura>) {
    super(data);
  }
}

export interface ProductofacturaRelations {
  // describe navigational properties here
}

export type ProductofacturaWithRelations = Productofactura & ProductofacturaRelations;
