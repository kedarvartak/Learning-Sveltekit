<section class="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 py-16 font-poppins">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-5xl font-bold text-[#072741] mb-6">Our Clients: Our Success</h2>
  
      <p class="text-xl text-[#333] mb-12 mx-auto max-w-4xl">
        We take pride in our clients' success. Here are some of the esteemed companies we have had the pleasure of working with. Their trust in us reflects our commitment to excellence.
      </p>
  
      <div class="relative overflow-hidden">
        <div class="ticker flex space-x-8 p-10">
          <!-- Card 1 -->
          <div class="card flex-shrink-0 w-72 h-76 bg-white bg-opacity-10 border border-white/20 backdrop-blur-lg rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500">
            <div class="flex items-center justify-center h-full p-6 backdrop-blur-sm rounded-lg">
              <img src="https://via.placeholder.com/120" alt="Logo" class="w-32 h-32 object-cover rounded-full">
            </div>
            <div class="p-2">
              <h3 class="text-2xl font-semibold text-[#072741]">Company A</h3>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div class="card flex-shrink-0 w-72 h-76 bg-white bg-opacity-10 border border-white/20 backdrop-blur-lg rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500">
            <div class="flex items-center justify-center h-full p-6 backdrop-blur-sm rounded-lg">
              <img src="https://via.placeholder.com/120" alt="Logo" class="w-32 h-32 object-cover rounded-full">
            </div>
            <div class="p-2">
              <h3 class="text-2xl font-semibold text-[#072741]">Company B</h3>
            </div>
          </div>
          
          <!-- Card 3 -->
          <div class="card flex-shrink-0 w-72 h-76 bg-white bg-opacity-10 border border-white/20 backdrop-blur-lg rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500">
            <div class="flex items-center justify-center h-full p-6 backdrop-blur-sm rounded-lg">
              <img src="https://via.placeholder.com/120" alt="Logo" class="w-32 h-32 object-cover rounded-full">
            </div>
            <div class="p-2">
              <h3 class="text-2xl font-semibold text-[#072741]">Company C</h3>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="card flex-shrink-0 w-72 h-76 bg-white bg-opacity-10 border border-white/20 backdrop-blur-lg rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500">
            <div class="flex items-center justify-center h-full p-6 backdrop-blur-sm rounded-lg">
              <img src="https://via.placeholder.com/120" alt="Logo" class="w-32 h-32 object-cover rounded-full">
            </div>
            <div class="p-2">
              <h3 class="text-2xl font-semibold text-[#072741]">Company D</h3>
            </div>
          </div>

          <!-- Card 5 -->
          <div class="card flex-shrink-0 w-72 h-76 bg-white bg-opacity-10 border border-white/20 backdrop-blur-lg rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500">
            <div class="flex items-center justify-center h-full p-6 backdrop-blur-sm rounded-lg">
              <img src="https://via.placeholder.com/120" alt="Logo" class="w-32 h-32 object-cover rounded-full">
            </div>
            <div class="p-2">
              <h3 class="text-2xl font-semibold text-[#072741]">Company E</h3>
            </div>
          </div>

          <!-- Card 6 -->
          <div class="card flex-shrink-0 w-72 h-76 bg-white bg-opacity-10 border border-white/20 backdrop-blur-lg rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500">
            <div class="flex items-center justify-center h-full p-6 backdrop-blur-sm rounded-lg">
              <img src="https://via.placeholder.com/120" alt="Logo" class="w-32 h-32 object-cover rounded-full">
            </div>
            <div class="p-2">
              <h3 class="text-2xl font-semibold text-[#072741]">Company F</h3>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Active Link -->
      <div class="mt-12 text-center">
        <a href="#" class="inline-flex items-center px-6 py-3 border-2 border-[#072741] text-[#072741] font-semibold rounded-full transition-all duration-300 bg-transparent hover:border-[#0056b3] hover:bg-[#e3f2fd] hover:text-[#072741]">
          Browse Client Success Stories
          <svg class="ml-2 w-5 h-5 text-[#072741] transition-colors duration-300 hover:text-[#0056b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7-7 7"></path>
          </svg>
        </a>
      </div>
  </section>

<style>
  /* Add styles for the ticker */
  @keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  .ticker {
    animation: ticker 30s linear infinite;
  }

  .ticker:hover {
    animation-play-state: paused;
  }

  /* Glassmorphism Card */
  .card {
    background-color: rgba(255, 255, 255, 0.1); /* Transparent background */
    backdrop-filter: blur(15px); /* Frosted glass effect */
    border: 1px solid rgba(255, 255, 255, 0.2); /* Soft white border */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  }

  /* Active Link Hover Effect */
  a:hover {
    color: #0056b3; /* Slight color change on hover */
    border-bottom-color: #0056b3; /* Underline animation */
  }
</style>
