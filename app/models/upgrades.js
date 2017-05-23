
import { Upgrade } from './upgrade';


export class Upgrades extends Phaser.Plugin {
    
    init( game_state ) {
        this.game_state = game_state;
        
        this.upgrade_classes    = {
            super_blade : Upgrade.prototype.constructor,
            extra_blade : Upgrade.prototype.constructor
        }
    }
    
    apply_upgrades( upgrades ) {
        upgrades.forEach(function( upgrade_data ) {
            var upgrade;
            
            if ( this.upgrade_classes.hasOwnProperty( upgrade_data.type ) ) {
                upgrade = new this.upgrade_classes[ upgrade_data.type ](
                    this.game_state,
                    upgrade_data.properties
                );
                
                upgrade.apply();
            }
        }, this);
    }
}