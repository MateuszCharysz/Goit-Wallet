export const selectUser = state => state.auth.user;

export const selectAuthError = state => state.auth.authError;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsAuthLoading = state => state.auth.isAuthLoading;

export const selectIsRefreshing = state => state.auth.isRefreshing;
