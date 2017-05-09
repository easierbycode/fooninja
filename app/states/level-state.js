import GAME from '../constants/game';
import PLAYER from '../constants/player';
import STATE_EVENTS from '../constants/state-events';
import { Bomb } from '../models/bomb';
import { BombSpawner } from '../models/bomb-spawner';
import { Cut } from '../models/cut';
import { Cuttable } from '../models/cuttable';
import { Fruit } from '../models/fruit';
import { FruitSpawner } from '../models/fruit-spawner';
import { Lives } from '../models/lives';
import { Player } from '../models/player';
import { Prefab } from '../models/prefab';
import { Score } from '../models/score';
import { SpecialFruit } from '../models/special-fruit';
import { SpecialFruitSpawner } from '../models/special-fruit-spawner';


export class LevelState extends Phaser.State {

    CUT_STYLE   = {
        line_width  : 5,
        color       : 0xE82C0C,
        alpha       : 1
    };
    
    MINIMUM_SWIPE_LENGTH    = 50;
    
    prefab_classes  = {
        background              : Prefab.prototype.constructor,
        score                   : Score.prototype.constructor,
        lives                   : Lives.prototype.constructor,
        cuttable                : Cuttable.prototype.constructor,
        fruit                   : Fruit.prototype.constructor,
        fruit_spawner           : FruitSpawner.prototype.constructor,
        special_fruit_spawner   : SpecialFruitSpawner.prototype.constructor,
        bomb                    : Bomb.prototype.constructor,
        bomb_spawner            : BombSpawner.prototype.constructor,
        special_fruit           : SpecialFruit.prototype.constructor
    }
    
    score       = 0;


    init( level_data ) {
        this.game.physics.startSystem( Phaser.Physics.ARCADE );
        this.game.physics.arcade.gravity.y  = 1000;  // GAME.gravity;
    }
    
    create() {
        this.game.input.onDown.add( this.start_swipe, this );
        this.game.input.onUp.add( this.end_swipe, this );
    }

    start_swipe( pointer ) {
        this.start_swipe_point  = new Phaser.Point( pointer.x, pointer.y );
    }

    end_swipe( pointer ) {
        this.end_swipe_point    = new Phaser.Point( pointer.x, pointer.y );
        
        if ( !this.start_swipe_point ) {
            var swipe_length    = 0;
        } else {
            var swipe_length    = Phaser.Point.distance(
                this.end_swipe_point,
                this.start_swipe_point
            );
        }

        if ( swipe_length >= this.MINIMUM_SWIPE_LENGTH ) {
            
            var cut     = new Cut(
                this,
                "cut",
                { x : 0, y : 0 },
                {
                    group       : "cuts",
                    start       : this.start_swipe_point,
                    end         : this.end_swipe_point,
                    duration    : 0.3,
                    style       : Object.create( this.CUT_STYLE )
                }
            )
            
            this.swipe  = new Phaser.Line(
                this.start_swipe_point.x,
                this.start_swipe_point.y,
                this.end_swipe_point.x,
                this.end_swipe_point.y
            );
            
            this.groups.fruits.forEachAlive( this.check_collision, this );
            this.groups.bombs.forEachAlive( this.check_collision, this );
            this.groups.special_fruits.forEachAlive( this.check_collision, this );
        }
    }
    
    check_collision( object ) {
        var object_rectangle    = new Phaser.Rectangle( object.body.x, object.body.y, object.body.width, object.body.height );
        
        var line1               = new Phaser.Line( object_rectangle.left, object_rectangle.bottom, object_rectangle.left, object_rectangle.top );
        var line2               = new Phaser.Line( object_rectangle.left, object_rectangle.top, object_rectangle.right, object_rectangle.top );
        var line3               = new Phaser.Line( object_rectangle.right, object_rectangle.top, object_rectangle.right, object_rectangle.bottom );
        var line4               = new Phaser.Line( object_rectangle.right, object_rectangle.bottom, object_rectangle.left, object_rectangle.bottom );
        
        var intersection        = this.swipe.intersects( line1 ) || this.swipe.intersects( line2 ) || this.swipe.intersects( line3 ) || this.swipe.intersects( line4 );
    
        if ( intersection )  object.cut();
    }
    
    game_over() {
        this.game_state.state.restart( true, false, this.level_data );
    }
}
