export const Quote = ({ author, quote }) => {
  return (
    <blockquote className="blockquote text-right">
      <p className="mb-1 h3 text-center">{quote}</p>
      <footer className="blockquote-footer text-center mt-1">{author}</footer>
    </blockquote>
  );
};
