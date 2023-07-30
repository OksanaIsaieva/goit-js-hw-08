

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(throttle);
const iframe = document.querySelector('iframe#vimeo-player');
    const player = new Player(iframe);
const curentTime = localStorage.getItem("videoplayer-current-time") ?? 0;

    player.on('timeupdate', throttle(function(currentTime) {
        
        

            console.log(currentTime);
            localStorage.setItem("videoplayer-current-time", currentTime.seconds);
         
         }, 1000, {trailing:false})
    );

  
    player.setCurrentTime(curentTime).then(function(seconds) {
        
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
              
                break;
    
            default:
                
                break;
        }
    });