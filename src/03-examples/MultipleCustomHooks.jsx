import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const url = "https://www.breakingbadapi.com/api/quotes/1";

  const { data, isLoading, hasError } = useFetch(url);

  console.log(data, isLoading, hasError);
  return (
    <>
      <h2>Breaking Bad Quotes</h2>
      <hr />
    </>
  );
};
