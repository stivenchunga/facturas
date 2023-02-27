import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Factura, FacturaRelations, Productofactura} from '../models';
import {ProductofacturaRepository} from './productofactura.repository';

export class FacturaRepository extends DefaultCrudRepository<
  Factura,
  typeof Factura.prototype.id,
  FacturaRelations
> {

  public readonly tiene: HasManyRepositoryFactory<Productofactura, typeof Factura.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ProductofacturaRepository') protected productofacturaRepositoryGetter: Getter<ProductofacturaRepository>,
  ) {
    super(Factura, dataSource);
    this.tiene = this.createHasManyRepositoryFactoryFor('tiene', productofacturaRepositoryGetter,);
    this.registerInclusionResolver('tiene', this.tiene.inclusionResolver);
  }
}
