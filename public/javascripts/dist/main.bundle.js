webpackJsonp([0],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _antd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchUser = function (_React$Component) {
    _inherits(SearchUser, _React$Component);

    function SearchUser(props) {
        _classCallCheck(this, SearchUser);

        var _this = _possibleConstructorReturn(this, (SearchUser.__proto__ || Object.getPrototypeOf(SearchUser)).call(this, props));

        _this.state = {
            SearchDate: ""
        };
        return _this;
    }

    _createClass(SearchUser, [{
        key: "emitEmpty",
        value: function emitEmpty() {
            this.SearchDateInput.focus();
            this.setState({ SearchDate: '' });
            this.props.getProduct();
        }
    }, {
        key: "onChangeSearchDate",
        value: function onChangeSearchDate(e) {
            this.setState({ SearchDate: e.target.value });
            (0, _ajax2.default)({
                type: "get",
                url: "http://localhost:3000/product/searchProduct",
                data: { value: e.target.value },
                success: function (data) {
                    data = JSON.parse(data);
                    this.props.getSearchData(data);
                }.bind(this)
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var SearchDate = this.state.SearchDate;

            var suffix = SearchDate ? _react2.default.createElement(_antd.Icon, { type: "close-circle", onClick: this.emitEmpty.bind(this) }) : null;
            return _react2.default.createElement(_antd.Input, {
                placeholder: "\u8BF7\u8F93\u5165\u540D\u5B57",
                prefix: _react2.default.createElement(_antd.Icon, { type: "user" }),
                suffix: suffix,
                value: SearchDate,
                onChange: this.onChangeSearchDate.bind(this),
                ref: function ref(node) {
                    return _this2.SearchDateInput = node;
                }
            });
        }
    }]);

    return SearchUser;
}(_react2.default.Component);

exports.default = SearchUser;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (params) {
    var paramStr = "";
    var fetchObj;
    for (var key in params.data) {
        paramStr += key + "=" + params.data[key] + "&";
    }
    if (params.type != "post" && params.type != "POST") {
        params.url += "?" + paramStr;
        fetchObj = fetch(params.url, { credentials: 'include' });
    } else {
        fetchObj = fetch(params.url, {
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: paramStr,
            credentials: 'include'
        });
    }
    fetchObj.then(function (res) {
        if (res.ok) {
            res.text().then(function (data) {
                try {
                    params.success(JSON.parse(data));
                } catch (e) {
                    params.success(data);
                }
            });
        }
    });
};

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(118);

var _index = __webpack_require__(554);

var _index2 = _interopRequireDefault(_index);

var _users = __webpack_require__(568);

var _users2 = _interopRequireDefault(_users);

var _Product = __webpack_require__(556);

var _Product2 = _interopRequireDefault(_Product);

var _login = __webpack_require__(555);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Font from "Font";
_reactDom2.default.render(_react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.hashHistory },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: "/" },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _login2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "log", component: _login2.default }),
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: "index", component: _index2.default },
			_react2.default.createElement(_reactRouter.IndexRedirect, { to: "users" }),
			"// ",
			_react2.default.createElement(_reactRouter.IndexRoute, { component: _users2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "/users", component: _users2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "/Product", component: _Product2.default })
		)
	)
), document.getElementById('content'));

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (a, num) {
    var a = a * 1000;
    var newDate = new Date();
    Date.prototype.format = function (format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    };
    newDate.setTime(a);
    switch (num) {
        case 1:
            return newDate.format('yyyy/MM/dd h:m:s');
            break;
        case 2:
            return newDate.format('dd');
            break;
        case 3:
            return newDate.format('h:mm');
            break;
        default:
            break;
    }
};

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(118);

var _antd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _antd.Menu.SubMenu;

var Index = function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index(props) {
		_classCallCheck(this, Index);

		return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
	}

	_createClass(Index, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					_antd.Row,
					{ style: { height: 60, background: "#3dca99", color: "#f8f9fb", fontWeight: "700", lineHeight: "60px", fontSize: "18px" } },
					_react2.default.createElement(
						_antd.Col,
						null,
						_react2.default.createElement(Header, null)
					)
				),
				_react2.default.createElement(
					_antd.Row,
					{ style: { overflow: "hidden" } },
					_react2.default.createElement(
						_antd.Col,
						{ span: "6", style: { float: "left" } },
						_react2.default.createElement(Menus, null)
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: "18", style: { float: "right" } },
						this.props.children
					)
				)
			);
		}
	}]);

	return Index;
}(_react2.default.Component);

exports.default = Index;

var Menus = function (_React$Component2) {
	_inherits(Menus, _React$Component2);

	function Menus(props) {
		_classCallCheck(this, Menus);

		var _this2 = _possibleConstructorReturn(this, (Menus.__proto__ || Object.getPrototypeOf(Menus)).call(this, props));

		_this2.state = {
			theme: 'dark',
			current: "1"
		};
		return _this2;
	}

	_createClass(Menus, [{
		key: "handleClick",
		value: function handleClick(e) {
			this.setState({
				current: e.key
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					_antd.Menu,
					{ className: "menu", onClick: this.handleClick.bind(this), selectedKeys: [this.state.current], defaultOpenKeys: ['sub1'], theme: this.state.theme, style: { height: 612, paddingTop: 20, fontSize: "12px" }, mode: "inline" },
					_react2.default.createElement(
						SubMenu,
						{ key: "sub1", title: _react2.default.createElement(
								"span",
								null,
								_react2.default.createElement(_antd.Icon, { type: "mail" }),
								_react2.default.createElement(
									"span",
									{ style: { fontSize: "16px" } },
									"\u7CFB\u7EDF\u7BA1\u7406"
								)
							) },
						_react2.default.createElement(
							_antd.Menu.Item,
							{ key: "1", style: { fontSize: "16px" } },
							"\u7528\u6237\u7BA1\u7406",
							_react2.default.createElement(_reactRouter.Link, { to: "/users" })
						),
						_react2.default.createElement(
							_antd.Menu.Item,
							{ key: "2", style: { fontSize: "16px" } },
							"\u9879\u76EE\u7BA1\u7406",
							_react2.default.createElement(_reactRouter.Link, { to: "/Product" })
						)
					),
					_react2.default.createElement(
						SubMenu,
						{ key: "sub2", title: _react2.default.createElement(
								"span",
								null,
								_react2.default.createElement(_antd.Icon, { type: "appstore" }),
								_react2.default.createElement(
									"span",
									{ style: { fontSize: "16px" } },
									"\u7CFB\u7EDF\u8BBE\u7F6E"
								)
							) },
						_react2.default.createElement(
							_antd.Menu.Item,
							{ key: "1", style: { fontSize: "16px" }, disabled: true },
							"\u7BA1\u7406\u4E00"
						),
						_react2.default.createElement(
							_antd.Menu.Item,
							{ key: "2", style: { fontSize: "16px" }, disabled: true },
							"\u7BA1\u7406\u4E8C"
						)
					),
					_react2.default.createElement(
						_antd.Menu.Item,
						{ key: "3", style: { fontSize: "16px" } },
						_react2.default.createElement(_antd.Icon, { type: "meh" }),
						"\u9000\u51FA"
					)
				)
			);
		}
	}]);

	return Menus;
}(_react2.default.Component);

