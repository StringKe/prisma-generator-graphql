import { DMMF } from '@prisma/generator-helper'
import { getComment } from '../utils/getComment'

/**
 * generate graphql enum
 * @param name
 * @param values
 * @param documentation
 */
export const genEnum = ({
  name,
  values,
  documentation,
}: DMMF.DatamodelEnum) => {
  const enumValues = values.map(({ name }) => `\t${name}`).join('\n')

  return `${getComment(documentation)}\nenum ${name} { \n${enumValues}\n }\n`
}
