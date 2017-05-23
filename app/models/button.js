
export class Button extends Phaser.Button {
    
    constructor( game_state, name, position, properties ) {
        super(
            game_state.game,
            position.x,
            position.y,
            properties.texture,
            game_state[properties.callback],
            game_state
        )
        
        this.game_state = game_state;
        
        this.name       = name;
        
        this.game_state.groups[properties.group].add( this );
        
        if ( properties.anchor ) {
            this.anchor.setTo( properties.anchor.x, properties.anchor.y );
        }
        
        this.game_state.prefabs[name]   = this;
    }
}