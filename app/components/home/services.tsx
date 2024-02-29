import React from 'react';

interface SVGArgs {
  iconData: string;
  viewBox: string;
  title: string;
  description: string;
  fill?: 'none' | 'currentColor'
  fillRule?: 'nonzero' | 'evenodd' | undefined;
  clipRule?: string;
  stroke?: string,
  strokeLinecap?: 'butt' | 'round' | 'square' | undefined;
  strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | undefined;
  strokeWidth?: string;
  isPHP?: boolean;
}

function BlockService({
  iconData,
  viewBox,
  title,
  description,
  fill="none",
  fillRule,
  clipRule,
  stroke,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
  isPHP
}: SVGArgs) {
  return (
    <div className="max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
          fill={fill}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
        >
          <path
            fillRule={fillRule}
            clipRule={clipRule}
            stroke={stroke}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            strokeWidth={strokeWidth}
            d={iconData}
          />
          {isPHP && <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>}
        </svg>
      </div>
      <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
      <p className="text-gray-500 max-md:text-center">{description}</p>
    </div>
  );
}

export default function Services() {
    return (
        <section className="bg-white" id="services">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className=" text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Services</h2>
                    <p className="text-gray-500 sm:text-xl">A lot of people know us for many reasons, but the main thing we do</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <BlockService iconData='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z' fillRule="evenodd" clipRule="evenodd" 
                        fill="currentColor" viewBox="0 0 20 20" title="CMS" description="Installing easy to manage systems, like Wordpress, Joomla"/>
                    <BlockService iconData='M12 15v5m-3 0h6M4 11h16M5 15h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v9c0 .6.4 1 1 1Z' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        viewBox="0 0 24 24" title="React" description="Creating modern web application for multipurpose"/>
                    <BlockService iconData="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" fillRule="evenodd" clipRule="evenodd"
                        fill="currentColor" viewBox="0 0 20 20" isPHP={true} title="PHP" description="Creating legacy apps suppport old browsers"/>
                    <BlockService iconData='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z' stroke="currentColor" strokeLinecap="round" strokeWidth="2" 
                        viewBox="0 0 20 20" title="SEO" description="Optimization page for search browsers"/>
                    <BlockService iconData='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' 
                        fill="currentColor" viewBox="0 0 20 20" title="Enterprise Design" description="Designing website for future create"/>
                    <BlockService iconData='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z' fillRule="evenodd" clipRule="evenodd"
                        fill="currentColor" viewBox="0 0 20 20" title="Domains" description="Keep your company’s with custom address to website"/>
                </div>
            </div>
        </section>
    );
}