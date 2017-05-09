
import { MenuItem } from './menu-item';


export class StartStateItem extends MenuItem {
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
        
        this.level_file = properties.level_file;
        this.state_name = properties.state_name;
    }
    
    select() {
        this.game_state.state.start(
            'Bootstrap',
            true,
            false,
            this.level_file,
            this.state_name
        );
    }
}