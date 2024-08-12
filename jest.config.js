module.exports = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['cobertura', 'lcov', 'text'],
    reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'test-results', outputName: 'test-results.xml' }]
  ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    }
  };
  