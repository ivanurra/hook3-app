import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    // --> setState
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {};
};
