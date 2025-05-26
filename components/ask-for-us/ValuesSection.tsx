"use client";

import { motion } from 'framer-motion';
import { Eye, Star, Heart, Shield } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: "Transparence",
    subtitle: "Au commencement",
    description: "Nous fondons nos relations d'affaires sur l'honnêteté et l'authenticité. Nous respectons nos promesses et répondons aux attentes de nos clients.",
    color: "#316082",
    accentColor: "#68b0d9"
  },
  {
    icon: Star,
    title: "Excellence",
    subtitle: "Tout au long du chemin",
    description: "Notre aspiration à l'excellence guide chacune de nos missions, fortifiée par notre expertise et notre perspicacité sur le marché. Nous concrétisons nos propres objectifs ainsi que ceux de nos clients les guidant ainsi vers des sommets de réussite.",
    color: "#fdca3f",
    accentColor: "#316082"
  },
  {
    icon: Heart,
    title: "Passion",
    subtitle: "Notre moteur",
    description: "Notre passion ardente alimente notre dévouement, catalysant la concrétisation des aspirations de nos clients et guidant notre quête quotidienne de succès.",
    color: "#68b0d9",
    accentColor: "#316082"
  },
  {
    icon: Shield,
    title: "Fiabilité",
    subtitle: "Notre engagement",
    description: "Des missions complexes, des expertises pointues, des projets stratégiques : nous sommes équipés pour répondre à vos besoins en respectant vos délais et contraintes.",
    color: "#316082",
    accentColor: "#68b0d9"
  }
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-6">
            Nos valeurs
          </h2>
          
          <div className="w-24 h-1 bg-[#fdca3f] mx-auto mb-8" />

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Chez ASK ADVISORY, nos valeurs représentent plus qu'un engagement, elles structurent chaque étape de notre collaboration avec vous. Dès la première réunion jusqu'à la réalisation de vos projets, ces valeurs nous guident pour transformer vos défis en réussites durables.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${value.color}05 0%, white 100%)`
                }}
              >
                {/* Card Content */}
                <div className="p-8 relative z-10">
                  {/* Icon Container */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    style={{ backgroundColor: value.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-2xl font-bold mb-2" style={{ color: value.color }}>
                      {value.title}
                    </h4>
                    <p className="text-sm font-medium mb-4" style={{ color: value.accentColor }}>
                      {value.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div 
                    className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-[100px] transition-all duration-500 group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${value.color}10 0%, transparent 100%)`,
                      transform: 'translate(25%, 25%)'
                    }}
                  />
                  <div 
                    className="absolute top-0 left-0 w-24 h-24 rounded-br-[80px] transition-all duration-500 group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(315deg, transparent 0%, ${value.color}05 100%)`,
                      transform: 'translate(-25%, -25%)'
                    }}
                  />
                </div>

                {/* Hover Effect Border */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${value.color}20 0%, transparent 100%)`,
                    border: `2px solid ${value.color}10`
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}