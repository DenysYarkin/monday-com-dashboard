import dotenv from 'dotenv';
dotenv.config();

// TODO: rename the file

const config = {
  clientID: process.env.CLIENT_ID as string,
  clientSecret: process.env.CLIENT_SECRET as string,
  redirectURI: process.env.REDIRECT_URI as string,
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
};

export default config;