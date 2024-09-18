<script>
    import Navbar from '../../../Components/Navbar.svelte';
    import Footer from '../../../Components/Footer.svelte';
    const video1 = '/3.mp4';
</script>

<div class="bg-light-blue-blend">
    <Navbar />

    <!-- Full-width Video Section -->
    <section class="relative bg-transparent text-center overflow-hidden h-screen">
        <!-- Video playing in the background -->
        <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover z-0">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video.
        </video>

        <!-- Dark Overlay to make text visible -->
        <div class="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        <!-- Text on top of the video -->
        <div class="relative z-20 flex flex-col justify-center h-full items-center px-4 sm:px-6 lg:px-8">
            <h1 class="text-6xl font-bold text-white mb-8 font-poppins mt-12">Service Title</h1>
            <section class="bg-transparent py-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-4xl font-semibold text-white mb-12 font-poppins">Key Features</h2>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Card 1 -->
                        <div class="bg-transparent bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:bg-opacity-20 hover:shadow-blue-500">
                            <h3 class="text-2xl font-bold text-white mb-4 font-poppins">Feature 1</h3>
                            <p class="text-white font-poppins">This is a short description of feature 1. Lorem ipsum dolor sit amet.</p>
                        </div>
                        
                        <!-- Card 2 -->
                        <div class="bg-transparent bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:bg-opacity-20 hover:shadow-blue-500">
                            <h3 class="text-2xl font-bold text-white mb-4 font-poppins">Feature 2</h3>
                            <p class="text-white font-poppins">This is a short description of feature 2. Lorem ipsum dolor sit amet.</p>
                        </div>
                        
                        <!-- Card 3 -->
                        <div class="bg-transparent bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:bg-opacity-20 hover:shadow-blue-500">
                            <h3 class="text-2xl font-bold text-white mb-4 font-poppins">Feature 3</h3>
                            <p class="text-white font-poppins">This is a short description of feature 3. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
    </section>

    <!-- Header and Description Section -->
    <section class="bg-transparent py-16 text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-semibold text-[#072741] mb-6 font-poppins">Service Overview</h2>
            <p class="text-lg text-gray-600 max-w-4xl mx-auto font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna in odio feugiat vehicula. 
                Sed ac bibendum purus, non egestas ipsum. Aenean nec urna erat.
            </p>
        </div>
    </section>

    <!-- 3 Features Section with Glassmorphism and Hover Effects -->
   
    <Footer />
</div>

<style>
    body {
      @apply bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100;   
    }
    .bg-light-blue-blend {
      @apply bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100;
    }
</style>
