//let alreadyInit = 0
//const PWM_ADD = 0x01
//const MOTOR = 0x02
//const RGB = 0x01

//% weight=10 color=#FFAAFF icon="\uf1b9" block="Tof"
//% groups='["Tests", "Mouvements"]'
/**
 *Ma premiere extension de test
 */
namespace totof {
    export enum testVar {
        //% blockId="Gauche" block="Gauche"
        Gauche = 0,
        //% blockId="Droite" block="Droite"
        Droite = 1,
        //% blockId="Avant" block="Avant"
        Avant = 2,
        //% blockId="Arriere" block="Arriere"
        Arriere = 3
    }
    
    //% weight=100
    //% group="Tests"
    //% blockId=ID_Affiche_Tof block="Set|%index|to|%Direction|at the speed|%speed" 
    export function traductionFranToAng(testVar: Mot): void {
       if (testVar == Mot.Gauche) { 
            basic.showString("Left");
       }
       else if (testVar == Mot.Droite) { 
            basic.showString("Right");
       }
       else if (testVar == Mot.Avant) { 
            basic.showString("Forward");
       }
       else if (testVar == Mot.Arriere) { 
            basic.showString("Backward");
       }
    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function camlCaseTwo() {

    }

    /*export function setPwmRGB(red: number, green: number, blue: number): void {

        let buf = pins.createBuffer(4);
        buf[0] = RGB;
        buf[1] = red;
        buf[2] = green;
        buf[3] = blue;

        pins.i2cWriteBuffer(PWM_ADD, buf);
    }*/
}
