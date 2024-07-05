import axios from 'axios';

interface User {
    id: string;
    name: string;
    email: string;
}

const fetchUserInfo = async (accessToken: string): Promise<User> => {
    const response = await axios.post(
        'https://api.monday.com/v2',
        {
            query: `{ me { id name email } }`,
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        }
    );
    return response.data.data.me;
};

export {
    fetchUserInfo
};
