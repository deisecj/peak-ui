import RatingItem from "./ratingItem";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid'

const CharacteristicRating = ({ characteristic, ratings, collapsable = true, company}) => {
  return (
    <div className="workplace-experience-section mt-6 w-full">
       <Disclosure defaultOpen={collapsable ? false : true}>
          {({ open }) => (
            <>
            {collapsable && <div className="sm:hidden">
              <Disclosure.Button className="flex w-full border-b border-neutral-300 pb-2 text-base xl:text-lg font-semibold text-neutral-600">
                {characteristic && <h2 className="">{characteristic}</h2>}
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-neutral-300`}
                />
              </Disclosure.Button>
              </div>}
            <Disclosure.Panel className="">
              <div className="rating-section sm:grid sm:grid-cols-2 sm:justify-between mt-5 xl:mt-10">
                {ratings.map((item, index) => (<RatingItem className={(index + 1) % 2 === 0 ? "sm:ml-6 xl:ml-10" : "sm:mr-6 xl:mr-10"} key={`cultural-${item.name}`} rating={item} company={company}/>))}
              </div>
            </Disclosure.Panel>
          </>
          )}
        </Disclosure>
      <div className="hidden sm:block">
        {characteristic && <h2 className="border-b border-neutral-300 pb-2 text-base xl:text-lg font-semibold text-neutral-600">{characteristic}</h2>}
        <div className="rating-section sm:grid sm:grid-cols-2 sm:justify-between mt-5 xl:mt-10">
          {ratings.map((item, index) => (<RatingItem className={(index + 1) % 2 === 0 ? "sm:ml-6 xl:ml-10" : "sm:mr-6 xl:mr-10"} key={`cultural-${item.name}`} rating={item} company={company} />))}
        </div>
      </div>
    </div>
  );
}

export default CharacteristicRating;
