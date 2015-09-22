module.exports = {
  AWS: {
    region: 'us-east-1'
  },
  apps: {
    sample: {
      path: 'sample',
      build_dir: 'apps/sample',
      lint: ['./apps/rna/*.js']
    }
  },
  node: {
    port: 3000
  }
};