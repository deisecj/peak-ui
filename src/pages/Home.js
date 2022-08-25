import './Home.css';
import { MenuIcon, StarIcon, XIcon } from '@heroicons/react/outline';
import SearchSelect from '../components/searchSelect';
import Footer from '../components/footer';
import { Disclosure } from '@headlessui/react';
import ModalRating from '../components/modalRating';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menu = [
  { name: 'About' , url: '#' },
  { name: 'Privacy policy' , url: '#' },
  { name: 'Terms of use', url: '#' },
  { name: 'Rating and review guidelines', url: '#' }
];

const Home = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  const handleOnSelectCompany = (company) => {
    navigate(`/companies/${company.id}`);
  }

  return (
    <div id="home" className="mx-auto max-w-screen-2xl h-full">
      <div className="hero-section">
      <Disclosure as="header" className="bg-gray-800">
      {({ open }) => (
        <>
        <div className="hero-header-navbar">
          <div className="hero-header">
            <img
              className="hero-logo"
              src="./images/happy-jobs-logo.svg"
              alt=""
            />

            <div className="relative z-10 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
        </div>

        {/* Mobile menu list*/}
        <Disclosure.Panel className="navbar-menu">
            <div className="navbar-menu-content">
            {menu.map(item => (
               <Disclosure.Button key={`menu-${item.name}`} as="a" href={item.href} className="border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                {item.name}
              </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      </Disclosure>
        <div className="hero-content">
          <h1 className="title-text">REAL. HONEST. VERIFIED.</h1>
          <img src="./images/hero-image.svg" className="hero-image" />
        </div>
      </div>
      <div className="explore-section">
        <div className="search-section">
          <div className="">
            <p className="sub-title-text">Explore the companies that interest you.</p>
          </div>
          <div className="search-item">
            <SearchSelect 
              createEnable={false}
              onSelect={handleOnSelectCompany}
              className="h-12 w-full focus:ring-indigo-500 focus:border-indigo-500 rounded-md border-0 bg-gray-100 px-4 py-2.5 pl-11 text-gray-900 placeholder-gray-500 sm:text-sm"
              classNameSearchIcon="search-icon"
              placeHolderText="Search companies"
             />
          </div>
          <div className="information-section flex justify-between gap-x-8">
            <div className="information-section-item">
              <p>Get in-depth information about company culture shared by verified employees.</p>
            </div>
            <div className="information-section-item">
              <p>Discover company ratings to ensure you will find your happy place in the work place.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contribute-section">
        <div className="contribute-content">
          <img src="./images/rate-employer.svg" alt="" className="contribute-image" />
          <div className="rate-section lg:mt-16">
            <p className="mb-10">Contribute to a growing community and help others reach new heights in their career.</p>
            <button onClick={handleOpenModal} type="button" className="mt-5 inline-flex justify-self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <StarIcon className="-ml-1 mr-2 h-5 w-5 bg-200" aria-hidden="true" />
              Rate my employer
            </button>
            {isOpen && <ModalRating openModal={isOpen} closeModal={() => setIsOpen(false)}/>}
          </div>
        </div>
      </div>
      <Footer menuClassName="menu-section" footerClassName="footer-section"/>
    </div>
  );
}

export default Home;
