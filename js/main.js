function playSound(e) {
    const audio = document.querySelector(`audio [data-key="${e.keyCode}"] `);
    const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);
       if (!audio) return;
        audio.curreTime = 0;
        audio.play();
        key.classList.add('playing');
        
    }
    function removeTransition(e){
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playings')
    }
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydon', playSound)