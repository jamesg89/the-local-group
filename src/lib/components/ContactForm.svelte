<script lang="ts">
  import { onMount } from "svelte";
  let status = "";
  let isFormValid = true;

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    // Validate form data
    const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
    const phoneInput = form.querySelector<HTMLInputElement>('input[name="phone"]');
    const emailValid = emailInput?.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const phoneValid = phoneInput?.value.match(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/);

    if (!emailValid || !phoneValid) {
      isFormValid = false;
      status = "Please enter a valid email and phone number.";
      return;
    }

    isFormValid = true;
    status = 'Submitting...';
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    status = result.success ? (result.message || "Success") : "Submission failed. Please try again.";
  };

  // Prevent empty status message on mount
  onMount(() => {
    status = "";
  });
</script>

<div class="bg-slate text-white gap-8 lg:gap-16 p-8 rounded flex flex-col lg:flex-row">
  <h2 class="text-6xl font-bold mb-4">Talk To A Local.</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <form on:submit={handleSubmit} method="POST" action="https://api.web3forms.com/submit" novalidate>
        <div>
          <input type="hidden" name="access_key" value="e8624904-c31f-43eb-a896-f5b500c29f5a" />
          <form-group class="w-full flex flex-col lg:flex-row">
            <form-item class="h-20 p-2 bg-slate border placeholder-gray-light border-white rounded-sm">
              <label for="name">Your name</label>
              <input
                type="text"
                name="name"
                class="bg-transparent"
                required
              />
            </form-item>
            <form-item class="p-2 bg-slate border border-white text-white placeholder-gray-light focus:outline-none rounded">
              <label for="email">Your email</label>
              <input
                type="email"
                name="email"
                required
              />
            </form-item>
          </form-group>
          <form-group>
            <form-item class="w-50% p-2 bg-slate border border-white text-white placeholder-gray-light focus:outline-none rounded">
              <label for="phone">Your phone number</label>
              <input
                type="tel"
                name="phone"
                required
              />
            </form-item>
          </form-group>
          <form-group>
            <form-item class="w-full p-2 bg-slate border border-white text-white placeholder-gray-light focus:outline-none rounded">
              <label for="message">Your message (optional)</label>
              <textarea
                name="message"
              ></textarea>
            </form-item>
          </form-group>
          <button
            type="submit"
            class="border-2 border-white text-white bg-slate hover:bg-white hover:text-black transition-all"
          >
            Let’s Chat.
          </button>
          <span class="flex items-center text-[8px]">
            By clicking "Let's Chat" you agree to The Local Real Estate Group's privacy policy and opt-in to be contacted by The Local Real Estate Group via call, email and/or text. To opt out, you can reply 'stop' at any time or click the unsubscribe link in the emails.
          </span>
        </div>
      </form>
      <div>{status}</div>
    </div>
  </div>
</div>
