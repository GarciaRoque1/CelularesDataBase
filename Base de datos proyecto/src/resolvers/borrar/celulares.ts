import { iContext } from 'index';

export const delcelulares = async (
  parent: any,
  args: {idcelulares: number},
  { db }: iContext,
  info: any
) => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const delcelular = await db.sequelize.models.Celular.findByPk(args.idcelulares)
  if(!delcelular){
    throw new Error('La id puesta no se encuentra en el registro')
  }else{
    return delcelular.destroy()
  }
  
};