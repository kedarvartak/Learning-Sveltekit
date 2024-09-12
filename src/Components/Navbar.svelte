<script>
  import { onMount } from 'svelte';
  let isScrolled = false;

  // Add scroll event listener
  const handleScroll = () => {
    isScrolled = window.scrollY > 50;
  };

  // Listen for scroll events on mount
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class={`fixed bg-blue-100 bg-opacity-30 top-0 left-0 right-0 z-50 shadow-md backdrop-blur-md transition-colors duration-300 ${isScrolled ? 'bg-[#072741]' : 'bg-transparent'}`}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
        <img src="https://via.placeholder.com/40" alt="Logo" class="h-10 w-10 mr-3">
      </div>

      <!-- Menu Section -->
      <div class="hidden md:flex space-x-6">
        <a href="#" class="hover:bg-[#a4d391] px-3 py-2 rounded-full font-poppins text-md font-medium transition duration-300">Home</a>
        <a href="#" class="hover:bg-[#a4d391] px-3 py-2 rounded-full font-poppins text-md font-medium transition duration-300">About Us</a>
        <a href="#" class="hover:bg-[#a4d391] px-3 py-2 rounded-full font-poppins text-md font-medium transition duration-300">Customers</a>
        <a href="#" class="hover:bg-[#a4d391] px-3 py-2 rounded-full font-poppins text-md font-medium transition duration-300">Our Services</a>
        <a href="#" class="active-link px-3 py-2 rounded-full text-md font-poppins font-medium transition duration-300">Contact Us</a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="-mr-2 flex md:hidden">
        <button type="button" class="bg-[#2d6074] inline-flex items-center justify-center p-2 rounded-full text-[#e3f2fd] hover:bg-[#072741] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2d6074] focus:ring-[#e3f2fd]" aria-controls="mobile-menu" aria-expanded="false">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div class="md:hidden hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a href="#" class="block hover:bg-[#a4d391] px-3 py-2 rounded-full text-base font-medium transition duration-300">Home</a>
      <a href="#" class="block hover:bg-[#a4d391] px-3 py-2 rounded-full text-base font-medium transition duration-300">About Us</a>
      <a href="#" class="block hover:bg-[#a4d391] px-3 py-2 rounded-full text-base font-medium transition duration-300">Customers</a>
      <a href="#" class="block hover:bg-[#a4d391] px-3 py-2 rounded-full text-base font-medium transition duration-300">Our Services</a>
      <a href="#" class="block active-link px-3 py-2 rounded-full text-base font-medium transition duration-300">Contact Us</a>
    </div>
  </div>
</nav>

<style>
  .active-link {
    background-color: #a4d391;
    color: #072741;
  }
</style>
