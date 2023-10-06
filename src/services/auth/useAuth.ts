import * as AuthService from './auth.api';
import { create } from "zustand";

export interface AuthState {
    token: string | null;
    isLogged: boolean;
    error: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
    error: false,
    token: AuthService.getToken(),
    isLogged: AuthService.isLogged(),
    login: async (username, password) => {
        set({ isLogged: false, error: false })
        try {
            await AuthService.login(username, password)
            set({ isLogged: AuthService.isLogged(), token: AuthService.getToken() })
        } catch (e) {
            set({ error: true, isLogged: false })
        }
    },
    logout: () => {
        AuthService.logout()
        set({ isLogged: false, token: null })
    }
}))