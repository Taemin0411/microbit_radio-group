def on_received_string(receivedString):
    OLED.write_string_new_line(receivedString)
radio.on_received_string(on_received_string)

OLED.init(128, 64)
radio.set_group(1)

def on_forever():
    if input.button_is_pressed(Button.A):
        radio.send_string("hello")
    elif input.button_is_pressed(Button.B):
        radio.send_string("come here")
    elif input.button_is_pressed(Button.AB):
        radio.send_string("help me")
basic.forever(on_forever)
