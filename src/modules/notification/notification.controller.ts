import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationDto } from './dto/notification.dto';
import { INotificationCreatePayload } from './interface/notification.interface';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  @HttpCode(204)
  getNotification() {
    console.log('getNotification: ');
    return this.notificationService.getNotification();
  }

  @Get(':id')
  @HttpCode(204)
  getNotificationById(@Param('id') id: string) {
    console.log('getNotificationById: ', id);
    return this.notificationService.getNotificationById({
      id: id,
    });
  }

  @Post()
  @HttpCode(200)
  createNotification(payload: INotificationCreatePayload) {
    return this.notificationService.createNotification(payload);
  }
}
