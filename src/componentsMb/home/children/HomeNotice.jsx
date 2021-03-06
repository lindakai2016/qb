import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import ExchangeViewBase from '../../../components/ExchangeViewBase'

export default class HomeNotice extends ExchangeViewBase {
    constructor(props) {
        super(props);
        this.state = {
            top1: 0,
            top2: 100,
            criticalArr: [0, 100]
        };
        const {controller} = props;
        // 绑定view
        controller.setView(this);
        // 初始化数据，数据来源即store里面的state
        this.state = Object.assign(this.state, controller.initState);
        this.getNoticeCon = controller.getNoticeCon.bind(controller) // 获取公告
    }

    componentWillMount(){}

    async componentDidMount() {
        await this.getNoticeCon(0, 5);
        let result = this.state.noticeList && this.state.noticeList.data || [];
        if (result.length) {
            this.setState({
                    top2: Math.ceil(result.length) * 100,
                    criticalArr: Array.from(
                        {length: Math.ceil(result.length + 1)},
                        (item, index) => index * 100
                    )
                },
                () => {
                    this.props.controller.swiper(
                        "carousel",
                        this,
                        "top1",
                        "top2",
                        this.state.criticalArr,
                        10,
                        3000
                    );
                }
            );
        }
    }

    componentWillUpdate(...parmas) {

    }

    componentWillUnmount() {
        this.props.controller.swiperStop("carousel");
    }

    render() {
        let noticeList = this.state.noticeList && this.state.noticeList.data || [];
        let lang = this.props.controller.configData.language;
        return <div className={`${noticeList.length ? "" : "hide"} home-notice-wrap`}>
             <div className="home-notice-content">
                <ul style={{top: this.state.top1 + "%"}}>
                    {noticeList.map((v, index) =>
                        <li key={index}>
                        <a>
                            <img src="/static/mobile/home/img_lb@2x.png"/>
                            <span>{v.subject}</span>
                        </a>
                    </li>)}
                </ul>
                <ul style={{top: this.state.top2 + "%"}}>
                    {noticeList.map((v, index) =>
                        <li key={index}>
                        <a>
                            <img src="/static/mobile/home/img_lb@2x.png"/>
                            <span>{v.subject}</span>
                        </a>
                    </li>)}
                </ul>
            </div>
        </div>;
    }
}
