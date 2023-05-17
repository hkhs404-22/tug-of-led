input.onButtonPressed(Button.A, function () {
    rope += -0.3
})
input.onButtonPressed(Button.B, function () {
    rope += 0.3
})
let rope = 2
music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
if (rope < 0) {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
} else if (rope > 4) {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
}
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(rope), 2)
    if (rope < 0) {
        basic.showString("A win")
    } else if (rope > 4) {
        basic.showString("B win")
    } else {
        basic.showString(" Keep it up!")
    }
})
