//% weight=10 color=#FFAAFF icon="\uf1b9" block="Tof"
//% groups='["Tests", "Mouvements"]'
/**
 *Ma premiere extension de test
 */
namespace totof {
    //let alreadyInit = 0
    const PWM_ADD = 0x01
    const MOTOR = 0x02
    const RGB = 0x01
    let yahStrip: neopixel.Strip;
    
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
    
    function setPwmRGB(red: number, green: number, blue: number): void {

        let buf = pins.createBuffer(4);
        buf[0] = RGB;
        buf[1] = red;
        buf[2] = green;
        buf[3] = blue;
        
        pins.i2cWriteBuffer(PWM_ADD, buf);
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
    //% blockId=ID_retourVrai block="retourVrai" 
   export function retourVrai(): boolean {
   let totobool = true;
   return totobool;
   }

    //% weight=100
    //% group="Tests"
    //% blockId=ID_FaitQueukChose block="FaitQueukChose" 
     export function FaitQueukChose(): neopixel.Strip {
        if (!yahStrip) {
         yahStrip = neopixel.create(DigitalPin.P12, 2, NeoPixelMode.RGB);   
        }
    return yahStrip;
    }
    
    
    //% blockId=Tinybit_RGB_Car_Big block="RGB_Car_Big|value %value"
    //% weight=98
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function RGB_Car_Big(value: number): void {

        switch (value) {
            case 0: setPwmRGB(0, 0, 0);   break;
            case 1: setPwmRGB(255, 0, 0);   break;     
            case 2: setPwmRGB(255, 255, 0);   break;
            case 3: setPwmRGB(255, 255, 255);   break;     
            }
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
