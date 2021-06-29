import React,
{
  createContext,
  useContext,
  useState
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});
const whiteSpace = ' ';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [storage, setStorage] = useState(null);
  const [loading, setLoading] = useState(false);

  function signIn(userInfo) {
    if (userInfo) {
      setLoading(true);

      const firstName = userInfo?.user?.username.split(whiteSpace)[0];
      const userData= {...userInfo, firstName }
      
      setLoggedUser(userData);
      updateStorage(userData);
      setLoading(false);
    }
  }

  function setLoggedUser(user){
    setUser(user);
  }

  async function logout() {
    setUser(null);
    setStorage(null);
    await AsyncStorage.clear();
  }

  async function updateStorage(userData) {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    await syncStorage();
  }

  async function syncStorage(){
    const json = await AsyncStorage.getItem('userData');
    setStorage(JSON.parse(json));
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      storage,
      signIn,
      logout,
      setLoggedUser,
      syncStorage,
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