
import { TextPrefab } from './text-prefab';


export class MenuItem extends TextPrefab {
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
        
        this.anchor.setTo( 0.5 );
        
        this.on_selection_animation = this.game_state.game.add.tween( this.scale );
        
        this.on_selection_animation.to({
            x   : 1.5 * this.scale.x,
            y   : 1.5 * this.scale.y
        }, 500);
        
        this.on_selection_animation.to({
            x   : this.scale.x,
            y   : this.scale.y
        }, 500);
        
        this.on_selection_animation.repeatAll( -1 );
    }
    
    selection_over() {
        if ( this.on_selection_animation.isPaused ) {
            this.on_selection_animation.resume();
        } else {
            this.on_selection_animation.start();
        }
    }
    
    selection_out() {
        this.on_selection_animation.pause();
    }
    
    select() {
        
    }
}