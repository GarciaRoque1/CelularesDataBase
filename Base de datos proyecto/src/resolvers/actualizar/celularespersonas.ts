import { iContext } from "index"

export const updcelularespersonas = async (
	parent: any,
	args: {
		idcelularpersona: number
		input: {
			fk_personas: number, fk_celulares: number
		}
	},
	{ db }: iContext,
	info: any
) => {
	const updcelularpe = await db.sequelize.models.CelularPersona.findByPk(args.idcelularpersona)

	if (!updcelularpe) {
		throw new Error('La id puesta no se encuentra en el registro')
	} else {
		return await updcelularpe.update(args.input)
	}
}