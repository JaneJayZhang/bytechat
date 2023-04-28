import { ControllerBase } from '@/interfaces/ControllerBase';
import { CommonService } from '@/services/CommonService';

export class CommonController implements ControllerBase {
  public path = '/public';
  private commonService: CommonService;

  constructor() {
    this.initRoutes();
    this.commonService = new CommonService();
  }

  public initRoutes() {}

  public upload() {}
}
