/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Crops } from './components/Crops';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-stone-300">
      <Header />
      <main>
        <Hero />
        <Crops />
      </main>
      <Footer />
    </div>
  );
}

