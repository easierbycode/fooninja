
import { Cuttable } from './cuttable';


export class Fruit extends Cuttable {
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
        
        this.body.setSize( 20, 20 );
        
        this.frames = properties.frames;
        this.frame  = this.game_state.game.rnd.pick( this.frames );
    }
    
    reset( position_x, position_y, velocity ) {
        var frame_index;
        
        Cuttable.prototype.reset.call( this, position_x, position_y, velocity );
        
        this.frame  = this.game_state.game.rnd.pick( this.frames );
    }
    
    cut() {
        Cuttable.prototype.cut.call( this );
        this.game_state.score += 1;
        this.kill();
    }
}