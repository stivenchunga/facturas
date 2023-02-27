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
  Usuariocliente,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteUsuarioclienteController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/usuariocliente', {
    responses: {
      '200': {
        description: 'Cliente has one Usuariocliente',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Usuariocliente),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Usuariocliente>,
  ): Promise<Usuariocliente> {
    return this.clienteRepository.Y(id).get(filter);
  }

  @post('/clientes/{id}/usuariocliente', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Usuariocliente)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Cliente.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuariocliente, {
            title: 'NewUsuarioclienteInCliente',
            exclude: ['id'],
            optional: ['id_cliente']
          }),
        },
      },
    }) usuariocliente: Omit<Usuariocliente, 'id'>,
  ): Promise<Usuariocliente> {
    return this.clienteRepository.Y(id).create(usuariocliente);
  }

  @patch('/clientes/{id}/usuariocliente', {
    responses: {
      '200': {
        description: 'Cliente.Usuariocliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuariocliente, {partial: true}),
        },
      },
    })
    usuariocliente: Partial<Usuariocliente>,
    @param.query.object('where', getWhereSchemaFor(Usuariocliente)) where?: Where<Usuariocliente>,
  ): Promise<Count> {
    return this.clienteRepository.Y(id).patch(usuariocliente, where);
  }

  @del('/clientes/{id}/usuariocliente', {
    responses: {
      '200': {
        description: 'Cliente.Usuariocliente DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Usuariocliente)) where?: Where<Usuariocliente>,
  ): Promise<Count> {
    return this.clienteRepository.Y(id).delete(where);
  }
}
