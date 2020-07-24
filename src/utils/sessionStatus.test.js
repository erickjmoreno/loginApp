import { SESSION_LOGIN_FAIL, SESSION_LOGIN_SUCCESS } from "./userAuthentication";
import { isLoginSuccessful, isLoginFailure } from "./sessionStatus";

test("isLoginSuccessful should return true", () => {
	const isSuccessful = isLoginSuccessful(SESSION_LOGIN_SUCCESS);
	expect(isSuccessful).toBe(true);
});

test("isLoginFailure should return true", () => {
	const isFailure = isLoginFailure(SESSION_LOGIN_FAIL);
	expect(isFailure).toBe(true);
});
