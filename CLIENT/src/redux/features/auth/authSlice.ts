// features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signInTypeRespone } from '../../../types/auth';

// Define types
export type DisplaySnackBarType = {
  displayMessage: string;
  isSuccessMessage: boolean;
  displaySnack: boolean;
};

// Define the state type
interface AuthState {
  user: signInTypeRespone | null;
  switchAuth: boolean;
  displaySnackBar: DisplaySnackBarType;
}

// Define initial state with proper typing
const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user') || 'null') as signInTypeRespone | null,
  switchAuth: false,
  displaySnackBar: {
    displayMessage: '',
    isSuccessMessage: false,
    displaySnack: false,
  },
};

// Context type (if you need it separately)
export interface UserContextType {
  user: signInTypeRespone | null;
  switchAuth: boolean;
  setSwitchAuth: React.Dispatch<React.SetStateAction<boolean>>;
  loginUser: (userData: signInTypeRespone) => void;
  logoutUser: () => void;
  displaySnackBar: DisplaySnackBarType;
  setDisplaySnackBar: React.Dispatch<React.SetStateAction<DisplaySnackBarType>>;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<signInTypeRespone>) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logoutUser: (state) => {
      localStorage.removeItem('user');
      state.user = null;
    },
    setSwitchAuth: (state, action: PayloadAction<boolean>) => {
      state.switchAuth = action.payload;
    },
    setDisplaySnackBar: (state, action: PayloadAction<DisplaySnackBarType>) => {
      state.displaySnackBar = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setSwitchAuth, setDisplaySnackBar } = authSlice.actions;

export default authSlice