import axios from 'axios';

interface BoardObject {
  id: string,
  name: string,
  type: string
}

interface Board {
  id: string;
  name: string;
  type?: string
}

interface Item {
  id: string;
  name: string;
}

// TODO: must return option
const fetchBoards = async (accessToken: string): Promise<Board[]> => {
  const response = await axios.post(
    'https://api.monday.com/v2',
    {
      query: `
        { 
          boards { 
            id name type
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
  const boards = response.data.data.boards.filter((board: Board) => board.type == 'board')
  return boards
};

const createItem = async (accessToken: string, boardId: string, itemName: string): Promise<Item> => {
  const response = await axios.post(
    'https://api.monday.com/v2',
    {
      query: `
      mutation {
        create_item (board_id: ${boardId}, item_name: "${itemName}") {
          id
          name
        }
      }
    `,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data.data.create_item;
};

export {
  fetchBoards,
  createItem,
};