var Header = function (_React$Component3) {
	_inherits(Header, _React$Component3);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this3 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this3.state = {};
		return _this3;
	}
	//获取用户对象


	_createClass(Header, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					_antd.Row,
					null,
					_react2.default.createElement(
						_antd.Col,
						{ span: "4", push: "1" },
						_react2.default.createElement(
							"div",
							{ className: "logo" },
							"\u540E\u53F0\u7BA1\u7406"
						)
					),
					_react2.default.createElement(_antd.Col, { span: "4", style: { float: "right" } })
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_React$Component) {
    _inherits(Users, _React$Component);

    function Users(props) {
        _classCallCheck(this, Users);

        return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));
    }

    _createClass(Users, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    "\u54C8\u54C8"
                )
            );
        }
    }]);

    return Users;
}(_react2.default.Component);

exports.default = Users;

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _productList = __webpack_require__(558);

var _productList2 = _interopRequireDefault(_productList);

var _addProduct = __webpack_require__(557);

var _addProduct2 = _interopRequireDefault(_addProduct);

var _upDate = __webpack_require__(560);

var _upDate2 = _interopRequireDefault(_upDate);

var _searchProduct = __webpack_require__(1000);

var _searchProduct2 = _interopRequireDefault(_searchProduct);

var _antd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_React$Component) {
    _inherits(Users, _React$Component);

    function Users(props) {
        _classCallCheck(this, Users);

        var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));

        _this.state = {
            data: {},
            searchData: {},
            loading: false,
            updateVisible: false
        };
        return _this;
    }

    _createClass(Users, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getProduct();
        }
        // 显示全部

    }, {
        key: "getProduct",
        value: function getProduct() {
            (0, _ajax2.default)({
                type: "get",
                url: "http://localhost:3000/product/showProject",
                success: function (data) {
                    var data = JSON.parse(data);
                    this.setState({
                        data: data
                    });
                }.bind(this)
            });
        }
    }, {
        key: "getSearchData",

        // 获取搜索数据
        value: function getSearchData(data) {
            this.setState({ data: data });
        }
    }, {
        key: "showUpdateModal",

        // 打开修改模态框
        value: function showUpdateModal(id) {
            (0, _ajax2.default)({
                type: "post",
                url: "http://localhost:3000/product/findById",
                data: { id: id },
                success: function (data) {
                    var data = JSON.parse(data);
                    this.setState({
                        searchData: data,
                        updateVisible: true
                    });
                }.bind(this)
            });
        }
    }, {
        key: "closeUpdateModal",

        // 关闭修改模态框
        value: function closeUpdateModal() {
            this.setState({
                loading: false,
                updateVisible: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _antd.Card,
                    { title: "\u9879\u76EE\u7BA1\u7406" },
                    _react2.default.createElement(
                        _antd.Row,
                        null,
                        _react2.default.createElement(
                            _antd.Col,
                            { span: "8" },
                            _react2.default.createElement(_addProduct2.default, { getProduct: this.getProduct.bind(this) })
                        ),
                        _react2.default.createElement(_antd.Col, { span: "8" }),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: "8" },
                            _react2.default.createElement(_searchProduct2.default, { getSearchData: this.getSearchData.bind(this), searchData: this.state.data, getProduct: this.getProduct.bind(this) })
                        )
                    ),
                    _react2.default.createElement(_upDate2.default, { loading: this.state.loading, searchData: this.state.searchData, updateVisible: this.state.updateVisible, getProduct: this.getProduct.bind(this), closeModal: this.closeUpdateModal.bind(this) }),
                    _react2.default.createElement(_productList2.default, { showModal: this.showUpdateModal.bind(this), UserList: this.state.data, getProduct: this.getProduct.bind(this) })
                )
            );
        }
    }]);

    return Users;
}(_react2.default.Component);

exports.default = Users;

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _antd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var createForm = _antd.Form.create;
var Option = _antd.Select.Option;

var formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};

var formInputLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 }
};

function getBase64(img, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
        return callback(reader.result);
    });
    reader.readAsDataURL(img);
}

