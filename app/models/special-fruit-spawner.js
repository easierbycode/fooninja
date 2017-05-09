import { SpecialFruit } from './special-fruit';
import { Spawner } from './spawner';

export class SpecialFruitSpawner extends Spawner {
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
    }
    
    create_object( name, position, velocity ) {
        return new SpecialFruit(
            this.game_state,
            name,
            position,
            {
                texture     : 'fruits_spritesheet',
                group       : 'special_fruits',
                frame       : 15,
                velocity    : velocity
            }
        )   
    }
    
    
}