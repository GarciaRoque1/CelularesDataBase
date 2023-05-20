import { iContext } from '../../index';
import { iCelulares} from '../../types/interfaces/celular';
import { getFields } from '../../utils/getFields';

export const celulares = async (
  parent: any,
  args: any,
  { db }: iContext,
  info: any
): Promise<iCelulares[]> => {
  const fields = getFields(info, 'celulares');

//se hace a entender que se buscara la tabla de celulares para iniciar la relacion de datos
  const celularFields1 = fields.include.find(
    (cel) => cel.name === 'precios'
  );

  const celularFields2 = fields.include.find(
    (cel) => cel.name === 'modelos'
  );

  const celular = (await db.sequelize.models.Celular.findAll({
    //recorremos las tablas cuando escribamos primero el query en myslq
    attributes: fields.attributes,

    include: [
      {
        //ademas extraemos los datos de la tabla de celulares
        attributes: celularFields1 ? celularFields1.attributes : [],
        model: db.sequelize.models.Precio,
        as: 'precio'
      },
      {
        attributes: celularFields2 ? celularFields2.attributes : [],
        model: db.sequelize.models.Modelo,
        as: 'modelo'
      }
    ]
  })) as unknown as iCelulares[]; //guardamos todo como el tipo de dato de celular

  return celular;
};
