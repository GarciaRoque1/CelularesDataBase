import { iContext } from 'index';

export const delpersonas = async (
  parent: any,
  args: {idpersonas: number},
  { db }: iContext,
  info: any
) => {
  //se extraen los datos de la tabla, el segundo argumento es el nombre de la tabla de la carpeta models
  const delpersona = await db.sequelize.models.Persona.findByPk(args.idpersonas)
  if(!delpersona){
    throw new Error('La id puesta no se encuentra en el registro')
  }else{
    return delpersona.destroy()
  }
  
};
