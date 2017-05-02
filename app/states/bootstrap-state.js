import STATE_EVENTS from '../constants/state-events';

export class BootstrapState extends Phaser.State {
    
    init( level_file ) {
        this.level_file = level_file;
    }
    
    preload() {
        this.load.text( 'level1', this.level_file );
    }

    create() {
        var level_text  = this.game.cache.getText( 'level1' );
        var level_data  = JSON.parse( level_text );

        this.game.trigger(
            STATE_EVENTS.BOOTSTRAP_COMPLETED,
            [true, false, level_data]
        );
    }
}
