import {
    Column,
    AutoIncrement,
    PrimaryKey,
    Model,
    Table,
    DataType,
    ForeignKey,
    HasOne
  } from 'sequelize-typescript';
  import Celular from './celular';
  import Persona from './persona'
  import { iCelularPersona } from 'types/interfaces/celularpersona';
  
  @Table({ tableName: 'celularespersonas', timestamps: false })
  export default class CelularPersona extends Model<iCelularPersona> {

    @AutoIncrement
    @PrimaryKey
    @Column({ type: DataType.INTEGER, allowNull: false })
    idcelularpersona?: number;

    @Column({ type: DataType.STRING, allowNull: false, field: 'fk_personas' })
    @ForeignKey(() => Persona)
    fk_personas: number;
    
    @HasOne(() => Persona, { foreignKey: 'idpersonas', sourceKey: 'fk_personas' })
    personas: Persona;

    @Column({ type: DataType.STRING, allowNull: false, field: 'fk_celulares' })
    @ForeignKey(() => Celular)
    fk_celulares: number;
    
    @HasOne(() => Celular, { foreignKey: 'idcelulares', sourceKey: 'fk_celulares' })
    celulares: Celular;
  }
  