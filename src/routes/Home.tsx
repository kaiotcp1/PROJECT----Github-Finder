import { UserProps } from "../types/user";
import { useState } from "react";

//Components
import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');
  const apiUrl: string = "https://api.github.com/users/";

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);

    const res = await fetch(`${apiUrl}${userName}`);

    const data = await res.json();

    if (res.status !== 200) {
      setError(true);
      setErrorText(data.message || 'Erro desconhecido');
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error errorMessage={errorText} />}
    </div>
  );
};

export default Home;
