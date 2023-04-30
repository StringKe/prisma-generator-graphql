import { getSampleDMMF } from './__fixtures__/getSampleDMMF'
import { genScalar } from '../helpers/genScalar'

test('scalar generation', async () => {
  const sampleDMMF = await getSampleDMMF()

  expect(genScalar(sampleDMMF.datamodel.models)).toMatchSnapshot('scalar')
})
