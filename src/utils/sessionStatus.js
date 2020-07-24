import { SESSION_LOGIN_FAIL, SESSION_LOGIN_SUCCESS } from "./userAuthentication";

export function isLoginSuccessful(status) {
	return status === SESSION_LOGIN_SUCCESS;
}

export function isLoginFailure(status) {
	return status === SESSION_LOGIN_FAIL;
}
