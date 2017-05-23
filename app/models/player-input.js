
import { Prefab } from './prefab';
import { TextPrefab } from './text-prefab';


export class PlayerInput extends Prefab {
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
        
        this.inputEnabled   = true;
        
        this.events.onInputDown.add( this.select, this );
        
        this.player_input   = new TextPrefab(
            this.game_state,
            this.name + '_input',
            this.position,
            properties.text_properties
        );
        
        this.game_state.groups.hud.add( this.player_input );
    }
    
    select() {
        this.game_state.current_player_input    = this.player_input;
    }
}