input.onButtonPressed(Button.A, function () {
    rope += -0.1
})
input.onButtonPressed(Button.B, function () {
    rope += 0.1
})
let rope = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(rope), 2)
    if (rope < 0) {
        basic.showString("A win")
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    } else if (rope > 4) {
        basic.showString("B win")
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    } else {
        basic.showString("try again")
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    }
})
