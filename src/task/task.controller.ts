import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task-123')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post()
  async createTask(@Body() body: CreateTaskDto) {
    return await this.taskService.createTask(body);
  }

  @Get()
  async getAllTask() {
    return await this.taskService.getAllTask();
  }

  @Get('/:task_id')
  async getTaskByID(@Param('task_id') task_id) {
    return await this.taskService.getTaskByID(+task_id);
  }

  @Patch('/:task_id')
  async updateTask(@Param('task_id') task_id, @Body() body: UpdateTaskDto) {
    return await this.taskService.updateTask(+task_id, body);
  }

  @Delete('/:task_id')
  async deleteTaskByID(@Param('task_id') task_id) {
    return await this.taskService.deleteTaskByID(+task_id);
  }
}
