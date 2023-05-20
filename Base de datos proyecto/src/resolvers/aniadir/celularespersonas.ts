import { iContext } from 'index';
import { getFields } from "../../utils/getFields"
import { iCelularPersona } from '../../types/interfaces/celularpersona';

export const addcelularespersonas = async (
  parent: any,
  args: { input: { fk_personas: number, fk_celulares: number } },
  { db }: iContext,
  info: any
) => {
  const { fk_personas, fk_celulares } = args.input;

  const addcelularpersona= await db.sequelize.models.CelularPersona.create({
    fk_personas,
    fk_celulares
  });

  console.log(addcelularpersona);
  return addcelularpersona;
};
