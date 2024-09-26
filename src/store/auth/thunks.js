import { firebaseAuth } from "../../firebase/config";
import {
  registerWithEmailPassword,
  signInEmailPassword,
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

export const emailPasswordRegister = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { photoURL, ok, error, uid } = await registerWithEmailPassword({
      email,
      password,
      displayName,
    });
    if (!ok) {
      return dispatch(logout(error));
    }
    dispatch(login({ email, password, displayName, photoURL, uid }));
  };
};

export const emailPasswordSignIn = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, photoURL, displayName, error, uid } = await signInEmailPassword(
      {
        email,
        password,
      }
    );
    if (!ok) {
      return dispatch(logout(error));
    }
    dispatch(login({ email, password, displayName, photoURL, uid }));
  };
};

export const startSignOut = () => {
  return async (dispatch) => {
    try {
      await firebaseAuth.signOut();
      dispatch(logout());
    } catch (error) {
      return dispatch(logout(error));
    }
  };
};
