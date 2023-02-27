import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Productofactura, ProductofacturaRelations, Factura} from '../models';
import {FacturaRepository} from './factura.repository';

export class ProductofacturaRepository extends DefaultCrudRepository<
  Productofactura,
  typeof Productofactura.prototype.id,
  ProductofacturaRelations
> {

  public readonly pertenece_a: BelongsToAccessor<Factura, typeof Productofactura.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('FacturaRepository') protected facturaRepositoryGetter: Getter<FacturaRepository>,
  ) {
    super(Productofactura, dataSource);
    this.pertenece_a = this.createBelongsToAccessorFor('pertenece_a', facturaRepositoryGetter,);
    this.registerInclusionResolver('pertenece_a', this.pertenece_a.inclusionResolver);
  }
}
