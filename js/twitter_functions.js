function validate_entry(){
    const user_input = document.getElementById("user-tweet"); 
    const button = document.getElementById("tweeet");
    const maxLength = 160;

    user_input.addEventListener("input", function(){
        let remaining = maxLength - user_input.value.length;

        if(remaining <= 0){
            remaining = 0;
            button.disabled = true;
        }else{
            button.disabled = false;
        }

        document.getElementById("char-counter").innerHTML =
            `<i>${remaining} characters remaining</i>`;
    });
}


// creating tweet
function createTweet(text){
    const feed = document.getElementById("tweet-feed");

    const tweet = document.createElement("div");
    tweet.className = "tweet-card";

    tweet.innerHTML = `
        <div class="d-flex gap-2">
            <div class="profile-pic"></div>
            <div>
                <div class="tweet-user">You</div>
                <div class="tweet-text text-break">${text}</div>
            </div>
        </div>
    `;

    feed.prepend(tweet);
}


// everything starts after DOM loads
document.addEventListener("DOMContentLoaded", function(){

    validate_entry();

    const button = document.getElementById("tweeet");
    const input = document.getElementById("user-tweet");

    button.addEventListener("click", function(){
        const text = input.value.trim();
        if(text.length === 0) return;

        createTweet(text);

        input.value = "";
        document.getElementById("char-counter").innerHTML =
            `<i>160 characters remaining</i>`;
        button.disabled = false;
    });

});