import React,
{
  createContext,
  useContext,
  useState
} from 'react';

export const AuthContext = createContext({});
const whiteSpace = ' ';

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  function signIn(userInfo) {
    if (userInfo) {
      setLoading(true);

      const firstName = userInfo?.user?.username.split(whiteSpace)[0];

      setUser({
        ...userInfo,
        firstName
      });
      setLoading(false);
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}