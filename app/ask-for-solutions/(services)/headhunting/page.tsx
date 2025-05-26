"use client";

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeadhuntingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[550px] w-full overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Headhunting Background"
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
                  Chasse de Tête
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[#68b0d9] to-white bg-clip-text text-transparent">
                  Identifiez et attirez les talents stratégiques pour votre entreprise
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Dans un marché du travail en constante évolution, attirer les bons profils est devenu un véritable défi. La chasse de tête, ou recrutement de profils stratégiques, consiste à identifier et recruter des talents exceptionnels, souvent rares, qui vont non seulement répondre aux exigences techniques mais aussi s'intégrer pleinement à la culture et aux valeurs de votre entreprise.
                </p>
                <p className="text-xl font-medium text-[#316082] italic">
                  Chez ASK ADVISORY, nous mettons à votre disposition notre expertise en chasse de tête pour vous aider à trouver les leaders de demain. Grâce à une approche proactive et ciblée, nous allons au-delà des candidatures classiques pour vous connecter avec les meilleurs talents.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Headhunting"
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
              Notre approche de la chasse de tête :
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Identification de talents rares : Nous utilisons des méthodes de recherche avancées et un réseau étendu pour repérer des profils stratégiques qui correspondent à vos besoins spécifiques.",
              "Recrutement sur mesure : Chaque mission de recrutement est adaptée aux enjeux particuliers de votre entreprise, en tenant compte de votre culture organisationnelle, de vos objectifs à court et à long terme et des compétences spécifiques recherchées.",
              "Processus rigoureux de sélection : Nous assurons une évaluation complète des candidats, en menant des entretiens approfondis, des tests d'aptitude et des vérifications de références pour garantir la qualité et la pertinence des profils proposés.",
              "Accompagnement personnalisé tout au long du processus : De l'identification des besoins à l'intégration des candidats sélectionnés, nous vous accompagnons à chaque étape, en garantissant une transition fluide et une prise en main rapide des nouveaux collaborateurs."
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Un partenariat stratégique pour attirer les talents qui feront la différence
            </h2>
            <p className="text-xl text-white/90 mb-12">
              La chasse de tête est bien plus qu'un simple recrutement. C'est un processus stratégique qui permet à votre entreprise de se doter des talents clés pour sa croissance et sa compétitivité. Nous vous accompagnons dans cette démarche en vous apportant notre expertise, notre réseau et notre méthodologie rigoureuse pour trouver les talents qui répondent à vos exigences et qui s'intègrent parfaitement à votre vision.
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