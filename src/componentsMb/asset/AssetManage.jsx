import React, { Component } from "react";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import exchangeViewBase from "../../components/ExchangeViewBase";
import Balance from "./children/Balance";
import History from "./children/History";
import BalanceDetail from "./children/balanceDetail";
import Charge from "./children/Charge";
import Search from "./children/Search";
import Select from "./children/Select";
import Withdraw from "./children/Withdraw";
import Address from "./children/Address";
import "./style/asset.styl"

export default class AssetManage extends exchangeViewBase {
  constructor(props) {
    super(props);
    this.state = {};
    this.controller = props.controller;
  }

  componentWillMount() {}

  componentDidMount() { }

  componentWillUpdate() { }

  render() {
    let match = this.props.match;

    const Bala = ({ match, location, history }) => {
      return <Balance controller={this.controller} location={location} history={history}/>;
    };

    const Hist = ({ match, location }) => {
      return <History controller={this.controller} location={location} />;
    };

    const Detail = ({ match, location, history }) => {
      return <BalanceDetail controller={this.controller} location={location} history={history} />;
    };

    const Char = ({ match, location, history }) => {
        return <Charge controller={this.controller} location={location} history={history} />;
    };

    const Srch = ({ match, location, history }) => {
        return <Search controller={this.controller} location={location} history={history} />;
    };

    const Sel = ({ match, location, history}) => {
        return <Select controller={this.controller} location={location} history={history} />;
    };

    const WDraw = ({ match, location, history }) => {
        return <Withdraw controller={this.controller} location={location} history={history} />;
    };

    const Addr = ({ match, location, history }) => {
        return <Address controller={this.controller} location={location} history={history} />;
    };

    return (
      <div className="asset-mb">
        <Switch>
          <Route path={`${match.url}/balance`} component={Bala} />
          <Route path={`${match.url}/dashboard`} component={Hist} />
          <Route path={`${match.url}/detail`} component={Detail} />
          <Route path={`${match.url}/charge`} component={Char} />
          <Route path={`${match.url}/withdraw`} component={WDraw} />
          <Route path={`${match.url}/search`} component={Srch} />
          <Route path={`${match.url}/select`} component={Sel} />
          <Route path={`${match.url}/address`} component={Addr} />
          <Redirect to={`${match.url}/balance`} />
        </Switch>
      </div>
    );
  }
}
