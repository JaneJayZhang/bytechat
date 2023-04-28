import { ChatRecord } from '@/models/ChatRecord';
import { BaseDao } from './BaseDao';

export class ChatRecordDao extends BaseDao<ChatRecord> {
  constructor() {
    super(ChatRecord);
  }

  async createChatRecord() {}
}
