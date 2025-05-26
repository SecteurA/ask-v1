"use client";

import { motion } from 'framer-motion';
import { Puzzle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TeamBuildingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[550px] w-full overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Team Building Background"
            fill
            className="object-cover scale-105"
            style={{ filter: 'brightness(0.35)' }}
          />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              {/* Decorative Line */}
              <div className="w-24 h-1 bg-[#68b0d9] mb-8" />
              
              {/* Main Heading */}
              <h1 className="font-bold tracking-tight mb-6">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-2">
                  TEAM-BUILDING
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[#68b0d9] to-white bg-clip-text text-transparent">
                  Unir les talents pour des succès collectifs
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-2xl">
                Renforcer la cohésion 
                <span className="block mt-1">pour une performance collective optimale</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Simple Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Dans un environnement de travail en constante évolution, la cohésion des équipes est un facteur clé de succès. 
                  Le team building ne se limite pas à des activités ludiques, il s'agit d'une démarche stratégique visant à renforcer 
                  les liens entre vos collaborateurs, à favoriser la collaboration et à améliorer la communication au sein de vos équipes.
                </p>
                <p className="text-xl font-medium text-[#316082] italic">
                  Chez ASK ADVISORY, nous concevons des programmes de team building sur mesure, adaptés aux spécificités de votre 
                  entreprise et à vos objectifs de performance. Loin des solutions standardisées, nous créons des expériences enrichissantes 
                  qui répondent à vos besoins tout en favorisant la dynamique de groupe.
                </p>
                <p>
                  Nous vous accompagnons pour faire de chaque moment partagé une opportunité de croissance et de succès collectif.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team Building"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#316082] mb-6">
              Notre approche du Team Building :
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Adaptation aux enjeux de l'entreprise : Chaque programme est conçu en fonction des objectifs stratégiques de votre organisation, qu'il s'agisse de favoriser l'innovation, d'améliorer la gestion du stress ou de développer la créativité collective.",
              "Encouragement de la collaboration : Des activités qui facilitent les échanges entre les différentes entités et permettent de mieux comprendre les défis de chacun.",
              "Renforcement de la cohésion : Des activités ciblées pour encourager la collaboration, améliorer la communication et développer un esprit d'équipe solide."
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#316082] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-lg">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#316082] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêts à transformer vos équipes en une force collective performante ?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Contactez-nous pour découvrir nos solutions de team-building sur mesure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#fdca3f] hover:bg-white text-[#316082] px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg"
            >
              <span className="mr-2">Contactez-nous</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}