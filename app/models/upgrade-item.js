
import { MenuItem } from './menu-item';


export class UpgradeItem extends MenuItem {
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
        
        this.description    = properties.description;
        this.price          = properties.price;
        
        this.selected       = false;
    }
    
    selection_over() {
        super.selection_over.call( this );
        
        this.game_state.prefabs.upgrade_description.text    = this.description;
        this.game_state.prefabs.upgrade_price.text          = this.price;
    }
    
    selection_out() {
        super.selection_out.call( this );
        
        this.game_state.prefabs.upgrade_description.text    = '';
        this.game_state.prefabs.upgrade_price.text          = '';
    }
    
    select() {
        if ( !this.selected && localStorage.money >= this.price ) {
            localStorage.money  -= this.price;
            this.selected       = true;
        }
    }
}