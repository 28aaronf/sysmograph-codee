basic.showString("ACC")
basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1024
    )
})
basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.Y),
    1024
    )
})
basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.Z),
    1024
    )
})
