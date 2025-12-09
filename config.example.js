// Example Configuration File
// Copy this to config.js and replace with your actual AWS resource identifiers

window._workshopConfig = {
  cognito: {
    userPoolId: 'us-west-2_uXboG5pAb', // Replace with your Cognito User Pool ID
    userPoolClientId: '25ddkmj4v6hfsfvruhpfi7n4hv', // Replace with your Cognito App Client ID
    region: 'us-west-2' // Replace with your AWS region
  },
  api: {
    invokeUrl: 'https://abc123def.execute-api.us-west-2.amazonaws.com/prod' // Replace with your API Gateway URL
  }
};

window._configLoaded = true;