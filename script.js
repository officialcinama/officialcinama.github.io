//vars
var copyBusy = false;
var copyBusy2 = false;

// functions
const backBtn = () => {
	let el = document.getElementsByClassName("article");
	for (let i = 0; i < el.length; i++) {
		el[i].classList.remove("show-article");
	}
	document.getElementById("main-article").classList.add("show-article");
};
const showArticles = (page) => {
	page = page + "-article";
	document.getElementById("main-article").classList.remove("show-article");
	document.getElementById(page).classList.add("show-article");
};

function SelectText(element) {}

// $(function () {
// 	$("p").click(function () {
// 		SelectText("selectme");
// 	});
// });

const copyToClipboard = (element) => {
	if (copyBusy) return;
	copyBusy = true;
	var doc = document,
		text = doc.getElementById(element),
		range,
		selection;
	if (doc.body.createTextRange) {
		range = document.body.createTextRange();
		range.moveToElementText(text);
		range.select();
	} else if (window.getSelection) {
		selection = window.getSelection();
		range = document.createRange();
		range.selectNodeContents(text);
		selection.removeAllRanges();
		selection.addRange(range);
	}

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	document.getElementById("copy-title-termial-1").classList.add("show-title");
	setTimeout(() => {
		document.getElementById("copy-title-termial-1").classList.remove("show-title");
		copyBusy = false;
	}, 2000);
};
const copyToClipboard2 = (element) => {
	if (copyBusy2) return;
	copyBusy2 = true;
	var doc = document,
		text = doc.getElementById(element),
		range,
		selection;
	if (doc.body.createTextRange) {
		range = document.body.createTextRange();
		range.moveToElementText(text);
		range.select();
	} else if (window.getSelection) {
		selection = window.getSelection();
		range = document.createRange();
		range.selectNodeContents(text);
		selection.removeAllRanges();
		selection.addRange(range);
	}

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	document.getElementById("copy-title-termial-2").classList.add("show-title");
	setTimeout(() => {
		document.getElementById("copy-title-termial-2").classList.remove("show-title");
		copyBusy2 = false;
	}, 2000);
};
