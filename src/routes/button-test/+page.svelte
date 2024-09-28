<script lang="ts">
    import type { PageData } from './$types';
	import Button from '$lib/components/Button.svelte';
    
    export let data: PageData;
</script>


<section class="pt-40">
    <div class="container bg-white p-10 min-h-64 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button styles="light" link="./button-test" >Buy Local</Button>
        <Button styles="light" link="./button-test" >Sell Local</Button>
        <Button styles="light" link="./button-test" >Meet The Team</Button> 
        <Button styles="cta light" link="./button-test" >Let's Get In Touch</Button>
    </div>
    <div class="container bg-slate p-10 min-h-64 mt-8 flex gap-4">
        <Button styles="cta dark" link="./button-test"  >Start Your Search <svg class="inline ml-2 mb-2 py-0" aria-hidden="true" role="img" height="1em" width="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path></svg></Button>
        <Button styles="dark" link="./button-test"  >View Today's Best Rates <svg class="inline ml-2 mb-2 py-0" aria-hidden="true" role="img" height="1em" width="1em" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></Button>
    </div>
    <div class="container bg-white p-10 min-h-64 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"></div>
</section>