import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, { getState }) => {
    const token = getState().auth.token;
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();
    return data.body;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    isAuthenticated: false, // Ajout de isAuthenticated dans l'état initial
    status: 'idle',
    error: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true; // Mettre à jour isAuthenticated lorsque le token est défini
    },
    logout(state) {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false; // Mettre à jour isAuthenticated lorsque l'utilisateur se déconnecte
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.error.message;
        state.isAuthenticated = false; // Assurez-vous que l'utilisateur n'est pas considéré comme connecté en cas d'échec
      });
  },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
