import { CommonDao } from '@/daos/CommonDao';

export class CommonService {
  private commonDao: CommonDao;

  constructor() {
    this.commonDao = new CommonDao();
  }

  public async upload() {}
}
