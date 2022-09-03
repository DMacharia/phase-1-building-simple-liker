// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likes = document.querySelectorAll(".like-glyph");

function liker() {
	mimicServerCall()
		.then(() => {
			if (likes.innerText === EMPTY_HEART) {
				likes.innerText = FULL_HEART;
				likes.className = "activated-heart";
			} else {
				likes.innerText = EMPTY_HEART;
				likes.classList.remove("activated-heart");
			}
		})
		.catch(function (error) {
			setTimeout(() => {
				let error = document.querySelector("#modal");
				error.classList.remove("hidden");
			}, 3000);
		});
}

for (const like of likes) {
	likes.addEventListener("click", liker);
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			let isRandomFailure = Math.random() < 0.2;
			if (isRandomFailure) {
				reject("Random server error. Try again.");
			} else {
				resolve("Pretend remote server notified of action!");
			}
		}, 300);
	});
}
