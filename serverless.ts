import type { AWS } from '@serverless/typescript';

import { hello } from './src/functions';

const serverlessConfiguration: AWS = {
  service: 'auctioner',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
    region: 'us-east-1',
    stage: 'dev',
    memorySize: 256
  },
  functions: { hello }
}

module.exports = serverlessConfiguration;
