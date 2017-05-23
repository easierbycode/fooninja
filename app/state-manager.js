import STATE_EVENTS from './constants/state-events';

import { BootstrapState } from './states/bootstrap-state';
import { LoadingState } from './states/loading-state';
import { LoginState } from './states/login-state';
import { LevelState } from './states/level-state';
import { StoreState } from './states/store-state';
import { TitleState } from './states/title-state';


export class StateManager {

    game = null;

    constructor(game) {
        this.game = game;
        this.setupStates();
        this.setupNativeListeners();
        this.setupListeners();
    }

    setupStates() {
        this.game.state.add( 'Bootstrap', BootstrapState );
        this.game.state.add( 'Loading', LoadingState );
        this.game.state.add( 'LoginState', LoginState );
        this.game.state.add( 'GameState', LevelState );
        this.game.state.add( 'TitleState', TitleState );
        this.game.state.add( 'StoreState', StoreState );
    }

    setupNativeListeners() {
        this.game.state.onStateChange.add(( newState, oldState ) => {
            console.debug( 'Enter to new state: %s', newState );
        });
    }

    setupListeners() {
        this.game.on(STATE_EVENTS.BOOTSTRAP_COMPLETED, ( paramsArr ) => {
            this.game.state.start( 'Loading', ...paramsArr );
        });

        this.game.on(STATE_EVENTS.LOADING_COMPLETED, ( paramsArr ) => {
            // pop last element (next_state) off paramsArr
            var next_state  = paramsArr.pop();
            
            this.game.state.start( next_state, ...paramsArr );
        });
    }

    start() {
        this.game.state.start( 'Bootstrap', true, false, 'assets/levels/login-screen.json', 'LoginState' );
    }
}