var AddInfo = function (_React$Component) {
    _inherits(AddInfo, _React$Component);

    function AddInfo(props) {
        _classCallCheck(this, AddInfo);

        var _this = _possibleConstructorReturn(this, (AddInfo.__proto__ || Object.getPrototypeOf(AddInfo)).call(this, props));

        _this.state = {
            trendOptionValue: ["没有倾向", "全职", "兼职", "团队", "个人"],
            cycleOptionValue: ["小于一周", "一个月", "三个月", "六个月", "六个月以上"],
            flagOptionValue: ["已完成", "未完成", "招募中"],
            typeOptionValue: [],
            loading: false,
            visible: false
        };
        return _this;
    }

    _createClass(AddInfo, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getType();
            this.showOptionValue();
        }
    }, {
        key: "showModal",


        // 控制模态框开
        value: function showModal() {
            this.setState({
                visible: true
            });
        }
    }, {
        key: "handleOk",


        // 模态框点击确定/提交数据
        value: function handleOk() {
            var value = this.props.form.getFieldsValue();
            // 获取与转化时间戳
            var timestamp = Date.parse(new Date());
            timestamp = timestamp / 1000;
            value.projectType = value.type + "/" + value.projectType;
            value.time = timestamp;

            if (value) {
                this.setState({ loading: true });
                (0, _ajax2.default)({
                    type: "post",
                    url: "http://localhost:3000/product/addProduct",
                    data: value,
                    success: function () {
                        this.resetForm();
                        this.props.getProduct();
                    }.bind(this)
                });
            }
        }
    }, {
        key: "resetForm",


        // 重置表单
        value: function resetForm() {
            this.props.form.resetFields();
            this.setState({
                loading: false,
                visible: false
            });
        }
    }, {
        key: "handleCancel",

        // 控制模态框关
        value: function handleCancel() {
            this.setState({ visible: false });
            this.resetForm();
        }
    }, {
        key: "locationValue",


        // 地区选项
        value: function locationValue(value) {
            this.setState({
                userLocation: value
            });
        }
    }, {
        key: "typeValue",

        // 类型选项
        value: function typeValue(value) {
            this.setState({
                userType: value
            });
        }
    }, {
        key: "experienceValue",


        // 年限选项
        value: function experienceValue(value) {
            this.setState({
                userExperience: value
            });
        }
    }, {
        key: "getType",

        // 获取分类
        value: function getType() {
            (0, _ajax2.default)({
                type: "get",
                url: "http://localhost:3000/product/type",
                success: function (data) {
                    var data = JSON.parse(data);
                    var typeOptionValue = data.map(function (value) {
                        return _react2.default.createElement(
                            Option,
                            { value: value._id, key: value.name },
                            value.name
                        );
                    });
                    this.setState({
                        typeOptionValue: typeOptionValue
                    });
                }.bind(this)
            });
        }
    }, {
        key: "showOptionValue",

        // 设置下拉框值
        value: function showOptionValue() {
            this.setState({
                cycleOptionValue: this.state.cycleOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                }),
                trendOptionValue: this.state.trendOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                }),
                flagOptionValue: this.state.flagOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                })
            });
        }
    }, {
        key: "render",
        value: function render() {
            var form = this.props.form;
            var getFieldDecorator = this.props.form.getFieldDecorator;


            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _antd.Button,
                    { type: "primary", onClick: this.showModal.bind(this) },
                    "\u589E\u52A0"
                ),
                _react2.default.createElement(
                    _antd.Modal,
                    {
                        visible: this.state.visible,
                        title: "\u589E\u52A0\u5BA2\u6237",
                        onOk: this.handleOk.bind(this),
                        onCancel: this.handleCancel.bind(this),
                        footer: [_react2.default.createElement(
                            _antd.Button,
                            { key: "back", size: "large", onClick: this.handleCancel.bind(this) },
                            "\u53D6\u6D88"
                        ), _react2.default.createElement(
                            _antd.Button,
                            { key: "submit", type: "primary", size: "large", loading: this.state.loading, onClick: this.handleOk.bind(this) },
                            "\u786E\u5B9A"
                        )]
                    },
                    _react2.default.createElement(
                        _antd.Form,
                        { horizontal: true },
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u540D\u5B57" }, formItemLayout),
                                    getFieldDecorator('name', {})(_react2.default.createElement(_antd.Input, null))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u4EF7\u683C" }, formItemLayout),
                                    getFieldDecorator('price', {})(_react2.default.createElement(_antd.Input, { addonAfter: "\u5143" }))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u516C\u53F8" }, formItemLayout),
                                    getFieldDecorator('company', {})(_react2.default.createElement(_antd.Input, null))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u7C7B\u578B" }, formItemLayout),
                                    getFieldDecorator('type', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.typeOptionValue
                                    ))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u72B6\u6001" }, formItemLayout),
                                    getFieldDecorator('flag', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.flagOptionValue
                                    ))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u503E\u5411" }, formItemLayout),
                                    getFieldDecorator('trend', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.trendOptionValue
                                    ))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u5468\u671F" }, formItemLayout),
                                    getFieldDecorator("cycle", {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.cycleOptionValue
                                    ))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u5206\u7C7B" }, formItemLayout),
                                    getFieldDecorator('projectType', {})(_react2.default.createElement(_antd.Input, null))
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddInfo;
}(_react2.default.Component);

exports.default = AddInfo = createForm()(AddInfo);

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _setTime = __webpack_require__(553);

var _setTime2 = _interopRequireDefault(_setTime);

var _antd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createForm = _antd.Form.create;

var UserList = function (_React$Component) {
    _inherits(UserList, _React$Component);

    function UserList(props) {
        _classCallCheck(this, UserList);

        var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(UserList, [{
        key: "Del",

        // 删除订单
        value: function Del(id) {
            (0, _ajax2.default)({
                type: "get",
                url: "http://localhost:3000/product/removeProduct",
                data: { id: id },
                success: function () {
                    this.props.getProduct();
                }.bind(this)
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var columns = [{ title: '姓名', dataIndex: 'name', key: 'name', width: 150, fixed: 'left' }, { title: '价格', dataIndex: 'price', key: 'price' }, { title: '公司', dataIndex: 'company', key: 'company' }, { title: '类型', dataIndex: 'type', key: 'type' }, { title: '状态', dataIndex: 'flag', key: 'flag' }, { title: '分类', dataIndex: 'projectType', key: 'projectType' }, { title: '倾向', dataIndex: 'trend', key: 'trend' }, { title: '周期', dataIndex: 'cycle', key: 'cycle' }, { title: '发布时间', dataIndex: 'time', key: 'time' }, {
                title: '操作', dataIndex: '', key: 'x', fixed: 'right', width: 100, render: function render(text, record) {
                    var content = _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "a",
                            { onClick: function onClick() {
                                    _this2.Del(text.key);
                                } },
                            "\u786E\u8BA4 \u5220\u9664"
                        )
                    );
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            _antd.Button,
                            { type: "primary", onClick: function onClick() {
                                    return _this2.props.showModal(text.key);
                                } },
                            " \u4FEE\u6539"
                        ),
                        _react2.default.createElement(
                            _antd.Popover,
                            { content: content, title: "\u786E\u5B9A\u5220\u9664\uFF1F", trigger: "click" },
                            _react2.default.createElement(
                                "a",
                                null,
                                " \u5220\u9664"
                            )
                        ),
                        "  "
                    );
                } }];
            var data = this.props.UserList;
            var dataList = [];
            var len = data.length,
                i;
            for (i = 0; i < len; i++) {
                dataList.push({
                    key: data[i]._id,
                    name: data[i].name,
                    price: data[i].price,
                    type: data[i].type ? data[i].type.name : "",
                    company: data[i].company,
                    flag: data[i].flag,
                    projectType: data[i].projectType,
                    trend: data[i].trend,
                    cycle: data[i].cycle,
                    time: (0, _setTime2.default)(data[i].time, 1)
                });
            }
            var page = {
                pageSize: 5
            };
            return _react2.default.createElement(_antd.Table, {
                columns: columns,
                dataSource: dataList,
                pagination: page,
                scroll: { x: 1300 }
            });
        }
    }]);

    return UserList;
}(_react2.default.Component);

