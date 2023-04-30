import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/sdk'
import path from 'path'
import { GENERATOR_NAME } from './constants'
import { genEnum } from './helpers/genEnum'
import { genType } from './helpers/genType'
import { writeFileSafely } from './utils/writeFileSafely'
import { genScalar } from './helpers/genScalar'

const { version } = require('../package.json')

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`)
    return {
      version,
      defaultOutput: '../generated',
      prettyName: GENERATOR_NAME,
    }
  },
  onGenerate: async (options: GeneratorOptions) => {
    const outputPath = options.generator.output?.value || './generated'
    const outputFileName =
      options.generator.config?.outputFileName || 'schema.graphql'

    const output = path.join(outputPath, outputFileName)

    const enumValues = options.dmmf.datamodel.enums
      .map((enumInfo) => {
        return genEnum(enumInfo)
      })
      .join('\n')

    const typeValues = options.dmmf.datamodel.models
      .map((model) => {
        return genType(model)
      })
      .join('\n')

    const scalarValues = genScalar(options.dmmf.datamodel.models)

    const document = [scalarValues, enumValues, typeValues].join('\n')

    await writeFileSafely(output, document)
  },
})
