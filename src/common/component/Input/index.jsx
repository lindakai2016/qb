import React from "react";
import "./style.styl";
/*
  placeholder, 占位文案
  type,  默认default, 可选search1(带搜索按钮),search2(带搜索图标),textarea, select
  value, input的value值
  valueArr, 简单下拉菜单内容
  oriType, input类型 默认input
  onEnter,  回车事件的 handler
  onInput, input 事件的handler
  onSelect, 下拉选择的事件
  onChange, change事件的handler
  onFocus,focus事件的handler
  onBlur, blur事件的handler
  disabled, 设置disable状态
  readOnly,设置readOnly,
  className, 未预设宽高，自定义类名设置宽高，行高,
  children, 类似vue插槽,用作自定义下拉菜单
*/
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value ? this.props.value : "",
      istarget: false,
      showSelect: false
    };

    this.clickoutside = () => {
      if (this.state.istarget) {
        this.state.istarget = false;
        return;
      }
      this.setState({ showSelect: false})
      this.props.clickOutSide && this.props.clickOutSide();
    };
  }
  componentDidMount() {
    window.addEventListener("click", this.clickoutside);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.clickoutside);
  }

  render() {
    this.state.value = this.props.value;
    this.elem = props => {
      let {
        placeholder,
        type,
        value,
        valueArr,
        oriType,
        onEnter,
        onInput,
        onSelect,
        onChange,
        onFocus,
        onBlur,
        clickOutSide,
        disabled,
        readOnly,
        className,
        children
      } = props;
      !oriType && (oriType = "text");
      !["search1", "search2", "textarea", "select"].includes(type) &&
        (type = "default");
      !valueArr && (valueArr = []);
      let element;
      element = (
        <div className={`base-input-wrap ${type}`} onClick={() => { this.state.istarget = true; this.setState({ showSelect: !this.state.showSelect });}}>
          {["default", "search1", "search2", "select"].includes(type) && (
            <input
              ref="input"
              type={oriType}
              className={`${className ? className : ""} ${
                disabled ? "disabled" : ""
              }`}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={placeholder && placeholder}
              onKeyDown={e => {
                if (e.nativeEvent.keyCode !== 13) return;
                this.refs.input.blur();
                onEnter && onEnter(this.refs.input.value);
              }}
              onFocus={() => {
                onFocus && onFocus(this.refs.input.value);
              }}
              onBlur={() => {
                onBlur && onBlur(this.refs.input.value);
              }}
              onInput={() => {
                this.setState({ value: this.refs.input.value });
                onInput && onInput(this.refs.input.value);
              }}
              onChange={() => {
                onChange && onChange(this.refs.input.value);
              }}
              value={this.state.value}
            />
          )}
          {type === "textarea" && (
            <textarea
              ref="input"
              type={oriType}
              className={`${className ? className : ""} ${
                disabled ? "disabled" : ""
              }`}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={placeholder && placeholder}
              onKeyDown={e => {
                if (e.nativeEvent.keyCode !== 13) return;
                this.refs.input.blur();
                onEnter && onEnter(this.refs.input.value);
              }}
              onInput={() => {
                this.setState({ value: this.refs.input.value });
                onInput && onInput(this.refs.input.value);
              }}
              onChange={() => {
                onChange && onChange(this.refs.input.value);
              }}
              value={this.state.value}
            />
          )}
          {type === "search1" && (
            <button
              onClick={() => {
                onEnter && onEnter(this.refs.input.value);
              }}
            />
          )}
          {this.state.showSelect && valueArr.length > 0 && (
            <ul className="search-list">
              {valueArr.map((item, index) => <li key={index} onClick={()=>{
                  this.setState({value: item});
                  this.setState({ showSelect: false})
                  onSelect && onSelect(item)
                }}>{item}</li>)}
            </ul>
          )}
          {children && children}
        </div>
      );
      return element;
    };
    return this.elem(this.props);
  }
}