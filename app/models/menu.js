
import { Prefab } from './prefab';


export class Menu extends Prefab {
    
    current_item_index  = 0;
    visible             = false;
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
    
        this.menu_items = properties.menu_items;
        this.menu_items[ 0 ].selection_over();
        
        this.cursor_keys    = this.game_state.game.input.keyboard.createCursorKeys();
    }
    
    update() {
        if ( this.cursor_keys.up.isDown && this.current_item_index > 0 ) {
            this.menu_items[ this.current_item_index ].selection_out();
            this.current_item_index -= 1;
            this.menu_items[ this.current_item_index ].selection_over();
        } else if (
            this.cursor_keys.down.isDown &&
            this.current_item_index < this.menu_items.length-1
        ) {
            this.menu_items[ this.current_item_index ].selection_out();
            this.current_item_index += 1;
            this.menu_items[ this.current_item_index ].selection_over()
        }
        
        if ( this.game_state.game.input.keyboard.isDown( Phaser.Keyboard.SPACEBAR ) ) {
            this.menu_items[ this.current_item_index ].select();
        }
    }
}