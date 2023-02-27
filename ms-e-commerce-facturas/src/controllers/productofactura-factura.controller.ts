import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Productofactura,
  Factura,
} from '../models';
import {ProductofacturaRepository} from '../repositories';

export class ProductofacturaFacturaController {
  constructor(
    @repository(ProductofacturaRepository)
    public productofacturaRepository: ProductofacturaRepository,
  ) { }

  @get('/productofacturas/{id}/factura', {
    responses: {
      '200': {
        description: 'Factura belonging to Productofactura',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Factura)},
          },
        },
      },
    },
  })
  async getFactura(
    @param.path.number('id') id: typeof Productofactura.prototype.id,
  ): Promise<Factura> {
    return this.productofacturaRepository.pertenece_a(id);
  }
}
