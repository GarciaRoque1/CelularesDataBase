import { iContext } from 'index';
import { iPersonas } from '../../types/interfaces/persona';

export const addpersonas = async (
  parent: any,
  args: {input: {nombre: string}},
  { db }: iContext,
  info: any
) => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const addpersona: iPersonas = (await db.sequelize.models.Persona.create({
		nombre: args.input.nombre
	})) as any
  return addpersona
};
