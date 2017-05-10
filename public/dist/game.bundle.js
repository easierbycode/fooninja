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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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
exports.Cuttable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _prefab = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cuttable = exports.Cuttable = function (_Prefab) {
    _inherits(Cuttable, _Prefab);

    function Cuttable(game_state, name, position, properties) {
        _classCallCheck(this, Cuttable);

        var _this = _possibleConstructorReturn(this, (Cuttable.__proto__ || Object.getPrototypeOf(Cuttable)).call(this, game_state, name, position, properties));

        _this.anchor.setTo(0.5);
        _this.scale.setTo(5);

        _this.game_state.game.physics.arcade.enable(_this);

        _this.velocity = properties.velocity;
        _this.body.velocity.y = -_this.velocity.y;
        _this.body.velocity.x = _this.velocity.x;

        _this.checkWorldBounds = true;
        _this.outOfBoundsKill = true;
        return _this;
    }

    _createClass(Cuttable, [{
        key: 'reset',
        value: function reset(position_x, position_y, velocity) {
            Phaser.Sprite.prototype.reset.call(this, position_x, position_y);
            this.body.velocity.y = -velocity.y;
            this.body.velocity.x = velocity.x;
        }
    }, {
        key: 'cut',
        value: function cut() {
            var emitter;

            emitter = this.game_state.game.add.emitter(this.x, this.y);
            emitter.makeParticles('particle_image');

            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);
            emitter.gravity = 0;

            // emit all at once, particle life span, not used, # of particles
            emitter.start(true, 700, null, 1000);
        }
    }]);

    return Cuttable;
}(_prefab.Prefab);

/***/ }),
/* 2 */
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

    if (properties.frame) {
      _this.frame = properties.frame;
    }

    if (properties.anchor) {
      _this.anchor.setTo(properties.anchor.x, properties.anchor.y);
    }

    _this.game_state.prefabs[name] = _this;
    return _this;
  }

  return Prefab;
}(Phaser.Sprite);

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _superEventEmitter = __webpack_require__(19);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StateManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

var _bootstrapState = __webpack_require__(16);

var _loadingState = __webpack_require__(18);

var _levelState = __webpack_require__(17);

var _storeState = __webpack_require__(34);

var _titleState = __webpack_require__(28);

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
            this.game.state.add('TitleState', _titleState.TitleState);
            this.game.state.add('StoreState', _storeState.StoreState);
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

                // pop last element (next_state) off paramsArr
                var next_state = paramsArr.pop();

                (_game$state2 = _this.game.state).start.apply(_game$state2, [next_state].concat(_toConsumableArray(paramsArr)));
            });
        }
    }, {
        key: 'start',
        value: function start() {
            this.game.state.start('Bootstrap', true, false, 'assets/levels/title-screen.json', 'TitleState');
        }
    }]);

    return StateManager;
}();

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bomb = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cuttable = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bomb = exports.Bomb = function (_Cuttable) {
    _inherits(Bomb, _Cuttable);

    function Bomb(game_state, name, position, properties) {
        _classCallCheck(this, Bomb);

        var _this = _possibleConstructorReturn(this, (Bomb.__proto__ || Object.getPrototypeOf(Bomb)).call(this, game_state, name, position, properties));

        _this.body.setSize(20, 20);
        return _this;
    }

    _createClass(Bomb, [{
        key: 'cut',
        value: function cut() {
            _cuttable.Cuttable.prototype.cut.call(this);

            this.game_state.prefabs.lives.die();
            this.kill();
        }
    }]);

    return Bomb;
}(_cuttable.Cuttable);

