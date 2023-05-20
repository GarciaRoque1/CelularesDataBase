import { iPersonas } from 'types/interfaces/persona';
import {
  Column,
  AutoIncrement,
  PrimaryKey,
  Model,
  Table,
  DataType
} from 'sequelize-typescript';

@Table({ tableName: 'personas', timestamps: false })
export default class Persona extends Model<iPersonas> {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.NUMBER, allowNull: false })
  idpersonas: number;
  @Column({ type: DataType.STRING, allowNull: false })
  nombre: string;

}
