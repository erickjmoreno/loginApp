import { db as usersDB } from "./mockData";

export function setupFakeBackEnd() {
	const normalFetch = window.fetch;
	window.fetch = function (url, opts) {
		const isLoggedIn = opts.headers["Authorization"] === "Bearer fake-token";

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (url.endsWith("/users/authenticate") && opts.method === "POST") {
					if (isLoggedIn) return success({});
					const params = JSON.parse(opts.body);
					const user = usersDB.find((x) => x.email === params.email && x.password === params.password);
					if (!user) return error("Username or password is incorrect");
					return success({
						id: user.id,
						email: user.email,
						username: user.username,
						firstName: user.firstName,
						lastName: user.lastName,
						token: "fake-token",
					});
				}

				normalFetch(url, opts).then((response) => resolve(response));

				function success(body) {
					resolve({ status: 200, json: () => Promise.resolve(body) });
				}

				function error(message) {
					resolve({ status: 400, json: () => Promise.resolve({ message }) });
				}
			}, 500);
		});
	};
}
