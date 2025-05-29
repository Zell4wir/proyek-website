function AboutSection() {
  return (
    <section>
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-7">
            Kategori Menu Favorit
          </h2>
          <p className="text-center text-lg mb-8">
            Kami menyediakan berbagai kategori menu yang cocok untuk
            berbagai selera. Mulai dari makanan berat seperti burger, makanan penutup, dan minuman yang segar, Anda dapat menemukan pilihan yang sesuai dengan keinginan Anda. Setiap kategori dirancang untuk memberikan pengalaman kuliner yang memuaskan dan menggugah selera. Apapun pilihan Anda, kami berkomitmen untuk menyajikan hidangan berkualitas tinggi dengan cita rasa yang lezat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="robin-stickel-tzl1UCXg5Es-unsplash.jpg"
                  alt="Hamburger & Makanan Berat"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Hamburger & Makanan Berat
              </h3>
              <p className="text-gray-600">
                Nikmati burger lezat dan makanan berat lainnya yang
                mengenyangkan
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="gaby-dyson-QX814A1w3j4-unsplash.jpg"
                  alt="Dessert"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Dessert</h3>
              <p className="text-gray-600">
                Nikmati berbagai hidangan penutup yang lezat dan menggugah
                selera
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="kaizen-nguy-n-jcLcWL8D7AQ-unsplash.jpg"
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
          </div>
        </div>
      </div>  
    </section>
  );
}

export default AboutSection;
