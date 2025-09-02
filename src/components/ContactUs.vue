<template>
  <div class="sticky top-[100vh]">
    <div class="text-gray-700 gap-8 bg-[#f4faff] mt-16">
      <div
        class="flex justify-between py-14 px-8 sm:px-16 md:px-8 lg:px-16 xl:px-32 container mx-auto flex-wrap"
      >
        <div class="w-full md:w-1/2">
          <div class="space-y-2">
            <h2 class="text-lg font-bold">Contact Us</h2>
            <div class="">
              Reach out to us for any question through this <br />available channels or send us a
              message
            </div>
          </div>
          <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="flex items-center gap-3">
              <img class="rounded-t-lg" src="/src/assets/img/email-border.svg" alt="email" />
              <div class="ml-1 grow my-4">
                <p class="font-bold">Email Us</p>
                <p class="">Info@mailadvocates.com</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <img class="rounded-t-lg" src="/src/assets/img/phone-border.svg" alt="email" />
              <div class="ml-1 grow my-4">
                <p class="font-bold">Call US.</p>
                <p class="">+254 702 601 502</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <img class="rounded-t-lg" src="/src/assets/img/arrow.svg" alt="location" />
              <div class="ml-1 grow my-4">
                <p class="font-bold">Find Us</p>
                <p class="">
                  House No.3 CySquare, <br />
                  Argwings Kodhek Road, Kilimani
                </p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="ml-1 grow my-4">
                <p class="font-bold">Social Media</p>
                <div class="flex space-x-3">
                  <a target="_blank" href="https://www.linkedin.com/in/mali-advocates-10a980267/"
                    ><img class="w-8 h-8" src="/src/assets/img/linkdn.svg" alt="linkdn"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <form class="space-y-6">
            <div class="bg-white">
              <label for="name" class="text-sm"></label
              ><input
                id="name"
                type="text"
                placeholder="Full name"
                class="w-full px-3 py-2 rounded"
              />
            </div>
            <div class="bg-white">
              <label for="email" class="text-sm"></label
              ><input
                id="email"
                type="email"
                placeholder="Email"
                class="w-full px-3 py-2 rounded"
              />
            </div>
            <div class="bg-white">
              <label for="number" class="text-sm"></label
              ><input
                id="Phone-no"
                type="number"
                placeholder="Phone-no"
                class="w-full px-3 py-2 rounded"
              />
            </div>
            <div class="bg-white">
              <label for="message" class="text-sm"></label
              ><textarea
                id="message"
                rows="3"
                placeholder="Message"
                class="w-full px-3 py-2 rounded"
              ></textarea>
            </div>
            <div class="flex justify-end">
              <div class="">
                <button
                  class="bg-whiteBrown text-white font-semiboldbg-whiteBrown font-semibold px-5 py-2 rounded-md flex items-center"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
