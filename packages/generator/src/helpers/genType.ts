import { DMMF } from '@prisma/generator-helper'
import { getComment } from '../utils/getComment'

/**
 * generate graphql type
 * @param name
 * @param fields
 * @param documentation
 */
export const genType = ({ name, fields, documentation }: DMMF.Model) => {
  const typeFields = fields
    .map(({ name, type, isRequired, isList, documentation }) => {
      const required = isRequired ? '!' : ''
      const combineType = isList ? `[${type}]` : type
      return `${getComment(documentation)}\t${name}: ${combineType}${required}`
    })
    .join('\n')

  return `${getComment(documentation)}type ${name} { \n${typeFields}\n }\n`
}
