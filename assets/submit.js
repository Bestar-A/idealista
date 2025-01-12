const submitData = async () => {
	const clientName = document.querySelector("#input-client-name").value;
	const clientId = document.querySelector("#input-client-passport").value;
	const clientCountry = document.querySelector("#input-client-country").value;
	const startDate = document.querySelector("#client-start-date").value;
	const endDate = document.querySelector("#client-end-date").value;
	const acompanyCnt = document.querySelector("#people-cnt").value;

	const data = {
		clientName,
		clientId,
		clientCountry,
		startDate,
		endDate,
		acompanyCnt,
	};

	const url = "https://idealista-server.onrender.com";

	try {
		await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json", // Set the content type to JSON
			},
			body: JSON.stringify(data),
		});
	} catch (error) {
		console.error(error);
	}
};
