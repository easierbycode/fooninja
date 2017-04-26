/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    BOOTSTRAP_COMPLETED: 'state:bootstrap-completed',
    LOADING_COMPLETED: 'state:loading-completed',
    LEVEL_COMPLETED: 'state:level-completed'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    WIDTH: '100%',
    HEIGHT: '100%',

    GRAVITY: 1000
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _superEventEmitter = __webpack_require__(12);

var _superEventEmitter2 = _interopRequireDefault(_superEventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = exports.Game = function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game() {
        var _ref;

        _classCallCheck(this, Game);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Game.__proto__ || Object.getPrototypeOf(Game)).call.apply(_ref, [this].concat(args)));

        _this.player = null;

        _superEventEmitter2.default.mixin(_this);
        return _this;
    }

    return Game;
}(Phaser.Game);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StateManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

var _bootstrapState = __webpack_require__(9);

var _loadingState = __webpack_require__(11);

var _levelState = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StateManager = exports.StateManager = function () {
    function StateManager(game) {
        _classCallCheck(this, StateManager);

        this.game = null;

        this.game = game;
        this.setupStates();
        this.setupNativeListeners();
        this.setupListeners();
    }

    _createClass(StateManager, [{
        key: 'setupStates',
        value: function setupStates() {
            this.game.state.add('Bootstrap', _bootstrapState.BootstrapState);
            this.game.state.add('Loading', _loadingState.LoadingState);
            this.game.state.add('GameState', _levelState.LevelState);
        }
    }, {
        key: 'setupNativeListeners',
        value: function setupNativeListeners() {
            this.game.state.onStateChange.add(function (newState, oldState) {
                console.debug('Enter to new state: %s', newState);
            });
        }
    }, {
        key: 'setupListeners',
        value: function setupListeners() {
            var _this = this;

            this.game.on(_stateEvents2.default.BOOTSTRAP_COMPLETED, function (paramsArr) {
                var _game$state;

                (_game$state = _this.game.state).start.apply(_game$state, ['Loading'].concat(_toConsumableArray(paramsArr)));
            });

            this.game.on(_stateEvents2.default.LOADING_COMPLETED, function (paramsArr) {
                var _game$state2;

                (_game$state2 = _this.game.state).start.apply(_game$state2, ['GameState'].concat(_toConsumableArray(paramsArr)));
            });
        }
    }, {
        key: 'start',
        value: function start() {
            // this.game.state.start('Bootstrap');
            this.game.state.start('Bootstrap', true, false, 'assets/levels/level1.json');
        }
    }]);

    return StateManager;
}();

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    DEFAULT_X: 96,
    DEFAULT_Y: 32
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = exports.Player = function (_Phaser$Sprite) {
    _inherits(Player, _Phaser$Sprite);

    function Player(game) {
        var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'player';

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game, x, y, key));

        game.add.existing(_this);
        game.physics.arcade.enable(_this);
        return _this;
    }

    return Player;
}(Phaser.Sprite);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Prefab = exports.Prefab = function (_Phaser$Sprite) {
  _inherits(Prefab, _Phaser$Sprite);

  function Prefab(game_state, name, position, properties) {
    _classCallCheck(this, Prefab);

    var _this = _possibleConstructorReturn(this, (Prefab.__proto__ || Object.getPrototypeOf(Prefab)).call(this, game_state.game, position.x, position.y, properties.texture));

    _this.game_state = game_state;

    _this.name = name;

    _this.game_state.groups[properties.group].add(_this);

    _this.frame = properties.frame;

    _this.game_state.prefabs[name] = _this;
    return _this;
  }

  return Prefab;
}(Phaser.Sprite);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BootstrapState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BootstrapState = exports.BootstrapState = function (_Phaser$State) {
    _inherits(BootstrapState, _Phaser$State);

    function BootstrapState() {
        _classCallCheck(this, BootstrapState);

        return _possibleConstructorReturn(this, (BootstrapState.__proto__ || Object.getPrototypeOf(BootstrapState)).apply(this, arguments));
    }

    _createClass(BootstrapState, [{
        key: 'init',
        value: function init(level_file) {
            this.level_file = level_file;
        }
    }, {
        key: 'preload',
        value: function preload() {
            this.load.text('level1', this.level_file);
        }
    }, {
        key: 'create',
        value: function create() {
            var level_text = this.game.cache.getText('level1');
            var level_data = JSON.parse(level_text);

            // this.game.state.start( 'LoadingState', true, false, level_data );
            this.game.trigger(_stateEvents2.default.BOOTSTRAP_COMPLETED, [true, false, level_data]);
        }
    }]);

    return BootstrapState;
}(Phaser.State);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LevelState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

var _player = __webpack_require__(6);

var _player2 = _interopRequireDefault(_player);

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

var _cut = __webpack_require__(15);

