import {Entity, model, property} from '@loopback/repository';

@model()
export class Direccioncliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomenclatura: string;

  @property({
    type: 'string',
    required: true,
  })
  numero: string;

  @property({
    type: 'number',

  })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  id_cliente?: number;
  constructor(data?: Partial<Direccioncliente>) {
    super(data);
  }
}

export interface DireccionclienteRelations {
  // describe navigational properties here
}

export type DireccionclienteWithRelations = Direccioncliente & DireccionclienteRelations;
