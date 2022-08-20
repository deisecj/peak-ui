import Rating from "./rating";

const RatingItem = ({ itemName, className, valueRating }) => {
  return (
    <div className={"grid xl:grid-cols-2 mb-7 " + className}>
      <p className="text-base xl:text-lg font-semibold text-brand-300">{itemName}</p>
      <div className="mt-2 grid xl:justify-end">
        <Rating rating={valueRating} />
      </div>
    </div>
  );
}

export default RatingItem;
