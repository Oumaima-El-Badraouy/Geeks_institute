
function buildFrame(words) {
  if (!words || words.length === 0) return '';
  const arr = words.map(w => w.trim()).filter(w => w.length > 0);
  if (arr.length === 0) return '';

  const maxLen = arr.reduce((m, w) => Math.max(m, w.length), 0);
  const width = maxLen + 4; 

  const line = ch => ch.repeat(width);
  const top = line('*');

  const middle = arr.map(word => {
    const padding = ' '.repeat(maxLen - word.length);
    return `* ${word}${padding} *`;
  }).join('\n');

  const bottom = top;
  return [top, middle, bottom].join('\n');
}
function promptInputAndPrint() {
      if (typeof prompt !== 'undefined') {
    const input = prompt('Enter words separated by commas (e.g. Hello, World, in, a, frame)');
    if (input === null) return; 
    const words = input.split(',');
    console.log(buildFrame(words));
    return;
  }
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter words separated by commas (e.g. Hello, World, in, a, frame): ', (answer) => {
    const words = answer.split(',');
    console.log('\n' + buildFrame(words));
    rl.close();
  });
}

promptInputAndPrint();
