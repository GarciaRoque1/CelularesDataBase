import { iContext } from 'index';

export const addmodelos = async (
  parent: any,
  args: {input: {modelo: string}},
  { db }: iContext,
  info: any
) => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const addmodelo= await db.sequelize.models.Modelo.create({
		modelo: args.input.modelo
	}) as any
  return addmodelo
};