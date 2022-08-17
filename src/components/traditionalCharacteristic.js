import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid'
import RatingItem from "./ratingItem";
import '../pages/Company.css'

const TraditionalCharacteristic = ({ ratings }) => {
  return (
    <div className="traditional-characteristics-container rounded-lg py-8 px-3 xl:py-9 xl:px-12 mt-9 sm:mt-14">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="sm:hidden">
              <Disclosure.Button className="flex justify-between w-full">
              <h1 className="title-characteristics w-18 text-left">Traditional workplace characteristics</h1>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-neutral-300`}
                />
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="">
              <div className="rating-section sm:grid sm:grid-cols-2 sm:justify-between mt-5 xl:mt-10">
                {ratings.map((item, index) => (<RatingItem className={(index + 1) % 2 === 0 ? "sm:ml-6 xl:ml-10" : "sm:mr-6 xl:mr-10"} key={`cultural-${item.name}`} itemName={item.name} />))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="hidden sm:block">
        <h1 className="title-characteristics">Traditional workplace characteristics</h1>
        <div className="rating-section sm:grid sm:grid-cols-2 sm:justify-between mt-5 xl:mt-10">
          {ratings.map((item, index) => (<RatingItem className={(index + 1) % 2 === 0 ? "sm:ml-6 xl:ml-10" : "sm:mr-6 xl:mr-10"} key={`cultural-${item.name}`} itemName={item.name} />))}
        </div>
      </div>
    </div >
  );
}

export default TraditionalCharacteristic;