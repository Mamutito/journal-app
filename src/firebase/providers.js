import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const registerWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    await updateProfile(firebaseAuth.currentUser, { displayName });
    return { ok: true, email, password, uid, photoURL };
  } catch (error) {
    let errorMessage = error.message;
    if (error.message === "Firebase: Error (auth/email-already-in-use).") {
      errorMessage = "Email already in use.";
    }
    return { ok: false, error: errorMessage };
  }
};

export const signInEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;
    return { ok: true, email, password, uid, photoURL, displayName };
  } catch (error) {
    let errorMessage = error.message;
    if (error.message === "Firebase: Error (auth/invalid-credential).") {
      errorMessage = "Email or password is invalid.";
    }
    return { ok: false, error: errorMessage };
  }
};
