async function getResponse(link) {
	let res = await fetch(link)
	let data = await res.json()
	return data
}

const toPersianDigits = (text) => {
	var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
	return text.replace(/[0-9]/g, function (w) {
	  return id[+w];
	});
  };

const getElementsByClass = (className) => Array.from(document.getElementsByClassName(className))

;(async () => {
	let TV = ""
	let Desktop = ""
	
	const getDesktop = async () => Desktop = await getResponse("https://api.github.com/repos/Mr30nama/30nama/releases/latest")
	const getTV = async () => TV = await getResponse("https://api.github.com/repos/Mr30nama/30namaAndroidTV/releases/latest")
	await Promise.allSettled([getTV(), getDesktop()])
	
	const desktopVersion = Desktop.tag_name.split("v")[1]
	const tvVersion = TV.tag_name.split("v")[1]

    getElementsByClass("version-desktop").map((el) => el.innerHTML = toPersianDigits(desktopVersion))
    getElementsByClass("version-android-tv").map((el) => el.innerHTML = toPersianDigits(tvVersion))
	
	document.getElementById(`link-linux-deb`).onclick = () => window.open(`https://github.com/Mr30nama/30nama/releases/download/v${desktopVersion}/30nama_${desktopVersion}_amd64.deb`)
	document.getElementById(`link-linux-appimage`).onclick = () => window.open(`https://github.com/Mr30nama/30nama/releases/download/v${desktopVersion}/30nama-${desktopVersion}.AppImage`)
	document.getElementById(`link-linux-rpm`).onclick = () => window.open(`https://github.com/Mr30nama/30nama/releases/download/v${desktopVersion}/30nama-${desktopVersion}.x86_64.rpm`)
	document.getElementById(`link-mac-silicon`).onclick = () => window.open(`https://github.com/Mr30nama/30nama/releases/download/v${desktopVersion}/30nama-${desktopVersion}-arm64-mac.zip`)
	document.getElementById(`link-mac-intel`).onclick = () => window.open(`https://github.com/Mr30nama/30nama/releases/download/v${desktopVersion}/30nama-${desktopVersion}.dmg`)
	document.getElementById(`link-windows`).onclick = () => window.open(`https://github.com/Mr30nama/30nama/releases/download/v${desktopVersion}/30nama-Setup-${desktopVersion}.exe`)
	document.getElementById(`link-android-tv`).onclick = () => window.open(`https://github.com/Mr30nama/30namaAndroidTV/releases/download/v${tvVersion}/30namaAndroidTV.apk`)


})()