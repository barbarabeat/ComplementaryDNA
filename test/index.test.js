const { DNAStrand } = require("../src/index");

describe('Complementary DNA tests', () => {

  test('Should not exist DNA', () => {
    expect(DNAStrand(null)).toStrictEqual(null);
});

})
