<script>
  import Navbar from '../Components/Navbar.svelte';
 
  import Clients from '../Components/Clients.svelte'
  import Services from '../Components/Services.svelte';
  import WhyUs from '../Components/WhyUs.svelte';
  import Footer from '../Components/Footer.svelte';
  import WhyViso from '../Components/WhyViso.svelte';
  import Blogs from '../Components/Blogs.svelte';
  import Contact from '../Components/Contact.svelte'; 
 
</script>

<style>
    .bg-light-blue-blend {
      @apply bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100;
    }
</style>
  
  <div class="bg-light-blue-blend">
  <Navbar />
  
  <section class="text-[#072741] py-24 font-poppins relative min-h-screen flex items-center">
    <div class="absolute inset-0 bg-opacity-0"></div> <!-- Background of the section is transparent -->
  
    <div class="relative max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:space-x-8">
      <!-- Text Section -->
      <div class="md:w-1/2 mb-8 md:mb-0 space-y-6">
        <!-- Header Text -->
        <h1 class="text-6xl font-bold text-[#072741]">
          Welcome to Viso Analytics
        </h1>
  
        <!-- Description -->
        <p class="text-lg font-regular text-[#333]">
          At Viso Analytics, we provide data-driven insights and analytics solutions tailored to enhance your business's performance. Discover how we can help you leverage data for informed decision-making and drive growth.
        </p>
  
        <!-- Button -->
        <div class="mt-8">
          <a href="/about" class="inline-flex items-center px-6 py-3 border-2 border-[#072741] text-[#072741] font-semibold rounded-full transition-all duration-300 bg-transparent hover:border-[#0056b3] hover:bg-[#e3f2fd] hover:text-[#072741]">
            Read more
            <svg class="ml-2 w-5 h-5 text-[#072741] transition-colors duration-300 hover:text-[#0056b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
  
      <!-- Image Section -->
      <div class="md:w-1/2">
        <img src="https://via.placeholder.com/600x400" alt="Landing Image" class="w-full h-auto rounded-lg shadow-2xl transform hover:shadow-blue-400 transition duration-500">
      </div>
    </div>
  </section>
  
  

  <WhyUs/>  

  <Clients/>

  <Services/>
   
  <WhyViso/>
  
  <Blogs/>
  
  <!-- <Contact/> -->

  <Footer/>
  </div>
  
 
  