import { iContext } from 'index';
import { iModelos } from '../../types/interfaces/modelo';
import { getFields } from '../../utils/getFields';

export const modelos = async (
  parent: any,
  args: any,
  { db }: iContext,
  info: any
): Promise<iModelos[]> => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const fields = getFields(info, 'modelos');
  //recorremos las tablas cuando escribamos primero el query en myslq
  const modelo = await db.sequelize.models.Modelo.findAll({
    attributes: fields.attributes,
  }) as unknown as iModelos[];

  return modelo;
};