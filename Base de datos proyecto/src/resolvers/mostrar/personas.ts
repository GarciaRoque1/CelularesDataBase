import { iContext } from 'index';
import { iPersonas } from '../../types/interfaces/persona';
import { getFields } from '../../utils/getFields';

export const personas = async (
  parent: any,
  args: any,
  { db }: iContext,
  info: any
): Promise<iPersonas[]> => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const fields = getFields(info, 'personas');

  const personas = (await db.sequelize.models.Persona.findAll({
    attributes: fields.attributes,
  })) as unknown as iPersonas[];

  return personas;
};
