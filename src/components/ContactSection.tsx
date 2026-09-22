import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Info } from 'lucide-react';
import { companyData } from '../data/siteContent';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'ready_notice'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('ready_notice');
    }, 600);
  };

  return (
    <div className="w-full py-2 text-slate-900">
      {/* Section Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#B48C36] text-xs font-bold tracking-wider uppercase mb-2">
          <Mail className="w-3.5 h-3.5" />
          <span>İletişim & Teklif</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Projeleriniz İçin Bizimle İletişime Geçin.
        </h2>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="py-5 space-y-4">
            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 text-[#C89D4B] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Merkez Adres</h3>
                <p className="text-xs font-bold text-slate-800 mt-0.5">
                  {companyData.contact.addressPlaceholder}
                </p>
                <p className="text-[11px] text-slate-500">
                  {companyData.contact.addressNote}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 text-[#C89D4B] flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Telefon</h3>
                <p className="text-xs font-bold text-slate-800 mt-0.5">
                  {companyData.contact.phonePlaceholder}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 text-[#C89D4B] flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">E-Posta</h3>
                <p className="text-xs font-bold text-slate-800 mt-0.5 font-mono">
                  {companyData.contact.emailPlaceholder}
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 text-[#C89D4B] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Çalışma Saatleri</h3>
                <p className="text-xs font-bold text-slate-800 mt-0.5">
                  {companyData.contact.workingHoursPlaceholder}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 py-5 lg:pl-10 lg:border-l lg:border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            İletişim & Teklif Formu
          </h3>
          <p className="text-xs text-slate-500 mb-5">
            Formu doldurarak şirketimize mesaj veya proje detaylarınızı iletebilirsiniz.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Ad Soyad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Adınız ve Soyadınız"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  E-Posta <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ornek@alanadi.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Telefon Numarası
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+90 (5xx) xxx xx xx"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all placeholder:text-slate-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Mesajınız & Proje Detayları <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Projeniz hakkında bilgi veriniz..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all placeholder:text-slate-400 resize-none"
              />
            </div>

            {formStatus === 'ready_notice' ? (
              <div className="p-3.5 rounded-xl bg-slate-50 text-slate-800 text-xs space-y-1.5 border border-[#C89D4B] animate-in fade-in">
                <div className="flex items-center gap-2 text-[#B48C36] font-bold">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>Frontend Doğrulaması Başarılı</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Form doğrulandı. Backend servisi bağlandığında mesaj doğrudan şirkete iletilecektir.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormStatus('idle');
                    setFormData({ fullName: '', email: '', phone: '', message: '' });
                  }}
                  className="text-[11px] text-[#B48C36] font-bold underline hover:text-slate-900 cursor-pointer"
                >
                  Formu Sıfırla
                </button>
              </div>
            ) : (
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-slate-800 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                {formStatus === 'submitting' ? (
                  <span>İşleniyor...</span>
                ) : (
                  <>
                    <span>Mesaj Gönder</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
