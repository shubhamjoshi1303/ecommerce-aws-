const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_UALseLTHT', // e.g., ap-south-1_xxxxxxxxx
      userPoolClientId: '1af5em4eu94tedtv4ih80c6obr', // e.g., 1a2b3c4d5e6f7g8h9i0j1k2l3m
      loginWith: {
        email: true,
      },
    }
  },
  API: {
    baseUrl: 'https://u15y0dfhsa.execute-api.us-east-1.amazonaws.com' // e.g., https://xxxxxxxxxx.execute-api.ap-south-1.amazonaws.com
  }
};

export default awsConfig;
