import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react'
import { Combobox } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import ModalRating from '../modalRating';

// const companies = [
//   { id: 1, name: 'IBM North America', url: '#' },
//   { id: 2, name: 'IBM', url: '#' },
//   { id: 3, name: 'Amazon US', url: '#' },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SearchSelect = ({ value, className, classNameSearchIcon, handleClickSearchIcon, onBlurInput, createEnable, placeHolderText, onSelect }, ref) => {
  const [companies, setCompanies] = useState([])
  const [query, setQuery] = useState(value?.name);
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  async function getAllCompanies() {
    const response = await fetch(`/api/companies/search?q=${query}`)
    const data = await response.json()
    setCompanies(data.companydb)
  }

  useEffect(() => {
    if (query != '') {
      getAllCompanies();
    } else {
      setCompanies('');
    }
  },[query]);

  const handleSelectCompany = (company) => {    
    if (company) {
      setQuery(company.name);
      if (onSelect) {
        onSelect(company);
      }
    }
  }

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  const onChangeInput = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div className="relative">
    <Combobox value={query} onChange={handleSelectCompany}>
      <div className="relative">
        <SearchIcon
          className={classNameSearchIcon}
          aria-hidden="true"
          onClick={handleClickSearchIcon} />
        <Combobox.Input
          ref={inputRef}
          className={className}
          placeholder={placeHolderText}
          onChange={onChangeInput}

          onBlur={onBlurInput}/>
      </div>
      {companies.length > 0 && (
        <Combobox.Options
          className="absolute z-50 w-full bg-white rounded-md -mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
        >
          {companies.map((company) => (
            <Combobox.Option
              key={company.id}
              value={company}
              className={({ active }) =>
                classNames(
                  'cursor-default select-none rounded-md px-4 py-2',
                  active && 'bg-neutral-100 text-neutral-900'
                )
              }>
              {company.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      )}

      {query !== '' && companies.length === 0 && !createEnable && (
        <Combobox.Options
          className="absolute z-50 w-full bg-white rounded-md -mb-2 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
        >
          <Combobox.Option value={null}>
            <div className="bg-white py-4 px-4 sm:px-6 grid justify-items-center">
              <p className="mt-5 text-sm text-gray-900">Oops... we didn't find any companies that match this search.</p>
              <p className="mt-5 text-sm text-gray-400">Try refining your search or search for another company.</p>
              <img src="/images/company-not-found.svg" alt="" className="m-10" />
              <button
                onClick={handleOpenModal}
                type="button"
                className="mt-5 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <StarIcon className="-ml-1 mr-2 h-5 w-5 bg-200" aria-hidden="true" />
                Rate my employer
              </button>
            </div>
          </Combobox.Option>
        </Combobox.Options>
      )}
      {query !== '' && companies.length === 0 && createEnable && (
        <Combobox.Options
          className="absolute z-50 w-full bg-white rounded-md -mb-2 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
        >
          <Combobox.Option value={{ id: null, name: query }}
                className={({ active }) =>
                  classNames(
                    'cursor-default select-none rounded-md px-4 py-2',
                    active && 'bg-neutral-100 text-neutral-900'
                  )
                  }>
                Add "{query}"
      
          </Combobox.Option>
        </Combobox.Options>
      )}
    </Combobox>
    {isOpen && <ModalRating openModal={isOpen} closeModal={() => setIsOpen(false)}/>}
    </div>
  )
}

export default forwardRef(SearchSelect);