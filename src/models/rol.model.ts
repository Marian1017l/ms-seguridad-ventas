import {Entity, hasMany, model, property} from '@loopback/repository';
import {Menu} from './menu.model';
import {RolMenu} from './rol-menu.model';
import {Usuario} from './usuario.model';

@model()
export class Rol extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @hasMany(() => Menu, {through: {model: () => RolMenu}})
  menus: Menu[];

  constructor(data?: Partial<Rol>) {
    super(data);
  }
  @hasMany(() => Usuario)
  usuarios: Usuario[];
}

export interface RolRelations {
  // describe navigational properties here
}

export type RolWithRelations = Rol & RolRelations;
