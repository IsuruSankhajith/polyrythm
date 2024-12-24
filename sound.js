const audioCtx = new(window.AudioContext || window.webkitURLAudioContext)();

function playSound(frequency = 440, duration = 1){
    const osc = audioCtx.createOscillator();
    const enevelope = audioCtx.createGain(); 
    osc.connect(enevelope);
    enevelope.connect(audioCtx.destination);

    enevelope.gain.setTargetAtTime(0, audioCtx.currentTime);
    enevelope.gain.linearRampToValueAtTime(1,audioCtx.currentTime + 0.05); 
    enevelope.gain.linearRampToValueAtTime(0,audioCtx.currentTime + duration);
    

    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    //osc.start();
    osc.stop(audioCtx.currentTime + duration); 
}