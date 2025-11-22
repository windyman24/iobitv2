pins.servoWritePin(AnalogPin.P6, 90)
basic.forever(function () {
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P6, 180)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P6, 90)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P6, 0)
})
