const { DNAStrand } = require("../src/index");

describe('Complementary DNA tests', () => {

  test('Should not exist DNA', () => {
    expect(DNAStrand(null)).toStrictEqual(null);
  });

  test('Should DNA is not empty', () => {
    const dna = 'C'
    expect(DNAStrand(dna)).toBe(dna);
  });  

  test('Should verify if it is receiving the correct letters', () => {
    const dna = 'ACTG'
    expect(DNAStrand(dna)).toBe(dna);
  });   
})
