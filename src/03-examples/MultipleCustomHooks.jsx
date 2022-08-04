import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter();

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { data, isLoading, hasError } = useFetch(url);

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h2>Breaking Bad Quotes</h2>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-1 h3 text-center">{quote}</p>
          <footer className="blockquote-footer text-center mt-1">
            {author}
          </footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </>
  );
};
