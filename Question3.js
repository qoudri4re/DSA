const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question('Enter one or more paragraphs of text: ', (text) => {
  
  const words = text.toLowerCase().match(/\b\w+\b/g);

  
  const freqs = {};

  for (const word of words) {
    freqs[word] = (freqs[word] || 0) + 1;
  }

  
  const pairs = Object.entries(freqs);
  

  
  pairs.sort((a, b) => b[1] - a[1]);

  
  console.log('Word cloud:');
  for (const [word, freq] of pairs) {
    console.log(`${word}: ${freq}`);
  }


  rl.close();
});

