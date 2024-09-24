import {
  signInWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const googleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    console.log(result);
    if (!result.ok) {
      return dispatch(logout(result.error));
    }
    dispatch(login(result));
  };
};

export const emailPasswordSignIn = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { photoURL, ok, error } = await signInWithEmailPassword({
      email,
      password,
      displayName,
    });
    if (!ok) {
      return dispatch(logout(error));
    }
    dispatch(login({ email, password, displayName, photoURL }));
  };
};
