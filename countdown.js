const release_date = new Date(2023, 8, 6, 0, 0, 0).getTime();

const countdown = setInterval(update_countdown, 1000)

function update_countdown(){
    const now = new Date().getTime();
    const until_release = release_date - now;

    if(until_release <= 0){
        clearInterval(countdown)
        $("#container").text("STARFIELD HAS BEEN RELEASED!!")
        return;
    }

    $(days).text(Math.floor(until_release / (1000 * 60 * 60 * 24)) + " Days");
    $(hours).text(Math.floor(until_release % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) + " Hours");
    $(minutes).text(Math.floor(until_release % (1000 * 60 * 60) / (1000 * 60)) + " Minutes")
    $(seconds).text(Math.floor(until_release % (1000 * 60) / 1000) + " Seconds")
};