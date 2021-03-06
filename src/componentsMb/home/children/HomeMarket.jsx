import ExchangeViewBase from '../../../components/ExchangeViewBase'
import RemindPopup from '../../../common/component/Popup/index.jsx'
import React, {Component} from "react";

export default class HomeMarket extends ExchangeViewBase {
  constructor(props) {
    super(props);
    this.state = {
      remindPopup: false,
      popType: 'tip1',
      popMsg: this.intl.get("asset-add-success"),
      sortIndexMobile: 0,
      sortImgMobile: '',
      sortArr: [
        {sortValue: ['coinName'], type: 1, sortDefault: 'turnover'},
        {sortValue: ['price'], type: 1, sortDefault: 'turnover'},
        {sortValue: ['rise'], type: 1, sortDefault: 'turnover'}
      ]
    };
    const {controller} = this.props;
    //绑定view
    controller.setView(this);
    //初始化数据，数据来源即store里面的state
    this.state = Object.assign(this.state, controller.initState);
    //绑定方法
    this.marketDataHandle = controller.marketDataHandle.bind(controller);
    this.changeMarket = controller.changeMarket.bind(controller); // 点击其他市场
    this.collectMarket = controller.collectMarket.bind(controller);// 点击收藏
    this.addCollect = controller.addCollect.bind(controller); // 添加收藏
    this.joinHome = controller.joinHome.bind(controller);
    this.pairSort = controller.pairSort.bind(controller); // 排序
    this.getCollect = this.getCollect.bind(this)
  }

  getCollect(v, index, e) { // 添加收藏
    this.addCollect(v, index, e);
    if (v.isFavorite) { // 取消
      this.setState({
        remindPopup: true,
        popMsg: this.intl.get("h5-market-cancel")
      })
      return
    }
    this.setState({
      remindPopup: true,
      popMsg: this.intl.get("h5-market-add")
    })
  }

  componentDidMount() {
    //注册http数据
    this.marketDataHandle();
    //进入home
    this.joinHome();
  }
  
  render() {
    const {controller} = this.props;
    let marketData = this.state.marketDataHandle;     //市场列表
    console.log(this.state)
    let marketPair = [...this.state.newMarketPair, ...this.state.mainMarketPair];  //交易对

    return (
      <div className="market">
        <ul>
          {controller.token && <li onClick={this.collectMarket}
                                   className={this.state.collectActive ? "active" : ""}>
            <span>{this.intl.get('market-favorites')}</span>
          </li>}
          {marketData && marketData.map((v, index) => {
            return (<li key={index}
                        onClick={this.changeMarket.bind(this, v)}
                        className={this.state.market.toUpperCase() === v.toUpperCase() ? "active" : ""}>
                <span>{v.toUpperCase()}</span>
              </li>
            )
          })}
        </ul>
        <div className="market-list">
          <table>
            <thead align="left">
            <tr>
              <th style={controller.token ? {width: "40%", paddingLeft: '.4rem'} : {width: "40%", paddingLeft: '.12rem'}} onClick={this.pairSort.bind(this, this.state.sortArr[0], 1)}>{this.intl.get("market-market")}
                {this.state.sortIndexMobile === 1 && <img src={this.state.sortImgMobile}/>}
              </th>
              <th onClick={this.pairSort.bind(this, this.state.sortArr[1], 2)}>{this.intl.get("market-lastPrice")}
                {this.state.sortIndexMobile === 2 && <img src={this.state.sortImgMobile}/>}
              </th>
              <th style={{width: "20%"}} onClick={this.pairSort.bind(this, this.state.sortArr[2], 5)}>{this.intl.get("market-change")}
                {this.state.sortIndexMobile === 5 && <img src={this.state.sortImgMobile}/>}
              </th>
            </tr>
            </thead>
            <tbody>
            {marketPair && marketPair.map((v, index) => {
              return (
                <tr key={index}>
                  <td className="td1">
                    {controller.token && <img
                      src={v.isFavorite ? "/static/mobile/home/icon_sc_pre@2x.png" : "/static/mobile/home/icon_sc@2x.png"}
                      // e => this.addCollect(v, index, e)
                      onClick={e => this.getCollect(v, index, e)}/>}
                    <div className="td1-r">
                      <h3>
                        {v.coinName.toUpperCase()}
                        <small>/{v.marketName.toUpperCase()}</small>
                      </h3>
                      <span>{this.intl.get("market-volume-h5")} {Number(v.volume) && Number(v.volume).formatFixNumberForAmount(v.price_to_cny) || 0}</span>
                    </div>
                  </td>
                  <td className="td2">
                    <b>{Number(v.price).format({number: 'digital'}) || 0}</b>
                    <span>
                      {controller.language === 'zh-CN' && Number(Number(v.priceCN).multi(v.price) || 0).format({
                        number: 'legal',
                        style: {name: 'cny'}
                      }) || Number(Number(v.priceEN).multi(v.price) || 0).format({number: 'legal', style: {name: 'usd'}})}</span>
                  </td>
                  <td className="td3">
                    <a className={v.rise < 0 ? "down" : "up"}>{Number(v.rise).toPercent()}</a>
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
        {this.state.remindPopup && <RemindPopup
          type={this.state.popType}
          msg={this.state.popMsg}
          h5={true}
          autoClose = {true}
          onClose={() => {this.setState({ remindPopup: false });}}/>}
      </div>
    )
  }
}