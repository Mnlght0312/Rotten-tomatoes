import { useState, useEffect } from "react";

export const useAuth = (): { loggedIn: boolean } => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      const response = await fetch("/api/movie"); // replace with your auth endpoint
      const data = await response.json();
      setLoggedIn(data.loggedIn);
    };

    fetchAuthStatus();
  }, []);

  return { loggedIn };
};
