'use strict';

export class KeyManager {
    /*
      KeyW = 0;
      KeyA = 1;
      KeyS = 2;
      KeyD = 3;
     */

    keyBuffer;
    keysCurrentlyPressed;
    keysPressedLastFrame;

    constructor() {
      this.keyBuffer = new Array();
      this.keysCurrentlyPressed = new Array();
      this.keysPressedLastFrame = new Array();

      document.addEventListener('keydown', (event) => {
        var code = event.code;
        this.setKeyPressed(code, true)
      }, false);
    
      document.addEventListener('keyup', (event) => {
        var code = event.code;
        this.setKeyPressed(code, false)
      }, false);
    }

    wasKeyJustPressed(code) {
      switch (code) {
        case "KeyW": return !this.keysPressedLastFrame[0] && this.keysCurrentlyPressed[0];
      }
    }

    isKeyPressed(code) {
      switch (code) {
        case "KeyW": return this.keysCurrentlyPressed[0];
          
        default:
          console.log("Unexpected key code: " + code);
      }
    }

    setKeyPressed(code, pressed) {
      switch (code) {
        case "KeyW":
          this.keyBuffer[0] = pressed;
          break;

        default:
          console.log("Unexpected key code: " + code);
      }
    }

    update() {
      for (let i = 0; i < this.keyBuffer.length; i++) {
        this.keysPressedLastFrame[i] = this.keysCurrentlyPressed[i];
        this.keysCurrentlyPressed[i] = this.keyBuffer[i];
        // this.keyBuffer[i] = false;
      }
    }

}
