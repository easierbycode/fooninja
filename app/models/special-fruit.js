
import { Cuttable } from './cuttable';


export class SpecialFruit extends Cuttable {
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
        
        this.body.setSize( 20, 20 );
        
        this.kill_timer = this.game_state.game.time.create( false );
    }
    
    kill() {
        Phaser.Sprite.prototype.kill.call( this );
        
        this.body.allowGravity  = true;
        
        this.kill_timer.stop();
    }
    
    cut() {
        Cuttable.prototype.cut.call( this );
        
        this.game_state.score   += 1;
        
        if ( !this.kill_timer.running ) {
            this.body.allowGravity  = false;
            this.body.velocity.x    = 0;
            this.body.velocity.y    = 0;
            
            this.kill_timer.add( Phaser.Timer.SECOND * 3, this.kill, this );
            this.kill_timer.start();
        }
    }
    
}