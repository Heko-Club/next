import api from './api.service';

export const login = async (email, password) => {
  try {
    const response = await api.post('/sign/in', { // replace '/login' with the actual login API endpoint
      email,
      password
    });

    // Set token for all future API calls
    api.setToken(response.data);
    
    return response.data;
  } catch (error) {
    console.error('Failed to login:', error);
    throw error;
  }
}

export const register = async (user, password) => {
  try {
    const response = await api.post('/auth/register_user', { // replace '/register' with the actual register API endpoint
      user,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Failed to register:', error);
    throw error;
  }
}
