import { iContext } from 'index';
import { iPrecios } from '../../types/interfaces/precio';

export const addprecios = async (
  parent: any,
  args: {input: {precio: number}},
  { db }: iContext,
  info: any
) => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const addprecio: iPrecios = (await db.sequelize.models.Precio.create({
		precio: args.input.precio
	})) as any
  return addprecio
};