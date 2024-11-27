// src/app/layout.js
'use client';
import Header from '@/components/layout/Header';
import { Provider } from '../components/ui/provider';
import Footer from '@/components/layout/Footer';
<meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />;
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <Provider>{children}</Provider>
                <Footer />
            </body>
        </html>
    );
}
