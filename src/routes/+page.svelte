<script>
  import Navbar from '../Components/Navbar.svelte';
  import Landing from '../Components/LandingPage.svelte';
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
  
  <Landing/>

  <WhyUs/>  

  <Clients/>

  <Services/>
   
  <WhyViso/>
  
  <Blogs/>
  
  <Contact/>

  <Footer/>
  </div>
  
 
  