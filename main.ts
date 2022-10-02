function Green_LED_lights_on () {
    strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}
function Yellow_LED_lights_on () {
    strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
}
function Red_LED_lights_on () {
    strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
basic.forever(function () {
    Red_LED_lights_on()
    basic.pause(3000)
    Yellow_LED_lights_on()
    basic.pause(1000)
    Green_LED_lights_on()
    basic.pause(3000)
})
