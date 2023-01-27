import Link from 'next/link';
import React, {FC, ReactNode} from 'react';

const Layout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className="layout">
      <header>
        <div>
          <Link href="/" passHref>
            <a className="link title">Cryptonotes</a>
          </Link>
          <div />
          <a href="https://github.com/erhant/crypto-notes" target="_blank" rel="noreferrer" className="link">
            GitHub
          </a>
        </div>
      </header>

      {/* actual content here */}
      <main>{children}</main>

      <div />

      <footer>
        <h4>
          Made with &hearts; by{' '}
          <a
            href="https://twitter.com/0xerhant"
            target="_blank"
            rel="noreferrer"
            style={{textDecoration: 'none', color: 'inherit'}}
          >
            erhant
          </a>
        </h4>
      </footer>
    </div>
  );
};
export default Layout;
