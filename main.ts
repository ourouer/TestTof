//let alreadyInit = 0
//const PWM_ADD = 0x01
//const MOTOR = 0x02
//const RGB = 0x01
//let yahStrip: neopixel.Strip;
//% weight=10 color=#FFAAFF icon="\uf1b9" block="Tof"
//% groups='["Tests", "Mouvements"]'
/**
 *Ma premiere extension de test
 */
namespace totof {
    export enum Valeur {
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
    //% blockId=ID_Affiche_Tof block="Traduction de |%mot| en anglais" 
    export function traductionFranToAng(mot: Valeur): void {
       if (mot == Valeur.Gauche) { 
            basic.showString("Left");
       }
       else if (mot == Valeur.Droite) { 
            basic.showString("Right");
       }
       else if (mot == Valeur.Avant) { 
            basic.showString("Forward");
       }
       else if (mot == Valeur.Arriere) { 
            basic.showString("Backward");
       }
    }
    
    //% weight=100
    //% group="Tests"
    //% blockId=ID_FaitQueukChose block="FaitQueukChose" 
    export function FaitQueukChose(): neopixel.Strip {
    //    if (!yahStrip) {
    //     yahStrip = neopixel.create(DigitalPin.P12, 2, NeoPixelMode.RGB);   
    //    }
    //return yahStrip; 
    return 0;
    }
    
    
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
