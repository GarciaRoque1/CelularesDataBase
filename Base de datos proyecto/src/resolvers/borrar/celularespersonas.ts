import { iContext } from 'index';

export const delcelularespersonas = async (
  parent: any,
  args: {idcelularpersona: number},
  { db }: iContext,
  info: any
) => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const delcelularespe = await db.sequelize.models.CelularPersona.findByPk(args.idcelularpersona)
  if(!delcelularespe){
    throw new Error('La id puesta no se encuentra en el registro')
  }else{
    return delcelularespe.destroy()
  }
  
};
