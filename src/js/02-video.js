import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector("iframe");
const key ="videoplayer-current-time";

    const play = new Player(iframe);
    play.on("timeupdate", throttle(timePicker,1000));
    currentTime();

    function timePicker(e) {
        localStorage.setItem(key, e.seconds);
    };
    function currentTime(){
        const time =localStorage.getItem(key);
        if(time){
            play.setCurrentTime(parseFloat(time));     
         } 
     }
