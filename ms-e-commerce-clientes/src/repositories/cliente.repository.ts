import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Cliente, ClienteRelations, Direccioncliente, Usuariocliente} from '../models';
import {DireccionclienteRepository} from './direccioncliente.repository';
import {UsuarioclienteRepository} from './usuariocliente.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly direccioncliente: HasOneRepositoryFactory<Direccioncliente, typeof Cliente.prototype.id>;

  public readonly Y: HasOneRepositoryFactory<Usuariocliente, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('DireccionclienteRepository') protected direccionclienteRepositoryGetter: Getter<DireccionclienteRepository>, @repository.getter('UsuarioclienteRepository') protected usuarioclienteRepositoryGetter: Getter<UsuarioclienteRepository>,
  ) {
    super(Cliente, dataSource);
    this.Y = this.createHasOneRepositoryFactoryFor('Y', usuarioclienteRepositoryGetter);
    this.registerInclusionResolver('Y', this.Y.inclusionResolver);
    this.direccioncliente = this.createHasOneRepositoryFactoryFor('direccioncliente', direccionclienteRepositoryGetter);
    this.registerInclusionResolver('direccioncliente', this.direccioncliente.inclusionResolver);
  }
}
