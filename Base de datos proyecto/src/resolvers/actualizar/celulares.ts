import { iContext } from "index"

export const updcelulares = async (
	parent: any,
	args: {
		idcelulares: number
		input: {
			telefono: string ,fk_precios: number, fk_modelos: number
		}
	},
	{ db }: iContext,
	info: any
) => {
	const updcelular = await db.sequelize.models.Celular.findByPk(args.idcelulares)

	if (!updcelular) {
		throw new Error('La id puesta no se encuentra en el registro')
	} else {
		return await updcelular.update(args.input)
	}
}