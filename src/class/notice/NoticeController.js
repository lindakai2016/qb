import ExchangeControllerBase from '../ExchangeControllerBase'
import NoticeStore from './NoticeStore'

export default class NoticeController extends ExchangeControllerBase {
  constructor(props) {
    super(props)
    this.store = new NoticeStore()
  }

  setView(view){
    super.setView(view);
    // view.setState({count: this.store.count})
    return this.store.data
  }

  get configData() {
    console.log('ccconfig', this.configController)
    return this.configController.initState
  }

  async getNoticeCon() { // 获取公告
    let token = this.userController.userToken
    let noticeList = await this.store.noticeCon(token);
    this.view.setState({noticeList})
  }

  async getInfoCon() { // 获取资讯
    let token = this.userController.userToken
    let infoList = await this.store.infoCon(token);
    this.view.setState({infoList})
  }

}