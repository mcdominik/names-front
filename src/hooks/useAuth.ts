import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../state/authStore";
import axios from "axios";
import { useMutation } from "react-query";
import jwtDecode from "jwt-decode";
import { Path } from "../pages/paths";
import { LoginPayload } from "../models/auth/login";

interface LoginResponse {
  email: string;
  token: string;
}
interface Token {
  exp: number;
}

export const useAuth = () => {
  const loginToStore = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const formLogin = async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await axios.post(`auth/login`, payload);
    return response.data;
  };

  const formLoginMutation = useMutation(formLogin, {
    onSuccess: async (response: LoginResponse) => {
      onSuccessfulLogin(response);
    },
  });

  const onSuccessfulLogin = (response: LoginResponse) => {
    loginToStore({ email: response.email, token: response.token });
    axios.defaults.headers.common["Authorization"] = "Bearer " + response.token;
    console.log(response);
    navigate(Path.ADMIN);
  };

  const tokenExpired = (token: string | null): boolean => {
    if (token !== null) {
      const currentTime = new Date().getTime() / 1000;
      const decoded = jwtDecode<Token>(token);
      const expirationTime = decoded.exp;

      return currentTime > expirationTime;
    } else {
      return true;
    }
  };

  const isLoggedIn: boolean = !useAuthStore(
    (state) => state.user === null || tokenExpired(state.user.token)
  );

  const logout = () => {
    loginToStore(null);
    navigate(Path.LOGIN);
  };

  return {
    formLoginMutation,
    isLoggedIn,
    logout,
  };
};
