import { iContext } from 'index';
import { iPrecios } from '../../types/interfaces/precio';
import { getFields } from '../../utils/getFields';

export const precios = async (
  parent: any,
  args: any,
  { db }: iContext,
  info: any
): Promise<iPrecios[]> => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const fields = getFields(info, 'precios');

  const precio = (await db.sequelize.models.Precio.findAll({
    attributes: fields.attributes,
  })) as unknown as iPrecios[];

  return precio;
};