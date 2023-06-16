function DNAStrand(dna){
  const regexp = /([A,T,G,C])+/g;

  if (dna && dna.match(regexp)) {
    return dna;
  }
  return null;
}

module.exports = {
  DNAStrand,
};
