const baseUrl = "https://source.unsplash.com";
const image = document.querySelector(".image");

const loadingElement = document.querySelector(".loading");
loadingElement.style.display = "none";

const areas = ["random", "featured"];

const settings = {
	area: areas[0],
	keywords: []
}

const getUrl = () => {
	return `${baseUrl}/${settings.area}?${settings.keywords.join(",")}`;
};

image.addEventListener("load", () => {
	window.dispatchEvent(new Event("resize"));
	loadingElement.style.display = "none";
});

const getImage = () => {
	fetch(getUrl()).then((response) => {
		if (response.status === 200) {
			loadingElement.style.display = "flex";
			image.src = response.url.split("?")[0];
		}
	});
};

window.addEventListener("resize", () => {
	if (window.innerWidth / image.naturalWidth < window.innerHeight / image.naturalHeight) {
		image.style.width = window.innerWidth + "px";
		image.style.height = "";
	} else {
		image.style.height = window.innerHeight + "px";
		image.style.width = "";
	}
});

document.querySelector(".area").addEventListener("change", (event) => {
	settings.area = event.target.value.toLowerCase();
});

document.querySelector(".keywords").addEventListener("change", (event) => {
	settings.keywords = event.target.value.split(",");
});

document.querySelector(".get-image").addEventListener("click", getImage);

getImage();