export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectIsRefreshing = state => state.auth.isRefreshing;
