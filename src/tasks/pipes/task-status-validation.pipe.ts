import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: string) {
    const status = value.toUpperCase();

    if (this.isStatusInvalid(status)) {
      throw new BadRequestException(`"${status}" is an invalid status`);
    }

    return value;
  }

  private isStatusInvalid(status) {
    return !this.allowedStatuses.includes(status);
  }
}
