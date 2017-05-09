
export class JSONLevelState extends Phaser.State {
    
    prefab_classes  = {};
    
    init( level_data ) {
        this.level_data                     = level_data;

        this.scale.scaleMode                = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally    = true;
        this.scale.pageAlignVertically      = true;
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
    }
    
    create_prefab( prefab_name, prefab_data ) {
        var prefab_position, prefab;
        
        // create object according to its type
        if ( this.prefab_classes.hasOwnProperty( prefab_data.type ) ) {
            
            // position is percentage
            if ( prefab_data.position.x > 0 && prefab_data.position.x <= 1 ) {
                prefab_position = new Phaser.Point(
                    prefab_data.position.x * this.game.world.width,
                    prefab_data.position.y * this.game.world.height
                );
            
            // position is absolute number
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
}