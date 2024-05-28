const { DNAStrand } = require("../src/index");

describe('Complementary DNA tests', () => {

  test('Should not exist DNA', () => {
    expect(DNAStrand(null)).toStrictEqual(null);
  });

  test('Should DNA is not empty', () => {
    const dna = 'C'
    expect(DNAStrand(dna)).toBe("G");
  });  

  test('Should verify if it is receiving the correct letters', () => {
    const dna = 'ACTG'
    expect(DNAStrand(dna)).toBe(dna);
  });  
  
  
  test('Should verify if it is returns null within the letters "C,"G","A","T"', () => {
    const dna = 'aaaa'
    expect(DNAStrand(dna)).toBe(null);
  });  
  
  test('Should verify if when we have a "C" the answer is "G"', () => {
    const dna = 'C'
    const result = "G"
    expect(DNAStrand(dna)).toBe(result);
  });    

  test('Should verify if when we have a "A" the answer is "T";', () => {
    const dna = 'A'
    const result = "T"
    expect(DNAStrand(dna)).toBe(result);
  });  
  
  test('Should verify if when we have a "T" the answer is "A";', () => {
    const dna = 'T'
    const result = "A"
    expect(DNAStrand(dna)).toBe(result);
  }); 
  
  test('Should verify if when we have a "ATTGC" the answer is "TAACG"', () => {
    const dna = 'ATTGC'
    const result = "TAACG"
    expect(DNAStrand(dna)).toBe(result);
  });  

  test('Should verify if when we have a "CATA" the answer is "GTAT";', () => {
    const dna = 'CATA'
    const result = "GTAT"
    expect(DNAStrand(dna)).toBe(result);
  });  
})
