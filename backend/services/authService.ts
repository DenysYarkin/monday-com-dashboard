import axios from 'axios';

interface Config {
    clientID: string;
    clientSecret: string;
    redirectURI: string;
}

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
    getAccessToken
};
