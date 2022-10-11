radio.onReceivedString(function (receivedString) {
    OLED.writeStringNewLine(receivedString)
    basic.pause(200)
    OLED.clear()
})
OLED.init(128, 64)
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("hello")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("come here")
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("help me")
    }
})
