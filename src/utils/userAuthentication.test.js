import loginHandler, { SESSION_LOGIN_SUCCESS, SESSION_LOGIN_FAIL, LOGIN, CHECK_TOKEN } from "./userAuthentication";
import { setupFakeBackEnd } from "./api";

test("Check values to be consistent", () => {
	expect(SESSION_LOGIN_FAIL).toBe("SESSION_LOGIN_FAIL");
	expect(SESSION_LOGIN_SUCCESS).toBe("SESSION_LOGIN_SUCCESS");
	expect(LOGIN).toBe("LOGIN");
	expect(CHECK_TOKEN).toBe("CHECK_TOKEN");
});

test("Check if loginHandler fail on invalid User Data", async () => {
	setupFakeBackEnd();
	const fakeCredentials = { email: "nothing@nothing.io", password: "password" };
	const payload = await loginHandler({ type: LOGIN, payload: fakeCredentials });
	return expect(payload).toEqual({ status: SESSION_LOGIN_FAIL });
});

test("Check if loginHandler fail on invalid Mock Data", async () => {
	setupFakeBackEnd();
	const fakeCredentials = { email: "nothing@nothing.io", token: "invalidToken" };
	const payload = await loginHandler({ type: LOGIN, payload: fakeCredentials });
	return expect(payload).toEqual({ status: SESSION_LOGIN_FAIL });
});
