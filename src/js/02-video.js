import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayerEL = document.querySelector('iframe');
const player = new Player(vimeoPlayerEL);
const CURRENT_TIME = "videoplayer-current-time";


player.on('timeupdate', throttle(addTimeIntoStorage, 1000));

function addTimeIntoStorage({seconds}) {
  localStorage.setItem(
    CURRENT_TIME, seconds
  );
  
}

player.setCurrentTime(localStorage.getItem(CURRENT_TIME))

