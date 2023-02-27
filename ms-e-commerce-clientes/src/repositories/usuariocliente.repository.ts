import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Usuariocliente, UsuarioclienteRelations} from '../models';

export class UsuarioclienteRepository extends DefaultCrudRepository<
  Usuariocliente,
  typeof Usuariocliente.prototype.id,
  UsuarioclienteRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Usuariocliente, dataSource);
  }
}