/***/ }),
/* 10 */
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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Fruit = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cuttable = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fruit = exports.Fruit = function (_Cuttable) {
    _inherits(Fruit, _Cuttable);

    function Fruit(game_state, name, position, properties) {
        _classCallCheck(this, Fruit);

        var _this = _possibleConstructorReturn(this, (Fruit.__proto__ || Object.getPrototypeOf(Fruit)).call(this, game_state, name, position, properties));

        _this.body.setSize(20, 20);

        _this.frames = properties.frames;
        _this.frame = _this.game_state.game.rnd.pick(_this.frames);
        return _this;
    }

    _createClass(Fruit, [{
        key: 'reset',
        value: function reset(position_x, position_y, velocity) {
            var frame_index;

            _cuttable.Cuttable.prototype.reset.call(this, position_x, position_y, velocity);

            this.frame = this.game_state.game.rnd.pick(this.frames);
        }
    }, {
        key: 'cut',
        value: function cut() {
            _cuttable.Cuttable.prototype.cut.call(this);
            this.game_state.score += 1;
            this.kill();
        }
    }]);

    return Fruit;
}(_cuttable.Cuttable);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Lives = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _prefab = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lives = exports.Lives = function (_Prefab) {
    _inherits(Lives, _Prefab);

    function Lives(game_state, name, position, properties) {
        _classCallCheck(this, Lives);

        var _this = _possibleConstructorReturn(this, (Lives.__proto__ || Object.getPrototypeOf(Lives)).call(this, game_state, name, position, properties));

        _this.visible = false;


        _this.lives = properties.lives;
        _this.lives_sprites = [];

        for (var live_index = 0; live_index < _this.lives; live_index += 1) {
            var life = new Phaser.Sprite(_this.game_state.game, position.x + live_index * properties.lives_spacing, position.y, _this.texture);

            _this.lives_sprites.push(life);

            _this.game_state.groups[properties.group].add(life);
        }
        return _this;
    }

    _createClass(Lives, [{
        key: 'die',
        value: function die() {
            var life;

            this.lives -= 1;

            life = this.lives_sprites.pop();
            life.kill();

            if (this.lives === 0) {
                this.game_state.game_over();
            }
        }
    }]);

    return Lives;
}(_prefab.Prefab);

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Score = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textPrefab = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = exports.Score = function (_TextPrefab) {
    _inherits(Score, _TextPrefab);

    function Score(game_state, name, position, properties) {
        _classCallCheck(this, Score);

        return _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, game_state, name, position, properties));
    }

    _createClass(Score, [{
        key: 'update',
        value: function update() {
            this.text = 'Fruits: ' + this.game_state.score;
        }
    }]);

    return Score;
}(_textPrefab.TextPrefab);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextPrefab = exports.TextPrefab = function (_Phaser$Text) {
  _inherits(TextPrefab, _Phaser$Text);

  function TextPrefab(game_state, name, position, properties) {
    _classCallCheck(this, TextPrefab);

    var _this = _possibleConstructorReturn(this, (TextPrefab.__proto__ || Object.getPrototypeOf(TextPrefab)).call(this, game_state.game, position.x, position.y, properties.text, properties.style));

    _this.game_state = game_state;

    _this.name = name;

    _this.game_state.groups[properties.group].add(_this);

    if (properties.anchor) {
      _this.anchor.setTo(properties.anchor.x, properties.anchor.y);
    }

    _this.game_state.prefabs[name] = _this;
    return _this;
  }

  return TextPrefab;
}(Phaser.Text);

/***/ }),
/* 16 */
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
        value: function init(level_file, next_state) {
            this.level_file = level_file;
            this.next_state = next_state;
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

            this.game.trigger(_stateEvents2.default.BOOTSTRAP_COMPLETED, [true, false, level_data, this.next_state]);
        }
    }]);

    return BootstrapState;
}(Phaser.State);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LevelState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _game = __webpack_require__(3);

var _game2 = _interopRequireDefault(_game);

var _player = __webpack_require__(8);

var _player2 = _interopRequireDefault(_player);

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

var _bombSpawner = __webpack_require__(25);

var _cut = __webpack_require__(10);

var _fruitSpawner = __webpack_require__(26);

var _lives = __webpack_require__(12);

var _player3 = __webpack_require__(13);

