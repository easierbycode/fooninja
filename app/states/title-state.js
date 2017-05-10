
import { JSONLevelState } from './json-level-state';
import { Menu } from '../models/menu';
import { Prefab } from '../models/prefab';
import { StartStateItem } from '../models/start-state-item';
import { TextPrefab } from '../models/text-prefab';


export class TitleState extends JSONLevelState {
    
    prefab_classes  = {
        background          : Prefab.prototype.constructor,
        start_state_item    : StartStateItem.prototype.constructor,
        title               : TextPrefab.prototype.constructor
    }
    
    create() {
        var menu_position, menu_items, menu_properties, menu;
        
        super.create.call( this );
        
        menu_position   = new Phaser.Point( 0, 0 );
        menu_items      = [];
        
        this.groups.menu_items.forEach(function( menu_item ) {
            menu_items.push( menu_item )
        }, this);
        
        menu_properties = {
            texture     : '',
            group       : 'background',
            menu_items  : menu_items
        }
        
        menu    = new Menu( this, 'menu', menu_position, menu_properties );
    }
}