const config = {inputPath: '', outputPath: ''};

process.argv.forEach((arg, idx) => {
  if (arg === '-i' || arg === '--input') {
    console.log(process.argv[idx], process.argv[idx + 1]);
    config.inputPath = process.argv[idx + 1];
  }
  if (arg === '-o' || arg === '--output') {
    config.outputPath = process.argv[idx + 1];
  }
  if (arg === '-c' || arg === '--config') {
    config.ciphers = process.argv[idx + 1]
  }
  console.log({ arg, idx });
});

console.log(config);
