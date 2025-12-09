# Workshop Configuration Guide

## Overview
This directory contains the configuration file that connects your application to your AWS resources. You only need to edit the `config.js` file with your specific AWS resource identifiers.

## Quick Setup

1. **Open `config.js`** in any text editor
2. **Replace the placeholder values** with your actual AWS resource identifiers
3. **Save the file**
4. **Deploy to Amplify** (the entire `dist` folder)

## Finding Your AWS Resource Identifiers

### Cognito User Pool ID
1. Go to AWS Console > Amazon Cognito
2. Click on "User Pools"
3. Select your user pool
4. Copy the "Pool Id" from the General Settings tab
5. Format: `us-west-2_uXboG5pAb`

### Cognito App Client ID
1. In your User Pool, go to "App Clients" tab
2. Copy the "App client id"
3. Format: `25ddkmj4v6hfsfvruhpfi7n4hv`

### AWS Region
1. Check the region selector in your AWS Console (top right)
2. Use the region code (e.g., `us-west-2`, `us-east-1`, `eu-west-1`)

### API Gateway URL
1. Go to AWS Console > API Gateway
2. Select your API
3. Go to "Stages" in the left menu
4. Click on your stage (e.g., "prod")
5. Copy the "Invoke URL"
6. Format: `https://abc123def.execute-api.us-west-2.amazonaws.com/prod`

## Troubleshooting

### Configuration Not Loading
- Ensure all placeholder values are replaced
- Check that the file is saved properly
- Verify the file is in the correct location (`dist/config/config.js`)

### Authentication Errors
- Double-check your Cognito User Pool ID and Client ID
- Ensure the region matches your Cognito setup
- Verify your user pool allows the configured client

### API Errors
- Confirm your API Gateway URL is correct and accessible
- Check that your API has CORS enabled for your domain
- Verify the API stage is deployed

## Support
If you encounter issues, check the browser console for detailed error messages.
