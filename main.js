'use strict';

import { Game } from "game location"

class Main {
    game = new Game()
    
    async startGame() {
        while (true) {
            this.updateGame();
            this.game.keyManager.update();
            await this.sleep(1000/60);
        }
    } 

    updateGame() {

    }


    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

var game = new Main();

game.startGame();
