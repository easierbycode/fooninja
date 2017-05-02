
import { TextPrefab } from './text-prefab';


export class Score extends TextPrefab {

    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
    }
    
    update() {
        this.text   = 'Fruits: ' + this.game_state.score;
    }
}