exports.default = UserList = createForm()(UserList);

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _antd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var createForm = _antd.Form.create;
var Option = _antd.Select.Option;

var formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};

var formInputLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 }
};

var AddInfo = function (_React$Component) {
    _inherits(AddInfo, _React$Component);

    function AddInfo(props) {
        _classCallCheck(this, AddInfo);

        var _this = _possibleConstructorReturn(this, (AddInfo.__proto__ || Object.getPrototypeOf(AddInfo)).call(this, props));

        _this.state = {
            trendOptionValue: ["没有倾向", "全职", "兼职", "团队", "个人"],
            cycleOptionValue: ["小于一周", "一个月", "三个月", "六个月", "六个月以上"],
            flagOptionValue: ["已完成", "未完成", "招募中"],
            typeOptionValue: [],
            loading: false,
            visible: false
        };
        return _this;
    }

    _createClass(AddInfo, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getType();
            this.showOptionValue();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(newProps, newState) {
            if (this.props.searchData != newProps.searchData) {
                // 设置表单
                if (newProps.searchData[0].type) {
                    newProps.searchData[0].type = newProps.searchData[0].type._id;
                }
                this.props.form.setFieldsValue(newProps.searchData[0]);
            }
            return true;
        }
    }, {
        key: "showModal",

        // 控制模态框开
        value: function showModal() {
            this.setState({
                visible: true
            });
        }
    }, {
        key: "handleOk",

        // 模态框点击确定/提交数据
        value: function handleOk() {
            var value = this.props.form.getFieldsValue();
            value.id = this.props.searchData[0]._id;
            this.setState({ loading: true });
            (0, _ajax2.default)({
                type: "get",
                url: "http://localhost:3000/product/update",
                data: value,
                success: function () {
                    this.resetForm();
                    this.props.getProduct();
                }.bind(this)
            });
        }
    }, {
        key: "resetForm",

        // 重置表单
        value: function resetForm() {
            this.props.form.resetFields();
            this.handleCancel();
        }
    }, {
        key: "handleCancel",

        // 控制模态框关
        value: function handleCancel() {
            this.props.closeModal();
        }
    }, {
        key: "getType",


        // 获取分类
        value: function getType() {
            (0, _ajax2.default)({
                type: "get",
                url: "http://localhost:3000/product/type",
                success: function (data) {
                    var data = JSON.parse(data);
                    this.setState({
                        typeOptionValue: data.map(function (value) {
                            return _react2.default.createElement(
                                Option,
                                { value: value._id, key: value.name },
                                value.name
                            );
                        })
                    });
                }.bind(this)
            });
        }
    }, {
        key: "showOptionValue",

        // 设置下拉框值
        value: function showOptionValue() {
            this.setState({
                cycleOptionValue: this.state.cycleOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                }),
                trendOptionValue: this.state.trendOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                }),
                flagOptionValue: this.state.flagOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                })
            });
        }
    }, {
        key: "render",
        value: function render() {
            var form = this.props.form;
            var getFieldDecorator = this.props.form.getFieldDecorator;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _antd.Modal,
                    {
                        visible: this.props.updateVisible,
                        title: "\u589E\u52A0\u5BA2\u6237",
                        onOk: this.handleOk.bind(this),
                        onCancel: this.handleCancel.bind(this),
                        footer: [_react2.default.createElement(
                            _antd.Button,
                            { key: "back", size: "large", onClick: this.handleCancel.bind(this) },
                            "\u53D6\u6D88"
                        ), _react2.default.createElement(
                            _antd.Button,
                            { key: "submit", type: "primary", size: "large", loading: this.props.loading, onClick: this.handleOk.bind(this) },
                            "\u786E\u5B9A"
                        )]
                    },
                    _react2.default.createElement(
                        _antd.Form,
                        { horizontal: true },
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u540D\u5B57" }, formItemLayout),
                                    getFieldDecorator('name', {})(_react2.default.createElement(_antd.Input, null))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u4EF7\u683C" }, formItemLayout),
                                    getFieldDecorator('price', {})(_react2.default.createElement(_antd.Input, { addonAfter: "\u5143" }))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u516C\u53F8" }, formItemLayout),
                                    getFieldDecorator('company', {})(_react2.default.createElement(_antd.Input, null))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u7C7B\u578B" }, formItemLayout),
                                    getFieldDecorator('type', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.typeOptionValue
                                    ))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u72B6\u6001" }, formItemLayout),
                                    getFieldDecorator('flag', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.flagOptionValue
                                    ))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u503E\u5411" }, formItemLayout),
                                    getFieldDecorator('trend', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.trendOptionValue
                                    ))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u5468\u671F" }, formItemLayout),
                                    getFieldDecorator("cycle", {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.cycleOptionValue
                                    ))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u5206\u7C7B" }, formItemLayout),
                                    getFieldDecorator('projectType', {})(_react2.default.createElement(_antd.Input, null))
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddInfo;
}(_react2.default.Component);