var _prefab = __webpack_require__(2);

var _score = __webpack_require__(14);

var _specialFruitSpawner = __webpack_require__(24);

var _jsonLevelState = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LevelState = exports.LevelState = function (_JSONLevelState) {
    _inherits(LevelState, _JSONLevelState);

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
            background: _prefab.Prefab.prototype.constructor,
            score: _score.Score.prototype.constructor,
            lives: _lives.Lives.prototype.constructor,
            fruit_spawner: _fruitSpawner.FruitSpawner.prototype.constructor,
            special_fruit_spawner: _specialFruitSpawner.SpecialFruitSpawner.prototype.constructor,
            bomb_spawner: _bombSpawner.BombSpawner.prototype.constructor
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LevelState, [{
        key: 'init',
        value: function init(level_data) {
            _get(LevelState.prototype.__proto__ || Object.getPrototypeOf(LevelState.prototype), 'init', this).call(this, level_data);

            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.game.physics.arcade.gravity.y = _game2.default.GRAVITY;
            this.score = 0;
        }
    }, {
        key: 'create',
        value: function create() {
            _get(LevelState.prototype.__proto__ || Object.getPrototypeOf(LevelState.prototype), 'create', this).call(this);

            this.game.input.onDown.add(this.start_swipe, this);
            this.game.input.onUp.add(this.end_swipe, this);
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

            if (!this.start_swipe_point) {
                var swipe_length = 0;
            } else {
                var swipe_length = Phaser.Point.distance(this.end_swipe_point, this.start_swipe_point);
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

                this.groups.fruits.forEachAlive(this.check_collision, this);
                this.groups.bombs.forEachAlive(this.check_collision, this);
                this.groups.special_fruits.forEachAlive(this.check_collision, this);
            }
        }
    }, {
        key: 'check_collision',
        value: function check_collision(object) {
            var object_rectangle = new Phaser.Rectangle(object.body.x, object.body.y, object.body.width, object.body.height);

            var line1 = new Phaser.Line(object_rectangle.left, object_rectangle.bottom, object_rectangle.left, object_rectangle.top);
            var line2 = new Phaser.Line(object_rectangle.left, object_rectangle.top, object_rectangle.right, object_rectangle.top);
            var line3 = new Phaser.Line(object_rectangle.right, object_rectangle.top, object_rectangle.right, object_rectangle.bottom);
            var line4 = new Phaser.Line(object_rectangle.right, object_rectangle.bottom, object_rectangle.left, object_rectangle.bottom);

            var intersection = this.swipe.intersects(line1) || this.swipe.intersects(line2) || this.swipe.intersects(line3) || this.swipe.intersects(line4);

            if (intersection) object.cut();
        }
    }, {
        key: 'game_over',
        value: function game_over() {
            this.game.state.start('Bootstrap', true, false, 'assets/levels/title-screen.json', 'TitleState');

            localStorage.money += this.score;
        }
    }]);

    return LevelState;
}(_jsonLevelState.JSONLevelState);

/***/ }),
/* 18 */
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
        value: function init(level_data, next_state) {
            this.level_data = level_data;
            this.next_state = next_state;
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
                _this2.game.trigger(_stateEvents2.default.LOADING_COMPLETED, [true, false, _this2.level_data, _this2.next_state]);
            });
        }
    }]);

    return LoadingState;
}(Phaser.State);

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(4);

var _stateManager = __webpack_require__(5);

var _game2 = __webpack_require__(3);

