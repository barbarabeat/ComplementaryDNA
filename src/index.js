function DNAStrand(dna) {
  const regexp = /([A,T,G,C])+/g;

  if (dna && dna.match(regexp)) {
    const result = dna;
      result.replaceAll('A','T');
      result.replaceAll('T','A');
      result.replaceAll('C','G');
      result.replaceAll('G','C');
      const myVar = result.toString();
      return myVar;
      // switch(dna) {
      //   case "C":
      //     return "G";
      //   case "A":
      //     return "T"; 
      //     case "A":
      //       return "T";
      //     case "G":
      //       return "C";            
      }
    return null;
  }

module.exports = {
  DNAStrand,
};
