input.onButtonPressed(Button.A, function () {
    radio.sendString("ola, tudo bem?")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (receivedString))
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("estou bem")
})
radio.setGroup(1)
