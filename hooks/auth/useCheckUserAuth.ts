import checkUserAuth from "@/utils/checkUserAuth";
import { useEffect, useState } from "react";

function useCheckUserAuth() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    async function getAuthStatus() {
      const authenticated = await checkUserAuth();
      setIsLogged(authenticated);
    }

    getAuthStatus();
  }, []);

  return isLogged;
}

export default useCheckUserAuth;
