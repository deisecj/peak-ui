import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import './ContentMenu.css';
import Footer from '../components/footer';
import About from '../components/contentPage/about';
import PrivacyPolicy from '../components/contentPage/privacyPolicy';
import TermsUse from '../components/contentPage/termsUse';
import RateGuide from '../components/contentPage/ratingGuide';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/layout';

const infos = [
  {
    id: "1",
    title: "ABOUT",
    text: <About/>
  },
  {
    id: "2",
    title: "PRIVACY POLICY",
    text: <PrivacyPolicy/>
  },
  {
    id: "3",
    title: "TERMS OF USE",
    text: <TermsUse/>
  },
  {
    id: "4",
    title: "RATING AND REVIEW GUIDELINES",
    text: <RateGuide/>
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ContentMenu = () => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleClickLogo = () => {
    navigate('/');
  }

  return (
    <Layout layoutTitle={false} layoutMenuFooter={false}>
      <div id="content-page" className="">
      <div className="content-info">
      {/*  <div className="infopage-bg"> */}
          <div className="infopage-content">
              <h1 className="infopage-content-title">PEAK</h1>
              <p className="infopage-content-subtitle">
                Empowering job seekers with the knowledge to understand workplace culture and make better career decisions.
              </p>
              <dl className="infopage-content-items">
                {infos.map((info) => (
                  <Disclosure as="div" defaultOpen={info.id === searchParams.get('q')} key={info.title} className="py-4 sm:py-6">
                    {({ open }) => (
                      <>
                        <dt className="">
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                            <span className="infopage-content-title-items color-name-content">{info.title}</span>
                            <span className="ml-6 flex h-7 items-center">
                              <ChevronDownIcon
                                className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="mt-9">{info.text}</p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
       </div>
       {/* <Footer menuClassName="infopage-menu-section" footerClassName="infopage-footer-section" /> */}
      </div>
    {/*</div>*/}
    </Layout>
    
  )
}

export default ContentMenu;