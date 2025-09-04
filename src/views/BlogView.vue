<script setup>
import Articles from '@/components/Articles.vue'
import ContactUs from '@/components/ContactUs.vue'
</script>

<template>
  <div class="">
    <div class="relative bg-cover bg-no-repeat text-center h-[600px] bg-[url('/src/assets/img/ladyJustice.png')] w-full overflow">
      <div class="absolute inset-0 h-full w-full overflow-hidden bg-fixed bg-[var(--color-primary)] opacity-80"></div>
      <div class="mx-auto px-8 sm:px-16 absolute inset-0 opacity-90">
        <div class="h-full flex pt-20 justify-center">
          <div class="text-white ">
            
            <h2 class="mb-4 text-2xl md:text-6xl px-3  mx-auto lg:w-9/12">Boost Your Legal Knowledge   Reading Our Articles.</h2>
            <h4 class="mt-11  md:text-2xl px-3   mx-auto lg:w-2/3 ">Unlock your Legal edge Dive into our weekly artices for  insights <br class=" hidden lg:block"> boost your expertise and elevate your knowledge.</h4>
          </div>
        </div>
      </div>
    </div>
    <Articles/>
    <ContactUs/>
  </div>
</template>
