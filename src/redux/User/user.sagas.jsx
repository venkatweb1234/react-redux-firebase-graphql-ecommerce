import { takeLatest, call, all, put } from 'redux-saga/effects';
import userTypes from './user.types';
import { resetPasswordSuccess, signInSuccess, signOutUserSucess, userError } from './user.actions';
import { auth, handleUserProfile, GoogleProvider, getCurrentUser } from './../../firebase/_util';
import { handleResetPasswordAPI } from './user.helpers';

export function* getSnapShotFromUserAuth(user, additionalData = {}) {
    try {
        const userRef = yield call(handleUserProfile, ({ userAuth: user, additionalData }));
        const snapshot = yield userRef.get();
        yield put(
            signInSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        )
    }
    catch (err) {
        console.log(err)
    }
}

export function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user);
    }
    catch (err) {
        console.log(err);
    }
}

export function* isUserAuthnicated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth);
    }
    catch (err) {
        console.log(err);
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthnicated)
}

export function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(
            signOutUserSucess()
        )
    }
    catch (err) {
        console.log(err)
    }
}
export function* onSignoutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}
export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* signUpUser({ payload: {
    displayName,
    email,
    password,
    confirmPassword
} }) {

    if (password !== confirmPassword) {
        const err = ['Password Don\'t Match'];
        yield put(
            userError(err)
        )
        return;
    }

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const additionalData = { displayName };
        yield getSnapShotFromUserAuth(user, additionalData);
    }
    catch (err) {
        console.log(err);
    }
}
export function* onSignUpUserStart() {
    yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser)
}

export function* resetPassword({ payload: { email } }) {

    try {
        yield call(handleResetPasswordAPI, email);
        yield put(resetPasswordSuccess());
    }
    catch (err) {
        yield put(userError(err));
    }
}

export function* onResetEmailPasswordStart() {
    yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword)
}

export function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(GoogleProvider);
        yield getSnapShotFromUserAuth(user);
    }
    catch (err) {
        console.log(err)
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}



export default function* userSagas() {
    yield all
        ([
            call(onEmailSignInStart),
            call(onCheckUserSession),
            call(onSignoutUserStart),
            call(onSignUpUserStart),
            call(onResetEmailPasswordStart),
            call(onGoogleSignInStart)
        ])
}

