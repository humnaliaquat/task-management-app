import mongoose, { Schema, model } from 'mongoose';
import { title } from 'process';
import { Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description?: string;
  completed: boolean;
  status: 'todo' | 'in-progress' | 'done';
  dueDate?: Date;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}
const taskSchema = new Schema<ITask>({
  title:{
      type: String,
      required: true,
  },
  description:{
     type: String,
     default: '',
  },
  dueDate:{
    type: Date,
    default: null
  },
  priority:{
    type: String,
    enum: ['low', 'medium','high'],
    default: 'low',
  },
  status:{
    type: String,
    enum: ['todo', 'in-progress', 'done'],
    default: 'todo',
  } 
},{timestamps: true});

export default model<ITask>('Task', taskSchema);
