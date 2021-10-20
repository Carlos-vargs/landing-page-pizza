import React, { Fragment } from 'react';
import Footer from './Footer';
import NavMenu from './NavMenu';

export default function Layout({ children }) {
    return (
        <Fragment>
            <NavMenu />
            {children}
            <Footer />
        </Fragment>
    );
}
