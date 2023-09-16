import api from "./api.service";

export const updatePassword = async (id, password, token) => {
  try {
    // Set the token for the API call
    api.setToken(token);

    const response = await api.patch(`/User/${id}/password`, {
      password,
    });

    // If the token is updated on the server-side after a password change
    // and returned in the response, you can set the new token like this:
    // api.setToken(response.data.newToken);

    return response.data;
  } catch (error) {
    console.error("Failed to update password:", error);
    throw error;
  }
};

export const sendResetPassword = async (email) => {
  try {
    const response = await api.patch(`/User/${email}/resetpassword`, {
    });
    return response.data;
  } catch (error) {
    console.error("Failed to send reset password:", error);
    throw error;
  }
};
