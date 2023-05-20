import { iContext } from 'index';

export const delmodelos = async (
  parent: any,
  args: {idmodelos: number},
  { db }: iContext,
  info: any
) => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const delmodelo = await db.sequelize.models.Modelo.findByPk(args.idmodelos)
  if(!delmodelo){
    throw new Error('La id puesta no se encuentra en el registro')
  }else{
    return delmodelo.destroy()
  }
  
};