var _game3 = _interopRequireDefault(_game2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _game.Game(_game3.default.WIDTH, _game3.default.HEIGHT, 'app', Phaser.CANVAS);
var manager = new _stateManager.StateManager(game);
manager.start();

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpecialFruit = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cuttable = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpecialFruit = exports.SpecialFruit = function (_Cuttable) {
    _inherits(SpecialFruit, _Cuttable);

    function SpecialFruit(game_state, name, position, properties) {
        _classCallCheck(this, SpecialFruit);

        var _this = _possibleConstructorReturn(this, (SpecialFruit.__proto__ || Object.getPrototypeOf(SpecialFruit)).call(this, game_state, name, position, properties));

        _this.body.setSize(20, 20);

        _this.kill_timer = _this.game_state.game.time.create(false);
        return _this;
    }

    _createClass(SpecialFruit, [{
        key: 'kill',
        value: function kill() {
            Phaser.Sprite.prototype.kill.call(this);

            this.body.allowGravity = true;

            this.kill_timer.stop();
        }
    }, {
        key: 'cut',
        value: function cut() {
            _cuttable.Cuttable.prototype.cut.call(this);

            this.game_state.score += 1;

            if (!this.kill_timer.running) {
                this.body.allowGravity = false;
                this.body.velocity.x = 0;
                this.body.velocity.y = 0;

                this.kill_timer.add(Phaser.Timer.SECOND * 3, this.kill, this);
                this.kill_timer.start();
            }
        }
    }]);

    return SpecialFruit;
}(_cuttable.Cuttable);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spawner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _prefab = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spawner = exports.Spawner = function (_Prefab) {
    _inherits(Spawner, _Prefab);

    function Spawner(game_state, name, position, properties) {
        _classCallCheck(this, Spawner);

        var _this = _possibleConstructorReturn(this, (Spawner.__proto__ || Object.getPrototypeOf(Spawner)).call(this, game_state, name, position, properties));

        _this.pool = _this.game_state.groups[properties.pool];

        _this.spawn_time = properties.spawn_time;

        _this.velocity_x = properties.velocity_x;
        _this.velocity_y = properties.velocity_y;

        _this.spawn_timer = _this.game_state.time.create();
        _this.schedule_spawn();
        return _this;
    }

    _createClass(Spawner, [{
        key: 'schedule_spawn',
        value: function schedule_spawn() {
            var time;

            time = this.game_state.rnd.between(this.spawn_time.min, this.spawn_time.max);
            this.spawn_timer.add(Phaser.Timer.SECOND * time, this.spawn, this);
            this.spawn_timer.start();
        }
    }, {
        key: 'spawn',
        value: function spawn() {
            var object_name, object_position, object, object_velocity;

            // object position - between 20% and 80% of the game width
            object_position = new Phaser.Point(this.game_state.rnd.between(0.2 * this.game_state.game.world.width, 0.8 * this.game_state.game.world.width), this.game_state.game.world.height);

            object_velocity = new Phaser.Point(this.game_state.rnd.between(this.velocity_x.min, this.velocity_x.max), this.game_state.rnd.between(this.velocity_y.min, this.velocity_y.max));

            object = this.pool.getFirstDead();

            if (!object) {
                object_name = 'object_' + this.pool.countLiving();
                object = this.create_object(object_name, object_position, object_velocity);
            } else {
                object.reset(object_position.x, object_position.y, object_velocity);
            }

            this.schedule_spawn();
        }
    }]);

    return Spawner;
}(_prefab.Prefab);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpecialFruitSpawner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _specialFruit = __webpack_require__(22);

var _spawner = __webpack_require__(23);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpecialFruitSpawner = exports.SpecialFruitSpawner = function (_Spawner) {
    _inherits(SpecialFruitSpawner, _Spawner);

    function SpecialFruitSpawner(game_state, name, position, properties) {
        _classCallCheck(this, SpecialFruitSpawner);

        return _possibleConstructorReturn(this, (SpecialFruitSpawner.__proto__ || Object.getPrototypeOf(SpecialFruitSpawner)).call(this, game_state, name, position, properties));
    }

    _createClass(SpecialFruitSpawner, [{
        key: 'create_object',
        value: function create_object(name, position, velocity) {
            return new _specialFruit.SpecialFruit(this.game_state, name, position, {
                texture: 'fruits_spritesheet',
                group: 'special_fruits',
                frame: 15,
                velocity: velocity
            });
        }
    }]);

    return SpecialFruitSpawner;
}(_spawner.Spawner);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BombSpawner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bomb = __webpack_require__(9);

var _spawner = __webpack_require__(23);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BombSpawner = exports.BombSpawner = function (_Spawner) {
    _inherits(BombSpawner, _Spawner);

    function BombSpawner(game_state, name, position, properties) {
        _classCallCheck(this, BombSpawner);

        return _possibleConstructorReturn(this, (BombSpawner.__proto__ || Object.getPrototypeOf(BombSpawner)).call(this, game_state, name, position, properties));
    }

    _createClass(BombSpawner, [{
        key: 'create_object',
        value: function create_object(name, position, velocity) {
            return new _bomb.Bomb(this.game_state, name, position, {
                texture: 'bomb_image',
                group: 'bombs',
                velocity: velocity
            });
        }
    }]);

    return BombSpawner;
}(_spawner.Spawner);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FruitSpawner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fruit = __webpack_require__(11);

var _spawner = __webpack_require__(23);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FruitSpawner = exports.FruitSpawner = function (_Spawner) {
    _inherits(FruitSpawner, _Spawner);

    function FruitSpawner(game_state, name, position, properties) {
        _classCallCheck(this, FruitSpawner);

        var _this = _possibleConstructorReturn(this, (FruitSpawner.__proto__ || Object.getPrototypeOf(FruitSpawner)).call(this, game_state, name, position, properties));

        _this.frames = properties.frames;
        return _this;
    }

    _createClass(FruitSpawner, [{
        key: 'create_object',
        value: function create_object(name, position, velocity) {
            return new _fruit.Fruit(this.game_state, name, position, {
                texture: 'fruits_spritesheet',
                group: 'fruits',
                frames: this.frames,
                velocity: velocity
            });
        }
    }]);

    return FruitSpawner;
}(_spawner.Spawner);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSONLevelState = exports.JSONLevelState = function (_Phaser$State) {
    _inherits(JSONLevelState, _Phaser$State);

    function JSONLevelState() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, JSONLevelState);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = JSONLevelState.__proto__ || Object.getPrototypeOf(JSONLevelState)).call.apply(_ref, [this].concat(args))), _this), _this.prefab_classes = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(JSONLevelState, [{
        key: "init",
        value: function init(level_data) {
            this.level_data = level_data;

            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }
    }, {
        key: "create",
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
        }
    }, {
        key: "create_prefab",
        value: function create_prefab(prefab_name, prefab_data) {
            var prefab_position, prefab;

            // create object according to its type
            if (this.prefab_classes.hasOwnProperty(prefab_data.type)) {

                // position is percentage
                if (prefab_data.position.x > 0 && prefab_data.position.x <= 1) {
                    prefab_position = new Phaser.Point(prefab_data.position.x * this.game.world.width, prefab_data.position.y * this.game.world.height);

                    // position is absolute number
                } else {
                    prefab_position = prefab_data.position;
                }
                prefab = new this.prefab_classes[prefab_data.type](this, prefab_name, prefab_position, prefab_data.properties);
            }
        }
    }]);

    return JSONLevelState;
}(Phaser.State);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TitleState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jsonLevelState = __webpack_require__(27);

