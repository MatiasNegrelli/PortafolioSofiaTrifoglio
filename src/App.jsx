import './App.css';
import { useState } from 'react';
import { Instagram, Linkedin, Mail, Phone, ChevronDown, CheckCircle, Star } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('experiencia');
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    setContactFormData({ name: '', email: '', message: '' });
  };

  // Testimoniales
  const testimonials = [
    {
      name: "Laura Vázquez",
      company: "Fundación Nimai",
      text: "Sofía transformó nuestra presencia online. Nuestro engagement aumentó un 90% en solo 3 meses.",
      rating: 5
    },
    {
      name: "Martín Lapez",
      company: "Lapez Inmobiliaria",
      text: "Profesional, creativa y siempre actualizada con las últimas tendencias. Nuestra audiencia creció un 85%.",
      rating: 5
    },
    {
      name: "Carolina Méndez",
      company: "Boutique Caro",
      text: "Sofía entendió perfectamente nuestra marca y la comunicó de forma excepcional en redes.",
      rating: 5
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6 md:px-20 flex justify-between items-center sticky top-0 z-10">
        <div className="text-pink-600 font-bold text-xl">Sofía Trifoglio</div>
        <div className="hidden md:flex space-x-6">
          <a href="#experiencia" className="hover:text-pink-600 transition">Experiencia</a>
          <a href="#habilidades" className="hover:text-pink-600 transition">Habilidades</a>
          <a href="#planes" className="hover:text-pink-600 transition">Planes</a>
          <a href="#contacto" className="hover:text-pink-600 transition">Contacto</a>
        </div>
        <button className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition shadow-sm">
          Contáctame
        </button>
      </nav>

      {/* Hero */}
      <section className="relative px-6 py-20 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="flex-1 text-center md:text-left max-w-2xl">
          <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
            Community Manager & Content Creator
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4">
            Impulsa tu <span className="text-pink-600">marca</span> en redes sociales
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Especialista en estrategias digitales para Instagram y TikTok. Creo contenido que conecta con tu audiencia y convierte seguidores en clientes.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition shadow-md w-full sm:w-auto">
              Ver planes
            </button>
            <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-50 transition w-full sm:w-auto">
              Mi portfolio
            </button>
          </div>

          <div className="mt-8 flex justify-center md:justify-start gap-6">
            <a href="https://instagram.com/sofitrifoglio" target="_blank" rel="noopener noreferrer" 
               className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition">
              <Instagram size={20} className="text-pink-600" />
            </a>
            <a href="https://linkedin.com/in/sofía-trifoglio" target="_blank" rel="noopener noreferrer"
               className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition">
              <Linkedin size={20} className="text-pink-600" />
            </a>
            <a href="mailto:sofiitrifoglio28@gmail.com"
               className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition">
              <Mail size={20} className="text-pink-600" />
            </a>
            <a href="tel:+543513319968"
               className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition">
              <Phone size={20} className="text-pink-600" />
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl relative">
          {/* Reemplazar src con la ruta de la foto */}
          <img
            src="/foto_personal_2.png"
            alt="Sofía Trifoglio"
            className="w-full h-full object-cover"
          />
          
        </div>
      </section>

      {/* Métricas destacadas */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-500 py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="text-center">
            <h3 className="text-4xl font-bold">+50</h3>
            <p className="text-pink-100">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">+150k</h3>
            <p className="text-pink-100">Seguidores gestionados</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">+90%</h3>
            <p className="text-pink-100">Tasa de retención</p>
          </div>
        </div>
      </section>

      {/* Pestañas - Experiencia, Servicios */}
      <section id="experiencia" className="px-6 py-16 md:px-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Lo que puedo hacer por ti</h2>
          <p className="text-gray-600 mt-2">Estrategias personalizadas para tu marca</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-8 overflow-x-auto no-scrollbar">
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'experiencia' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('experiencia')}
          >
            Experiencia
          </button>
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'servicios' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('servicios')}
          >
            Servicios
          </button>
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'proceso' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('proceso')}
          >
            Mi proceso
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-64">
          {/* Experiencia Tab */}
          {activeTab === 'experiencia' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
                <div className="flex items-start">
                  <div className="bg-pink-100 p-4 rounded-lg">
                    <Instagram size={24} className="text-pink-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Lapez Inmobiliaria</h3>
                    <p className="text-sm text-gray-500">2023 - Presente</p>
                    <p className="text-sm mt-2 text-gray-600">Planificación y creación de contenido, redacción y estrategia visual enfocada en ventas y posicionamiento.</p>
                    <div className="mt-4">
                      <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full mr-2">+90% engagement</span>
                      <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full">+85% seguidores</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
                <div className="flex items-start">
                  <div className="bg-pink-100 p-4 rounded-lg">
                    <Instagram size={24} className="text-pink-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Fundación Nimai</h3>
                    <p className="text-sm text-gray-500">2022 - 2023</p>
                    <p className="text-sm mt-2 text-gray-600">Contenido informativo y emocional para Instagram. Estrategias de comunidad y redacción emocional.</p>
                    <div className="mt-4">
                      <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full mr-2">+90% engagement</span>
                      <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full">+70% seguidores</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
                <div className="flex items-start">
                  <div className="bg-pink-100 p-4 rounded-lg">
                    <Instagram size={24} className="text-pink-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Boutique Caro</h3>
                    <p className="text-sm text-gray-500">2022</p>
                    <p className="text-sm mt-2 text-gray-600">Gestión integral de redes sociales. Campañas estacionales y promociones especiales.</p>
                    <div className="mt-4">
                      <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full mr-2">+75% ventas</span>
                      <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full">+60% seguidores</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
                <div className="flex items-start">
                  <div className="bg-pink-100 p-4 rounded-lg">
                    <Instagram size={24} className="text-pink-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Cafetería El Aroma</h3>
                    <p className="text-sm text-gray-500">2021 - 2022</p>
                    <p className="text-sm mt-2 text-gray-600">Lanzamiento de marca en redes sociales. Estrategia de contenido para un nuevo negocio.</p>
                    <div className="mt-4">
                      <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full mr-2">+200 seguidores/mes</span>
                      <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full">+30% ventas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Servicios Tab */}
          {activeTab === 'servicios' && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
                <div className="bg-pink-100 p-4 rounded-lg inline-block">
                  <Instagram size={24} className="text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold mt-4">Gestión de Instagram</h3>
                <p className="text-sm mt-2 text-gray-600">Estrategia completa para tu marca: feed, stories, reels y gestión de comunidad.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-pink-600 mr-2" />
                    Calendario de contenidos
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-pink-600 mr-2" />
                    Diseño de posts en Canva
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-pink-600 mr-2" />
                    Copywriting estratégico
                  </li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
                <div className="bg-pink-100 p-4 rounded-lg inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                    <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"></path>
                    <line x1="12" y1="10" x2="12" y2="14"></line>
                    <line x1="12" y1="18" x2="12" y2="18"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mt-4">Estrategia TikTok</h3>
                <p className="text-sm mt-2 text-gray-600">Creación de contenido viral y tendencias para la plataforma de mayor crecimiento.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-pink-600 mr-2" />
                    Análisis de tendencias
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-pink-600 mr-2" />
                    Edición con CapCut
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-pink-600 mr-2" />
                    Optimización del perfil
                  </li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
                <div className="bg-pink-100 p-4 rounded-lg inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                    <path d="M17 12a5 5 0 1 0-5-5"/>
                    <path d="m14 19-7-7"/>
                    <path d="M17 17v-2"/>
                    <path d="M17 17h-2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mt-4">Publicidad en redes</h3>
                <p className="text-sm mt-2 text-gray-600">Campañas de Facebook e Instagram Ads optimizadas para conseguir resultados.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-pink-600 mr-2" />
                    Segmentación de audiencia
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-pink-600 mr-2" />
                    Diseño de anuncios
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-pink-600 mr-2" />
                    Informes de rendimiento
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Proceso Tab */}
            {activeTab === 'proceso' && (
            <div className="space-y-12 max-w-3xl mx-auto">
                {[
                {
                    number: 1,
                    title: 'Diagnóstico',
                    desc: 'Analizamos tu marca, tu competencia y tu audiencia para desarrollar una estrategia.',
                },
                {
                    number: 2,
                    title: 'Estrategia',
                    desc: 'Diseñamos un plan de contenidos personalizado con objetivos claros y medibles.',
                },
                {
                    number: 3,
                    title: 'Creación',
                    desc: 'Contenido original: textos, imágenes y videos que conectan con toda tu audiencia.',
                },
                {
                    number: 4,
                    title: 'Análisis',
                    desc: 'Medimos resultados y optimizamos la estrategia para mejorar constantemente.',
                },
                ].map((step) => (
                <div key={step.number} className="flex ">
                    <div className="flex flex-col items-start justify-start mr-6">
                        <div className="bg-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                            {step.number}
                        </div>
                    </div>
                    <div className=''>
                        <h3 className="text-lg  font-semibold text-pink-600">{step.title}</h3>
                        <p className="text-gray-600 mt-2">{step.desc}</p>
                    </div>
                </div>
                ))}
            </div>
            )}

        </div>
      </section>

      {/* Portfolio/Galería */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Mi trabajo</h2>
          <p className="text-gray-600 mt-2">Algunos ejemplos de mis proyectos</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Imagen 1 */}
          <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition relative group">
            <img src="/api/placeholder/300/300" alt="Portfolio 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent opacity-0 group-hover:opacity-90 transition flex items-end p-4">
              <p className="text-white font-semibold">Lapez Inmobiliaria</p>
            </div>
          </div>
          
          {/* Imagen 2 */}
          <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition relative group">
            <img src="/api/placeholder/300/300" alt="Portfolio 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent opacity-0 group-hover:opacity-90 transition flex items-end p-4">
              <p className="text-white font-semibold">Fundación Nimai</p>
            </div>
          </div>
          
          {/* Imagen 3 */}
          <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition relative group">
            <img src="/api/placeholder/300/300" alt="Portfolio 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent opacity-0 group-hover:opacity-90 transition flex items-end p-4">
              <p className="text-white font-semibold">Boutique Caro</p>
            </div>
          </div>
          
          {/* Imagen 4 */}
          <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition relative group">
            <img src="/api/placeholder/300/300" alt="Portfolio 4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent opacity-0 group-hover:opacity-90 transition flex items-end p-4">
              <p className="text-white font-semibold">El Aroma Café</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-50 transition">
            Ver más trabajos
          </button>
        </div>
      </section>

      {/* Habilidades e Idiomas */}
      <section id="habilidades" className="px-6 py-16 md:px-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Habilidades & Idiomas</h2>
          <p className="text-gray-600 mt-2">Mi expertise en herramientas y comunicación</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-pink-600">Herramientas</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Canva</span>
                  <span>Avanzado</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">CapCut</span>
                  <span>Intermedio</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Meta Business Suite</span>
                  <span>Avanzado</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Copywriting</span>
                  <span>Avanzado</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-pink-600">Idiomas</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Español</span>
                  <span>Nativo</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Inglés</span>
                  <span>Intermedio</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-6 mt-10 text-pink-600">Especialidades</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Redes sociales</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Diseño visual</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Redacción publicitaria</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Estrategia digital</span>
                              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Marketing de contenidos</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Análisis de datos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="px-6 py-16 md:px-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Lo que dicen mis clientes</h2>
          <p className="text-gray-600 mt-2">Testimonios de quienes confiaron en mi trabajo</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="mt-4 text-gray-600 italic">"{testimonial.text}"</p>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="px-6 py-16 md:px-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Planes de redes sociales</h2>
          <p className="text-gray-600 mt-2">Soluciones adaptadas a tus necesidades</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Plan Básico */}
          <div className="bg-white border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-center">Plan Básico</h3>
              <div className="text-center mt-4">
                <p className="text-3xl font-bold text-pink-600">$203.500</p>
                <p className="text-gray-500 text-sm">por mes</p>
              </div>
              
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>4 publicaciones para Instagram y Facebook</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>8 historias al mes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Calendario de contenidos mensual</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Optimización del perfil</span>
                </li>
              </ul>
            </div>
            
            <div className="px-6 pb-6">
              <button className="w-full py-3 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition">
                Elegir plan
              </button>
            </div>
          </div>
          
          {/* Plan Estándar */}
          <div className="bg-white border-2 border-pink-600 rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-pink-600 text-white py-1 px-4 text-sm font-semibold">
              Más popular
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-center">Plan Estándar</h3>
              <div className="text-center mt-4">
                <p className="text-3xl font-bold text-pink-600">$280.500</p>
                <p className="text-gray-500 text-sm">por mes</p>
              </div>
              
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>8 publicaciones para Instagram y Facebook</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>12 historias al mes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>2 Reels mensuales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Calendario de contenidos mensual</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Optimización del perfil</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Informe mensual de resultados</span>
                </li>
              </ul>
            </div>
            
            <div className="px-6 pb-6">
              <button className="w-full py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
                Elegir plan
              </button>
            </div>
          </div>
          
          {/* Plan Pro */}
          <div className="bg-white border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-center">Plan Pro</h3>
              <div className="text-center mt-4">
                <p className="text-3xl font-bold text-pink-600">$401.500</p>
                <p className="text-gray-500 text-sm">por mes</p>
              </div>
              
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>16 publicaciones para Instagram y Facebook</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>16 historias al mes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>4 Reels mensuales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Calendario de contenidos mensual</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Optimización del perfil</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Informe quincenal de resultados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Estrategia de hashtags personalizada</span>
                </li>
              </ul>
            </div>
            
            <div className="px-6 pb-6">
              <button className="w-full py-3 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition">
                Elegir plan
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow text-center">
          <h4 className="font-bold mb-8">Todos los planes incluyen</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <p className="mt-2 text-sm">Calendario mensual</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                  <path d="M10 2c1 .5 2 2 2 5"></path>
                </svg>
              </div>
              <p className="mt-2 text-sm">Diseño personalizado</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                  <path d="m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19"></path>
                </svg>
              </div>
              <p className="mt-2 text-sm">Copywriting</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <p className="mt-2 text-sm">Informes</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <p className="mt-2 text-sm">Gestión de comentarios</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:px-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
          <p className="text-gray-600 mt-2">Todo lo que necesitas saber</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg">¿Qué redes sociales administras?</h3>
            <p className="mt-2 text-gray-600">Principalmente Instagram y TikTok, pero también puedo gestionar Facebook y LinkedIn dependiendo de las necesidades de tu marca.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg">¿Cuánto tiempo toma ver resultados?</h3>
            <p className="mt-2 text-gray-600">Normalmente empezarás a ver resultados en el primer mes, pero los resultados más significativos suelen aparecer a partir del tercer mes de trabajo constante.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg">¿Puedo cambiar de plan en cualquier momento?</h3>
            <p className="mt-2 text-gray-600">¡Sí! Puedes actualizar o reducir tu plan según las necesidades de tu negocio con un aviso previo de 15 días.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg">¿Ofreces servicios adicionales fuera de los planes?</h3>
            <p className="mt-2 text-gray-600">Sí, puedo ofrecer servicios adicionales como campañas específicas, gestión de crisis, o planificación para eventos especiales. Consultemos tu caso particular.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 py-16 md:px-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">¡Hablemos!</h2>
          <p className="text-gray-600 mt-2">Estoy lista para impulsar tu marca</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={contactFormData.name}
                  onChange={handleContactFormChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={contactFormData.email}
                  onChange={handleContactFormChange} 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={contactFormData.message}
                  onChange={handleContactFormChange} 
                  rows="4" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
                Enviar mensaje
              </button>
            </form>
          </div>
          
          <div className="bg-pink-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-pink-600" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:sofiitrifoglio28@gmail.com" className="text-pink-600">sofiitrifoglio28@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-pink-600" />
                </div>
                <div>
                  <p className="font-medium">Teléfono</p>
                  <a href="tel:+543513319968" className="text-pink-600">+54 351 331-9968</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <Instagram size={20} className="text-pink-600" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <a href="https://instagram.com/sofitrifoglio" target="_blank" rel="noopener noreferrer" className="text-pink-600">@sofitrifoglio</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <Linkedin size={20} className="text-pink-600" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="https://linkedin.com/in/sofía-trifoglio" target="_blank" rel="noopener noreferrer" className="text-pink-600">Sofía Trifoglio</a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="font-medium mb-2">Horario de atención</p>
              <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
              <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-6 py-16 md:px-20 bg-pink-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para potenciar tu presencia digital?</h2>
        <p className="text-pink-100 mb-8 max-w-2xl mx-auto">Contáctame hoy mismo y comencemos a crear una estrategia personalizada para tu marca.</p>
        <button className="bg-white text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition shadow-md font-semibold">
          ¡Quiero comenzar ahora!
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-80">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Sofía Trifoglio</h3>
            <p className="text-gray-400">Community Manager & Content Creator especializada en estrategias digitales para pequeños negocios y emprendedores.</p>

          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#experiencia" className="text-gray-400 hover:text-white transition">Experiencia</a></li>
              <li><a href="#habilidades" className="text-gray-400 hover:text-white transition">Habilidades</a></li>
              <li><a href="#planes" className="text-gray-400 hover:text-white transition">Planes</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition">Contacto</a></li>
            </ul>
          </div>
          

        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Sofía Trifoglio · Community Manager</p>
        </div>
      </footer>
    </div>
  );
}

export default App;