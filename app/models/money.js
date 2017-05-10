
import { TextPrefab } from './text-prefab';


export class Money extends TextPrefab {
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
    }
    
    update() {
        this.text   = 'Money: ' + localStorage.money;
    }
}