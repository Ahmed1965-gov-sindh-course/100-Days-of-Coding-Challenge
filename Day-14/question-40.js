"use strict";
/*Question 40: Album: Create objects for music albums*/
function make_album(artist, title, tracks) {
    return {
        artist,
        title,
        tracks
    };
}
console.log(make_album("Drake", "Views"));
console.log(make_album("Adele", "artist1", 21));
