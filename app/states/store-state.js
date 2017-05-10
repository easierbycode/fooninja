
import { JSONLevelState } from './json-level-state'
import { Menu } from '../models/menu';
import { Money } from '../models/money';
import { Prefab } from '../models/prefab';
import { TextPrefab } from '../models/text-prefab';
import { UpgradeItem } from '../models/upgrade-item';


export class StoreState extends JSONLevelState {

    prefab_classes  = {
        background      : Prefab.prototype.constructor,
        title           : TextPrefab.prototype.constructor,
        money           : Money.prototype.constructor,
        text            : TextPrefab.prototype.constructor,
        upgrade_item    : UpgradeItem.prototype.constructor
    };
    
    create() {
        var menu_position, menu_items, menu_properties, menu;
        
        super.create.call( this );
        
        // adding menu
        menu_position   = new Phaser.Point( 0, 0 );
        menu_items      = [];
        
        this.groups.menu_items.forEach(function( menu_item ) {
            menu_items.push( menu_item );
        }, this);
        
        menu_properties = {
            texture     : '',
            group       : 'background',
            menu_items  : menu_items
        };
        
        menu            = new Menu( this, 'menu', menu_position, menu_properties );
    }
    
    update() {
        if ( this.game.input.keyboard.isDown( Phaser.Keyboard.ESC ) ) {
            this.game.state.start( 'Bootstrap', true, false, 'assets/levels/title-screen.json', 'TitleState' );
        }
    }
}