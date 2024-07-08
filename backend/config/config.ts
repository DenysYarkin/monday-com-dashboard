import dotenv from 'dotenv';
dotenv.config();

const config = {
  clientID: process.env.CLIENT_ID as string,
  clientSecret: process.env.CLIENT_SECRET as string,
  redirectUri: process.env.REDIRECT_URI as string,
  frontendUri: process.env.FRONTEND_URI as string,
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
};

export default config;
