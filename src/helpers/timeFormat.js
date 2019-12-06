export const timeFormat = (num) => {
    let minutes = Math.floor(num / 60);
    let secs = num % 60;
    if (minutes < 10) {
        minutes = '0' + minutes;
    } 
    if (secs < 10) {
        secs = '0' + secs;
    }        
    return minutes + ' : ' + secs;
}