import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { tasks } from './data/task';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  async createTask(data: CreateTaskDto) {
    const createData = await this.prisma.tasks.create({
      data: data,
    });
    return {
      statusCode: 200,
      data: createData,
    };
  }

  async getAllTask() {
    const dataTasks = await this.prisma.tasks.findMany();
    return {
      statusCode: 200,
      data: dataTasks,
    };
  }

  async getTaskByID(id: number) {
    const dataTasks = await this.prisma.tasks.findFirst({
      where: {
        id: id,
      },
    });

    return {
      statusCode: 200,
      data: dataTasks,
    };
  }

  async updateTask(task_id: number, data: UpdateTaskDto) {
    const updateTask = await this.prisma.tasks.update({
      data: data,
      where: {
        id: task_id,
      },
    });
    return {
      statusCode: 200,
      data: updateTask,
    };
  }

  async deleteTaskByID(task_id: number) {
    const deleteTask = await this.prisma.tasks.delete({
      where: {
        id: task_id,
      },
    });
    return {
      statusCode: 200,
      data: deleteTask,
      messege: 'Sukses menghapus data',
    };
  }
}
