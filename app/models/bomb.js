
import { Cuttable } from './cuttable';


export class Bomb extends Cuttable {
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
        
        this.body.setSize( 20, 20 );
    }
    
    cut() {
        Cuttable.prototype.cut.call( this );
        
        this.game_state.prefabs.lives.die();
        this.kill();
    }
}