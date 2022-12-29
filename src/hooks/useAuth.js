import { createContext, useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import {
  fetchCurrentUser,
  selectCurrentUser,
  userLogin,
  userLogout,
} from "../redux/reducers/accountSlice";
import { deleteTokens } from "../utils/authority";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", { active: false });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const accountStatus = useSelector((state) => state.account.status);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    (async () => {
      if (accountStatus === "idle") {
        try {
          const { user } = await dispatch(fetchCurrentUser()).unwrap();
          setUser(user);
          if (user.active) {
            navigate(location.pathname);
          } else {
            navigate("/login");
          }
        } catch (err) {
          console.log("[ FETCH USER ERROR ]: ", err);
        }
      }
    })();
  }, [accountStatus, dispatch, currentUser, setUser, navigate, location]);

  const login = async (data) => {
    const res = await dispatch(userLogin(data)).unwrap();
    if (res.user.active) {
      setUser(res.user);
      navigate("/", { replace: true });
    }
  };

  const logout = () => {
    dispatch(userLogout());
    setUser({ active: false });
    deleteTokens();
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
