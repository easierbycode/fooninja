
import { Prefab } from './prefab';


export class Lives extends Prefab {
    
    visible     = false;
    
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
        
        this.lives          = properties.lives;
        this.lives_sprites  = [];
        
        for ( var live_index = 0; live_index < this.lives; live_index += 1 ) {
            var life    = new Phaser.Sprite(
                this.game_state.game,
                position.x + (live_index * properties.lives_spacing),
                position.y,
                this.texture
            );
            
            this.lives_sprites.push( life );
            
            this.game_state.groups[ properties.group ].add( life );
        }
    }
    
    die() {
        var life;
        
        this.lives -= 1;
        
        life    = this.lives_sprites.pop();
        life.kill();
        
        if ( this.lives === 0 ) {
            this.game_state.game_over();
        }
    }
}