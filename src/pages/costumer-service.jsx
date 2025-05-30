import React, { useState } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
const CostumerService = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [attachFile, setAttachFile] = useState(null);
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketNumber, setTicketNumber] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !message || !consent) return;
    setIsSubmitting(true);
    setTimeout(() => {
      const newTicketNumber = `CS${Math.floor(Math.random() * 10000)}`;
      setTicketNumber(newTicketNumber);
      setIsSubmitting(false);
    }, 1500);
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachFile(e.target.files[0]);
    }
  };
  return (
    <>
      <NavBar/>
      <div className="min-h-screen bg-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col">
            <div className="w-full p-8">
              <div className="max-w-lg mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-green-800">
                    Kirim Pesan / Keluhan
                  </h1>
                  <p className="text-green-700 mt-2">
                    Kami siap membantu menyelesaikan masalah Anda
                  </p>
                </div>
                {ticketNumber ? (
                  <div className="bg-green-100 border border-green-200 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-check text-2xl text-green-600"></i>
                    </div>
                    <h3 className="text-xl font-medium text-green-800 mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-green-700 mb-4">
                      Terima kasih atas masukan Anda. Kami akan segera menghubungi
                      Anda.
                    </p>
                    <div className="bg-white border border-green-200 rounded-lg p-3 inline-block">
                      <span className="text-sm text-green-600">Nomor Tiket:</span>
                      <span className="font-medium ml-2 text-green-700">
                        {ticketNumber}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setUsername("");
                        setMessage("");
                        setAttachFile(null);
                        setConsent(false);
                        setTicketNumber(null);
                      }}
                      className="mt-6 w-full bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition cursor-pointer whitespace-nowrap !rounded-button"
                    >
                      Kirim Pesan Baru
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-green-700 mb-1"
                      >
                        Username
                      </label>
                      <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Masukkan username kamu..."
                        className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-green-400 focus:border-green-400 bg-green-50"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-green-700 mb-1"
                      >
                        Pesan / Keluhan
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tulis pesan atau keluhan kamu di sini..."
                        rows={6}
                        className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-green-400 focus:border-green-400 bg-green-50"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label
                        htmlFor="attachment"
                        className="block text-sm font-medium text-green-700 mb-1"
                      >
                        Lampiran (opsional)
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col w-full h-24 border-2 border-dashed border-green-200 rounded-lg hover:bg-green-100 hover:border-green-400 transition cursor-pointer">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <i className="fas fa-cloud-upload-alt text-green-300 text-2xl mb-2"></i>
                            <p className="text-sm text-green-600">
                              {attachFile
                                ? attachFile.name
                                : "Klik untuk mengunggah file"}
                            </p>
                            <p className="text-xs text-green-400 mt-1">
                              PNG, JPG, PDF (Maks. 5MB)
                            </p>
                          </div>
                          <input
                            id="attachment"
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="consent"
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="w-4 h-4 text-green-500 border-green-300 rounded focus:ring-green-400"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="consent" className="text-green-700">
                          Saya menyetujui bahwa data saya akan diproses sesuai
                          dengan kebijakan privasi
                        </label>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={
                          isSubmitting || !username || !message || !consent
                        }
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white text-base font-medium ${
                          isSubmitting || !username || !message || !consent
                            ? "bg-green-900 cursor-not-allowed hover:bg-green-600"
                            : "bg-green-400 hover:bg-green-500"
                        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 transition cursor-pointer whitespace-nowrap !rounded-button`}
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fas fa-circle-notch fa-spin mr-2"></i>
                            Mengirim...
                          </>
                        ) : (
                          "Kirim"
                        )}
                      </button>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-center space-x-4">
                        <button
                          type="button"
                          className="flex items-center text-sm text-green-600 hover:text-green-800 cursor-pointer whitespace-nowrap !rounded-button"
                        >
                          <i className="fas fa-question-circle mr-2"></i>
                          FAQ
                        </button>
                        <span className="text-green-300">|</span>
                        <button
                          type="button"
                          className="flex items-center text-sm text-green-600 hover:text-green-800 cursor-pointer whitespace-nowrap !rounded-button"
                        >
                          <i className="fas fa-history mr-2"></i>
                          Riwayat Tiket
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>   
      <Footer/>
    </>
  );
};
export default CostumerService;
