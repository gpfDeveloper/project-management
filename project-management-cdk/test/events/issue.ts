// /projects/dfjkld20390/issues - GET
const issuesForProjectEvent = {
  resource: '/projects/{projectId}/issues',
  path: '/projects/dfjkld20390/issues',
  httpMethod: 'GET',
  headers: null,
  multiValueHeaders: null,
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: { projectId: 'dfjkld20390' },
  stageVariables: null,
  requestContext: {
    resourceId: 'tcf05f',
    resourcePath: '/projects/{projectId}/issues',
    httpMethod: 'GET',
    extendedRequestId: 'WoqpvEi2IAMF5sw=',
    requestTime: '10/Aug/2022:07:01:43 +0000',
    path: '/projects/{projectId}/issues',
    accountId: '239344013128',
    protocol: 'HTTP/1.1',
    stage: 'test-invoke-stage',
    domainPrefix: 'testPrefix',
    requestTimeEpoch: 1660114903718,
    requestId: '28d8e52d-156f-46fa-9636-6bf954122ff2',
    identity: {
      cognitoIdentityPoolId: null,
      cognitoIdentityId: null,
      apiKey: 'test-invoke-api-key',
      principalOrgId: null,
      cognitoAuthenticationType: null,
      userArn: 'arn:aws:iam::239344013128:user/pengfei-development',
      apiKeyId: 'test-invoke-api-key-id',
      userAgent:
        'aws-internal/3 aws-sdk-java/1.12.239 Linux/5.4.196-119.356.amzn2int.x86_64 OpenJDK_64-Bit_Server_VM/25.332-b08 java/1.8.0_332 vendor/Oracle_Corporation cfg/retry-mode/standard',
      accountId: '239344013128',
      caller: 'AIDATPOQDZ5EKU5UILZZM',
      sourceIp: 'test-invoke-source-ip',
      accessKey: 'ASIATPOQDZ5EFRSKM2JQ',
      cognitoAuthenticationProvider: null,
      user: 'AIDATPOQDZ5EKU5UILZZM',
    },
    domainName: 'testPrefix.testDomainName',
    apiId: 'kd3nfw7wqc',
  },
  body: null,
  isBase64Encoded: false,
};

// /projects/dkfjdkl234/issues - POST
const addIssueEvent = {
  resource: '/projects/{projectId}/issues',
  path: '/projects/dkfjdkl234/issues',
  httpMethod: 'POST',
  headers: null,
  multiValueHeaders: null,
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: { projectId: 'dkfjdkl234' },
  stageVariables: null,
  requestContext: {
    resourceId: 'tcf05f',
    resourcePath: '/projects/{projectId}/issues',
    httpMethod: 'POST',
    extendedRequestId: 'WorlKFAHIAMFVBg=',
    requestTime: '10/Aug/2022:07:08:04 +0000',
    path: '/projects/{projectId}/issues',
    accountId: '239344013128',
    protocol: 'HTTP/1.1',
    stage: 'test-invoke-stage',
    domainPrefix: 'testPrefix',
    requestTimeEpoch: 1660115284093,
    requestId: 'f2e176c8-2df6-475b-a832-54c5ed4eda2a',
    identity: {
      cognitoIdentityPoolId: null,
      cognitoIdentityId: null,
      apiKey: 'test-invoke-api-key',
      principalOrgId: null,
      cognitoAuthenticationType: null,
      userArn: 'arn:aws:iam::239344013128:user/pengfei-development',
      apiKeyId: 'test-invoke-api-key-id',
      userAgent:
        'aws-internal/3 aws-sdk-java/1.12.239 Linux/5.4.196-119.356.amzn2int.x86_64 OpenJDK_64-Bit_Server_VM/25.332-b08 java/1.8.0_332 vendor/Oracle_Corporation cfg/retry-mode/standard',
      accountId: '239344013128',
      caller: 'AIDATPOQDZ5EKU5UILZZM',
      sourceIp: 'test-invoke-source-ip',
      accessKey: 'ASIATPOQDZ5EFRSKM2JQ',
      cognitoAuthenticationProvider: null,
      user: 'AIDATPOQDZ5EKU5UILZZM',
    },
    domainName: 'testPrefix.testDomainName',
    apiId: 'kd3nfw7wqc',
  },
  body: '{"id": "dfjkdslfjk3", "summary": "Test issue"}',
  isBase64Encoded: false,
};

//  /projects/dsfsjdklf321/issues/dfkdjfl329jk - GET
const getSingleIssueEvent = {
  resource: '/projects/{projectId}/issues/{issueId}',
  path: '/projects/dsfsjdklf321/issues/dfkdjfl329jk',
  httpMethod: 'GET',
  headers: null,
  multiValueHeaders: null,
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: { projectId: 'dsfsjdklf321', issueId: 'dfkdjfl329jk' },
  stageVariables: null,
  requestContext: {
    resourceId: 'tws4tr',
    resourcePath: '/projects/{projectId}/issues/{issueId}',
    httpMethod: 'GET',
    extendedRequestId: 'Wor3QGSJoAMF1nw=',
    requestTime: '10/Aug/2022:07:09:59 +0000',
    path: '/projects/{projectId}/issues/{issueId}',
    accountId: '239344013128',
    protocol: 'HTTP/1.1',
    stage: 'test-invoke-stage',
    domainPrefix: 'testPrefix',
    requestTimeEpoch: 1660115399894,
    requestId: '07b6f9ef-c64b-45b2-91b6-2b46c0178843',
    identity: {
      cognitoIdentityPoolId: null,
      cognitoIdentityId: null,
      apiKey: 'test-invoke-api-key',
      principalOrgId: null,
      cognitoAuthenticationType: null,
      userArn: 'arn:aws:iam::239344013128:user/pengfei-development',
      apiKeyId: 'test-invoke-api-key-id',
      userAgent:
        'aws-internal/3 aws-sdk-java/1.12.239 Linux/5.4.196-119.356.amzn2int.x86_64 OpenJDK_64-Bit_Server_VM/25.332-b08 java/1.8.0_332 vendor/Oracle_Corporation cfg/retry-mode/standard',
      accountId: '239344013128',
      caller: 'AIDATPOQDZ5EKU5UILZZM',
      sourceIp: 'test-invoke-source-ip',
      accessKey: 'ASIATPOQDZ5EFRSKM2JQ',
      cognitoAuthenticationProvider: null,
      user: 'AIDATPOQDZ5EKU5UILZZM',
    },
    domainName: 'testPrefix.testDomainName',
    apiId: 'kd3nfw7wqc',
  },
  body: null,
  isBase64Encoded: false,
};