exports.default = AddInfo = createForm()(AddInfo);

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _antd = __webpack_require__(20);

var _userUpload = __webpack_require__(567);

var _userUpload2 = _interopRequireDefault(_userUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var createForm = _antd.Form.create;
var Option = _antd.Select.Option;

var formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};

var formInputLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 }
};

function getBase64(img, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
        return callback(reader.result);
    });
    reader.readAsDataURL(img);
}

var AddInfo = function (_React$Component) {
    _inherits(AddInfo, _React$Component);

    function AddInfo(props) {
        _classCallCheck(this, AddInfo);

        var _this = _possibleConstructorReturn(this, (AddInfo.__proto__ || Object.getPrototypeOf(AddInfo)).call(this, props));

        _this.state = {
            locationOptionValue: ["北京", "上海", "深圳", "成都", "武汉", "长沙", "杭州", "国外", "其他"],
            typeOptionValue: ["全职", "兼职", "团队", "自由职业"],
            experienceOptionValue: ["1年", "2年", "3年", "4年", "5年", "6年", "7年", "8年", "9年", "10年及以上"],
            // userLocation:"",
            // userType: "",
            // userExperience: "",
            loading: false,
            visible: false,
            homeImg: "",
            detailsImg: "",
            detailsImgUrl: "",
            homeImageUrl: ""
        };
        return _this;
    }

    _createClass(AddInfo, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.showOptionValue();
        }
    }, {
        key: "showModal",


        // 控制模态框开
        value: function showModal() {
            this.setState({
                visible: true
            });
        }
    }, {
        key: "getHomeImg",

        // 获取首页图
        value: function getHomeImg(info) {
            var _this2 = this;

            if (info.file.status === 'done') {
                // Get this url from response in real world.
                this.setState({ homeImg: info.file.response });
                getBase64(info.file.originFileObj, function (imageUrl) {
                    return _this2.setState({ homeImageUrl: imageUrl });
                });
            }
        }
        // 获取介绍页图片

    }, {
        key: "getDetailsImg",
        value: function getDetailsImg(info) {
            var _this3 = this;

            if (info.file.status === 'done') {
                // Get this url from response in real world.
                this.setState({ detailsImg: info.file.response });
                getBase64(info.file.originFileObj, function (imageUrl) {
                    return _this3.setState({ detailsImgUrl: imageUrl });
                });
            }
        }
        // 模态框点击确定/提交数据

    }, {
        key: "handleOk",
        value: function handleOk() {
            var value = this.props.form.getFieldsValue();
            value.userPic = this.state.homeImg;
            value.indexPic = this.state.detailsImg;
            value.volume = 0 + "单";
            if (value) {
                this.setState({ loading: true });
                (0, _ajax2.default)({
                    type: "post",
                    url: "http://localhost:3000/users/addUesr",
                    data: value,
                    success: function () {
                        this.resetForm();
                        this.props.getUsers();
                    }.bind(this)
                });
            }
        }
    }, {
        key: "resetForm",


        // 重置表单
        value: function resetForm() {
            this.props.form.resetFields();
            this.setState({
                loading: false,
                visible: false,
                homeImg: "",
                detailsImg: "",
                detailsImgUrl: "",
                homeImageUrl: ""
            });
        }
    }, {
        key: "handleCancel",

        // 控制模态框关
        value: function handleCancel() {
            this.setState({ visible: false });
            this.resetForm();
        }
    }, {
        key: "locationValue",


        // 地区选项
        value: function locationValue(value) {
            this.setState({
                userLocation: value
            });
        }
    }, {
        key: "typeValue",

        // 类型选项
        value: function typeValue(value) {
            this.setState({
                userType: value
            });
        }
    }, {
        key: "experienceValue",


        // 年限选项
        value: function experienceValue(value) {
            this.setState({
                userExperience: value
            });
        }
    }, {
        key: "showOptionValue",


        // 设置下拉框值
        value: function showOptionValue() {
            this.setState({
                locationOptionValue: this.state.locationOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                }),
                typeOptionValue: this.state.typeOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                }),
                experienceOptionValue: this.state.experienceOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                })
            });
        }
    }, {
        key: "render",
        value: function render() {
            var form = this.props.form;
            var getFieldDecorator = this.props.form.getFieldDecorator;


            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _antd.Button,
                    { type: "primary", onClick: this.showModal.bind(this) },
                    "\u589E\u52A0"
                ),
                _react2.default.createElement(
                    _antd.Modal,
                    {
                        visible: this.state.visible,
                        title: "\u589E\u52A0\u5BA2\u6237",
                        onOk: this.handleOk.bind(this),
                        onCancel: this.handleCancel.bind(this),
                        footer: [_react2.default.createElement(
                            _antd.Button,
                            { key: "back", size: "large", onClick: this.handleCancel.bind(this) },
                            "\u53D6\u6D88"
                        ), _react2.default.createElement(
                            _antd.Button,
                            { key: "submit", type: "primary", size: "large", loading: this.state.loading, onClick: this.handleOk.bind(this) },
                            "\u786E\u5B9A"
                        )]
                    },
                    _react2.default.createElement(
                        _antd.Form,
                        { horizontal: true },
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u59D3\u540D" }, formItemLayout),
                                    getFieldDecorator('name', {})(_react2.default.createElement(_antd.Input, null))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u62A5\u4EF7" }, formItemLayout),
                                    getFieldDecorator('offer', {})(_react2.default.createElement(_antd.Input, { addonAfter: "\u5143/\u5929" }))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u6807\u7B7E" }, formItemLayout),
                                    getFieldDecorator('self_title', {})(_react2.default.createElement(_antd.Input, null))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u5E74\u9650" }, formItemLayout),
                                    getFieldDecorator('experience', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.experienceOptionValue
                                    ))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u5730\u533A" }, formItemLayout),
                                    getFieldDecorator('location', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.locationOptionValue
                                    ))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u7C7B\u578B" }, formItemLayout),
                                    getFieldDecorator('type', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.typeOptionValue
                                    ))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u804C\u4F4D" }, formItemLayout),
                                    getFieldDecorator("jobs", {})(_react2.default.createElement(_antd.Input, null))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u63CF\u8FF0" }, formItemLayout),
                                    getFieldDecorator("introduction", {})(_react2.default.createElement(_antd.Input, null))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "24" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u7B80\u4ECB" }, formInputLayout),
                                    getFieldDecorator("work", {})(_react2.default.createElement(_antd.Input, null))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "12" },
                                "\u4E0A\u4F20\u9996\u9875\u56FE\u7247:",
                                _react2.default.createElement(_userUpload2.default, { action: "http://localhost:3000/users/homeImg", homeImageUrl: this.state.homeImageUrl, handleChange: this.getHomeImg.bind(this) })
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "12" },
                                "\u4E0A\u4F20\u4ECB\u7ECD\u56FE\u7247:",
                                _react2.default.createElement(_userUpload2.default, { action: "http://localhost:3000/users/detailsImg", detailsImgUrl: this.state.detailsImgUrl, handleChange: this.getDetailsImg.bind(this) })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddInfo;
}(_react2.default.Component);

