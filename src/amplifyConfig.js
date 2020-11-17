const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-filesupload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://faa0o3qiwc.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_8gh890GyZ",
    APP_CLIENT_ID: "72j1f74qqam3f5uvtffbjha0j6",
    IDENTITY_POOL_ID: "us-east-1:3c1501c5-1cde-4436-802f-476d515a44c6",
  },
};

export default config;
