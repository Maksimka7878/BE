import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from '@/contexts/AppContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WomenPage } from '@/pages/WomenPage';
import { MenPage } from '@/pages/MenPage';
import { CategoryPage } from '@/pages/CategoryPage';
import { ProductPage } from '@/pages/ProductPage';
import { CartPage } from '@/pages/CartPage';
import { FavoritesPage } from '@/pages/FavoritesPage';
import { StoresPage } from '@/pages/StoresPage';
import { DeliveryPage } from '@/pages/DeliveryPage';
import { PaymentPage } from '@/pages/PaymentPage';
import { ReturnsPage } from '@/pages/ReturnsPage';
import { AboutPage } from '@/pages/AboutPage';
import { BrandPage } from '@/pages/BrandPage';
import { JobsPage } from '@/pages/JobsPage';
import { AdminLayout, Dashboard, ProductsPage, NotificationsPage } from '@/pages/admin';
import { registerServiceWorker, IOSInstallPrompt } from '@/lib/pwa';
import { logDiagnostics } from '@/lib/diagnostics';
import { NotificationService } from '@/lib/notifications';
import './App.css';

function App() {
  // Initialize PWA
  useEffect(() => {
    // Register service worker
    registerServiceWorker();

    // Log diagnostics in development
    if (import.meta.env.DEV) {
      logDiagnostics();
    }

    // Process queued notifications when online
    const handleOnline = () => {
      NotificationService.processQueue();
    };
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Admin Routes - No Header/Footer */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="settings" element={<Dashboard />} />
          </Route>

          {/* Main Site Routes */}
          <Route path="*" element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <div className="flex-1">
                <Routes>
                  {/* Root redirects to /zhenskaya (like befree.ru) */}
                  <Route path="/" element={<Navigate to="/zhenskaya" replace />} />

                  {/* Women's Section - Main Page */}
                  <Route path="/zhenskaya" element={<WomenPage />} />
                  <Route path="/zhenskaya/:categorySlug" element={<CategoryPage />} />

                  {/* Men's Section */}
                  <Route path="/muzhskaya" element={<MenPage />} />
                  <Route path="/muzhskaya/:categorySlug" element={<CategoryPage />} />

                  {/* Product */}
                  <Route path="/zhenskaya/product/:productId/:colorId" element={<ProductPage />} />
                  <Route path="/muzhskaya/product/:productId/:colorId" element={<ProductPage />} />
                  <Route path="/product/:productId" element={<ProductPage />} />

                  {/* Cart & Favorites */}
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/favorites" element={<FavoritesPage />} />

                  {/* Info Pages - exact URLs from befree.ru */}
                  <Route path="/stores" element={<StoresPage />} />
                  <Route path="/delivery" element={<DeliveryPage />} />
                  <Route path="/payment" element={<PaymentPage />} />
                  <Route path="/refund" element={<ReturnsPage />} />
                  <Route path="/returns" element={<ReturnsPage />} />
                  <Route path="/faq" element={<DeliveryPage />} />

                  {/* About Pages - exact URLs from befree.ru */}
                  <Route path="/about-the-company" element={<AboutPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/about-the-brand" element={<BrandPage />} />
                  <Route path="/brand" element={<BrandPage />} />
                  <Route path="/job" element={<JobsPage />} />
                  <Route path="/jobs" element={<JobsPage />} />
                  <Route path="/franchise" element={<AboutPage />} />
                  <Route path="/wholesale" element={<AboutPage />} />
                  <Route path="/contacts" element={<AboutPage />} />

                  {/* Other pages */}
                  <Route path="/gift-certificate" element={<AboutPage />} />
                  <Route path="/mobile-apps" element={<AboutPage />} />
                  <Route path="/instashop" element={<AboutPage />} />

                  {/* 404 - Redirect to home */}
                  <Route path="*" element={<Navigate to="/zhenskaya" replace />} />
                </Routes>
              </div>
              <Footer />

              {/* iOS Install Prompt */}
              <IOSInstallPrompt />
            </div>
          } />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;