var _player3 = __webpack_require__(7);

var _prefab = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LevelState = exports.LevelState = function (_Phaser$State) {
    _inherits(LevelState, _Phaser$State);

    function LevelState() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LevelState);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LevelState.__proto__ || Object.getPrototypeOf(LevelState)).call.apply(_ref, [this].concat(args))), _this), _this.CUT_STYLE = {
            line_width: 5,
            color: 0xE82C0C,
            alpha: 1
        }, _this.MINIMUM_SWIPE_LENGTH = 50, _this.prefab_classes = {
            background: _prefab.Prefab.prototype.constructor
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LevelState, [{
        key: 'init',
        value: function init(level_data) {
            this.level_data = level_data;

            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;

            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.arcade.gravity.y = _game2.default.gravity;
        }
    }, {
        key: 'create',
        value: function create() {
            var group_name, prefab_name;

            this.groups = {};
            this.level_data.groups.forEach(function (group_name) {
                this.groups[group_name] = this.game.add.group();
            }, this);

            this.prefabs = {};
            for (prefab_name in this.level_data.prefabs) {
                if (this.level_data.prefabs.hasOwnProperty(prefab_name)) {
                    this.create_prefab(prefab_name, this.level_data.prefabs[prefab_name]);
                }
            }

            this.game.input.onDown.add(this.start_swipe, this);
            this.game.input.onUp.add(this.end_swipe, this);
        }
    }, {
        key: 'create_prefab',
        value: function create_prefab(prefab_name, prefab_data) {
            var prefab_position, prefab;

            if (this.prefab_classes.hasOwnProperty(prefab_data.type)) {
                if (prefab_data.position.x > 0 && prefab_data.position.x <= 1) {
                    prefab_position = new Phaser.Point(prefab_data.position.x * this.game.world.width, prefab_data.position.y * this.game.world.height);
                } else {
                    prefab_position = prefab_data.position;
                }
                prefab = new this.prefab_classes[prefab_data.type](this, prefab_name, prefab_position, prefab_data.properties);
            }
        }
    }, {
        key: 'start_swipe',
        value: function start_swipe(pointer) {
            this.start_swipe_point = new Phaser.Point(pointer.x, pointer.y);
        }
    }, {
        key: 'end_swipe',
        value: function end_swipe(pointer) {
            this.end_swipe_point = new Phaser.Point(pointer.x, pointer.y);

            if (this.start_swipe_point && this.end_swipe_point) {

                var swipe_length = Phaser.Point.distance(this.end_swipe_point, this.start_swipe_point);
            } else {

                var swipe_length = 0;
            }

            if (swipe_length >= this.MINIMUM_SWIPE_LENGTH) {

                var cut = new _cut.Cut(this, "cut", { x: 0, y: 0 }, {
                    group: "cuts",
                    start: this.start_swipe_point,
                    end: this.end_swipe_point,
                    duration: 0.3,
                    style: Object.create(this.CUT_STYLE)
                });

                this.swipe = new Phaser.Line(this.start_swipe_point.x, this.start_swipe_point.y, this.end_swipe_point.x, this.end_swipe_point.y);
            }
        }
    }]);

    return LevelState;
}(Phaser.State);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadingState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingState = exports.LoadingState = function (_Phaser$State) {
    _inherits(LoadingState, _Phaser$State);

    function LoadingState() {
        _classCallCheck(this, LoadingState);

        return _possibleConstructorReturn(this, (LoadingState.__proto__ || Object.getPrototypeOf(LoadingState)).apply(this, arguments));
    }

    _createClass(LoadingState, [{
        key: "init",
        value: function init(level_data) {
            this.level_data = level_data;
        }
    }, {
        key: "preload",
        value: function preload() {
            var assets, asset_loader, asset_key, asset;
            assets = this.level_data.assets;
            for (asset_key in assets) {
                if (assets.hasOwnProperty(asset_key)) {
                    asset = assets[asset_key];
                    switch (asset.type) {
                        case "image":
                            this.load.image(asset_key, asset.source);
                            break;
                        case "spritesheet":
                            this.load.spritesheet(asset_key, asset.source, asset.frame_width, asset.frame_height, asset.frames, asset.margin, asset.spacing);
                            break;
                    }
                }
            }
        }
    }, {
        key: "create",
        value: function create() {
            var _this2 = this;

            this.time.events.add(500, function () {
                _this2.game.trigger(_stateEvents2.default.LOADING_COMPLETED, [true, false, _this2.level_data]);
            });
        }
    }]);

    return LoadingState;
}(Phaser.State);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EventEmitter=t():e.EventEmitter=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){/**
	 * @author Piotr Kowalski <piecioshka@gmail.com> (https://piecioshka.pl/)
	 * @name super-event-emitter
	 * @description Super small (2KB) and simple interpretation of popular event management.
	 * @version 4.1.4
	 * @license MIT
	 * @example
	 * var bar = {}; // Or any other object.
	 * EventEmitter.mixin(bar);
	 * bar.on('foo', function () {
	 *     console.log('foo event emitted');
	 * });
	 * bar.emit('foo');
	 */
"use strict";function i(e,t){var n="forEach"in Array.prototype;if(n)e.forEach(t);else for(var i=0;i<e.length;i+=1)t(e[i])}function r(e,t){var n="filter"in Array.prototype;if(n)return e.filter(t);for(var i=[],r=0;r<e.length;r+=1){var o=e[r];t(o)&&i.push(o)}return i}function o(e,t){if(!e)throw new Error(t)}function s(e){return"string"==typeof e}function a(e){return"function"==typeof e}function c(){return this instanceof c?void(this._listeners=[]):new c}var f=n(2),u={on:function(e,t,n){return o(s(e),"EventEmitter#on: name is not a string"),o(a(t),"EventEmitter#on: fn is not a function"),n=n||this,this._listeners.push({name:e,fn:t,ctx:n}),this},once:function(e,t,n){function i(){t.apply(n,arguments),r.off(e,i)}n=n||this;var r=this;return this.on(e,i,n),this},off:function(e,t){return this._listeners=e?r(this._listeners,function(n){return n.name!==e||!!a(t)&&n.fn!==t}):[],this},emit:function(e,t){return o(s(e),"EventEmitter#emit: name is not a string"),i(this._listeners,function(n){n.name===e&&n.fn.call(n.ctx,t);var i=/^all|\*$/.test(n.name);i&&n.fn.call(n.ctx,e,t)}),this}};u.addEventListener=u.addListener=u.bind=u.on,u.removeEventListener=u.removeListener=u.unbind=u.off,u.dispatchEventListener=u.dispatchListener=u.trigger=u.emit,c.prototype=u,c.mixin=function(e){var t=new c;for(var n in t)e[n]=t[n];return e},c.prototype.mixin=c.mixin,c.VERSION=f.version,e.exports=c},function(e,t){e.exports={name:"super-event-emitter",description:"Super small (2KB) and simple interpretation of popular event management.",version:"4.1.4",license:"MIT",author:{name:"Piotr Kowalski",email:"piecioshka@gmail.com",url:"https://piecioshka.pl/"},scripts:{build:"webpack --profile",watch:"webpack -w",test:"jasmine JASMINE_CONFIG_PATH=test/unit/jasmine.json",coverage:"istanbul cover jasmine JASMINE_CONFIG_PATH=test/unit/jasmine.json",coveralls:"npm run coverage && cat ./coverage/lcov.info | coveralls -v"},repository:{type:"git",url:"http://github.com/piecioshka/super-event-emitter.git"},devDependencies:{coveralls:"^2.11.12",istanbul:"^0.4.4",jasmine:"^2.4.1","json-loader":"^0.5.4","string-replace-loader":"^1.0.3",webpack:"^1.12.14"},files:["dist","lib","index.js","package.json","README.md"],keywords:["super","event","emitter","mixin","on","off","emit","trigger","simple"],main:"./dist/super-event-emitter.min.js"}}])});
//# sourceMappingURL=super-event-emitter.min.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(2);

