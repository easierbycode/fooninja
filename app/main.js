import { Game } from './game';
import { StateManager } from './state-manager';
import GAME from './constants/game';

var config      = {
    apiKey              : "AIzaSyD0CVL1R6ZqrsKOKe8sR1hgnloWqP73wWI",
    authDomain          : "fooninja-2278f.firebaseapp.com",
    databaseURL         : "https://fooninja-2278f.firebaseio.com",
    projectId           : "fooninja-2278f",
    storageBucket       : "fooninja-2278f.appspot.com",
    messagingSenderId   : "961379266751"
};

firebase.initializeApp(config);

let game        = new Game(GAME.WIDTH, GAME.HEIGHT, 'app', Phaser.CANVAS);

game.global     = {
    auth        : firebase.auth(),
    database    : firebase.database().ref()
}

let manager     = new StateManager(game);


manager.start();
