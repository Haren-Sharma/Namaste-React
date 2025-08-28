import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(false);
    });
    window.addEventListener("online", () => {
      setStatus(true);
    });
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;
