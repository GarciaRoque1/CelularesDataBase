import { iContext } from 'index';

export const delprecios = async (
  parent: any,
  args: {idprecios: number},
  { db }: iContext,
  info: any
) => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const delprecio = await db.sequelize.models.Precio.findByPk(args.idprecios)
  if(!delprecio){
    throw new Error('La id puesta no se encuentra en el registro')
  }else{
    return delprecio.destroy()
  }
  
};