var _menu = __webpack_require__(31);

var _prefab = __webpack_require__(2);

var _startStateItem = __webpack_require__(30);

var _textPrefab = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleState = exports.TitleState = function (_JSONLevelState) {
    _inherits(TitleState, _JSONLevelState);

    function TitleState() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TitleState);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TitleState.__proto__ || Object.getPrototypeOf(TitleState)).call.apply(_ref, [this].concat(args))), _this), _this.prefab_classes = {
            background: _prefab.Prefab.prototype.constructor,
            start_state_item: _startStateItem.StartStateItem.prototype.constructor,
            title: _textPrefab.TextPrefab.prototype.constructor
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TitleState, [{
        key: 'create',
        value: function create() {
            var menu_position, menu_items, menu_properties, menu;

            _get(TitleState.prototype.__proto__ || Object.getPrototypeOf(TitleState.prototype), 'create', this).call(this);

            menu_position = new Phaser.Point(0, 0);
            menu_items = [];

            this.groups.menu_items.forEach(function (menu_item) {
                menu_items.push(menu_item);
            }, this);

            menu_properties = {
                texture: '',
                group: 'background',
                menu_items: menu_items
            };

            menu = new _menu.Menu(this, 'menu', menu_position, menu_properties);

            localStorage.money = localStorage.money || 1000;
        }
    }]);

    return TitleState;
}(_jsonLevelState.JSONLevelState);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MenuItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textPrefab = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = exports.MenuItem = function (_TextPrefab) {
    _inherits(MenuItem, _TextPrefab);

    function MenuItem(game_state, name, position, properties) {
        _classCallCheck(this, MenuItem);

        var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, game_state, name, position, properties));

        _this.anchor.setTo(0.5);

        _this.on_selection_animation = _this.game_state.game.add.tween(_this.scale);

        _this.on_selection_animation.to({
            x: 1.5 * _this.scale.x,
            y: 1.5 * _this.scale.y
        }, 500);

        _this.on_selection_animation.to({
            x: _this.scale.x,
            y: _this.scale.y
        }, 500);

        _this.on_selection_animation.repeatAll(-1);
        return _this;
    }

    _createClass(MenuItem, [{
        key: 'selection_over',
        value: function selection_over() {
            if (this.on_selection_animation.isPaused) {
                this.on_selection_animation.resume();
            } else {
                this.on_selection_animation.start();
            }
        }
    }, {
        key: 'selection_out',
        value: function selection_out() {
            this.on_selection_animation.pause();
        }
    }, {
        key: 'select',
        value: function select() {}
    }]);

    return MenuItem;
}(_textPrefab.TextPrefab);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StartStateItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menuItem = __webpack_require__(29);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartStateItem = exports.StartStateItem = function (_MenuItem) {
    _inherits(StartStateItem, _MenuItem);

    function StartStateItem(game_state, name, position, properties) {
        _classCallCheck(this, StartStateItem);

        var _this = _possibleConstructorReturn(this, (StartStateItem.__proto__ || Object.getPrototypeOf(StartStateItem)).call(this, game_state, name, position, properties));

        _this.level_file = properties.level_file;
        _this.state_name = properties.state_name;
        return _this;
    }

    _createClass(StartStateItem, [{
        key: 'select',
        value: function select() {
            this.game_state.state.start('Bootstrap', true, false, this.level_file, this.state_name);
        }
    }]);

    return StartStateItem;
}(_menuItem.MenuItem);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Menu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _prefab = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = exports.Menu = function (_Prefab) {
    _inherits(Menu, _Prefab);

    function Menu(game_state, name, position, properties) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, game_state, name, position, properties));

        _this.current_item_index = 0;
        _this.visible = false;


        _this.menu_items = properties.menu_items;
        _this.menu_items[0].selection_over();

        _this.cursor_keys = _this.game_state.game.input.keyboard.createCursorKeys();
        return _this;
    }

    _createClass(Menu, [{
        key: 'update',
        value: function update() {
            if (this.cursor_keys.up.isDown && this.current_item_index > 0) {
                this.menu_items[this.current_item_index].selection_out();
                this.current_item_index -= 1;
                this.menu_items[this.current_item_index].selection_over();
            } else if (this.cursor_keys.down.isDown && this.current_item_index < this.menu_items.length - 1) {
                this.menu_items[this.current_item_index].selection_out();
                this.current_item_index += 1;
                this.menu_items[this.current_item_index].selection_over();
            }

            if (this.game_state.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                this.menu_items[this.current_item_index].select();
            }
        }
    }]);

    return Menu;
}(_prefab.Prefab);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Money = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textPrefab = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Money = exports.Money = function (_TextPrefab) {
    _inherits(Money, _TextPrefab);

    function Money(game_state, name, position, properties) {
        _classCallCheck(this, Money);

        return _possibleConstructorReturn(this, (Money.__proto__ || Object.getPrototypeOf(Money)).call(this, game_state, name, position, properties));
    }

    _createClass(Money, [{
        key: 'update',
        value: function update() {
            this.text = 'Money: ' + localStorage.money;
        }
    }]);

    return Money;
}(_textPrefab.TextPrefab);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UpgradeItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _menuItem = __webpack_require__(29);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpgradeItem = exports.UpgradeItem = function (_MenuItem) {
    _inherits(UpgradeItem, _MenuItem);

    function UpgradeItem(game_state, name, position, properties) {
        _classCallCheck(this, UpgradeItem);

        var _this = _possibleConstructorReturn(this, (UpgradeItem.__proto__ || Object.getPrototypeOf(UpgradeItem)).call(this, game_state, name, position, properties));

        _this.description = properties.description;
        _this.price = properties.price;

        _this.selected = false;
        return _this;
    }

    _createClass(UpgradeItem, [{
        key: 'selection_over',
        value: function selection_over() {
            _get(UpgradeItem.prototype.__proto__ || Object.getPrototypeOf(UpgradeItem.prototype), 'selection_over', this).call(this);

            this.game_state.prefabs.upgrade_description.text = this.description;
            this.game_state.prefabs.upgrade_price.text = this.price;
        }
    }, {
        key: 'selection_out',
        value: function selection_out() {
            _get(UpgradeItem.prototype.__proto__ || Object.getPrototypeOf(UpgradeItem.prototype), 'selection_out', this).call(this);

            this.game_state.prefabs.upgrade_description.text = '';
            this.game_state.prefabs.upgrade_price.text = '';
        }
    }, {
        key: 'select',
        value: function select() {
            if (!this.selected && localStorage.money >= this.price) {
                localStorage.money -= this.price;
                this.selected = true;
            }
        }
    }]);

    return UpgradeItem;
}(_menuItem.MenuItem);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StoreState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jsonLevelState = __webpack_require__(27);

