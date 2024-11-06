<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    // Form state
    let name = '';
    let email = '';
    let phone = '';
    let message = '';
  
    // Validation errors
    let emailError = '';
    let phoneError = '';
  
    function validateForm() {
      emailError = '';
      phoneError = '';
  
      // Simple email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        emailError = 'Please enter a valid email.';
      }
  
      // Simple phone validation (adjust for preferred format)
      const phonePattern = /^\d{10}$/; // US phone number format
      if (!phonePattern.test(phone)) {
        phoneError = 'Please enter a valid 10-digit phone number.';
      }
  
      return !emailError && !phoneError;
    }
  
    async function handleSubmit() {
      if (validateForm()) {
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, message })
          });
          if (response.ok) {
            dispatch('success', { message: 'Form submitted successfully!' });
          } else {
            dispatch('error', { message: 'There was an error submitting the form.' });
          }
        } catch (error) {
          dispatch('error', { message: 'There was an error submitting the form.' });
        }
      }
    }
  </script>
  
  <div class="bg-slate text-white gap-8 lg:gap-16 p-8 rounded flex flex-col lg:flex-row">
    <h2 class="text-6xl font-bold mb-4">Talk To A Local.</h2>
    <div class="space-y-4">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Your name"
            bind:value={name}
            class="w-full h-20 p-2 bg-slate border placeholder-gray-light border-white rounded-sm"
          />
        </div><div>
          <input
            type="email"
            placeholder="Your email"
            bind:value={email}
            class="w-full p-2 bg-slate border border-white text-white placeholder-gray-light focus:outline-none rounded "
          />
          {#if emailError}
            <p class="text-red-500 text-sm">{emailError}</p>
          {/if}
        </div>
        
      </div>
      <div>
          <input
            type="tel"
            placeholder="Your Phone Number"
            bind:value={phone}
            class="w-full p-2 bg-slate border border-white text-white placeholder-gray-light focus:outline-none rounded "
          />
          {#if phoneError}
            <p class="text-red-500 text-sm">{phoneError}</p>
          {/if}
        </div>
      <textarea
        placeholder="Your message (optional)"
        bind:value={message}
        class="w-full p-2 bg-slate border border-white text-white placeholder-gray-light focus:outline-none rounded "
      ></textarea>
      <button on:click|preventDefault={handleSubmit} class="border-2 border-white text-white bg-slate hover:bg-white hover:text-black transition-all">
        Let’s Chat.
      </button>
      <span class="flex items-center text-[8px]">
        By clicking "Let's Chat" you agree to The Local Real Estate Group's privacy policy and opt-in to be contacted by The Local Real Estate Group via call, email and/or text. To opt out, you can reply 'stop' at any time or click the unsubscribe link in the emails.
      </span>
    </div>
  </div>
  