function AboutSection() {
  return (
    <section>
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-7">
            Kategori Menu
          </h2>
          <p className="text-center text-lg mb-8">
            Kami menyediakan berbagai kategori menu yang cocok untuk
            berbagai selera. Mulai dari makanan berat seperti Mie Ayam, minuman yang segar, dan makanan penutup. Anda dapat menemukan pilihan yang sesuai dengan keinginan Anda. Setiap kategori dirancang untuk memberikan pengalaman kuliner yang memuaskan dan menggugah selera. Apapun pilihan Anda, kami berkomitmen untuk menyajikan hidangan berkualitas tinggi dengan cita rasa yang lezat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="095962400_1604981057-shutterstock_1827452876.jpg"
                  alt="Makanan Berat"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Makanan Berat
              </h3>
              <p className="text-gray-600">
                Nikmati Mie Ayam dan berbagai hidangan berat lainnya yang
                mengenyangkan dan lezat
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="svitlana-mnkU6aQowCE-unsplash.jpg"
                  alt="Minuman"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Minuman</h3>
              <p className="text-gray-600">
                Nikmati berbagai minuman yang menyegarkan untuk menemani
                hidangan Anda
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="Yummy.jpg"
                  alt="Makanan Penutup"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Makanan Penutup</h3>
              <p className="text-gray-600">
                Nikmati berbagai makanan penutup yang lezat dan menggugah
                selera
              </p>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
}

export default AboutSection;
