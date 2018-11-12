import * as Express from 'express';
import expressListEndpoints from 'express-list-endpoints';
import articles from './routes/articles';
import auth from './routes/auth';
import user from './routes/user';

const app = Express();

app.use('/articles', articles);
app.use('/auth', auth);
app.use('/user', user);

app.listen(3000, () => {
    console.log('Listen on port 3000.');
    console.log(expressListEndpoints(app));
});

export default app;
