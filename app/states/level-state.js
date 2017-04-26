import GAME from '../constants/game';
import PLAYER from '../constants/player';
import STATE_EVENTS from '../constants/state-events';
import { Cut } from '../models/cut';
import { Player } from '../models/player';
import { Prefab } from '../models/prefab';

export class LevelState extends Phaser.State {

    CUT_STYLE   = {
        line_width  : 5,
        color       : 0xE82C0C,
        alpha       : 1
    };
    
    MINIMUM_SWIPE_LENGTH    = 50;
    
    prefab_classes  = {
        background  : Prefab.prototype.constructor
    }


    init( level_data ) {
        this.level_data                     = level_data;

        this.scale.scaleMode                = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally    = true;
        this.scale.pageAlignVertically      = true;

        this.game.physics.startSystem( Phaser.Physics.ARCADE );
        this.game.physics.arcade.gravity.y  = GAME.gravity;
    }
    
    create() {
        var group_name, prefab_name;
    
        this.groups = {};
        this.level_data.groups.forEach(function ( group_name ) {
            this.groups[ group_name ] = this.game.add.group();
        }, this);
        
        this.prefabs = {};
        for ( prefab_name in this.level_data.prefabs ) {
            if ( this.level_data.prefabs.hasOwnProperty( prefab_name ) ) {
                this.create_prefab(
                    prefab_name,
                    this.level_data.prefabs[ prefab_name ]
                );
            }
        }

        this.game.input.onDown.add( this.start_swipe, this );
        this.game.input.onUp.add( this.end_swipe, this );
    }

    create_prefab( prefab_name, prefab_data ) {
        var prefab_position, prefab;
        
        if ( this.prefab_classes.hasOwnProperty( prefab_data.type ) ) {
            if ( prefab_data.position.x > 0 && prefab_data.position.x <= 1 ) {
                prefab_position = new Phaser.Point(
                    prefab_data.position.x * this.game.world.width,
                    prefab_data.position.y * this.game.world.height
                );
            } else {
                prefab_position = prefab_data.position;
            }
            prefab = new this.prefab_classes[ prefab_data.type ](
                this,
                prefab_name,
                prefab_position,
                prefab_data.properties
            );
        }
    }

    start_swipe( pointer ) {
        this.start_swipe_point  = new Phaser.Point( pointer.x, pointer.y );
    }

    end_swipe( pointer ) {
        this.end_swipe_point    = new Phaser.Point( pointer.x, pointer.y );

        if ( this.start_swipe_point && this.end_swipe_point ) {
        
            var swipe_length        = Phaser.Point.distance(
                this.end_swipe_point,
                this.start_swipe_point
            );
            
        } else {
            
            var swipe_length        = 0;
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
        }
    }
}
