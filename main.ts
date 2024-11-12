for (let index = 0; index < 4; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 38)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 44)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 44)
    basic.pause(885)
}
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})
