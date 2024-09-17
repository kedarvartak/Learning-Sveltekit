<script>
    import Navbar from '../../Components/Navbar.svelte';
    import Footer from '../../Components/Footer.svelte';
    import Blogs from '../../Components/Blogs.svelte';
  
</script>

<div class="bg-light-blue-blend">
    <Navbar />

    <!-- About Us Section -->
    <section class="text-[#072741] py-24 font-poppins relative min-h-screen flex items-center">
        <div class="absolute inset-0 bg-opacity-0"></div> <!-- Background of the section is transparent -->
      
        <div class="relative max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between space-x-8">
          <!-- Text Section -->
          <div class="md:w-1/2 space-y-6">
            <!-- Header Text -->
            <h1 class="text-6xl font-bold text-[#072741]">
              Welcome to Viso Analytics
            </h1>
      
            <!-- Description -->
            <p class="text-lg font-regular text-[#333]">
              At Viso Analytics, we provide data-driven insights and analytics solutions tailored to enhance your business's performance. Discover how we can help you leverage data for informed decision-making and drive growth.
            </p>
          </div>
      
          <!-- Image Section -->
          <div class="md:w-1/2 flex justify-end">
            <img src="https://via.placeholder.com/800x500" alt="Landing Image" class="w-[100%] h-auto object-cover rounded-lg shadow-2xl transform hover:shadow-blue-400 transition duration-500">
          </div>
        </div>
      </section>
    
   
      
    <!-- Blogs Section -->
    <Blogs /> 

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
