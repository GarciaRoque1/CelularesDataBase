import { iContext } from "index"

export const updprecios = async (
	parent: any,
	args: {
		idprecios: number
		input: {
			precio: number
		}
	},
	{ db }: iContext,
	info: any
) => {
	const updprecio = await db.sequelize.models.Precio.findByPk(args.idprecios)

	if (!updprecio) {
		throw new Error('La id puesta no se encuentra en el registro')
	} else {
		return await updprecio.update(args.input)
	}
}