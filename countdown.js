const release_date = new Date(2023, 8, 6, 23, 0, 0).getTime();

const countdown = setInterval(update_countdown, 1000)

function update_countdown(){
    const now = new Date().getTime();
    const until_release = release_date - now;

    if(until_release <= 0){
        clearInterval(countdown)
        $("#container").text("STARFIELD RELEASED!!")
        return;
    }

    $(days).text(Math.floor(until_release / (1000 * 60 * 60 * 24)));
    $(hours).text(Math.floor(until_release % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    $(minutes).text(Math.floor(until_release % (1000 * 60 * 60) / (1000 * 60)))
    $(seconds).text(Math.floor(until_release % (1000 * 60) / 1000))
};