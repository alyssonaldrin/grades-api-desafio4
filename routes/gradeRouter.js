import express from 'express';
import { create, findAll, findOne, update, remove, removeAll } from '../controllers/gradeController.js';

const app = express();

app.post('/grade/', create);
app.get('/grade/', findAll);
app.get('/grade/:id', findOne);
app.put('/grade/:id', update);
app.delete('/grade/:id', remove);
app.delete('/grade/', removeAll);

export { app as gradeRouter };
