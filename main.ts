/**
 * Functions are mapped to blocks using various macros 
 * in comments starting with % (e.g., //% block).
 * The most important macro "block" specifies that a
 * block should be generated for a **exported** function.
 */
//% color="#FFAAFF" icon="\uf1b9" block="Tof"
namespace totof {

    //% block
    export function afficheTof() {
        basic.showString("Tof")

    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function camlCaseTwo() {

    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function testPin() {    
    let buf = pins.createBuffer(4);
        buf[0] = RGB;
        buf[1] = red;
        buf[2] = green;
        buf[3] = blue;

        pins.i2cWriteBuffer(PWM_ADD, buf);
    }
}
