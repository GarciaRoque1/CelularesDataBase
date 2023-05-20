import { iContext } from "index"
import { iFieldSelection } from "../../utils/getFields"
import { getFields } from "../../utils/getFields"

import { iCelularPersona} from "types"
import { personas } from '../mostrar/personas';
import { celulares } from '../mostrar/celulares';

export const celularespersonas = async (
	parent: any,
	args: { id: number; nest: iFieldSelection },
	{ db }: iContext,
	info: any
): Promise<iCelularPersona[]> => {
	const fields = args.nest ? args.nest : getFields(info, "celularespersonas")

	const personasFields = fields.include.find((person) => person.name === "personas")
	const celularesFields = fields.include.find((region) => region.name === "celulares")

	if (personasFields) fields.attributes.push("fk_personas")
	if (celularesFields) fields.attributes.push("fk_celulares")

	const searchedId = args.id ? { id: args.id } : undefined
	let found = (await db.sequelize.models.CelularPersona.findAll({
		where: searchedId,
		attributes: fields.attributes
	})) as any[]

	if (personasFields) {
		found = await Promise.all(
			found.map(async (entry) => {
				const related = await personas(
					this,
					{ id: entry.fkClient, nest: personasFields },
					{ db },
					info
				)
				entry.client = related[0]

				return entry
			})
		)
	}

	if (celularesFields) {
		found = await Promise.all(
			found.map(async (entry) => {
				const related = await celulares(
					this,
					{ id: entry.fkRegion, nest: celularesFields },
					{ db },
					info
				)
				entry.region = related[0]

				return entry
			})
		)
	}

	return found
}