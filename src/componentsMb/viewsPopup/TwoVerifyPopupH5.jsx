import React, { Component } from "react";

import ExchangeViewBase from "../../components/ExchangeViewBase";
import Input from "../../common/component/Input";
import Button from "../../common/component/Button";
import "./stylus/towVerifyPopupH5.styl";

// destroy 组件销毁时执行的方法
// onClose 关闭弹窗
// onConfirm 确认触发的handel
// onSend 发送的handel
// type 验证类型
export default class VerifyPopupH5 extends ExchangeViewBase {
  constructor(props) {
    super(props);
    this.state = {
      type: 2,
      // type: this.props.type, //0,1,2 邮箱、谷歌、短信
      title: ["邮箱安全验证", "谷歌安全验证", "手机安全验证"],
      holderText: ["邮箱验证码", "", "手机验证码"],
      googleCode: ["", "", "", "", "", ""]
    };

  }
  componentWillUnmount() {
    this.props.destroy && this.props.destroy();
  }
  render() {
    let { title, type, holderText } = this.state;
    let { onClose, googleCode, dealInput, delNum  } = this.props;
    return (
      <div className="two-verify-popup-h5">
        <div className="poup">
          <h4>
            {title[type]}{" "}
            <i
              onClick={() => {
                onClose && onClose();
              }}
            >
              取消
            </i>
          </h4>
          {[0, 2].includes(type) ? (
            <div className="normal clearfix">
              <Input placeholder={holderText[type]} />
              <Button title="获取验证码" type="base" />
            </div>
          ) : (
            <div className="google">
              {googleCode.map((v, index) => (
                <input
                  className={`item-code`}
                  ref={`input${index}`}
                  type="password"
                  key={index}
                  maxLength={1}
                  value={googleCode[index]}
                  onInput={e => {
                    dealInput(index, e.target.value, this);
                  }}
                  onKeyDown={e => {
                    delNum(index, e, this);
                  }}
                />
              ))}
            </div>
          )}
          <Button title="确定" type="base" className="submit" />
        </div>
      </div>
    );
  }
}
