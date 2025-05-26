"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Target, Users, Star } from 'lucide-react';

export default function IntroSection() {
  const highlights = [
    {
      icon: Target,
      title: "Excellence sur mesure",
      description: "Des solutions RH personnalisées qui s'adaptent à vos enjeux spécifiques"
    },
    {
      icon: Users,
      title: "Expertise reconnue",
      description: "Une équipe passionnée avec une expérience approfondie en ressources humaines"
    },
    {
      icon: Star,
      title: "Impact durable",
      description: "Des résultats concrets qui transforment durablement vos équipes"
    }
  ];

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
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-[#fdca3f] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-12">
              Bienvenue chez ASK Advisory
            </h2>
            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-xl font-light text-[#316082]">
                Chez ASK ADVISORY, nous sommes plus qu'un simple cabinet de conseil en ressources humaines. Nous sommes vos partenaires pour bâtir un avenir professionnel à la fois plus performant et plus humain.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <p className="text-gray-700">
                  Nous mettons à votre disposition notre expertise pour accompagner votre organisation dans son développement et sa performance. Nous croyons que chaque entreprise est unique et mérite des solutions sur mesure, adaptées à ses défis et à ses ambitions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-[#316082]/5 p-8 rounded-2xl">
                  <p className="text-[#316082]">
                    Notre équipe de consultants passionnés et expérimentés travaille à vos côtés pour vous aider à optimiser vos talents, renforcer vos équipes et favoriser l'épanouissement professionnel de vos collaborateurs.
                  </p>
                </div>
                <div className="bg-[#fdca3f]/5 p-8 rounded-2xl">
                  <p className="text-[#316082]">
                    Nous sommes là pour vous aider à transformer vos défis en opportunités et faire de votre capital humain un véritable levier de succès.
                  </p>
                </div>
              </div>
              
              <p className="text-xl font-semibold text-[#316082] italic">
                Faites confiance à ASK ADVISORY pour bâtir un avenir professionnel solide et harmonieux.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#316082] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#316082] mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Solutions Preview */}
          <div className="text-center bg-gradient-to-r from-[#316082] to-[#68b0d9] p-12 rounded-2xl text-white">
            <p className="text-xl font-medium mb-8">
              Découvrez nos solutions complètes en Conseil RH, Coaching, Headhunting, 
              Formation et Team-building, conçues pour répondre à tous vos besoins.
            </p>
            
            <Link
              href="/ask-for-solutions"
              className="group inline-flex items-center bg-[#fdca3f] hover:bg-white text-[#316082] px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="mr-2">Découvrir nos solutions</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}