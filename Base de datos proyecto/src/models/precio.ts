import { iPrecios } from 'types/interfaces/precio';
import {
  Column,
  AutoIncrement,
  PrimaryKey,
  Model,
  Table,
  DataType
} from 'sequelize-typescript';

@Table({ tableName: 'precios', timestamps: false })
export default class Precio extends Model<iPrecios> {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.NUMBER, allowNull: false })
  idprecios: number;
  @Column({ type: DataType.NUMBER, allowNull: false })
  precio: number;

}