exports.default = AddInfo = createForm()(AddInfo);

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _antd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchUser = function (_React$Component) {
    _inherits(SearchUser, _React$Component);

    function SearchUser(props) {
        _classCallCheck(this, SearchUser);

        var _this = _possibleConstructorReturn(this, (SearchUser.__proto__ || Object.getPrototypeOf(SearchUser)).call(this, props));

        _this.state = {
            SearchDate: ""
        };
        return _this;
    }

    _createClass(SearchUser, [{
        key: "emitEmpty",
        value: function emitEmpty() {
            this.SearchDateInput.focus();
            this.setState({ SearchDate: '' });
            this.props.getUsers();
        }
    }, {
        key: "onChangeSearchDate",
        value: function onChangeSearchDate(e) {
            this.setState({ SearchDate: e.target.value });
            (0, _ajax2.default)({
                type: "get",
                url: "http://localhost:3000/users/searchUser",
                data: { value: e.target.value },
                success: function (data) {
                    data = JSON.parse(data);
                    this.props.getSearchData(data);
                }.bind(this)
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var SearchDate = this.state.SearchDate;

            var suffix = SearchDate ? _react2.default.createElement(_antd.Icon, { type: "close-circle", onClick: this.emitEmpty.bind(this) }) : null;
            return _react2.default.createElement(_antd.Input, {
                placeholder: "\u8BF7\u8F93\u5165\u540D\u5B57",
                prefix: _react2.default.createElement(_antd.Icon, { type: "user" }),
                suffix: suffix,
                value: SearchDate,
                onChange: this.onChangeSearchDate.bind(this),
                ref: function ref(node) {
                    return _this2.SearchDateInput = node;
                }
            });
        }
    }]);

    return SearchUser;
}(_react2.default.Component);

exports.default = SearchUser;

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _antd = __webpack_require__(20);

var _userUpdateUpload = __webpack_require__(566);

var _userUpdateUpload2 = _interopRequireDefault(_userUpdateUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var createForm = _antd.Form.create;
var Option = _antd.Select.Option;

var formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};

var formInputLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 }
};

function getBase64(img, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
        return callback(reader.result);
    });
    reader.readAsDataURL(img);
}

