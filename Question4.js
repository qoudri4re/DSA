const readline = require('readline');


const dictionary = [
                    'lake', 'hair', 'year',
	                'road', 'tale', 'food',
	                'map', 'ear', 'poet', 
	                'hall', 'sir', 'menu',
	                'son', 'art', 'exam', 
	                'city', 'ad', 'goal', 
	                'gene', 'way', 'math',
	                'dirt', 'loss', 'debt', 
	                'dad', 'mall', 'love', 
	                'fact', 'town', 'king', 
	                'oven', 'song', 'lady', 
	                'area', 'mode', 'girl', 
	                'gate', 'bird'
                  ];

function findMatchingWords() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter string of letters: ', (input) => {
    
    const letters = input.toLowerCase().split("");

    let matchingWords = [];
    let unusedLetters = [];

    for (let word of dictionary) {
      let availableLetters = letters.slice();

      let canMakeWord = true;

      for (let letter of word) {
        
        if (availableLetters.includes(letter)) {
          availableLetters.splice(availableLetters.indexOf(letter), 1);
        } else {  
          canMakeWord = false;
          break;
        }
      }
    
      if (canMakeWord) {
        matchingWords.push(word);
      }
    }

    for (let letter of letters) {
      if (!matchingWords.join("").includes(letter)) {
        unusedLetters.push(letter);
      }
    }
    
    rl.close();

    
    console.log("Matching words are " + JSON.stringify(matchingWords) + " unused letters are " + JSON.stringify(unusedLetters));
  });
}

findMatchingWords();

