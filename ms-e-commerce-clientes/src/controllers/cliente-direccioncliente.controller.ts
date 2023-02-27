import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Cliente,
  Direccioncliente,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteDireccionclienteController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/direccioncliente', {
    responses: {
      '200': {
        description: 'Cliente has one Direccioncliente',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Direccioncliente),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Direccioncliente>,
  ): Promise<Direccioncliente> {
    return this.clienteRepository.direccioncliente(id).get(filter);
  }

  @post('/clientes/{id}/direccioncliente', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Direccioncliente)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Cliente.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Direccioncliente, {
            title: 'NewDireccionclienteInCliente',
            exclude: ['id'],
            optional: ['id_cliente']
          }),
        },
      },
    }) direccioncliente: Omit<Direccioncliente, 'id'>,
  ): Promise<Direccioncliente> {
    return this.clienteRepository.direccioncliente(id).create(direccioncliente);
  }

  @patch('/clientes/{id}/direccioncliente', {
    responses: {
      '200': {
        description: 'Cliente.Direccioncliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Direccioncliente, {partial: true}),
        },
      },
    })
    direccioncliente: Partial<Direccioncliente>,
    @param.query.object('where', getWhereSchemaFor(Direccioncliente)) where?: Where<Direccioncliente>,
  ): Promise<Count> {
    return this.clienteRepository.direccioncliente(id).patch(direccioncliente, where);
  }

  @del('/clientes/{id}/direccioncliente', {
    responses: {
      '200': {
        description: 'Cliente.Direccioncliente DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Direccioncliente)) where?: Where<Direccioncliente>,
  ): Promise<Count> {
    return this.clienteRepository.direccioncliente(id).delete(where);
  }
}
