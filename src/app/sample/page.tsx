'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/shared/Footer';

const SamplePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Main content - notice we don't need to import Navigation as it's in the layout */}
      <main className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-purple-800 mb-6">
            Sample Page
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            This is a sample page demonstrating how to use the Navigation and Footer components.
            The Navigation is automatically included through the root layout.tsx, while we explicitly import and use the Footer here.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Points to Remember:
            </h2>
            <ul className="text-left text-gray-600 space-y-3">
              <li>• Navigation is handled by the root layout.tsx</li>
              <li>• Footer needs to be imported in each page where you want to use it</li>
              <li>• Use 'use client' directive for client-side components</li>
              <li>• Maintain consistent styling with the rest of the site</li>
              <li>• Use motion components for animations</li>
            </ul>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SamplePage; 