import Link from 'next/link';
import React from 'react';
import { Pages } from '../../utils/pages';

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className = '' }) => {
  return (
    <React.Fragment>
      <Link href={Pages.home.path}>
        <div className={(className) ? `${className} headerLogo` : 'headerLogo'}>
          <img src="/images/logo.svg"></img>
        </div>
      </Link>
      <style jsx>
        {`
      .headerLogo {
        margin: 0;                                                                                                                                                                                                                              
      }`
        }
      </style>
    </React.Fragment>

  );
};

export default Logo;
