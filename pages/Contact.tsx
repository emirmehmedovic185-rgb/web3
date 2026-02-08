
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-scuderia-red tracking-[0.5em] font-bold text-xs mb-4 block uppercase">L'Exclusivité</span>
          <h1 className="text-6xl md:text-9xl font-serif italic font-black mb-8">CONTACT</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            L'entrée dans le monde Ferrari commence par un dialogue. Nos conseillers personnels sont à votre disposition pour organiser votre visite privée.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-scuderia-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-widest text-sm mb-2">ADRESSE</h4>
                  <p className="text-gray-400">Via Abetone Inferiore, 4<br />41053 Maranello MO, Italy</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-scuderia-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-widest text-sm mb-2">TÉLÉPHONE</h4>
                  <p className="text-gray-400">+39 0536 949111</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-scuderia-red">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-widest text-sm mb-2">E-MAIL</h4>
                  <p className="text-gray-400">privilege@scuderia-vision.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-scuderia-red">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-widest text-sm mb-2">HORAIRES</h4>
                  <p className="text-gray-400">Lun - Ven : 09:00 - 19:00<br />Samedi : Sur rendez-vous uniquement</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-morphism p-10 rounded-2xl border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest font-bold text-gray-500 uppercase">Prénom</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-scuderia-red outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest font-bold text-gray-500 uppercase">Nom</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-scuderia-red outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest font-bold text-gray-500 uppercase">E-mail Professionnel</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:border-scuderia-red outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest font-bold text-gray-500 uppercase">Modèle d'intérêt</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 focus:border-scuderia-red outline-none transition-colors text-gray-400">
                  <option>SF90 Stradale</option>
                  <option>812 GTS</option>
                  <option>Ferrari Roma</option>
                  <option>Autre / Collection</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest font-bold text-gray-500 uppercase">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 focus:border-scuderia-red outline-none transition-colors"></textarea>
              </div>
              <button className="w-full py-5 bg-scuderia-red text-white font-bold tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-500 uppercase">
                Envoyer la Demande
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
