import "./book.css";

export function Book(props) {
  const { name, author, img, description } = props;

  return (
    <article className="book">
      <img src={img} alt={name} />
      <div className="text">
        <h2>{name}</h2>
        <h6>{author}</h6>
        <p>{description}</p>
      </div>
    </article>
  );
}
