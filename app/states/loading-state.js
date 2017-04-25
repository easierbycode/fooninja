import STATE_EVENTS from '../constants/state-events';

export class LoadingState extends Phaser.State {
    
    init( level_data ) {
        this.level_data = level_data;
    }
    
    preload() {
        var assets, asset_loader, asset_key, asset;
        assets = this.level_data.assets;
        for (asset_key in assets) { 
            if (assets.hasOwnProperty(asset_key)) {
                asset = assets[asset_key];
                switch (asset.type) {
                case "image":
                    this.load.image(asset_key, asset.source);
                    break;
                case "spritesheet":
                    this.load.spritesheet(asset_key, asset.source, asset.frame_width, asset.frame_height, asset.frames, asset.margin, asset.spacing);
                    break;
                }
            }
        }
    }

    create() {
        this.time.events.add(500, () => {
            this.game.trigger( STATE_EVENTS.LOADING_COMPLETED, [true, false, this.level_data] );
        });
    }
}
