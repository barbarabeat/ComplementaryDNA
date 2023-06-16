const { DNAStrand } = require("../src/index");

describe('Complementary DNA tests', () => {

  test('Should not exist DNA', () => {
    expect(DNAStrand(null)).toStrictEqual(null);
  });

  test('Should DNA is not empty', () => {
    const dna = 'c'
    expect(DNAStrand(dna)).toBe(dna);
  });  
})
