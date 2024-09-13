<script>
     const video1 = '/1.mp4';
     const video2 = '/2.mp4';
     const video3 = '/3.mp4';
</script>

<section class="font-poppins">
    <!-- Section 1: We Provide -->
    <section id="section-1" class="relative w-full h-screen">
      <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover z-0">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      <!-- Content Overlay -->
      <div class="relative z-10 bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
        <h3 class="text-5xl font-bold text-white mb-4">We Provide</h3>
        <p class="text-xl text-gray-200 max-w-4xl text-center">
          At Viso, we provide cutting-edge data solutions designed to optimize business operations and drive impactful insights.
        </p>
      </div>
    </section>
  
    <!-- Section 2: We Dominate -->
    <section id="section-2" class="relative w-full h-screen">
      <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover z-0">
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      <!-- Content Overlay -->
      <div class="relative z-10 bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
        <h3 class="text-5xl font-bold text-white mb-4">We Dominate</h3>
        <p class="text-xl text-gray-200 max-w-4xl text-center">
          Our real-time analytics and strategic insights dominate the market, empowering businesses to stay ahead of their competition.
        </p>
      </div>
    </section>
  
    <!-- Section 3: We Build -->
    <section id="section-3" class="relative w-full h-screen">
      <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover z-0">
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      <!-- Content Overlay -->
      <div class="relative z-10 bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
        <h3 class="text-5xl font-bold text-white mb-4">We Build</h3>
        <p class="text-xl text-gray-200 max-w-4xl text-center">
          We build long-lasting partnerships through innovation, delivering technology that transforms industries.
        </p>
      </div>
    </section>
  </section>
  
  <style>
    /* Full height and width for sections */
    section {
      width: 100vw;
    }
  
    /* Video covers the entire section */
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
  