const path = require('path');

const buildEslintCommand = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f)).join(' ');
  const command = `npm run lint -- --max-errors 0 ${files}`;
  return command;
};

module.exports = {
  '*.(ts|tsx|vue)': [buildEslintCommand, 'npm run test:staged'],
};
