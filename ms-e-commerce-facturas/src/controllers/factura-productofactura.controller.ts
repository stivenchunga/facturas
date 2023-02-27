import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody
} from '@loopback/rest';
import {
  Factura,
  Productofactura
} from '../models';
import {FacturaRepository} from '../repositories';

export class FacturaProductofacturaController {
  constructor(
    @repository(FacturaRepository) protected facturaRepository: FacturaRepository,
  ) { }

  @get('/facturas/{id}/productofacturas', {
    responses: {
      '200': {
        description: 'Array of Factura has many Productofactura',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Productofactura)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Productofactura>,
  ): Promise<Productofactura[]> {
    return this.facturaRepository.tiene(id).find(filter);
  }

  @post('/facturas/{id}/productofacturas', {
    responses: {
      '200': {
        description: 'Factura model instance',
        content: {'application/json': {schema: getModelSchemaRef(Productofactura)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Factura.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productofactura, {
            title: 'NewProductofacturaInFactura',
            exclude: ['id'],
            optional: []
          }),
        },
      },
    }) productofactura: Omit<Productofactura, 'id'>,
  ): Promise<Productofactura> {
    return this.facturaRepository.tiene(id).create(productofactura);
  }

  @patch('/facturas/{id}/productofacturas', {
    responses: {
      '200': {
        description: 'Factura.Productofactura PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productofactura, {partial: true}),
        },
      },
    })
    productofactura: Partial<Productofactura>,
    @param.query.object('where', getWhereSchemaFor(Productofactura)) where?: Where<Productofactura>,
  ): Promise<Count> {
    return this.facturaRepository.tiene(id).patch(productofactura, where);
  }

  @del('/facturas/{id}/productofacturas', {
    responses: {
      '200': {
        description: 'Factura.Productofactura DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Productofactura)) where?: Where<Productofactura>,
  ): Promise<Count> {
    return this.facturaRepository.tiene(id).delete(where);
  }
}
