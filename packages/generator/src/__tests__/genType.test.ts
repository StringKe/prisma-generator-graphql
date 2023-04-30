import { getSampleDMMF } from './__fixtures__/getSampleDMMF'
import { genType } from '../helpers/genType'

test('type generation', async () => {
  const sampleDMMF = await getSampleDMMF()

  sampleDMMF.datamodel.models.forEach((model) => {
    expect(genType(model)).toMatchSnapshot(model.name)
  })
})
