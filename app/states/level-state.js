import GAME from '../constants/game';
import PLAYER from '../constants/player';
import STATE_EVENTS from '../constants/state-events';
import { Player } from '../models/player';
import { Prefab } from '../models/prefab';

export class LevelState extends Phaser.State {
    // map = null;
    // layer = null;
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
                this.create_prefab( prefab_name, this.level_data.prefabs[ prefab_name ] );
            }
        }
    }

    create_prefab( prefab_name, prefab_data ) {
        var prefab_position, prefab;
        
        if ( this.prefab_classes.hasOwnProperty( prefab_data.type ) ) {
            if ( prefab_data.position.x > 0 && prefab_data.position.x <= 1 ) {
                prefab_position = new Phaser.Point( prefab_data.position.x * this.game.world.width, prefab_data.position.y * this.game.world.height );
            } else {
                prefab_position = prefab_data.position;
            }
            prefab = new this.prefab_classes[ prefab_data.type ]( this, prefab_name, prefab_position, prefab_data.properties );
        }
    }
}
