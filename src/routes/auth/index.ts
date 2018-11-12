import * as Express from 'express';
import noImpl from '../../noImpl';

const router = Express.Router();

router.post('/login', noImpl);

router.delete('logout', noImpl);

export default router;
