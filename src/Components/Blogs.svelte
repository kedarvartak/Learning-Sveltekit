<script>
     const video3 = '/5.mp4';
</script>

<section class="relative w-full h-80 overflow-hidden">
    <!-- Background Video -->
    <video class="absolute inset-0 w-full h-full object-cover" autoplay loop muted>
      <source src={video3} type="video/mp4">
      Your browser does not support the video tag.
    </video>
    
    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
      <h2 class="text-6xl font-bold text-white mb-4 font-poppins">Our Blogs</h2>
      <div class="mt-8">
        <a href="#" class="inline-flex items-center font-poppins px-6 py-3 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 bg-transparent hover:border-[#0056b3] hover:bg-[#e3f2fd] hover:text-[#072741]">
          Subscribe to our blogs
          <svg class="ml-2 w-5 h-5 text-white transition-colors duration-300 hover:text-[#0056b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
  