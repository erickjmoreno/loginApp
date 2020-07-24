export const SESSION_LOGIN_SUCCESS = "SESSION_LOGIN_SUCCESS";
export const SESSION_LOGIN_FAIL = "SESSION_LOGIN_FAIL";
export const LOGIN = "LOGIN";
export const CHECK_TOKEN = "CHECK_TOKEN";

export default async function loginHandler({ type: action, payload }) {
	switch (action) {
		case LOGIN:
			try {
				const options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: payload.email, password: payload.password }),
				};
				const userFetch = await fetch("/users/authenticate", options);
				const userData = await userFetch.json();
				if (userFetch.status === 200) {
					return {
						status: SESSION_LOGIN_SUCCESS,
						userData: userData,
					};
				}
				return { status: SESSION_LOGIN_FAIL };
			} catch (error) {
				return { status: SESSION_LOGIN_FAIL, error };
			}

		case CHECK_TOKEN:
			try {
				const options = { method: "POST", headers: { Authorization: `Bearer ${payload["token"]}` } };
				const userFetch = await fetch("/users/authenticate", options);
				if (userFetch.status === 200) {
					return {
						...payload,
						status: SESSION_LOGIN_SUCCESS,
					};
				}
				return { status: SESSION_LOGIN_FAIL };
			} catch (error) {
				return { status: SESSION_LOGIN_FAIL, error };
			}

		default:
			return { status: SESSION_LOGIN_FAIL };
	}
}
