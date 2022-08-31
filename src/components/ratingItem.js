import ModalReviewDetails from "./modalReviewDetails";
import Rating from "./rating";
import { useState } from 'react';
import ModalRating from "./modalRating";

const RatingItem = ({ className, rating, company }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNewReview, setIsOpenNewReview] = useState(false);

  const openReviewDetails = () => {
    setIsOpen(true);
  }
  
  const handleOpenModalRate = () => {
    setIsOpen(false);
    setIsOpenNewReview(true);
  }

  return (
    <div className={"grid xl:grid-cols-2 mb-7 " + className}>
      <a href="#" onClick={openReviewDetails}>
        <p className="text-base xl:text-lg font-semibold text-neutral-700">{rating.name}</p>
      </a>
      <div className="mt-2 grid xl:justify-end">
        <a href="#" onClick={openReviewDetails}>
          <Rating rating={rating.rating} />
        </a>
      </div>
      {isOpen && <ModalReviewDetails handleOpenModalRate={handleOpenModalRate} openModal={isOpen} closeModal={() => setIsOpen(false)} company={company} characteristicRating={rating} />}
      {isOpenNewReview && <ModalRating openModal={isOpenNewReview} closeModal={() => setIsOpenNewReview(false)} />}
    </div>
  );
}

export default RatingItem;
