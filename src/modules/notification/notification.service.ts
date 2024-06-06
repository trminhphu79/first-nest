import { Injectable } from '@nestjs/common';
import { NotificationDto } from './dto/notification.dto';
import {
  IMessageCreatePayload,
  IMessageGetDetailPayload,
} from '../message/dto/interface/message.interface';
import { INotificationCreatePayload, INotificationGetDetailPayload } from './interface/notification.interface';

@Injectable()
export class NotificationService {
  #notifications = [];
  getNotification() {
    return this.#notifications;
  }

  getNotificationById(params: INotificationGetDetailPayload) {
    return {
      message: `Notification ${params.id} found!`,
    };
  }

  createNotification(body: INotificationCreatePayload) {
    const isExist = this.#notifications.find(
      (notification) => notification?.userId === body?.userId,
    );

    if (isExist) {
      return {
        message: 'Notification already exists!',
        notification: null,
      };
    }

    let notification = new NotificationDto();
    notification = {
      ...body,
      id: notification?.id || this.#notifications.length + 1,
    };

    this.#notifications.push(notification);

    return {
      message: 'Notification created successfully!',
      notification: {
        id: notification.id,
        userId: notification.userId,
      },
    };
  }
}
