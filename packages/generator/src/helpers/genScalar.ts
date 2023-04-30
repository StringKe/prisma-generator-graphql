import { DMMF } from '@prisma/generator-helper'
import { getComment } from '../utils/getComment'

/**
 * generate graphql type
 * @param models
 */
export const genScalar = (models: DMMF.Model[]) => {
  const basicSupportType = ['String', 'Int', 'Float', 'Boolean', 'ID']
  const modelNames = models.map((model) => {
    return model.name
  })
  const scalarTypes = models
    .map((model) => {
      return model.fields.map((field) => {
        return field.type
      })
    })
    .flat()
    .filter((type) => {
      return ![...basicSupportType, ...modelNames].includes(type)
    })
    .filter((type, index, self) => {
      return self.indexOf(type) === index
    })
    .map((type) => {
      return `scalar ${type}`
    })
    .join('\n')

  return `\n${scalarTypes}\n`
}
