import axios from 'axios';

interface Document {
  id: string;
  name: string;
}

const fetchDocuments = async (accessToken: string): Promise<Document[]> => {
  const response = await axios.post(
    'https://api.monday.com/v2',
    {
      query: `
        { 
          docs { 
            id name
          } 
        }`,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(response.data.data);
  return response.data.data.docs
};

export {
  fetchDocuments,
};