var _stateManager = __webpack_require__(3);

var _game2 = __webpack_require__(1);

var _game3 = _interopRequireDefault(_game2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _game.Game(_game3.default.WIDTH, _game3.default.HEIGHT, 'app', Phaser.CANVAS);
var manager = new _stateManager.StateManager(game);
manager.start();

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cut = exports.Cut = function (_Phaser$Graphics) {
  _inherits(Cut, _Phaser$Graphics);

  function Cut(game_state, name, position, properties) {
    _classCallCheck(this, Cut);

    var _this = _possibleConstructorReturn(this, (Cut.__proto__ || Object.getPrototypeOf(Cut)).call(this, game_state.game, position.x, position.y));

    _this.game_state = game_state;

    _this.name = name;

    _this.game_state.groups[properties.group].add(_this);

    _this.game_state.prefabs[name] = _this;

    _this.beginFill(properties.style.color);

    _this.lineStyle(properties.style.line_width, properties.style.color, properties.style.alpha);

    _this.moveTo(properties.start.x, properties.start.y);

    _this.lineTo(properties.end.x, properties.end.y);

    var kill_timer = _this.game_state.time.create();

    kill_timer.add(Phaser.Timer.SECOND * properties.duration, _this.kill, _this);

    kill_timer.start();
    return _this;
  }

  _createClass(Cut, [{
    key: "kill",
    value: function kill() {
      this.clear();

      Phaser.Graphics.prototype.kill.call(this);
    }
  }]);

  return Cut;
}(Phaser.Graphics);

/***/ })
/******/ ]);