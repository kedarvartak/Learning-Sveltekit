<!-- src/components/ScrollToTopButton.svelte -->
<script>
    import { onMount } from 'svelte';
    let isVisible = false;
  
    // Function to check scroll position and update visibility
    function handleScroll() {
      isVisible = window.scrollY > 100; // Adjust threshold as needed
    }
  
    // Scroll to top on button click
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    // Add scroll event listener on component mount
    onMount(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Clean up event listener on component destroy
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  
    // Ensure button is always visible when the component is loaded
    $: handleScroll();
  </script>
  
  <button
    class="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-opacity duration-300"
    on:click={scrollToTop}
    style:opacity={isVisible ? 1 : 0}
    style:visibility={isVisible ? 'visible' : 'hidden'}
  >
    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 15l-7-7-7 7"></path>
    </svg>
  </button>
  