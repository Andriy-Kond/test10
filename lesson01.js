const loadBtn = document.querySelector(".js-load");
const characterList = document.querySelector(".js-list");

loadBtn.addEventListener("click", changePage);
let page = 1;

function changePage() {
	page += 1;

	lordAPI(page)
		.then((res) => {
			render(res.docs);
			if (res.page === res.pages) {
				loadBtn.hidden = true;
			}
		})
		.catch(console.log);
}

function lordAPI(page = 1) {
	const options = {
		headers: {
			Authorization: "Bearer GaqzyPwTm4KMUzq0pQPp",
		},
	};

	return fetch(
		`https://the-one-api.dev/v2/character?limit=150&page=${page}`,
		options
	).then((res) => {
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		console.log(res);
		return res.json();
	});
}

lordAPI()
	.then((res) => {
		render(res.docs);
		// console.log(".then --> res.docs", res.docs);
		loadBtn.hidden = false;
	})
	.catch(console.log());

function render(arrObj) {
	const list = arrObj.map(({ name, race }) => {
		return `<li class="">
			<h2 class="">${name}</h2>
			<p class="">${race}</p>
			</li>`;
	});

	characterList.insertAdjacentHTML("beforeend", list);
}
