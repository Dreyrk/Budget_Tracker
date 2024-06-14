import { getData } from "@/services/asyncstorage";

const checkUserAuth = async (): Promise<boolean> => {
  const result = getData("login");
  return false;
};

export default checkUserAuth;
