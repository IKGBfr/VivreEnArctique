import type { Metadata } from 'next'
import Navigation from '@/components/Navigation/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vivre en Arctique - Blog sur la vie dans le Grand Nord',
  description: 'Découvrez la beauté sauvage de l\'Arctique à travers nos récits, photographies et conseils pratiques pour explorer les terres glacées du Grand Nord.',
  keywords: 'arctique, grand nord, voyage, aventure, aurores boréales, faune arctique, inuit, climat',
  authors: [{ name: 'Vivre en Arctique' }],
  creator: 'Vivre en Arctique',
  publisher: 'Vivre en Arctique',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Vivre en Arctique - Blog sur la vie dans le Grand Nord',
    description: 'Découvrez la beauté sauvage de l\'Arctique à travers nos récits et photographies',
    url: 'https://vivre-en-arctique.com',
    siteName: 'Vivre en Arctique',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Paysage arctique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivre en Arctique',
    description: 'Blog sur la vie dans le Grand Nord',
    images: ['https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1200&h=630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Flags pour activer/désactiver temporairement la navigation et le footer
  const SHOW_NAVIGATION = false; // À activer plus tard
  const SHOW_FOOTER = false; // À activer plus tard

  return (
    <html lang="fr">
      <body>
        {/* Navigation temporairement désactivée - code conservé pour réactivation future */}
        {SHOW_NAVIGATION && <Navigation />}
        
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        
        {/* Footer temporairement désactivé - code conservé pour réactivation future */}
        {SHOW_FOOTER && (
          <footer style={{
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '3rem 2rem',
            textAlign: 'center'
          }}>
            <div style={{
              maxWidth: '1280px',
              margin: '0 auto'
            }}>
              <h3 style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.5rem',
                marginBottom: '1rem'
              }}>
                Vivre en Arctique
              </h3>
              <p style={{
                color: '#94A3B8',
                marginBottom: '2rem'
              }}>
                Explorez la beauté sauvage du Grand Nord
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                marginBottom: '2rem'
              }}>
                <a href="/" style={{ color: '#94A3B8', transition: 'color 0.3s' }}>
                  Accueil
                </a>
                <a href="/blog" style={{ color: '#94A3B8', transition: 'color 0.3s' }}>
                  Articles
                </a>
                <a href="/about" style={{ color: '#94A3B8', transition: 'color 0.3s' }}>
                  À propos
                </a>
                <a href="/contact" style={{ color: '#94A3B8', transition: 'color 0.3s' }}>
                  Contact
                </a>
              </div>
              <p style={{
                color: '#64748B',
                fontSize: '0.875rem'
              }}>
                © {new Date().getFullYear()} Vivre en Arctique. Tous droits réservés.
              </p>
            </div>
          </footer>
        )}
      </body>
    </html>
  )
}
