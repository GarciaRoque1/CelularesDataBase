import {
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Model,
  Table,
  ForeignKey,
  HasOne
} from 'sequelize-typescript';
import Precio from './precio';
import Modelo from './modelo'
import { iCelulares } from 'types/interfaces/celular';

@Table({ tableName: 'celulares', timestamps: false })
export default class Celular extends Model<iCelulares> {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.NUMBER, allowNull: false })
  idcelulares: number;
  @Column({ type: DataType.STRING, defaultValue: '', allowNull: true })
  telefono: string;
  
  @Column({ type: DataType.STRING, allowNull: false })
  @ForeignKey(() => Precio)
  @Column({ field: 'fk_precios' })
  fk_precios: number;
  
  @HasOne(() => Precio, { foreignKey: 'idprecios', sourceKey: 'fk_precios' })
  precio: Precio;

  @Column({ type: DataType.STRING, allowNull: false })
  @ForeignKey(() => Modelo)
  @Column({ field: 'fk_modelos' })
  fk_modelos: number;
  
  @HasOne(() => Modelo, { foreignKey: 'idmodelos', sourceKey: 'fk_modelos' })
  modelo: Modelo;
}
