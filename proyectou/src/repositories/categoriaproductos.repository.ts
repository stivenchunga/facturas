import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Categoriaproductos, CategoriaproductosRelations} from '../models';

export class CategoriaproductosRepository extends DefaultCrudRepository<
  Categoriaproductos,
  typeof Categoriaproductos.prototype.id,
  CategoriaproductosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Categoriaproductos, dataSource);
  }
}
