import {Entity, model, property, hasOne} from '@loopback/repository';
import {Direccioncliente} from './direccioncliente.model';
import {Usuariocliente} from './usuariocliente.model';

@model()
export class Cliente extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'number',
    default: 1,
  })
  estado?: number;

  @hasOne(() => Direccioncliente, {keyTo: 'id_cliente'})
  direccioncliente: Direccioncliente;

  @hasOne(() => Usuariocliente, {keyTo: 'id_cliente'})
  Y: Usuariocliente;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
