input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 0, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.showString("Well done, Papa!!")
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showString("The other LEFT!")
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
basic.showString("Hello Papa!")
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.showString("press button A")
basic.showArrow(ArrowNames.West)
basic.pause(1000)
basic.clearScreen()
basic.showArrow(ArrowNames.West)
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.West)
    basic.pause(250)
    basic.clearScreen()
    basic.pause(250)
}
basic.showArrow(ArrowNames.West)
