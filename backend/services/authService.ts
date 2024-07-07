import axios from 'axios';
import { Request, Response, NextFunction} from 'express';

interface Config {
    clientID: string;
    clientSecret: string;
    redirectURI: string;
}

interface AuthenticatedRequest extends Request{
    token?: string;
}

const extractToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    req.token = authHeader.split(' ')[1];
  } else {
    req.token = "";
  }
  console.log('TOKEN:', req.token)
  next();
};

const getAccessToken = async (code: string, config: Config): Promise<string> => {
  const response = await axios.post('https://auth.monday.com/oauth2/token', {
    client_id: config.clientID,
    client_secret: config.clientSecret,
    code: code,
    redirect_uri: config.redirectURI,
  });
  return response.data.access_token;
};

export {
  extractToken,
  getAccessToken,
  AuthenticatedRequest
};
