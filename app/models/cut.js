
export class Cut extends Phaser.Graphics {

  constructor( game_state, name, position, properties ) {
    super( game_state.game, position.x, position.y );

    this.game_state                 = game_state;

    this.name                       = name;

    this.game_state.groups[ properties.group ].add( this );

    this.game_state.prefabs[ name ] = this;
    

    this.beginFill( properties.style.color );
    
    this.lineStyle(
        properties.style.line_width,
        properties.style.color,
        properties.style.alpha
    );
    
    this.moveTo( properties.start.x, properties.start.y );
    
    this.lineTo( properties.end.x, properties.end.y );
    
    var kill_timer  = this.game_state.time.create();
    
    kill_timer.add(
      Phaser.Timer.SECOND * properties.duration,
      this.kill,
      this
    );
    
    kill_timer.start();
  }
  
  kill() {
    this.clear();
    
    Phaser.Graphics.prototype.kill.call( this );
  }

}