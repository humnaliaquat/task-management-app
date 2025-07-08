import Task from '../models/task.model';
import { Request, Response } from 'express';

export const getTasks = async(req: Request, res: Response)=>{
  const tasks = await Task.find().sort({createdAt : -1});
  res.json(tasks);

};
export const createTask = async(req: Request, res: Response)=>{
     const {title, description, dueDate, priority} = req.params;
     const task = new Task ({title, description, dueDate, priority});
     await task.save();
     res.status(201).json(task);
    
}
export const deleteTask = async(req: Request, res: Response)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
}
export const toggleComplete = async(req: Request, res: Response)=>{
  const task = await Task.findById(req.params.id);
  if(task){
    task.completed = !task.completed;
    await task.save();
    res.json(task);
  }
  else{
    res.status(404).send();
  }
};
