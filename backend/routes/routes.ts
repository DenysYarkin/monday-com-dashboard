import express, { Request, Response } from 'express';
import { getAccessToken } from '../services/authService'
import { fetchUserInfo } from '../services/userService'
import { fetchBoards, createItem } from '../services/boardService';
import { fetchDocuments } from '../services/documentsService';
import config from '../config/config';

import { AuthenticatedRequest} from '../services/authService';

const router = express.Router();

router.get('/api/get-access-token', async (req: Request, res: Response) => {
    const code = req.query.code as string;
    try {
        const accessToken = await getAccessToken(code, config);
        res.json({
            token: accessToken
        })
    } catch (error) {
        console.error('Error fetching access token', error);
        res.status(500).send('Authentication failed');
    }
});

router.get('/api/get-user-info', async (req: AuthenticatedRequest, res: Response) => {
    const accessToken = req.token as string;
    try {
        const user = await fetchUserInfo(accessToken);
        res.json({
            'user': user
        });
    } catch (error) {
        console.error('Error fetching data from Monday.com', error);
        res.status(500).send('Failed to fetch data');
    }
});

router.get('/api/get-boards', async (req: AuthenticatedRequest, res: Response) => {
    const accessToken = req.token as string;
    try {
        const boards = await fetchBoards(accessToken);
        res.json({
            'boards': boards
        });
    } catch (error) {
        console.error('Error fetching data from Monday.com', error);
        res.status(500).send('Failed to fetch data');
    }
});

router.get('/api/get-documents', async (req: AuthenticatedRequest, res: Response) => {
    const accessToken = req.token as string;
    try {
        const documents = await fetchDocuments(accessToken);
        res.json({
            'documents': documents
        });
    } catch (error) {
        console.error('Error fetching data from Monday.com', error);
        res.status(500).send('Failed to fetch data');
    }
});

router.post('/api/create-item', async (req:AuthenticatedRequest, res: Response) => {
    const accessToken = req.token as string;
    const boardId = req.body.boardId as string;
    const itemName = req.body.itemName as string;
    try {
        const item = await createItem(accessToken, boardId, itemName);
        res.json({
            success: true,
            item: item
        });
    } catch (error) {
        console.error('Error creating item:', error);
        if (error instanceof Error) {
            res.json({ success: false, error: error.message });
        } else {
            res.json({ success: false, error: 'Unknown error' });
        }
    }
});

export default router;