import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
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

export const signInWithEmailPassword = async ({
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
