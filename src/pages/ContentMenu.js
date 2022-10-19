import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Layout from '../components/layout';
import './ContentMenu.css';

const infos = [
  {
    name: "ABOUT",
    text:
      "Our Mission: To be Generation Zs ultimate source for insight into workplace culture. Built on the foundation of increasing workplace culture transparency, Peak offers insights into the employee experience thorough crowdsourced company culture ratings and reviews. Unlike other review sites, Peak doesn’t require users to subscribe or review their company in order to see other reviews. Reviews are available to all users. Peak functions from remote offices across North America, Founded in 2022 as a project for CoLab by Jennifer Blunt, Angie Lacey, Deise Costa, and Andrew Enoe.",
  },
  {
    name: "PRIVACY POLICY",
    text: 'info privacy',
  },
  {
    name: "TERMS OF USE",
    text: "info terms",
  },
  {
    name: "RATING AND REVIEW GUIDELINES",
    text: "info guide",
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ContentMenu = () => {
  return (
    <Layout>
      <div className="bg-color">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl font-semibold leading-10 color-title">PEAK</h1>
          <p className="mt-4 text-3xl leading-9 color-title">
            Empowering job seekers with the knowledge to understand workplace culture and make better career decisions.
          </p>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {infos.map((info) => (
              <Disclosure as="div" key={info.name} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="text-2xl leading-8 color-name-content">{info.name}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="mt-9 text-base text-neutral-700">{info.text}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </Layout>
    
  )

}

export default ContentMenu;