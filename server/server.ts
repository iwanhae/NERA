import dotenv from 'dotenv';
import app from './server/index';

dotenv.config();

const port = process.env.PORT || 3000;
const server = app.listen(port);
console.info(`Listening to http://0.0.0.0:${port}`);

export default server;
