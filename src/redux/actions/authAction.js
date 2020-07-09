import firebase from 'firebase/app';
import * as actionTypes from './actionTypes';
import { userCollection } from '../../utils/collection';

export function signupUserRequest(data) {
  const { firstName, lastName, phoneNumber, email, password } = data;
  return async dispatch => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async res => {
        const data = {
          email: email,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          roles: ['user']
        };
        let userRef = await userCollection.doc();
        userRef.set(data);

        let response = {
          ...data
        };
        dispatch(signupUserSuccess(response));
      })
      .catch(error => {
        dispatch(signupUserFailed(error.message));
      });
  };
}
export const signupUserSuccess = res => {
  return { type: actionTypes.SIGNUP_USER_SUCCESS, res };
};

export const signupUserFailed = error => {
  return { type: actionTypes.SIGNUP_USER_FAILED, error };
};

export const loginWithEmailRequest = data => {
  const { email, password } = data;

  return async dispatch => {
    await firebase

      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async res => {
        const response = await userCollection.where('email', '==', email).get();

        const result = { ...response.docs[0].data() };
        if (result.roles.includes('user')) {
          dispatch(loginWithEmailSuccess(result));
        } else {
          dispatch(loginWithEmailFailed('User Not FOund!'));
        }
      })
      .catch(error => {
        dispatch(loginWithEmailFailed(error.message));
      });
  };
};
export const loginWithEmailSuccess = res => {
  return { type: actionTypes.LOGIN_WITH_EMAIL_SUCCESS, res };
};

export const loginWithEmailFailed = error => {
  return { type: actionTypes.LOGIN_WITH_EMAIL_FAILED, error };
};
export const googleLoginRequest = () => {
  return async dispatch => {
    const provider = new firebase.auth.GoogleAuthProvider();

    await firebase
      .auth()
      .signInWithPopup(provider)
      .then(async res => {
        let displayName;
        if (res.user && res.user.displayName) {
          displayName = res.user.displayName.split(' ');
        }

        const data = {
          email: res.user.email,
          firstName: displayName[0] ? displayName[0] : '',
          lastName: displayName[1] ? displayName[1] : '',
          phoneNumber: res.user.phoneNumber,
          roles: ['user']
        };
        let userRef = await userCollection.doc();
        userRef.set(data);
        let response = {
          ...data
        };
        dispatch(googleLoginSuccess(response));
      })
      .catch(error => {
        dispatch(googleLoginFailed(error.message));
      });
  };
};
export const googleLoginSuccess = res => {
  return { type: actionTypes.GOOGLE_LOGIN_SUCCESS, res };
};
export const googleLoginFailed = error => {
  return { type: actionTypes.GOOGLE_LOGIN_FAILED, error };
};

export const facebookLoginRequest = () => {
  return async dispatch => {
    const provider = new firebase.auth.FacebookAuthProvider();

    await firebase
      .auth()
      .signInWithPopup(provider)
      .then(async res => {
        console.log('res>>>', res);
        let displayName;
        if (res.user && res.user.displayName) {
          displayName = res.user.displayName.split(' ');
        }

        const data = {
          email: res.user.email,
          firstName: displayName[0] ? displayName[0] : '',
          lastName: displayName[1] ? displayName[1] : '',
          phoneNumber: res.user.phoneNumber,
          roles: ['user']
        };
        let userRef = await userCollection.doc();
        userRef.set(data);
        let response = {
          ...data
        };
        dispatch(facebookLoginSuccess(response));
      })
      .catch(error => {
        dispatch(facebookLoginFailed(error.message));
      });
  };
};
export const facebookLoginSuccess = res => {
  return { type: actionTypes.FACEBOOK_LOGIN_SUCCESS, res };
};
export const facebookLoginFailed = error => {
  return { type: actionTypes.FACEBOOK_LOGIN_FAILED, error };
};

export const logoutRequest = () => {
  return async dispatch => {
    await firebase
      .auth()
      .signOut()
      .then(async res => {
        dispatch(logoutRequestSuccess('Logout Successful!'));
      })
      .catch(error => {
        dispatch(logoutRequestFailed(error.message));
      });
  };
};
export const logoutRequestSuccess = res => {
  return { type: actionTypes.LOGOUT_REQUEST_SUCCESS, res };
};
export const logoutRequestFailed = error => {
  return { type: actionTypes.LOGOUT_REQUEST_FAILED, error };
};
