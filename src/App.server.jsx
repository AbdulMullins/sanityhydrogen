import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, FileRoutes, ShopifyProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import Footer from './components/footer/footer.client';
import Navbar from './components/navbar/navbar.client';
function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <Router>
          <Navbar/>
          <FileRoutes />
          <Footer/>
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
