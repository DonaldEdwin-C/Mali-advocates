<template>
  <div class="bg-[#083c3c] relative">
    <div class="text-sm flex justify-between container px-8 sm:px-16 py-2 text-[#e0b47c] mx-auto">
      <div class="flex gap-5 flex-wrap justify-between w-full">
        <div class="flex items-center space-x-3">
          <img src="/src/assets/img/email.svg" class="w-5 h-5" alt="email" />
          <p class="font-light">Email: info@maliadvocates.com</p>
        </div>
        <div class="hidden sm:flex items-center space-x-3">
          <img src="/src/assets/img/location.svg" class="w-5 h-5" alt="" />
          <p class="font-light">
            Location: House No.3 CySquare, <br />
            Argwings Kodhek Road, Kilimani
          </p>
        </div>
        <div class="flex items-center space-x-3 gap-5">
          <img src="/src/assets/img/phone.svg" class="w-5 h-5" alt="" />
          <p class="font-light">Call Us: +254 702 601502</p>
          <div class="flex space-x-3 m-0">
            <a target="_blank" to="https://www.linkedin.com/in/mali-advocates-10a980267/"><img class="w-8 h-8"
                src="/src/assets/img/linkdn.svg" alt="linkdn" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="bg-white shadow-md">
      <nav class="container relative flex items-center justify-between mx-auto px-8 sm:px-16 z-30 py-5 relative">
        <div class="">
          <a to="/" class="flex items-center"><img src="/src/assets/img/logo.png" alt="mali-advocates" class="" /></a>
        </div>
        <div class="hidden lg:flex space-x-3 font-light text-sm">
          <RouterLink to="/" class="text-[#083c3c] uppercase py-2 px-3 rounded-md hover:bg-gray-100">Home</RouterLink>
          <RouterLink to="/attorneys" class="text-[#083c3c] uppercase py-2 px-3 rounded-md hover:bg-gray-100">Attorneys
          </RouterLink>
          <RouterLink to="/practice"
            class="legal text-[#083c3c] flex items-center uppercase group py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer">
            Practice Areas </RouterLink>
          <RouterLink to="/blog" class="text-[#083c3c] uppercase py-2 px-3 rounded-md hover:bg-gray-100">Blog
          </RouterLink>
          <RouterLink to="/careers" class="text-[#083c3c] uppercase py-2 px-3 rounded-md hover:bg-gray-100">Careers
          </RouterLink>
        </div>
        <div class="flex items-center">
          <div class="hidden md:flex items-center space-x-2">
            <div class="">
              <button class="bg-[#D9B679] text-white font-medium px-5 py-2 rounded-md flex items-center">
                Book Consultation
              </button>
            </div>
          </div>
          <div class="">
            <button class="lg:hidden flex text-white focus:outline-none" @click="showMenu = !showMenu">
              <svg class="w-9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                stroke="#04393A">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <!---->
        <!-- mobile view -->
        <div
          class="absolute top-20 border border-[#e5e7eb] right-0 mr-8 lg:hidden lg:w-max mt-2 py-3 flex flex-col bg-white shadow-md rounded-md p-2 px-5 space-y-2 transition-all duration-500"
          v-show="showMenu">
          <RouterLink to="/" class="text-[#083c3c] uppercase py-2 px-3 rounded-md hover:bg-gray-100" @click="showMenu=false">Home</RouterLink>
          <RouterLink to="/attorneys" class="text-[#083c3c] uppercase py-2 px-3 rounded-md hover:bg-gray-100" @click="showMenu=false">Attorneys
          </RouterLink>
          <RouterLink to="/practice"
            class="legal text-[#083c3c] flex items-center uppercase group py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer" @click="showMenu=false">
            Practice Areas </RouterLink>
          <RouterLink to="/blog" class="text-[#083c3c] uppercase py-2 px-3 rounded-md hover:bg-gray-100" @click="showMenu=false">Blog
          </RouterLink>
          <RouterLink to="/careers" class="text-[#083c3c] uppercase py-2 px-3 rounded-md hover:bg-gray-100" @click="showMenu=false">Careers
          </RouterLink>
         
        </div>
      </nav>
    </div>
  </div>
  <!-- mobile -->


  <!-- start of code -->
</template>


<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const showMenu = ref(false)


</script>
