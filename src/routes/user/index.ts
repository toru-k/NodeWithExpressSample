import * as Express from 'express';
import noImpl from '../../noImpl';
import impl from '../../impl';
import article from './article';

const router = Express.Router();

router.post('/new', noImpl);

router.get('/:user', impl);

router.put('/:user', noImpl);

router.delete('/:user', noImpl);

router.use('/:user/article', article);

export default router;
