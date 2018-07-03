export default function en (state){

  const { nameCny, nameUsd, netUrl, applyEmailUrl, contactEmailUrl, addr } = state;

  // 公共、主页及不在其他模块的翻译属于common
  const common = {
    items: 'items',
    inTotal: "In total",
    all: "Total",
    to: 'To',
    page: 'Page',
    go: 'Go',
    home: "home",
    type: "Type",
    exchange: "exchange",
    assets: "assets",
    order: "order list",
    security: "Security center",
    idVerify: "ID verification",
    logOut: "Log out",
    total: "Total",
    volume: "Volume",
    infoView: "Info Overview",
    seeMore: "See more",
    readMore: "Read more",
    yes: "Yes",
    no: "No",
    email: "Email Address",
    phone: "Mobile",
    alter: "Update",
    set: "Settings",
    fundPass: "Funding Password",
    twoStep: "2-Step Verification",
    save: "Save",
    add: "Add",
    cance: 'Cancel',
    delete: 'Delete',
    search: "Search",
    reset: "Reset",
    example: "example",
    or: "or",
    action: "Action",
    buy: "Buy",
    sell: "Sell",
    price: "Price",
    amount: "Amount",
    deposit: "Deposit",
    cny: "CNY",
    usd: "USD",
    state: "Status",
    time: "Time",
    cancel: "Cancel",
    pending: "pending",
    passed: "Passed",
    failed: "Failed",
    fee: "Fee",
    option: "Option",
    setFund: "Funding Password",
    remark: "Comments",
    name: 'Name',
    address: 'Address',
    message: 'Message',
    points: 'Points',
    loginPwd: 'Login password',
    none: 'None',
    addTime: 'Added at',
    loginTime: 'Signed In time',
    equipment: 'Equipment',
    ip: 'IP adress',
    place: 'Place',
    upLoad: 'Upload',
    avgPrice: 'Average deal price',
    pair: 'Exchange Pair',
    dealed: 'Deal done',
    marketPrice: 'Market Price',
    detail: 'Details',
  };
  const asset = {
    "asset-totalAssets": "Total assets (approx)",
    "asset-balance": "Balance",
    "asset-24hQuota": "Withdraw quota in 24H",
    "asset-limitApply": "Apply for a higher withdrawal limit",
    "asset-usedAsset": "Already in used",
    "asset-hideLittle": "Hide small balance",
    "asset-hideZero": "Hide 0 balances",
    "asset-withdraw": "Withdraw",
    "asset-trade": "Trade",
    "asset-currency": "Currency",
    "asset-fullname": "Full name",
    "asset-avail": "Available Balance",
    "asset-lock": "Frozen balance",
    "asset-tobtc": "BTC Valuation",
    "asset-tip1": "Less than0.001BTC",
    "asset-tip2": "No trading has been matched",
    "asset-tip3": "Available balance valuation",
    "asset-records": "Assets records",
    "asset-selectCoin": "Select currency",
    "asset-amount": "Amount",
    "asset-orderLock": "Frozen order",
    "asset-depositTip":
      "OBS! Do not charge any other currencies to {currency} address except {currency}, any other currencies to {currency} address would not be refunded",
    "asset-depositAddress": "deposit address",
    "asset-showQrcode": "Show the QR code",
    "asset-copy": "Copy to clipboard",
    "asset-reminder": "Friendly reminder",
    "asset-depositReminder1":
      "Deposit to {currency} address, {number} confirmations would be needed",
    "asset-depositReminder2-1": "Deposit & Withdraw",
    "asset-depositReminder2-2": "Tracking progress",
    "asset-toTrade": "Trade",
    "asset-depositHistory": "Deposits history",
    "asset-depositTime": "deposit time",
    "asset-depositAmount": "deposit amount",
    "asset-sendAddress": "From",
    "asset-receiveAddress": "To",
    "asset-confirm": "Subscription Period",
    "asset-confirming": "Subscription Period",
    "asset-viewAll": "View all",
    "asset-minWithdraw":
      "OBS：Minimal withdraw amount is{number}{currency};do not withdraw to ICO address,We would not deal with the token in the future.",
    "asset-withdrawAddress": "withdraw address",
    "asset-addAddress": "add address",
    "asset-withdrawAmount": "Amount of Withdrawal",
    "asset-withdrawAvailable": "Available Balance",
    "asset-gasFee": "Gas fee",
    "asset-withdrawActual": "Actual Deposit Amount",
    "asset-inputFundPassword": "Input Funding Password",
    "asset-setFundPassword": "Funding Password",
    "asset-submit": "Submit",
    "asset-withdrawalsHistory": "withdrawals history",
    "asset-withdrawalsTime": "Withdraw time",
    "asset-withdrawalsAmount": "Withdraw quantity",
    "asset-inputName": "Input name",
    "asset-inputAddress": "Input address",
    "asset-export": "Export",
    "asset-transfer": "Transfer",
    "asset-amount2": "amount",
    "asset-balan": "Balance",
    "asset-checkState": "State",
  };
  const market = {
    "market-favorite": "Favorites",
    "market-favorites": "Favourites",
    "market-market": "Market",
    "market-markets": "Markets",
    "market-lastPrice": "Latest price",
    "market-change": "Change",
    "market-change7D": "7D Change",
    "market-currencyInfo": "Currency details",
  };
  const notice = {
    "activity-regist":"Sign up now"
  };
  const order = {
    "order-current": "Current order",
    "order-history": "Order history",
    "order-deal": "Deal history",
    'unDeal': 'Not traded',
    'partDeal': 'Partially filled',
    'totalDeal': 'Filled',
    'reseted': 'Cancelled',
    'reseting':  'Cancelling',
    'overed':  'Complete',
    'hideReset': 'Hide undo',
    "exportOrderRecord": "export",
    'orderDetail': 'order details',
    "order-deal-total": 'total',
    "order-deal-money": 'USD',
    "order-buy": 'Taker',
    "order-sell": 'Maker',
    "order-deal-time": "Transaction Time",
    "order-deal-price": "Transaction Price",
    "order-deal-number": "Processed Amount",
  
  };
  const deal = {
    "deal-limit":"Limit price",
    "deal-market":"Market price",
    "deal-digital":"Digital currency",
    "deal-use":"Available",
    "deal-timeSetting":"Time limit setting",
    "deal-every":"Enter every time",
    "deal-2h":"Enter every two hours",
    "deal-never":"Never enter",
    "deal-inputpwdplease":"To activate no fund password feature, please input fund password for ID authentication first",
    "deal-marketbuy":"Buy for market best price",
    "deal-trunover":"Total",
    "deal-forgetpwd":"Forget password",
    "deal-freepwd":"Free password",
    "deal-inputpwd":"Input fund password",
  };
  const user = {
    "user-score": "My VIP Status",
    "user-base": "Basic Information",
    "user-id": "User ID",
    "user-level": "VIP Level",
    "user-changePwd": "Change password",
    "user-setFund": "After setting up a funding password any fund withdrawals will require password entry.",
    "user-twoVerify": "Once you activate two-step authentication, the following actions will require using a one-time password to accomplish: logins, password changes, withdrawals, trades, and other important actions",
    "user-loginVerify": "Login Verification",
    "user-cashVerify": "Withdrawal Verification",
    "user-fundVerify": "Recover Funding Password Verification",
    "user-googleVerify": "Google Verification",
    "user-bindEmail": "bind/verify email address",
    "user-bindPhone": "Available after binding mobile",
    "user-email": "Email",
    "user-msg": "Message",
    "user-otherSet": "Other settings",
    "user-time": "Timezone",
    "user-noticeSet": "Notification Settings",
    "user-noticeRemind": "Login in/Deposit/Withdraw",
    "user-noticeEmail": "E-mail Notification",
    "user-noticePhone": "SMS Notification",
    "user-noticeBindPhone": "Link your mobile number and start SMS notification",
    "user-ipWhite": "IP Whitelist",
    "user-ipRemind": "OBS! For you convenience and safety, do not add unstable IP address to this white-list (e.g Dial-up Internet access) ",
    "user-ipAddr": "IP address",
    "user-ipExample": "example：216.58.197.238 or 104.244.42.0/24",
    "user-ipAddRemind": "After adding an IP address or range, you will not be able to log in to your account from an IP address outside of this white list.For security reasons, after adding or removing IP addresses, your account will not be able to withdraw cash within 24 hours.You can access",
    "user-ipAddRemind2": "Get current IP Address",
    "user-current": "Active Sessions",
    "user-currentTitle": "These sessions are currently signed in to your account.",
    "user-isCurrent": "If Current",
    "user-out": "Sign out all other sessions",
    "user-records": "Newly 10 records",
    "user-recordType": "Logs Type",
    "user-authNo": "Not for certificate authentication",
    "user-authSucc": "Certificate Authentication Succeed",
    "user-authErr": "Verification state: failed",
    "user-authProcess": "In the certification",
    "user-authSuccRes": "Verification state: approved",
    "user-authErrRes": "Identity verification failed, please try again",
    "user-authProRes": "Verification state: In processing",
    "user-name": "Real-name verification",
    "user-nameRemind": "The information you submit for real name verification must be true and reliable. It must also match the name on your bank account. Once your information is verified it cannot be changed.",
    "user-surname": "Surname",
    "user-forename": "Forename",
    "user-inputSurname": "Input surname",
    "user-inputForename": "Input forename",
    "user-idCard": "ID card",
    "user-passport":  "Passport",
    "user-inputCard": "Please fill in ID card/Passport number",
    "user-photoVerify": "Photo verification",
    "user-idReq": "ID requirements",
    "user-req1": "Id photo: according to the sample, please upload the negative and positive id, face and the font should be clearly visible",
    "user-req2": "Passport: according to the sample, please upload ID passport pages can be positive, face and the font should be clearly visible",
    "user-req3": "Holding a certificate as: according to the sample, please upload photos in hand, please do not block any effective information in the photo. Face and font must be clearly visible,Paper must show ",
    "user-req4": "Paper must show “Just for QB and date",
    "user-req5": "",
    "user-req6": "Image format: less than 10M,  jpg or png format",
    "user-photo": "ID photo",
    "user-photoSure": "I admit to submit certificate information belong to himself, there is no fake and pirated > others documents, for all the consequences resulting from the fake, file documents are to be borne by himself",
    "user-submit": "Submit",
    "user-idFront": "front of ID Card",
    "user-idBack": "back of ID Card",
    "user-idHand": "With ID Card in hand",
    "user-passFront": "front of passport",
    "user-passHand": "With passport in hand",
    "user-addr": "Address proof",
    "user-scoreInfo": "VIP Status",
    "user-scoreLevel": "Current Level",
    "user-scoreDetail": "VIP Levels",
    "user-scoreHistory": "History",
    "user-scoreGet": "How to make more points",
    "user-scoreHave": "Points Earned",
    "user-action": "Action"

  };
  const login = {};
  const help = {
    "help-termsFirst":
      `Ownership and operation of the services offered by ${nameUsd} .com are the property of ${nameUsd} Ltd. (hereinafter referred to as "${nameUsd} .") ${nameUsd} Terms of Service (hereinafter referred to as "Agreement")  defines the rights and obligations of ${nameUsd} users and CoinRising as engaged in various services. Access and/or use of this site constitutes acceptance of and agree to all terms and conditions of this Agreement. ${nameUsd} , as the operator of ${netUrl},  will provide services for users pursuant to this Agreement. Users unwilling to accept the terms of this Agreement shall not access or use this site.`
  };
  return Object.assign(
    {},
    common,
    asset,
    market,
    notice,
    order,
    deal,
    user,
    login,
    help
  );
}
