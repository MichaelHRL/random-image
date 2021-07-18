const url = "https://source.unsplash.com/random";
const image = document.querySelector("a");
fetch(url).then((response) => {
	if (response.status === 200) {
		image.style.backgroundImage = `url(${response.url})`;
		image.href = response.url;
	}
});