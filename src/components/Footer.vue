<template>
  <footer class="bg-[#083c3c] mb-0 text-white sticky top-[100vh] py-5">
    <div class="container mx-auto flex flex-col md:flex-row px-8 sm:px-16 justify-between">
      <div class="md:w-1/3 mb-6 md:mb-0">
        <div class="flex-col items-center mb-2">
          <div class="m-5">
            <img src="/src/assets/img/logo-dark.png" alt="maili-advocates" />
          </div>
          <div class="m-5">
            <div>
              <p class="text-sm">Where Legal Excellence Meets Business Solutions.</p>
            </div>
          </div>
          <div>
            <div class="flex space-x-3 m-5">
              <a target="_blank" href="https://www.linkedin.com/in/mali-advocates-10a980267/"
                ><img class="w-8 h-8" src="/src/assets/img/linkdn.svg" alt="linkdn"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="m-5 md:w-1/4">
        <div class="mb-6 md:mb-0">
          <h4 class="font-light mb-4">Quick Links</h4>
          <div class="flex justify-between space-x-8">
            <ul class="">
              <li><a href="/" class="">Home</a></li>
              <li>
                <a href="/about-us" class="">About Us</a>
              </li>
              <li>
                <a
                  aria-current="page"
                  href="/attorneys"
                  class="router-link-active router-link-exact-active"
                  >Attorneys</a
                >
              </li>
            </ul>
            <ul class="">
              <li>
                <a href="/#practice-areas" class="">Practice Areas</a>
              </li>
              <li><a href="/blog" class="">Blog</a></li>
              <li><a href="/careers" class="">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="m-5 md:w-1/4">
        <div>
          <h4 class="font-light mb-4">Subscribe to Newsletter</h4>
          <div class="flex flex-col justify-end">
            <input
              type="email"
              placeholder="Your email"
              class="px-4 py-2 w-full text-gray-500 bg-gray-100 md:w-auto rounded-md md:rounded-l-md mb-2 md:mb-0 focus:outline-none focus:ring focus:border-fadeBlue"
            />
            <div class="flex justify-end ml-3 mt-3">
              <button
                class="bg-[#e0b47c] text-white font-light px-5 py-2 rounded-md flex items-center"
              >
                Subscribe
              </button>
            </div>
          </div>
          <p class="text-sm mt-2">Stay updated with our latest news and offers.</p>
          <p class="mt-4">Working Hours: Mon-Fri 8:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  </footer>
</template>