var AddInfo = function (_React$Component) {
    _inherits(AddInfo, _React$Component);

    function AddInfo(props) {
        _classCallCheck(this, AddInfo);

        var _this = _possibleConstructorReturn(this, (AddInfo.__proto__ || Object.getPrototypeOf(AddInfo)).call(this, props));

        _this.state = {
            locationOptionValue: ["北京", "上海", "深圳", "成都", "武汉", "长沙", "杭州", "国外", "其他"],
            typeOptionValue: ["全职", "兼职", "团队", "自由职业"],
            experienceOptionValue: ["1年", "2年", "3年", "4年", "5年", "6年", "7年", "8年", "9年", "10年及以上"],
            loading: false,
            visible: false,
            homeImg: "",
            detailsImg: "",
            detailsImgUrl: "",
            homeImageUrl: ""
        };
        return _this;
    }

    _createClass(AddInfo, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.showOptionValue();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(newProps, newState) {
            if (this.props.searchData != newProps.searchData) {
                // 设置表单
                this.props.form.setFieldsValue(newProps.searchData[0]);
                // 设置图片
                this.setState({
                    homeImg: newProps.searchData[0].userPic,
                    detailsImg: newProps.searchData[0].indexPic
                });
            }
            return true;
        }
    }, {
        key: "showModal",

        // 控制模态框开
        value: function showModal() {
            this.setState({
                visible: true
            });
        }
    }, {
        key: "getHomeImg",

        // 获取首页图
        value: function getHomeImg(info) {
            if (info.file.status === 'done') {
                // Get this url from response in real world.
                this.setState({ homeImg: info.file.response });
            }
        }
        // 获取介绍页图片

    }, {
        key: "getDetailsImg",
        value: function getDetailsImg(info) {
            if (info.file.status === 'done') {
                // Get this url from response in real world.
                this.setState({ detailsImg: info.file.response });
            }
        }
        // 模态框点击确定/提交数据

    }, {
        key: "handleOk",
        value: function handleOk() {
            var value = this.props.form.getFieldsValue();
            value.userPic = this.state.homeImg;
            value.indexPic = this.state.detailsImg;
            value.volume = this.props.searchData[0].volume || 0;
            value.id = this.props.searchData[0]._id;
            this.setState({ loading: true });
            (0, _ajax2.default)({
                type: "get",
                url: "http://localhost:3000/users/update",
                data: value,
                success: function () {
                    this.resetForm();
                    this.props.getUsers();
                }.bind(this)
            });
        }
    }, {
        key: "resetForm",

        // 重置表单
        value: function resetForm() {
            this.props.form.resetFields();
            this.setState({
                homeImg: "",
                detailsImg: "",
                detailsImgUrl: "",
                homeImageUrl: ""
            });
            this.handleCancel();
        }
    }, {
        key: "handleCancel",

        // 控制模态框关
        value: function handleCancel() {
            this.props.closeModal();
        }
    }, {
        key: "showOptionValue",


        // 设置下拉框值
        value: function showOptionValue() {
            this.setState({
                locationOptionValue: this.state.locationOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                }),
                typeOptionValue: this.state.typeOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                }),
                experienceOptionValue: this.state.experienceOptionValue.map(function (value) {
                    return _react2.default.createElement(
                        Option,
                        { key: value },
                        value
                    );
                })
            });
        }
    }, {
        key: "render",
        value: function render() {
            var form = this.props.form;
            var getFieldDecorator = this.props.form.getFieldDecorator;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _antd.Modal,
                    {
                        visible: this.props.updateVisible,
                        title: "\u589E\u52A0\u5BA2\u6237",
                        onOk: this.handleOk.bind(this),
                        onCancel: this.handleCancel.bind(this),
                        footer: [_react2.default.createElement(
                            _antd.Button,
                            { key: "back", size: "large", onClick: this.handleCancel.bind(this) },
                            "\u53D6\u6D88"
                        ), _react2.default.createElement(
                            _antd.Button,
                            { key: "submit", type: "primary", size: "large", loading: this.props.loading, onClick: this.handleOk.bind(this) },
                            "\u786E\u5B9A"
                        )]
                    },
                    _react2.default.createElement(
                        _antd.Form,
                        { horizontal: true },
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u59D3\u540D" }, formItemLayout),
                                    getFieldDecorator('name', {})(_react2.default.createElement(_antd.Input, null))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u62A5\u4EF7" }, formItemLayout),
                                    getFieldDecorator('offer', {})(_react2.default.createElement(_antd.Input, { addonAfter: "\u5143/\u5929" }))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u6807\u7B7E" }, formItemLayout),
                                    getFieldDecorator('self_title', {})(_react2.default.createElement(_antd.Input, null))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u5E74\u9650" }, formItemLayout),
                                    getFieldDecorator('experience', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.experienceOptionValue
                                    ))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u5730\u533A" }, formItemLayout),
                                    getFieldDecorator('location', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.locationOptionValue
                                    ))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u7C7B\u578B" }, formItemLayout),
                                    getFieldDecorator('type', {})(_react2.default.createElement(
                                        _antd.Select,
                                        null,
                                        this.state.typeOptionValue
                                    ))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u804C\u4F4D" }, formItemLayout),
                                    getFieldDecorator("jobs", {})(_react2.default.createElement(_antd.Input, null))
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "8" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u63CF\u8FF0" }, formItemLayout),
                                    getFieldDecorator("introduction", {})(_react2.default.createElement(_antd.Input, null))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "24" },
                                _react2.default.createElement(
                                    FormItem,
                                    _extends({ label: "\u7B80\u4ECB" }, formInputLayout),
                                    getFieldDecorator("work", {})(_react2.default.createElement(_antd.Input, null))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "12" },
                                "\u4E0A\u4F20\u9996\u9875\u56FE\u7247:",
                                _react2.default.createElement(_userUpdateUpload2.default, { action: "http://localhost:3000/users/homeImg", homeImageUrl: this.state.homeImg, handleChange: this.getHomeImg.bind(this) })
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: "12" },
                                "\u4E0A\u4F20\u4ECB\u7ECD\u56FE\u7247:",
                                _react2.default.createElement(_userUpdateUpload2.default, { action: "http://localhost:3000/users/detailsImg", detailsImgUrl: this.state.detailsImg, handleChange: this.getDetailsImg.bind(this) })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddInfo;
}(_react2.default.Component);

exports.default = AddInfo = createForm()(AddInfo);

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _antd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function beforeUpload(file) {
  var isJPG = file.type === 'image/jpg' || 'image/png';

  if (!isJPG) {
    _antd.message.error('只可以上传png或者jpg格式的图片!');
  }
  var isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    _antd.message.error('请上传2MB以内的图片!');
  }
  return isJPG && isLt2M;
}

