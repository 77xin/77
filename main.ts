input.onButtonPressed(Button.A, function () {
	
})
basic.clearScreen()
music.setBuiltInSpeakerEnabled(true)
music.play(music.stringPlayable("A F G C - C G A ", 150), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("F - - A F G C C ", 150), music.PlaybackMode.UntilDone)
basic.showString("Hello")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showString("" + input.temperature() + "temp")
