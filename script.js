

var devmode = false

// MAIN DATA
var data = {
	// common data
	"author": ["Aria Andika", "yeh"],
	"authorf": function () {
		au.style.display = au.style.display == "inline" ? "none" : "inline"
	},
	"pencipta": "Aria Andika",
	"pembuat": "Aria Andika",
	"siapa kamu": "Bot biasa",
	"lol": "haha",
	"lolf": function () {
		alert('LOOOOOOOOOOOL')
	},

	// dev mode
	"devmode": "sapa kamu ?",
	"devmodef": function () {
		if (prompt('sapa kamu ?') == "banana") {
			devmode = !devmode
			if (devmode) {
				box.style.backgroundColor = "#ff3300"
				bot.innerText = "Hai bos"
			} else {
				box.style.backgroundColor = "white"
				bot.innerText = "bye bos"
			}
		}
	}

}

var exception = ["ga paham", "ga ngerti"]

// ELEMENTS
const form = document.forms[0]
const user = document.getElementById('chatbox-user')
const box = document.getElementById('box')
const bot = document.getElementById('chatbox-bot')
const input = document.getElementById('typebox')
const debug = document.getElementById('debug')
const au = document.getElementById('author')

var todo = []

// FORM SUBMIT
form.onsubmit = (event) => {
	event.preventDefault();
	user.innerText = input.value;
	input.value = ""
	readKey(user.innerText);
}

// READKEY FROM MAIN DATA
function readKey(val) {
	// PREFIX
	var x = val.toLowerCase()

	// set text bot
	// bot.innerText = data[x]

	for (const key in data) {
		if (x.includes(key)) {

			if (Array.isArray(data[key])) {
				bot.innerText = data[key][r(data[key].length)]	// set bot text
			} else {
				bot.innerText = data[key]
			}



			if (data.hasOwnProperty(x + "f")) {
				data[x + "f"]()
			}

			return
		}
	}

	// exception if lib not listed
	if (data[x] == undefined) {
		bot.innerText = exception[r(exception.length)]
	}

	// debug.innerText = 'yes'

}

// other
function r(lim) {
	return Math.floor((Math.random() * lim));
}