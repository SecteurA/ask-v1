"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AgencySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Introduction */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-6">
            Le cabinet
          </h2>
          
          <div className="w-24 h-1 bg-[#fdca3f] mb-8" />

          <h3 className="text-2xl font-bold text-[#316082] mb-8">
            Transformer vos défis en opportunités
          </h3>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                Chez ASK ADVISORY, nous sommes convaincus qu'une gestion efficace des talents est essentielle à la réussite de chaque entreprise. Chaque organisation est unique, et c'est pourquoi nous proposons des solutions RH sur mesure et adaptées à vos défis spécifiques.
              </p>
            </div>

            <div className="bg-[#316082]/5 p-8 rounded-2xl">
              <p className="text-xl font-medium text-[#316082] mb-4">
                Notre mission : révéler le potentiel des collaborateurs qui constituent vos équipes.
              </p>
              <p className="text-lg text-gray-700">
                Que ce soit à travers le Conseil RH, le Coaching, la Chasse de tête, la Formation ou le Team-building, nous vous accompagnons pour transformer vos ambitions en succès durables.
              </p>
            </div>

            <div className="bg-[#fdca3f]/5 p-8 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                Fondée sur les principes de transparence, d'excellence, de passion et de fiabilité, notre vocation consiste à surmonter les obstacles, à optimiser les cadres de travail et à doter les professionnels des ressources essentielles à leur réussite.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/ask-for-solutions"
              className="inline-flex items-center bg-[#316082] hover:bg-[#68b0d9] text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="mr-2">Découvrir nos solutions RH sur mesure</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}