import Rating from "./rating";

const RatingItem = ({ itemName }) => {
  return (
    <div className="grid grid-cols-2">
      <p className="text-lg font-semibold text-brand-300">{itemName}</p>
      <div className="mt-2 grid justify-end">
        <Rating />
      </div>
    </div>
  );
}

export default RatingItem;
