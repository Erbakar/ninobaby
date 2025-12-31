
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#FFFDFB]">
      {/* Header */}
      <section className="py-20 bg-amber-50/30 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">İletişim</h1>
          <p className="text-lg text-gray-600">Her türlü sorunuz ve öneriniz için buradayız.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Cards */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Bize Ulaşın</h2>
                <p className="text-lg text-gray-600">
                  Müşteri hizmetleri ekibimiz hafta içi 09:00 - 18:00 saatleri arasında hizmet vermektedir.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-2xl border border-orange-50 shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-600 text-sm">+90 (212) 555 0101</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-orange-50 shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">E-posta</h3>
                  <p className="text-gray-600 text-sm">destek@ninobaby.com</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-orange-50 shadow-sm sm:col-span-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Merkez Ofis</h3>
                  <p className="text-gray-600 text-sm">Bebek Mah. Mutluluk Cad. No:42, Beşiktaş, İstanbul</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video w-full bg-gray-100 rounded-3xl overflow-hidden border-4 border-white shadow-lg relative group">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" alt="Location Map" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl font-bold text-orange-600 border border-orange-100">
                     Haritayı Görüntüle
                   </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl shadow-orange-100 border border-orange-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Mesaj Gönderin</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Ad Soyad</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all" placeholder="Ahmet Yılmaz" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">E-posta</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all" placeholder="ahmet@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Konu</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all">
                    <option>Sipariş Durumu</option>
                    <option>Ürün Bilgisi</option>
                    <option>İade ve Değişim</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mesajınız</label>
                  <textarea rows={5} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all" placeholder="Nasıl yardımcı olabiliriz?"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 active:scale-[0.98]">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
