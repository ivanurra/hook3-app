import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter();
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { data, isLoading } = useFetch(url);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h2>Breaking Bad Quotes</h2>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
      <button
        className="btn btn-primary"
        onClick={increment}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
