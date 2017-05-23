
import { Button } from '../models/button';
import { JSONLevelState } from './json-level-state';
import { PlayerInput } from '../models/player-input';
import { Prefab } from '../models/prefab';
import { TextPrefab } from '../models/text-prefab';


export class LoginState extends JSONLevelState {
    
    prefab_classes      = {
        background      : Prefab.prototype.constructor,
        title           : TextPrefab.prototype.constructor,
        player_input    : PlayerInput.prototype.constructor,
        button          : Button.prototype.constructor
    }
    
    create() {
        JSONLevelState.prototype.create.call( this );
        
        this.game.input.keyboard.addCallbacks(
            this,
            null,
            null,
            this.save_player_input
        );
        
        this.current_player_input   = this.prefabs.email_input.player_input;
    }
    
    save_player_input( char ) {
        this.current_player_input.text   += char;
    }
    
    attempt_login() {
        this.email      = this.prefabs.email_input.player_input.text;
        this.password   = this.prefabs.password_input.player_input.text;
        
        this.game.global.auth.signInWithEmailAndPassword( this.email, this.password )
            .catch(( err ) => {
                if ( err.code === 'auth/user-not-found' ) {
                    this.game.global.auth.createUserWithEmailAndPassword( this.email, this.password ).then(( user_data ) => {
                        this.attempt_login();
                    });
                }
            })
            .then(( auth_data ) => {
                this.on_login( auth_data );
            })
    }
    
    on_login( auth_data ) {
        this.game.global.database
                .child( 'players' )
                .child( auth_data.uid )
                .once( 'value', this.save_player_data.bind( this ) );
    }
    
    save_player_data( snapshot ) {
        var player_data = snapshot.val();
        
        if ( player_data ) {
            this.game.player_name   = player_data.name;
            this.game.money         = player_data.money;
            this.game.max_score     = player_data.max_score;
            
            this.game.state.start(
                'Bootstrap',
                true,
                false,
                'assets/levels/title-screen.json',
                'TitleState'
            )
        
        } else {
            this.game.player_name   = this.email.replace( /@.*/, '' );
            this.game.money         = 0;
            this.game.max_score     = 0;
            
            this.game.global.database
                .child( 'players' )
                .child( snapshot.key )
                .set({
                    name        : this.game.player_name,
                    money       : this.game.money,
                    max_score   : this.game.max_score

                }).then(() => {
                    this.game.state.start(
                        'Bootstrap',
                        true,
                        false,
                        'assets/levels/title-screen.json',
                        'TitleState'
                    )
                })
        }
    }
}