import * as Express from 'express';
import noImpl from '../../noImpl';

const router = Express.Router();

router.get('/', noImpl);

router.post('/', noImpl);

export default router;
