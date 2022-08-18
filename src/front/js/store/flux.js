const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			login: (mail, pass) => {
				fetch("https://3001-manuelcebre-authenticat-yp4uugxohtx.ws-eu62.gitpod.io/api/token", {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"password": pass,
						"email": mail
					})
				})
					.then((respuestadelback) => {
						if (respuestadelback.status == 200) {
							return respuestadelback.json()
						}
					})
					.then((respuestajson) => {
						sessionStorage.setItem("token", respuestajson.access_token)
						setStore({ token: respuestajson.access_token })
					})

			},
			recuperate: () => {
				let datotoken = sessionStorage.getItem("token")
				setStore({ token: datotoken })
			},
			logOut: () => {
				sessionStorage.setItem("token", "")
				setStore({ token: "" })
			},





			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
