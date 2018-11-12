import * as Express from 'express';
import noImpl from '../../../noImpl';

const router = Express.Router({ mergeParams: true });

router.get('/list', noImpl);

router.get('/:article', noImpl);

router.put('/:article', noImpl);

router.delete('/:article', noImpl);

export default router;
