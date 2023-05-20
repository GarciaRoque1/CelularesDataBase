import { iModelos } from 'types/interfaces/modelo';
import {
  Column,
  AutoIncrement,
  PrimaryKey,
  Model,
  Table,
  DataType
} from 'sequelize-typescript';

@Table({ tableName: 'modelos', timestamps: false })
export default class Modelo extends Model<iModelos> {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.NUMBER, allowNull: false })
  idmodelos: number;
  @Column({ type: DataType.STRING, allowNull: false })
  modelo: string;

}
