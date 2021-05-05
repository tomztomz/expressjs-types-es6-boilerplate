import express, { Application , Request, Response, NextFunction } from 'express';
import index from './routes/index'

const app: express.Application = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index)

app.listen(3000, () => console.log('Server running at port 3000'))