// /projects/djkfljdsklfjk2/issues/djkfldsj32lk - PUT
const updateIssueEvent = {
  resource: '/projects/{projectId}/issues/{issueId}',
  path: '/projects/djkfljdsklfjk2/issues/djkfldsj32lk',
  httpMethod: 'PUT',
  headers: null,
  multiValueHeaders: null,
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: { projectId: 'djkfljdsklfjk2', issueId: 'djkfldsj32lk' },
  stageVariables: null,
  requestContext: {
    resourceId: 'tws4tr',
    resourcePath: '/projects/{projectId}/issues/{issueId}',
    httpMethod: 'PUT',
    extendedRequestId: 'WosRYEiqoAMFmjw=',
    requestTime: '10/Aug/2022:07:12:47 +0000',
    path: '/projects/{projectId}/issues/{issueId}',
    accountId: '239344013128',
    protocol: 'HTTP/1.1',
    stage: 'test-invoke-stage',
    domainPrefix: 'testPrefix',
    requestTimeEpoch: 1660115567074,
    requestId: '9992b0a0-f00e-49fe-bbbb-39234d86a043',
    identity: {
      cognitoIdentityPoolId: null,
      cognitoIdentityId: null,
      apiKey: 'test-invoke-api-key',
      principalOrgId: null,
      cognitoAuthenticationType: null,
      userArn: 'arn:aws:iam::239344013128:user/pengfei-development',
      apiKeyId: 'test-invoke-api-key-id',
      userAgent:
        'aws-internal/3 aws-sdk-java/1.12.239 Linux/5.4.196-119.356.amzn2int.x86_64 OpenJDK_64-Bit_Server_VM/25.332-b08 java/1.8.0_332 vendor/Oracle_Corporation cfg/retry-mode/standard',
      accountId: '239344013128',
      caller: 'AIDATPOQDZ5EKU5UILZZM',
      sourceIp: 'test-invoke-source-ip',
      accessKey: 'ASIATPOQDZ5EFRSKM2JQ',
      cognitoAuthenticationProvider: null,
      user: 'AIDATPOQDZ5EKU5UILZZM',
    },
    domainName: 'testPrefix.testDomainName',
    apiId: 'kd3nfw7wqc',
  },
  body: '{"summary": "Test issue 2"}',
  isBase64Encoded: false,
};

// /projects/dfsdf232sdf/issues/dfdfjkl321df - Delete
const deleteIssueEvent = {
  resource: '/projects/{projectId}/issues/{issueId}',
  path: '/projects/dfsdf232sdf/issues/dfdfjkl321df',
  httpMethod: 'DELETE',
  headers: null,
  multiValueHeaders: null,
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: { projectId: 'dfsdf232sdf', issueId: 'dfdfjkl321df' },
  stageVariables: null,
  requestContext: {
    resourceId: 'tws4tr',
    resourcePath: '/projects/{projectId}/issues/{issueId}',
    httpMethod: 'DELETE',
    extendedRequestId: 'WosgyErwoAMFxNQ=',
    requestTime: '10/Aug/2022:07:14:25 +0000',
    path: '/projects/{projectId}/issues/{issueId}',
    accountId: '239344013128',
    protocol: 'HTTP/1.1',
    stage: 'test-invoke-stage',
    domainPrefix: 'testPrefix',
    requestTimeEpoch: 1660115665686,
    requestId: '3b040f89-2e9b-4ab9-a658-d50f62546d28',
    identity: {
      cognitoIdentityPoolId: null,
      cognitoIdentityId: null,
      apiKey: 'test-invoke-api-key',
      principalOrgId: null,
      cognitoAuthenticationType: null,
      userArn: 'arn:aws:iam::239344013128:user/pengfei-development',
      apiKeyId: 'test-invoke-api-key-id',
      userAgent:
        'aws-internal/3 aws-sdk-java/1.12.239 Linux/5.4.196-119.356.amzn2int.x86_64 OpenJDK_64-Bit_Server_VM/25.332-b08 java/1.8.0_332 vendor/Oracle_Corporation cfg/retry-mode/standard',
      accountId: '239344013128',
      caller: 'AIDATPOQDZ5EKU5UILZZM',
      sourceIp: 'test-invoke-source-ip',
      accessKey: 'ASIATPOQDZ5EFRSKM2JQ',
      cognitoAuthenticationProvider: null,
      user: 'AIDATPOQDZ5EKU5UILZZM',
    },
    domainName: 'testPrefix.testDomainName',
    apiId: 'kd3nfw7wqc',
  },
  body: null,
  isBase64Encoded: false,
};