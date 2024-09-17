<script>
    import Navbar from './Navbar.svelte';
    import Footer from './Footer.svelte';
</script>

<div class="bg-light-blue-blend">
    <Navbar />

    <!-- About Us Section -->
    <section class="py-16 bg-transparent text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-6xl font-bold text-[#072741] mb-8 font-poppins">About Us</h1>
            <p class="text-lg text-gray-600 max-w-4xl mx-auto font-poppins">
                Viso Analytics is a forward-thinking company specializing in data-driven solutions to help businesses harness the power of advanced analytics. 
                With a focus on cutting-edge technology, innovation, and customer-centric approaches, we are transforming industries by unlocking the potential of data.
            </p>
        </div>
    </section>

    <!-- Meet Our Team Section -->
    <section class="py-16 bg-transparent text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-semibold text-[#072741] mb-12 font-poppins">Meet Our Team</h2>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Team Member 1 -->
                <div class="group relative bg-white bg-opacity-30 p-8 rounded-lg shadow-lg backdrop-blur-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-blue-400 border border-white border-opacity-20">
                    <div class="mb-6">
                        <img src="https://via.placeholder.com/120" alt="Team Member 1" class="w-24 h-24 mx-auto rounded-full">
                    </div>
                    <h3 class="text-2xl font-bold text-[#072741] mb-4 font-poppins">Team Member 1</h3>
                    
                    <div class="absolute inset-0 flex items-center justify-center bg-opacity-80 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg">
                        <a href="/team-member-1" class="text-lg font-semibold text-[#072741] transition-all duration-300 hover:text-[#0056b3] hover:underline underline-offset-4">
                            Know More About Team Member 1 &rarr;
                        </a>
                    </div>
                </div>

                <!-- Team Member 2 -->
                <div class="group relative bg-white bg-opacity-30 p-8 rounded-lg shadow-lg backdrop-blur-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-blue-400 border border-white border-opacity-20">
                    <div class="mb-6">
                        <img src="https://via.placeholder.com/120" alt="Team Member 2" class="w-24 h-24 mx-auto rounded-full">
                    </div>
                    <h3 class="text-2xl font-bold text-[#072741] mb-4 font-poppins">Team Member 2</h3>
                    
                    <div class="absolute inset-0 flex items-center justify-center bg-opacity-80 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg">
                        <a href="/team-member-2" class="text-lg font-semibold text-[#072741] transition-all duration-300 hover:text-[#0056b3] hover:underline underline-offset-4">
                            Know More About Team Member 2 &rarr;
                        </a>
                    </div>
                </div>

                <!-- Team Member 3 -->
                <div class="group relative bg-white bg-opacity-30 p-8 rounded-lg shadow-lg backdrop-blur-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-blue-400 border border-white border-opacity-20">
                    <div class="mb-6">
                        <img src="https://via.placeholder.com/120" alt="Team Member 3" class="w-24 h-24 mx-auto rounded-full">
                    </div>
                    <h3 class="text-2xl font-bold text-[#072741] mb-4 font-poppins">Team Member 3</h3>
                    
                    <div class="absolute inset-0 flex items-center justify-center bg-opacity-80 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg">
                        <a href="/team-member-3" class="text-lg font-semibold text-[#072741] transition-all duration-300 hover:text-[#0056b3] hover:underline underline-offset-4">
                            Know More About Team Member 3 &rarr;
                        </a>
                    </div>
                </div>

                <!-- Team Member 4 -->
                <div class="group relative bg-white bg-opacity-30 p-8 rounded-lg shadow-lg backdrop-blur-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-blue-400 border border-white border-opacity-20">
                    <div class="mb-6">
                        <img src="https://via.placeholder.com/120" alt="Team Member 4" class="w-24 h-24 mx-auto rounded-full">
                    </div>
                    <h3 class="text-2xl font-bold text-[#072741] mb-4 font-poppins">Team Member 4</h3>
                    
                    <div class="absolute inset-0 flex items-center justify-center bg-opacity-80 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg">
                        <a href="/team-member-4" class="text-lg font-semibold text-[#072741] transition-all duration-300 hover:text-[#0056b3] hover:underline underline-offset-4">
                            Know More About Team Member 4 &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

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
