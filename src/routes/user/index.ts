import * as Express from 'express';
import noImpl from '../../noImpl';
import article from './article';

const router = Express.Router();

router.post('/new', noImpl);

router.get('/:user', noImpl);

router.put('/:user', noImpl);

router.delete('/:user', noImpl);

router.use('/:user/article', noImpl);

export default router;
