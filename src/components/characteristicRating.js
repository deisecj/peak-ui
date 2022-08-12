import RatingItem from "./ratingItem";

const CharacteristicRating = ({ characteristic, ratings }) => {
  return (
    <div className="workplace-experience-section mt-6 w-full">
      {characteristic && <h2 className="border-b-2 border-neutral-700 pb-2 text-lg font-semibold text-neutral-300">{characteristic}</h2>}
      <div className="rating-section grid grid-cols-2 justify-between mt-10">
        {ratings.map((item, index) => (<RatingItem className={(index + 1) % 2 === 0 ? "ml-10" : "mr-10"} key={`cultural-${item.name}`} itemName={item.name} />))}
      </div>
    </div>
  );
}

export default CharacteristicRating;
