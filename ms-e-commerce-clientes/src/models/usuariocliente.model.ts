/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuariocliente extends Entity {
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
  usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'number',
  })
  id_cliente?: number;

  constructor(data?: Partial<Usuariocliente>) {
    super(data);
  }
}

export interface UsuarioclienteRelations {
  // describe navigational properties here
}

export type UsuarioclienteWithRelations = Usuariocliente & UsuarioclienteRelations;
