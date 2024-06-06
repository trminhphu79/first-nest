import { NotificationDto } from '../dto/notification.dto';

export interface INotificationCreatePayload
  extends Omit<NotificationDto, 'id'> {}

export interface INotificationUpdatePayload extends NotificationDto {}

export interface INotificationDeletePayload {
  id: string;
}

export interface INotificationGetDetailPayload {
  id: string;
}
