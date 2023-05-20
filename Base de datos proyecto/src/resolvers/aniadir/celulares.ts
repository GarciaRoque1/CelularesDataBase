import { iContext } from 'index';
import { iCelulares } from '../../types/interfaces/celular';

export const addcelulares = async (
  parent: any,
  args: {input: {telefono: string, fk_precios: number, fk_modelos: number}},
  { db }: iContext,
  info: any
) => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const addcelular: iCelulares = (await db.sequelize.models.Celular.create({
		telefono: args.input.telefono,
    fk_precios: args.input.fk_precios,
    fk_modelos: args.input.fk_modelos
	})) as any
  return addcelular
};