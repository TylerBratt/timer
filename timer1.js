let timer = '';
const beeper = function(num) {
  if (timer <= 0) {
    // nothing happens
  } else if (isNaN(timer)) {
    //nothing happens
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num);
    
  }

};
beeper(timer);