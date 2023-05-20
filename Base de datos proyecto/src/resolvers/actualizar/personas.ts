import { iContext } from "index"

export const updpersonas = async (
	parent: any,
	args: {
		idpersonas: number
		input: {
			nombre: string
		}
	},
	{ db }: iContext,
	info: any
) => {
	const updpersona = await db.sequelize.models.Persona.findByPk(args.idpersonas)

	if (!updpersona) {
		throw new Error('La id puesta no se encuentra en el registro')
	} else {
		return await updpersona.update(args.input)
	}
}