const ModalConfirmationReview = () => {

  return (
    <div className="px-8">
      <div className="my-14 font-semibold text-2xl text-base leading-8">
        <p>Thanks so much for your company review!</p>
      </div>
      <div className="mb-14 ml-20">
        <img src="/images/confirmation-review-image.svg" alt="" className="max-w-xs max-h-56" />
      </div>
      <div className="mb-20 ml-10 text-neutral-900 text-lg font-normal leading-7">
        <p>The community appreciates your contribution.</p>
      </div>
    </div>
  );
}

export default ModalConfirmationReview;