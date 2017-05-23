
import { Prefab } from './prefab';
import { TextPrefab } from './text-prefab';


export class Leaderboard extends Prefab {
    
    score_index;
    score_position;
    score;
    scores          = [];
    
    constructor( game_state, name, position, properties ) {
        super( game_state, name, position, properties );
        
        this.number_of_scores   = properties.number_of_scores;
        this.scores_spacing     = properties.scores_spacing;
        this.text_properties    = properties.text_properties;
    }
    
    show_leaderboard() {
        this.game.database
            .child( 'players' )
            .orderByChild( 'max_score' )
            .limitToLast( this.number_of_scores )
            .on('child_added', this.update_leaderboard.bind( this ));
        
        this.game_state.game.input.keyboard.addCallbacks( this, this.process_keyboard );
    }
    
    update_leaderboard( snapshot ) {
        var player_data, score_position, score;
        
        player_data     = snapshot.val();
        score_position  = new Phaser.Point(
            this.position.x,
            this.position.y + (this.scores.length * this.scores_spacing)
        );
        score           = new TextPrefab(
            this.game_state,
            'score' + this.scores.length,
            score_position,
            this.text_properties
        );
        
        this.game_state.groups.hud.add( score );
        
        score.text      = player_data.name + ': ' + player_data.max_score;
        
        this.scores.push( score );
    }
    
    process_keyboard() {
        if ( event.keyCode === Phaser.Keyboard.ESC ) {
            this.game.state.start(
                'BootState',
                true,
                false,
                'assets/levels/title_screen.json',
                'TitleState'
            )
        }
    }
}