var _menu = __webpack_require__(31);

var _money = __webpack_require__(32);

var _prefab = __webpack_require__(2);

var _textPrefab = __webpack_require__(15);

var _upgradeItem = __webpack_require__(33);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoreState = exports.StoreState = function (_JSONLevelState) {
    _inherits(StoreState, _JSONLevelState);

    function StoreState() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, StoreState);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StoreState.__proto__ || Object.getPrototypeOf(StoreState)).call.apply(_ref, [this].concat(args))), _this), _this.prefab_classes = {
            background: _prefab.Prefab.prototype.constructor,
            title: _textPrefab.TextPrefab.prototype.constructor,
            money: _money.Money.prototype.constructor,
            text: _textPrefab.TextPrefab.prototype.constructor,
            upgrade_item: _upgradeItem.UpgradeItem.prototype.constructor
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(StoreState, [{
        key: 'create',
        value: function create() {
            var menu_position, menu_items, menu_properties, menu;

            _get(StoreState.prototype.__proto__ || Object.getPrototypeOf(StoreState.prototype), 'create', this).call(this);

            // adding menu
            menu_position = new Phaser.Point(0, 0);
            menu_items = [];

            this.groups.menu_items.forEach(function (menu_item) {
                menu_items.push(menu_item);
            }, this);

            menu_properties = {
                texture: '',
                group: 'background',
                menu_items: menu_items
            };

            menu = new _menu.Menu(this, 'menu', menu_position, menu_properties);
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {
                this.game.state.start('Bootstrap', true, false, 'assets/levels/title-screen.json', 'TitleState');
            }
        }
    }]);

    return StoreState;
}(_jsonLevelState.JSONLevelState);

/***/ })
/******/ ]);