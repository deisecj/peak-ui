import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const company = [
  { id: 1, name: 'IBM South America', url: '#' },
  { id: 2, name: 'IBM Canada', url: '#' },
  { id: 3, name: 'Amazon US', url: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SearchSelect = () => {
  const [query, setQuery] = useState('')

  const filteredCompany =
    query === ''
      ? []
      : company.filter((company) => {
        return company.name.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <Combobox onChange={(company) => (window.location = company.url)}>
      <Combobox.Input
        className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        placeholder="Search companies"
        onChange={(event) => setQuery(event.target.value)}
      />

      {filteredCompany.length > 0 && (
        <Combobox.Options
          static
          className="bg-white -mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
        >
          {filteredCompany.map((company) => (
            <Combobox.Option
              key={company.id}
              value={company}
              className={({ active }) =>
                classNames(
                  'cursor-default select-none rounded-md px-4 py-2',
                  active && 'bg-indigo-600 text-white'
                )
              }
            >
              {company.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      )}

      {query !== '' && filteredCompany.length === 0 && (
        <div className="bg-white py-4 px-4 sm:px-14 grid justify-items-center">
          <p className="mt-5 text-sm text-gray-900">Oops... we didn't find any companies that match this search.</p>
          <img src="./images/company-not-found.svg"  alt="" className="m-10"/>
        </div>
      )}
    </Combobox>
  )
}

export default SearchSelect;
