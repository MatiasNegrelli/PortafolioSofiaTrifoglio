
export default function LandingDos() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-pink-50 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="bg-pink-500 text-white p-3 font-bold text-xl md:text-2xl rounded-md transform -rotate-3 mb-4 inline-block">
                  SOFÍA TRIFOGLIO
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-4">COMMUNITY MANAGER</h1>
                <p className="text-lg md:text-xl mb-8 max-w-lg">
                  Apasionada de las redes sociales, especializada en Instagram y TikTok. Mejora tu presencia digital con asesoría profesional.
                </p>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1">
                  Contáctame
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-full h-auto rounded-lg shadow-xl overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="bg-gray-200 w-full h-96"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pink-200 text-gray-800 p-3 rounded-md transform rotate-3 font-bold">
                  ¡Hablemos de tu proyecto!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5">
              <div className="relative">
                <div className="w-full h-auto rounded-lg shadow-lg overflow-hidden">
                  {/* Placeholder for about image */}
                  <div className="bg-gray-200 w-full h-96"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-pink-300 p-4 rounded-lg transform rotate-6">
                  <p className="font-bold text-2xl">Soy Sofi! :)</p>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <h2 className="text-5xl font-black mb-6">ABOUT ME</h2>
              <p className="text-lg mb-4">
                Apasionada de las redes sociales, especialmente Instagram y TikTok. Me paso el día buscando nuevas tendencias en diseño. Me encantaría formar parte de tu próximo proyecto.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex-shrink-0 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium">sofiitrifoglio28@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 flex-shrink-0 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Teléfono</p>
                    <p className="font-medium">+54 351 331-9968</p>
                  </div>
                </div>
              </div>
              <div className="flex mt-6 gap-4">
                <a href="https://instagram.com/sofitrifoglio" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </div>
                </a>
                <a href="https://linkedin.com/in/Sofia-Trifoglio" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">PLANES PARA TUS REDES SOCIALES</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mejora tu presencia digital con asesoría profesional y selecciona el plan perfecto para tus necesidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Plan Básico</h3>
              <div className="text-3xl font-bold mb-6 flex items-end">
                <span className="text-pink-500">$203.500</span>
                <span className="text-sm text-gray-500 ml-2 mb-1">/ mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>4 publicaciones en Instagram y Facebook</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Historias 8 veces al mes (aprox. 24 historias)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Calendario mensual</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimización de la biografía</span>
                </li>
              </ul>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                Seleccionar Plan
              </button>
            </div>
            
            {/* Plan Estándar */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-pink-400 transform scale-105">
              <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Plan Estándar</h3>
              <div className="text-3xl font-bold mb-6 flex items-end">
                <span className="text-pink-500">$280.500</span>
                <span className="text-sm text-gray-500 ml-2 mb-1">/ mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>8 publicaciones en Instagram y Facebook</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Historias 12 veces al mes (aprox. 36 historias)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copywriting estratégico para cada posteo</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestión de comentarios</span>
                </li>
              </ul>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                Seleccionar Plan
              </button>
            </div>
            
            {/* Plan PRO */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Plan PRO</h3>
              <div className="text-3xl font-bold mb-6 flex items-end">
                <span className="text-pink-500">$401.500</span>
                <span className="text-sm text-gray-500 ml-2 mb-1">/ mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>16 publicaciones en Instagram y Facebook</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Historias 16 veces al mes (aprox. 60 historias)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Edición del contenido</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimización de historias destacadas</span>
                </li>
              </ul>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                Seleccionar Plan
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">¿Necesitas un servicio personalizado? Contáctame para crear un plan a medida.</p>
            <button className="bg-white hover:bg-gray-100 text-pink-500 border border-pink-500 font-bold py-3 px-8 rounded-lg shadow-sm transition duration-300">
              Servicios Adicionales
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">PORTFOLIO</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Algunos de los proyectos en los que he trabajado y los resultados obtenidos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <div className="bg-gray-200 w-full h-64"></div>
                <div className="absolute top-4 right-4 bg-white rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-2xl font-bold text-pink-500">1</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">LAPEZ INMOBILIARIA</h3>
                <div className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  COMMUNITY MANAGER
                </div>
                <p className="text-gray-600 mb-4">
                  Planificación y creación de contenido para redes sociales. Estrategia visual, redacción y crecimiento orgánico enfocado en ventas y posicionamiento.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="text-pink-500 font-bold text-lg">
                      +90% Engagement
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-pink-500 font-bold text-lg">
                      +85% Followers
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <div className="bg-gray-200 w-full h-64"></div>
                <div className="absolute top-4 right-4 bg-white rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-2xl font-bold text-pink-500">2</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">FUNDACIÓN NIMAI</h3>
                <div className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  COMMUNITY MANAGER
                </div>
                <p className="text-gray-600 mb-4">
                  Creación y desarrollo de contenido informativo y emocional para Instagram. Redacción, diseño y estrategias enfocadas en la difusión de servicios y construcción de comunidad.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="text-pink-500 font-bold text-lg">
                      +90% Engagement
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-pink-500 font-bold text-lg">
                      +70% Followers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black mb-8">HABILIDADES</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">CANVA</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-pink-500 h-3 rounded-full" style={{width: "95%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">CREACIÓN DE CONTENIDO</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-pink-500 h-3 rounded-full" style={{width: "90%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">PUBLICIDAD</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-pink-500 h-3 rounded-full" style={{width: "85%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">CAP CUT</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-pink-500 h-3 rounded-full" style={{width: "80%"}}></div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-4xl font-black mt-12 mb-8">IDIOMAS</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">ESPAÑOL NATIVO</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-pink-500 h-3 rounded-full" style={{width: "100%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold">INGLÉS - NIVEL INTERMEDIO</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-pink-500 h-3 rounded-full" style={{width: "75%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-black mb-8">EXPERIENCIA</h2>
              
              <div className="space-y-8">
                <div className="relative border-l-4 border-pink-300 pl-6 pb-6">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-pink-300 border-4 border-white"></div>
                  <div className="text-pink-500 font-medium mb-1">2024-Actualidad</div>
                  <h3 className="text-xl font-bold mb-2">EXPERIENCIA 1</h3>
                  <h4 className="text-lg font-semibold mb-1">LAPEZ INMOBILIARIA (BIENES RAÍCES)</h4>
                  <ul className="list-disc ml-4 text-gray-600">
                    <li>Edición de video</li>
                    <li>Contenido para social media</li>
                    <li>Gestión de RRSS</li>
                  </ul>
                </div>
                
                <div className="relative border-l-4 border-pink-300 pl-6 pb-6">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-pink-300 border-4 border-white"></div>
                  <div className="text-pink-500 font-medium mb-1">2024-Actualidad</div>
                  <h3 className="text-xl font-bold mb-2">EXPERIENCIA 2</h3>
                  <h4 className="text-lg font-semibold mb-1">FUNDACIÓN NIMAI (CENTRO INTERDISCIPLINARIO)</h4>
                  <ul className="list-disc ml-4 text-gray-600">
                    <li>Edición de video</li>
                    <li>Contenido para social media</li>
                    <li>Gestión de RRSS</li>
                  </ul>
                </div>
                
                <div className="relative border-l-4 border-pink-300 pl-6">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-pink-300 border-4 border-white"></div>
                  <div className="text-pink-500 font-medium mb-1">2023-Actualidad</div>
                  <h3 className="text-xl font-bold mb-2">ESTUDIOS UNIVERSITARIOS</h3>
                  <h4 className="text-lg font-semibold mb-1">Tec. Marketing Digital</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">SERVICIOS ADICIONALES</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Impulsá tu presencia online con contenido único y publicidad dirigida, maximizando resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Additional Service 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Creación de Contenido</h3>
                <div className="text-xl font-bold mb-6 flex items-end">
                  <span className="text-pink-500">Precio a coordinar</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Creación de ideas de contenido</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Creación de guiones</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Producción del contenido</span>
                  </li>
                </ul>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                  Solicitar Info
                </button>
              </div>
            </div>
            
            {/* Additional Service 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Publicidad en RRSS</h3>
                <div className="text-xl font-bold mb-6 flex items-end">
                  <span className="text-pink-500">Precio a coordinar</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Configuración de Administrador comercial de Meta Ads</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Creación de campañas publicitarias</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Análisis y optimización de resultados</span>
                  </li>
                </ul>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                  Solicitar Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black mb-8">CONTÁCTAME</h2>
              <p className="text-lg text-gray-600 mb-8">
                Si estás interesado en mejorar tu presencia en redes sociales, no dudes en contactarme. ¡Estaré encantada de ayudarte a impulsar tu marca!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Teléfono</p>
                    <p className="text-gray-600">+54 351 331-9968</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Email</p>
                    <p className="text-gray-600">sofiitrifoglio28@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Redes Sociales</p>
                    <div className="flex mt-2 space-x-4">
                      <a href="https://instagram.com/sofitrifoglio" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                        @sofitrifoglio
                      </a>
                      <a href="https://linkedin.com/in/Sofia-Trifoglio" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                        Sofía Trifoglio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre completo</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                  <textarea id="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sofía Trifoglio</h3>
              <p className="text-gray-400 mb-4">
                Community Manager profesional dedicada a mejorar la presencia digital de su marca con estrategias efectivas y contenido de calidad.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/sofitrifoglio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/Sofia-Trifoglio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Community Management</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Creación de Contenido</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Publicidad en Redes Sociales</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Estrategia Digital</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +54 351 331-9968
                </li>
                <li className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  sofiitrifoglio28@gmail.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sofía Trifoglio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}