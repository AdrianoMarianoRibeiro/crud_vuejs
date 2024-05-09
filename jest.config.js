module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/tests', '<rootDir>/.jest'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1',
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  moduleFileExtensions: ['js', 'ts', 'vue'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
};
