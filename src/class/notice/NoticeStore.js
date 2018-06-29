import ExchangeStoreBase from '../ExchangeStoreBase'

export default class NoticeStore extends ExchangeStoreBase {
  constructor() {
    super("notice");
    this.state = {
      noticeList: {},
      infoList: {},

      informationList: {
        "data": [
          {
            "catalog": 1,//类型 0公共 1新闻 2资讯
            "subjectCN": "通知1",//标题
            "subjectEN": "通知1en",
            "contentCN": "通知content",//内容
            "contentEN": "通知contentEn",
            "source": "www.baidu.com",//连接
            "createdAt": 947586000,//时间戳
            "titleImage": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4286190978,876826890&fm=27&gp=0.jpg",//标题图片
            "recommendCN": "nothing",//推荐标题
            "recommendEN": "too",
            "recommendLink": "https://baike.baidu.com/item/%E8%8B%8F%E8%8F%B2%C2%B7%E7%8E%9B%E7%B4%A2/822003?fromtitle=%E8%8B%8F%E8%8F%B2%E7%8E%9B%E7%B4%A2&fromid=11156560&fr=aladdin",
            "abstractCN": "通知简介cn",//简介
            "abstractEN": "通知简介en"
          },
          {
            "catalog": 1,//类型 0公共 1新闻 2资讯
            "subjectCN": "通知1",//标题
            "subjectEN": "通知1en",
            "contentCN": "通知content",//内容
            "contentEN": "通知contentEn",
            "source": "www.baidu.com",//连接
            "createdAt": 947586000,//时间戳
            "titleImage": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4286190978,876826890&fm=27&gp=0.jpg",//标题图片
            "recommendCN": "nothing",//推荐标题
            "recommendEN": "too",
            "recommendLink": "https://baike.baidu.com/item/%E8%8B%8F%E8%8F%B2%C2%B7%E7%8E%9B%E7%B4%A2/822003?fromtitle=%E8%8B%8F%E8%8F%B2%E7%8E%9B%E7%B4%A2&fromid=11156560&fr=aladdin",
            "abstractCN": "通知简介cn",//简介
            "abstractEN": "通知简介en"
          },
          {
            "catalog": 1,//类型 0公共 1新闻 2资讯
            "subjectCN": "通知1",//标题
            "subjectEN": "通知1en",
            "contentCN": "通知content",//内容
            "contentEN": "通知contentEn",
            "source": "www.baidu.com",//连接
            "createdAt": 947586000,//时间戳
            "titleImage": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4286190978,876826890&fm=27&gp=0.jpg",//标题图片
            "recommendCN": "nothing",//推荐标题
            "recommendEN": "too",
            "recommendLink": "https://baike.baidu.com/item/%E8%8B%8F%E8%8F%B2%C2%B7%E7%8E%9B%E7%B4%A2/822003?fromtitle=%E8%8B%8F%E8%8F%B2%E7%8E%9B%E7%B4%A2&fromid=11156560&fr=aladdin",
            "abstractCN": "通知简介cn",//简介
            "abstractEN": "通知简介en"
          }
        ],
        "page": 1,
        "totalCount": 1 //只有page为0这个值才有意义
      },
      newsList: {
        "data": [
          {
            "catalog": 1,//类型 0公共 1新闻 2资讯
            "subjectCN": "通知1",//标题
            "subjectEN": "通知1en",
            "contentCN": "通知content",//内容
            "contentEN": "通知contentEn",
            "source": "www.baidu.com",//连接
            "createdAt": 947586000,//时间戳
            "titleImage": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4286190978,876826890&fm=27&gp=0.jpg",//标题图片
            "recommendCN": "nothing",//推荐标题
            "recommendEN": "too",
            "recommendLink": "https://baike.baidu.com/item/%E8%8B%8F%E8%8F%B2%C2%B7%E7%8E%9B%E7%B4%A2/822003?fromtitle=%E8%8B%8F%E8%8F%B2%E7%8E%9B%E7%B4%A2&fromid=11156560&fr=aladdin",
            "abstractCN": "通知简介cn",//简介
            "abstractEN": "通知简介en"
          },
          {
            "catalog": 1,//类型 0公共 1新闻 2资讯
            "subjectCN": "通知1",//标题
            "subjectEN": "通知1en",
            "contentCN": "通知content",//内容
            "contentEN": "通知contentEn",
            "source": "www.baidu.com",//连接
            "createdAt": 947586000,//时间戳
            "titleImage": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4286190978,876826890&fm=27&gp=0.jpg",//标题图片
            "recommendCN": "nothing",//推荐标题
            "recommendEN": "too",
            "recommendLink": "https://baike.baidu.com/item/%E8%8B%8F%E8%8F%B2%C2%B7%E7%8E%9B%E7%B4%A2/822003?fromtitle=%E8%8B%8F%E8%8F%B2%E7%8E%9B%E7%B4%A2&fromid=11156560&fr=aladdin",
            "abstractCN": "通知简介cn",//简介
            "abstractEN": "通知简介en"
          },
          {
            "catalog": 1,//类型 0公共 1新闻 2资讯
            "subjectCN": "通知1",//标题
            "subjectEN": "通知1en",
            "contentCN": "通知content",//内容
            "contentEN": "通知contentEn",
            "source": "www.baidu.com",//连接
            "createdAt": 947586000,//时间戳
            "titleImage": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4286190978,876826890&fm=27&gp=0.jpg",//标题图片
            "recommendCN": "nothing",//推荐标题
            "recommendEN": "too",
            "recommendLink": "https://baike.baidu.com/item/%E8%8B%8F%E8%8F%B2%C2%B7%E7%8E%9B%E7%B4%A2/822003?fromtitle=%E8%8B%8F%E8%8F%B2%E7%8E%9B%E7%B4%A2&fromid=11156560&fr=aladdin",
            "abstractCN": "通知简介cn",//简介
            "abstractEN": "通知简介en"
          }
        ],
        "page": 1,
        "totalCount": 1 //只有page为0这个值才有意义
      },
    }
  }

  async noticeCon(token) { // 获取公告
    let noticeList = await this.Proxy.getActivityCon({
        "userId": 3,
        "activityType": 0,  //类型 0公告 1新闻 2资讯
        "page": 0,
        "pageSize": 10,
        "token": token
    });
    this.state.noticeList = noticeList;
    console.log('获取公告', noticeList)
    return noticeList
  }

  async infoCon(token) { // 获取资讯
    let infoList = await this.Proxy.getActivityCon({
        "userId": 3,
        "activityType": 2,
        "page": 0,
        "pageSize": 10,
        "token": token
    });
    this.state.infoList = infoList;
    console.log('获取资讯', infoList)
    return infoList
  }
}