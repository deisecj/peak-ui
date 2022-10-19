import './Home.css';
import { MenuIcon, StarIcon, XIcon } from '@heroicons/react/outline';
import SearchSelect from '../components/searchSelect';
import Footer from '../components/footer';
import { Disclosure } from '@headlessui/react';
import ModalRating from '../components/modalRating';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menu = [
  { name: 'About' , url: '/info' },
  { name: 'Privacy policy' , url: '/info' },
  { name: 'Terms of use', url: '/info' },
  { name: 'Rating and review guidelines', url: '/info' }
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
    <div id="home" className="">
      <div id="home-content">
        <div className="hero-bg-header">
      <Disclosure as="header" className="hero-section">
      {({ open }) => (
        <>
        <div className="hero-header-navbar">
          <div className="hero-header">
            <img
              className="hero-logo"
              src="/images/peak-logo.svg"
              alt=""
            />

            <div className="relative z-10 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-indigo-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
               <Disclosure.Button key={`menu-${item.name}`} as="a" href={item.href} className="border-transparent hover:bg-indigo-100  block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                {item.name}
              </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      </Disclosure>
        </div>
        <div className="header-bg">
          <div className="hero-content">
            <div className="hero-title">
                <h1 className="">REAL. HONEST. VERIFIED.</h1>
            </div>
          </div>
          <div className='hero-content'>
            <div className="grid grid-cols-2 gap-20 justify-between mx-64">
              <div className="hidden xl:block explore-section">
                <p className="mb-40 text-neutral-900 text-2xl leading-9 font-medium">Understanding workplace culture doesn’t have to be so hard</p>
                <div className="hidden xl:block mt-10 xl:mt-0">
                  <div className="">
                    <p className="search-label">Find culture reviews from actual employees</p>
                  </div>
                  <div className="hidden xl:block search-item">
                    <SearchSelect
                      createEnable={false}
                      onSelect={handleOnSelectCompany}
                      className="h-12 w-full focus:ring-indigo-500 focus:border-indigo-500 rounded-md border bg-white px-4 py-2.5 pl-11 text-gray-900 placeholder-neutral-400 placeholder-text-base sm:text-sm"
                      classNameSearchIcon="search-icon"
                      placeHolderText="Search companies"
                    />
                  </div>
                </div>
              </div>
              <div className='hidden xl:block mt-6'>
                <img src="./images/hero-image.svg" className="hero-image" />
              </div>
            </div>
            {/*tablet version */}
            <div className='block xl:hidden mx-6 sm:mx-20'>
              <div>
                <p className="hidden sm:block text-neutral-900 text-lg sm:text-xl font-normal">Understanding workplace culture doesn’t have to be so hard</p>
              </div>
              <div className='sm:mt-6 flex justify-center'>
                <img src="./images/hero-image.svg" className="hero-image ml-10" />
              </div>
              <div className="block xl:hidden mt-4 sm:mt-8 xl:mt-0">
                  <div className="">
                    <p className="search-label">Find culture reviews from actual employees</p>
                  </div>
                  <div className="block xl:hidden search-item">
                    <SearchSelect
                      createEnable={false}
                      onSelect={handleOnSelectCompany}
                      className="h-12 w-full focus:ring-indigo-500 focus:border-indigo-500 rounded-md border bg-white px-4 py-2.5 pl-11 text-gray-900 placeholder-neutral-400 placeholder-text-base sm:text-sm"
                      classNameSearchIcon="search-icon"
                      placeHolderText="Search companies"
                    />
                  </div>
              </div>
              <div className="hero-image-mobile">
                <img src="./images/hero-image.svg"/>
              </div>
            </div> 
          </div>
        </div>
        <div className="hero-content">
          <div className="contribute-section hidden sm:block">
            <div className="contribute-content">
              <img src="./images/rate-employer.svg" alt="" className="contribute-image" />
              <div className="rate-section pt-10 xl:pt-0 xl:mt-16">
                <p className="text-neutral-900 text-xl xl:text-2xl xl:leading-10">Contribute to a growing community</p>
                <button onClick={handleOpenModal} type="button" className="mt-10 xl:mt-5 inline-flex justify-self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <StarIcon className="-ml-1 mr-2 h-5 w-5 bg-200" aria-hidden="true" />
                  Rate my employer
                </button>
                {isOpen && <ModalRating openModal={isOpen} closeModal={() => setIsOpen(false)} />}
                <div className="hidden xl:block information-section-item xl:mt-8 mb-5 xl:mb-10">
                  <p>Your company rating makes an impact with a community of job hunters just like you.</p>
                </div>
                <div className="hidden xl:block  information-section-item">
                  <p>Share relatable experiences without including your location or position, unless you want to.</p>
                </div>
              </div>      
            </div>
            {/* tablet version */}
            <div className='block xl:hidden flex justify-between gap-x-10 mt-10 mx-20'>
                <div className="information-section-item">
                  <p>Your company rating makes an impact with a community of job hunters just like you.</p>
                </div>
                <div className="information-section-item">
                  <p>Share relatable experiences without including your location or position, unless you want to.</p>
                </div>
              </div>
          </div>

          {/* mobile */}
          <div className="contribute-section mobile sm:hidden block">
            <div className="information-section-item mobile">
                <button onClick={handleOpenModal} type="button" className="inline-flex justify-self-center mb-5 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <StarIcon className="-ml-1 mr-2 h-5 w-5 bg-200" aria-hidden="true" />
                  Rate my employer
                </button>
                <p className='text-neutral-700 text-base mx-2'>Your company rating makes an impact with a community of job hunters just like you.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer menuClassName="menu-section" footerClassName="footer-section"/>
  </div> 
  );
}

export default Home;