var MyUpdateUpload = function (_React$Component) {
  _inherits(MyUpdateUpload, _React$Component);

  function MyUpdateUpload(props) {
    _classCallCheck(this, MyUpdateUpload);

    var _this = _possibleConstructorReturn(this, (MyUpdateUpload.__proto__ || Object.getPrototypeOf(MyUpdateUpload)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(MyUpdateUpload, [{
    key: "render",
    value: function render() {
      var imageUrl = this.props.homeImageUrl ? "http://localhost:3000/" + this.props.homeImageUrl : "http://localhost:3000/" + this.props.detailsImgUrl;
      return _react2.default.createElement(
        _antd.Upload,
        {
          className: "avatar-uploader",
          showUploadList: false,
          action: this.props.action,
          beforeUpload: beforeUpload,
          onChange: this.props.handleChange
        },
        imageUrl ? _react2.default.createElement("img", { src: imageUrl, alt: "", className: "avatar" }) : _react2.default.createElement(_antd.Icon, { type: "plus", className: "avatar-uploader-trigger" })
      );
    }
  }]);

  return MyUpdateUpload;
}(_react2.default.Component);

exports.default = MyUpdateUpload;

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _antd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  var isJPG = file.type === 'image/jpg' || 'image/png';

  if (!isJPG) {
    _antd.message.error('只可以上传png或者jpg格式的图片!');
  }
  var isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    _antd.message.error('请上传2MB以内的图片!');
  }
  return isJPG && isLt2M;
}

var MyUpload = function (_React$Component) {
  _inherits(MyUpload, _React$Component);

  function MyUpload(props) {
    _classCallCheck(this, MyUpload);

    var _this = _possibleConstructorReturn(this, (MyUpload.__proto__ || Object.getPrototypeOf(MyUpload)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(MyUpload, [{
    key: "render",
    value: function render() {
      var imageUrl = this.props.homeImageUrl ? this.props.homeImageUrl : this.props.detailsImgUrl;
      return _react2.default.createElement(
        _antd.Upload,
        {
          className: "avatar-uploader",
          showUploadList: false,
          action: this.props.action,
          beforeUpload: beforeUpload,
          onChange: this.props.handleChange
        },
        imageUrl ? _react2.default.createElement("img", { src: imageUrl, alt: "", className: "avatar" }) : _react2.default.createElement(_antd.Icon, { type: "plus", className: "avatar-uploader-trigger" })
      );
    }
  }]);

  return MyUpload;
}(_react2.default.Component);

exports.default = MyUpload;

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _usersList = __webpack_require__(569);

var _usersList2 = _interopRequireDefault(_usersList);

var _AddUser = __webpack_require__(563);

var _AddUser2 = _interopRequireDefault(_AddUser);

var _upDate = __webpack_require__(565);

var _upDate2 = _interopRequireDefault(_upDate);

var _searchUser = __webpack_require__(564);

var _searchUser2 = _interopRequireDefault(_searchUser);

var _antd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_React$Component) {
    _inherits(Users, _React$Component);

    function Users(props) {
        _classCallCheck(this, Users);

        var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));

        _this.state = {
            data: {},
            searchData: {},
            loading: false,
            updateVisible: false
        };
        return _this;
    }

    _createClass(Users, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getUsers();
        }
        // 显示全部

    }, {
        key: "getUsers",
        value: function getUsers() {
            (0, _ajax2.default)({
                type: "get",
                url: "http://localhost:3000/users/showUser",
                success: function (data) {
                    var data = JSON.parse(data);
                    this.setState({
                        data: data
                    });
                }.bind(this)
            });
        }
    }, {
        key: "getSearchData",

        // 获取搜索数据
        value: function getSearchData(data) {
            this.setState({ data: data });
        }
    }, {
        key: "showUpdateModal",

        // 打开修改模态框
        value: function showUpdateModal(id) {
            (0, _ajax2.default)({
                type: "post",
                url: "http://localhost:3000/users/findById",
                data: { id: id },
                success: function (data) {
                    var data = JSON.parse(data);
                    this.setState({
                        searchData: data,
                        updateVisible: true
                    });
                }.bind(this)
            });
        }
    }, {
        key: "closeUpdateModal",

        // 关闭修改模态框
        value: function closeUpdateModal() {
            this.setState({
                loading: false,
                updateVisible: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _antd.Card,
                    { title: "\u5BA2\u6237\u7BA1\u7406" },
                    _react2.default.createElement(
                        _antd.Row,
                        null,
                        _react2.default.createElement(
                            _antd.Col,
                            { span: "8" },
                            _react2.default.createElement(_AddUser2.default, { getUsers: this.getUsers.bind(this) })
                        ),
                        _react2.default.createElement(_antd.Col, { span: "8" }),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: "8" },
                            _react2.default.createElement(_searchUser2.default, { getSearchData: this.getSearchData.bind(this), searchData: this.state.data, getUsers: this.getUsers.bind(this) })
                        )
                    ),
                    _react2.default.createElement(_upDate2.default, { loading: this.state.loading, searchData: this.state.searchData, updateVisible: this.state.updateVisible, getUsers: this.getUsers.bind(this), closeModal: this.closeUpdateModal.bind(this) }),
                    _react2.default.createElement(_usersList2.default, { showModal: this.showUpdateModal.bind(this), UserList: this.state.data, getUsers: this.getUsers.bind(this) })
                )
            );
        }
    }]);

    return Users;
}(_react2.default.Component);

exports.default = Users;

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

var _antd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createForm = _antd.Form.create;

var UserList = function (_React$Component) {
    _inherits(UserList, _React$Component);

    function UserList(props) {
        _classCallCheck(this, UserList);

        var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(UserList, [{
        key: "Del",

        // 删除订单
        value: function Del(id) {
            (0, _ajax2.default)({
                type: "get",
                url: "http://localhost:3000/users/removeUesr",
                data: { id: id },
                success: function () {
                    this.props.getUsers();
                }.bind(this)
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var columns = [{ title: '姓名', dataIndex: 'name', key: 'name' }, { title: '地区', dataIndex: 'location', key: 'location' }, { title: '类型', dataIndex: 'type', key: 'type' }, { title: '职位', dataIndex: 'jobs', key: 'jobs' }, { title: '年限', dataIndex: 'experience', key: 'experience' }, { title: '报价(元/天)', dataIndex: 'offer', key: 'offer' }, { title: '成交量', dataIndex: 'volume', key: 'volume' }, { title: '个人标签', dataIndex: 'self_title', key: 'self_title' }, {
                title: '操作', dataIndex: '', key: 'x', render: function render(text, record) {
                    var content = _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "a",
                            { onClick: function onClick() {
                                    _this2.Del(text.key);
                                } },
                            "\u786E\u8BA4 \u5220\u9664"
                        )
                    );
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            _antd.Button,
                            { type: "primary", onClick: function onClick() {
                                    return _this2.props.showModal(text.key);
                                } },
                            " \u4FEE\u6539"
                        ),
                        _react2.default.createElement(
                            _antd.Popover,
                            { content: content, title: "\u786E\u5B9A\u5220\u9664\uFF1F", trigger: "click" },
                            _react2.default.createElement(
                                "a",
                                null,
                                " \u5220\u9664"
                            )
                        ),
                        "  "
                    );
                } }];
            var data = this.props.UserList;
            var dataList = [];
            var len = data.length,
                i;
            for (i = 0; i < len; i++) {
                dataList.push({
                    key: data[i]._id,
                    name: data[i].name,
                    experience: data[i].experience,
                    type: data[i].type,
                    jobs: data[i].jobs,
                    offer: data[i].offer,
                    volume: data[i].volume,
                    location: data[i].location,
                    self_title: data[i].self_title,
                    img: "http://localhost:3000/" + data[i].userPic,
                    work: data[i].work,
                    description: data[i].introduction
                });
            }
            var page = {
                pageSize: 5
            };
            return _react2.default.createElement(_antd.Table, {
                columns: columns,
                expandedRowRender: function expandedRowRender(record) {
                    return _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement("img", { style: { width: 50 }, src: record.img }),
                        " ",
                        record.description,
                        " ",
                        record.work
                    );
                },
                dataSource: dataList,
                pagination: page
            });
        }
    }]);

    return UserList;
}(_react2.default.Component);

exports.default = UserList = createForm()(UserList);

/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(449);


/***/ })

},[998]);