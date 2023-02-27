import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Direccioncliente, DireccionclienteRelations} from '../models';

export class DireccionclienteRepository extends DefaultCrudRepository<
  Direccioncliente,
  typeof Direccioncliente.prototype.id,
  DireccionclienteRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Direccioncliente, dataSource);
  }
}
