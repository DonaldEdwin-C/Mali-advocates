<script setup>
import JobCard from '@/components/JobCard.vue';
</script>

<template>
  <div class="max-w-full min-h-screen">
    <div class="h-[200px] bg-[url('https://www.maliadvocatesllp.com/_nuxt/law-books.DnsjHjPE.png')] bg-cover bg-center bg-no-repeat bg-position-[50%] relative flex items-center ">
      <div class="absolute inset-0 bg-[#04393A] opacity-80"></div>
     <div class="px-8 sm:px-16 flex items-center w-full  contrast-50">
       <div class="w-full mx-auto   flex items-center justify-between  ">
       <div class="pr-4 px-2 md:px-12">
         <h2 class="text-[#FFFFFF]  quick-sand mb-4 md:text-2xl ">Available Jobs</h2>
       </div>
       <div class="flex items-center pl-4 px-12 md:px-12">
         <h4 class="text-[#D9B679] text-[1.125rem] quick-sand ">Home/Careers</h4>
       </div>
      </div>
     </div>
    </div>
    <div class="mx-auto my-11 pb-11 border-b  border-b-gray-300 w-full">
            <div class="flex flex-wrap md:flex-no-wrap justfiy-between mt-10 w-full">
                <div class="flex my-3 mx-auto md:w-1/3 w-2/3">
                    <input type="search" placeholder="Search For a Keywords..."
                        class="border border-gray-300 h-12 px-5  pr-10 w-full text-sm rounded-l-lg placeholder:text-gray-400  quick-sand">
                    <button type="submit"
                        class="bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-600 h-12 w-10 rounded-r-lg text-center flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-search-icon lucide-search px-auto py-auto font-light text-center">
                            <path d="m21 21-4.34-4.34" />
                            <circle cx="11" cy="11" r="8" />
                        </svg>
                    </button>
                </div>
                <div class="flex mx-auto justify-center gap-8 quick-sand">
                    <h1 class="my-2">Sort By:</h1>
                    <div>
                        <div class="relative inline-block text-left">
                          <button class="inline-flex justifiy-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50">Select Category <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down -mr-1 ml-2 h-5 w-5"><path d="m6 9 6 6 6-6"/></svg></button>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    <JobCard/>
    <JobCard/>
    <JobCard/>
    <JobCard/>
    
  </div>
</template>
