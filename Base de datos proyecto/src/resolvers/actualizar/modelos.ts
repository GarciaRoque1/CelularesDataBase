import { iContext } from "index"

export const updmodelos = async (
	parent: any,
	args: {
		idmodelos: number
		input: {
			modelo: string
		}
	},
	{ db }: iContext,
	info: any
) => {
	const updmodelo = await db.sequelize.models.Modelo.findByPk(args.idmodelos)

	if (!updmodelo) {
		throw new Error('La id puesta no se encuentra en el registro')
	} else {
		return await updmodelo.update(args.input)
	}
}