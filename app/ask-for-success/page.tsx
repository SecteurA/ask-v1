"use client";

import { motion } from 'framer-motion';
import { Search, Settings, Rocket, Sliders } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const methodologySteps = [
  {
    number: "1",
    icon: Search,
    title: "Diagnostic & Analyse",
    color: "#fdca3f",
    description: "Chaque projet débute par une écoute attentive et une analyse détaillée. Cette étape cruciale nous permet de comprendre vos enjeux, d'évaluer vos ressources et de repérer les leviers stratégiques à exploiter. Grâce à des outils de diagnostic sur mesure, nous établissons les fondations d'une intervention ciblée et performante."
  },
  {
    number: "2",
    icon: Settings,
    title: "Conception & Personnalisation des Solutions",
    color: "#316082",
    description: "Chaque entreprise est unique et les solutions que nous proposons doivent refléter cette singularité. Nous élaborons des plans d'action sur mesure, adaptés à vos défis uniques, et veillons à ce que vos équipes soient pleinement alignées sur vos objectifs stratégiques."
  },
  {
    number: "3",
    icon: Rocket,
    title: "Mise en œuvre & Accompagnement",
    color: "#68b0d9",
    description: "Le passage de la stratégie à l'action est essentiel pour atteindre vos objectifs. Nous vous soutenons à chaque étape de la mise en œuvre, en assurant une exécution fluide, en mobilisant vos équipes et en garantissant un suivi constant et rigoureux."
  },
  {
    number: "4",
    icon: Sliders,
    title: "Évaluation & Ajustement",
    color: "#00A896",
    description: "L'amélioration continue étant au cœur de notre approche, nous mesurons les résultats obtenus et ajustons nos actions en fonction des besoins. Cette phase garantit la durabilité des changements et optimise leur impact à long terme."
  }
];

export default function AskForSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[550px] w-full overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Success Background"
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
                  ASK FOR SUCCESS
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[#68b0d9] to-white bg-clip-text text-transparent">
                  De l'analyse à l'action, chaque étape compte
                </span>
              </h1>
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
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              Chez ASK ADVISORY, chaque projet est une expérience unique. Nous sommes convaincus qu'une méthode rigoureuse, associée à une écoute attentive et à une approche personnalisée, constitue la base d'un partenariat fructueux. Nous adaptons notre démarche à vos besoins, vos objectifs et votre contexte pour assurer des résultats tangibles et durables. Ensemble, nous transformons vos défis en leviers de succès.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-6">
              Notre méthodologie en 4 étapes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    {/* Number Circle */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <Icon className="w-8 h-8" style={{ color: step.color }} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#316082] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line (except for last item) */}
                  {index < methodologySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#316082] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Vous souhaitez en savoir plus sur notre approche ?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Contactez-nous pour découvrir comment nous pouvons transformer vos défis en réussites durables.
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