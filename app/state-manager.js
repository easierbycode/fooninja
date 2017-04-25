import STATE_EVENTS from './constants/state-events';

import { BootstrapState } from './states/bootstrap-state';
import { LoadingState } from './states/loading-state';
import { LevelState } from './states/level-state';

export class StateManager {
    game = null;

    constructor(game) {
        this.game = game;
        this.setupStates();
        this.setupNativeListeners();
        this.setupListeners();
    }

    setupStates() {
        this.game.state.add('Bootstrap', BootstrapState);
        this.game.state.add('Loading', LoadingState);
        this.game.state.add('GameState', LevelState);
    }

    setupNativeListeners() {
        this.game.state.onStateChange.add((newState, oldState) => {
            console.debug('Enter to new state: %s', newState);
        });
    }

    setupListeners() {
        this.game.on(STATE_EVENTS.BOOTSTRAP_COMPLETED, ( paramsArr ) => {
            this.game.state.start( 'Loading', ...paramsArr );
        });

        this.game.on(STATE_EVENTS.LOADING_COMPLETED, ( paramsArr ) => {
            this.game.state.start( 'GameState', ...paramsArr );
        });
    }

    start() {
        // this.game.state.start('Bootstrap');
        this.game.state.start( 'Bootstrap', true, false, 'assets/levels/level1.json' );
    }
}
