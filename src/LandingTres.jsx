import React from "react";

export default function LandingTres() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-100 to-gray-100 pt-12 pb-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="bg-pink-500 text-white px-4 py-1 rounded-md inline-block mb-4 transform -rotate-2">
              <span className="text-lg font-bold">SOFÍA TRIFOGLIO</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">COMMUNITY MANAGER</h1>
            <p className="text-lg mb-6">
              Apasionada de las redes sociales, especialmente Instagram y TikTok. 
              Me encantaría formar parte de tu próximo proyecto.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Contáctame
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-pink-200 rounded-lg transform rotate-3"></div>
              <img 
                src="/api/placeholder/400/500" 
                alt="Community Manager" 
                className="relative z-10 rounded-lg shadow-lg w-64 h-80 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Planes para tus redes sociales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 border-t-4 border-pink-300">
              <h3 className="text-2xl font-bold mb-4">Plan Básico</h3>
              <p className="text-3xl font-bold text-pink-500 mb-6">$203.500<span className="text-sm text-gray-500 font-normal"> / mes</span></p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>4 publicaciones en Instagram y Facebook</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Historias 8 veces al mes (aprox. 24 historias)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Calendario Mensual</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Optimización de la biografía</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300">
                Seleccionar
              </button>
            </div>

            {/* Plan Estándar */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 border-t-4 border-pink-500 transform scale-105">
              <div className="bg-pink-500 text-white text-sm font-bold uppercase py-1 px-4 rounded-full inline-block mb-4">
                Recomendado
              </div>
              <h3 className="text-2xl font-bold mb-4">Plan Estándar</h3>
              <p className="text-3xl font-bold text-pink-500 mb-6">$280.500<span className="text-sm text-gray-500 font-normal"> / mes</span></p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>8 publicaciones en Instagram y Facebook</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Historias 12 veces al mes (aprox. 36 historias)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Copywriting estratégico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Gestión de comentarios</span>
                </li>
              </ul>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                Seleccionar
              </button>
            </div>

            {/* Plan PRO */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 border-t-4 border-pink-300">
              <h3 className="text-2xl font-bold mb-4">Plan PRO</h3>
              <p className="text-3xl font-bold text-pink-500 mb-6">$401.500<span className="text-sm text-gray-500 font-normal"> / mes</span></p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>16 publicaciones en Instagram y Facebook</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Historias 16 veces al mes (aprox. 60 historias)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Edición del contenido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Planificación de contenido premium</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300">
                Seleccionar
              </button>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Todos los paquetes incluyen:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <span className="text-pink-500 mr-2">✓</span>
                <span>Calendario Mensual</span>
              </div>
              <div className="flex items-center">
                <span className="text-pink-500 mr-2">✓</span>
                <span>Planificación y publicación</span>
              </div>
              <div className="flex items-center">
                <span className="text-pink-500 mr-2">✓</span>
                <span>Optimización de la biografía</span>
              </div>
              <div className="flex items-center">
                <span className="text-pink-500 mr-2">✓</span>
                <span>Optimización de historias destacadas</span>
              </div>
              <div className="flex items-center">
                <span className="text-pink-500 mr-2">✓</span>
                <span>Copywriting estratégico</span>
              </div>
              <div className="flex items-center">
                <span className="text-pink-500 mr-2">✓</span>
                <span>Gestión de comentarios</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Proyectos destacados</h2>
          <p className="text-center mb-12 text-gray-600">Clientes satisfechos con resultados comprobados</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Client 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 text-pink-800 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold">LAPEZ INMOBILIARIA</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Planificación y creación de contenido para redes sociales. 
                  Estrategia visual, redacción y crecimiento orgánico enfocado en ventas y posicionamiento.
                </p>
                <div className="flex space-x-4 text-sm">
                  <div className="text-pink-500 font-bold">+90% ENGAGEMENT</div>
                  <div className="text-pink-500 font-bold">+85% FOLLOWERS</div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 flex justify-center">
                <div className="grid grid-cols-2 gap-2">
                  <img src="/api/placeholder/180/320" alt="Social Media Post" className="rounded-md h-40 w-full object-cover" />
                  <img src="/api/placeholder/180/320" alt="Social Media Post" className="rounded-md h-40 w-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Client 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 text-pink-800 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold">FUNDACIÓN NIMAI</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Creación y desarrollo de contenido informativo y emocional para Instagram.
                  Redacción, diseño y estrategias enfocadas en la difusión de servicios y construcción de comunidad.
                </p>
                <div className="flex space-x-4 text-sm">
                  <div className="text-pink-500 font-bold">+90% ENGAGEMENT</div>
                  <div className="text-pink-500 font-bold">+70% FOLLOWERS</div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 flex justify-center">
                <div className="grid grid-cols-2 gap-2">
                  <img src="/api/placeholder/180/320" alt="Social Media Post" className="rounded-md h-40 w-full object-cover" />
                  <img src="/api/placeholder/180/320" alt="Social Media Post" className="rounded-md h-40 w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">CANVA</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">PUBLICIDAD</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">CREACIÓN DE CONTENIDO</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">CAP CUT</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full w-10/12"></div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-8">Idiomas</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">ESPAÑOL</h3>
                  <div className="flex">
                    <div className="w-6 h-6 rounded-full bg-pink-500 mx-1"></div>
                    <div className="w-6 h-6 rounded-full bg-pink-500 mx-1"></div>
                    <div className="w-6 h-6 rounded-full bg-pink-500 mx-1"></div>
                    <div className="w-6 h-6 rounded-full bg-pink-500 mx-1"></div>
                    <div className="w-6 h-6 rounded-full bg-pink-500 mx-1"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">INGLÉS</h3>
                  <div className="flex">
                    <div className="w-6 h-6 rounded-full bg-pink-500 mx-1"></div>
                    <div className="w-6 h-6 rounded-full bg-pink-500 mx-1"></div>
                    <div className="w-6 h-6 rounded-full bg-pink-500 mx-1"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-200 mx-1"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-200 mx-1"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Experiencia</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-pink-400 pl-4">
                  <div className="text-pink-500 font-semibold">2024-Actualidad</div>
                  <h3 className="text-xl font-bold">LAPEZ INMOBILIARIA</h3>
                  <p className="text-gray-600">Community Manager</p>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>- Edición de video</li>
                    <li>- Contenido para social media</li>
                    <li>- Gestión de RRSS</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-pink-400 pl-4">
                  <div className="text-pink-500 font-semibold">2024-Actualidad</div>
                  <h3 className="text-xl font-bold">FUNDACIÓN NIMAI</h3>
                  <p className="text-gray-600">Community Manager</p>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>- Edición de video</li>
                    <li>- Contenido para social media</li>
                    <li>- Gestión de RRSS</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-pink-400 pl-4">
                  <div className="text-pink-500 font-semibold">2023-Actualidad</div>
                  <h3 className="text-xl font-bold">ESTUDIOS UNIVERSITARIOS</h3>
                  <p className="text-gray-600">Tec. Marketing Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Services */}
      <div className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Otros servicios</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Creación de Contenido</h3>
              <p className="text-gray-600 mb-6">Servicio personalizado para la creación de contenido original y estratégico.</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Creación de ideas de contenido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Creación de guiones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Producción del contenido</span>
                </li>
              </ul>
              <div className="font-bold text-lg">Precio a coordinar</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Publicidad en RRSS</h3>
              <p className="text-gray-600 mb-6">Estrategias publicitarias para maximizar la visibilidad de tu marca.</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Configuración de Administrador comercial de Meta Ads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Creación de campañas publicitarias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Análisis de resultados y optimización</span>
                </li>
              </ul>
              <div className="font-bold text-lg">Precio a coordinar</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">¡Hablemos!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/api/placeholder/400/500" 
                alt="Contact" 
                className="rounded-lg shadow-lg w-full object-cover" 
              />
            </div>
            
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-pink-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <div className="font-semibold">sofiitrifoglio28@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-pink-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Teléfono</div>
                    <div className="font-semibold">+54 351 331-9968</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-pink-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Instagram</div>
                    <div className="font-semibold">@sofitrifoglio</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-pink-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">LinkedIn</div>
                    <div className="font-semibold">Sofía Trifoglio</div>
                  </div>
                </div>
              </div>
              
              <form className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input 
                    type="text" 
                    placeholder="Nombre" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <textarea 
                  rows="4" 
                  placeholder="Mensaje" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                ></textarea>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Sofía Trifoglio</h2>
              <p className="text-gray-400">Community Manager & Content Creator</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition duration-300">  
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sofía Trifoglio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}