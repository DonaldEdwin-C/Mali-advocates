<script setup>
import ContactUs from '@/components/ContactUs.vue'
import Articles from '@/components/Articles.vue'
import GetInTouch from '@/components/GetInTouch.vue'
import Values from '@/components/Values.vue'
</script>

<template>
  <div>
    <div
      class="relative bg-[url(/img/international-law.jpg)] h-[711px] bg-cover bg-no-repeat"
      style=""
    >
      <div
        class="absolute inset-0 h-full w-full overflow-hidden bg-fixed bg-[var(--color-primary)] opacity-70"
      ></div>
      <div
        class="container mx-auto flex h-full pt-20 px-8 sm:px-16 absolute inset-0 justify-center"
      >
        <div class="text-white mt-11 md:mt-20">
          <h2 class="mb-4 text-2xl md:text-6xl lg:text-7xl lg:w-2/3 font-medium">
            Where Legal
            <span class="text-[var(--color-secondary)]">Excellence Meets</span> Business Solutions.
          </h2>
          <h4 class="mt-11 md:text-2xl lg:w-1/2 font-normal">
            We pride ourselves on delivering comprehensive legal solutions tailored to meet the
            diverse needs of our clients in the dynamic real estate and banking sectors.
          </h4>
          <div class="mt-8">
            <div class="">
              <button
                class="bg-[var(--color-secondary)] text-white font-normal px-5 py-2 rounded-md flex items-center"
              >
                <RouterLink to="/book-consultation" class="">Book a Consultation</RouterLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full rounded p-5 lg:p-20 bg-shadeWhite text-gray-800 relative md:text-left">
    <div
      class="flex flex-wrap-reverse container px-8 items-center my-14 lg:my-32 max-w-6xl mx-auto"
    >
      <div class="w-full md:w-1/2 px-5 mb-10 md:mb-0">
        <div class="mt-11">
          <img src="/img/about-us.png" class="object-cover" alt="about-us" />
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="mb-10">
          <h1 class="text-bold text-xl text-[var(--color-secondary)] font-normal">ABOUT US</h1>
          <h1 class="text-bold text-3xl lg:text-4xl mb-3 font-semibold">
            Fast, Accurate, <span class="text-[var(--color-secondary)]">Innovative </span> and Reliable
          </h1>
          <div class="text-lg">
            <p class="my-2">
              CKoile Advocates LLP is a distinguished Kenyan law firm specializing in commercial and
              corporate law. The firm has established itself as a reputable legal entity providing a
              wide range of legal service with a commitment to excellence.
            </p>
            <p class="my-2">
              CKoile Advocates LLP operates through three distinct practice groups namely litigation
              and dispute resolution, Real Estate and Banking and Commercial and Insolvency
              Practice. Our Team
            </p>
          </div>
        </div>
        <div>
          <div class="">
            <a
              href="https://wa.me/+254702601502"
              target="_blank"
              class="border hover:text-white hover:bg-[var(--color-secondary)] border-[var(--color-secondary)] text-[var(--color-secondary)] rounded-lg px-10 py-3 font-normal"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Values />

  <div class="w-full rounded p-5 lg:p-20 bg-shadeWhite text-gray-800 relative md:text-left">
    <div
      class="flex flex-wrap-reverse container px-8 items-center my-14 lg:my-32 max-w-6xl mx-auto"
    >
      <div class="w-full md:w-1/2">
        <div class="mb-10">
          <h1 class="text-bold text-3xl lg:text-4xl mb-3 font-medium">
            Why <span class="text-[var(--color-secondary)]">Choose </span> Us
          </h1>
          <div class="text-lg">
            <p class="my-2">
              By combining legal expertise, industry knowledge, and a commitment to client success,
              our firm stands out in providing top-tier legal services across the Real Estate and
              Banking, Commercial and Insolvency, and Litigation and ADR Practice Groups. We are
              dedicated to navigating the legal landscape alongside our clients, offering solutions
              that are both innovative and practical.
            </p>
          </div>
          <div class="pl-8">
            <ul class="list-disc">
              <li>
                <p class="my-1">
                  <span class="text-[var(--color-secondary)] font-medium">Industry Insight:</span> our advocates
                  possess in depth knowledge of the real estate and banking industries allowing us
                  to anticipate challenges and provide proactive solutions.
                </p>
              </li>
              <li>
                <p class="my-1">
                  <span class="text-[var(--color-secondary)] font-medium">Client Centric Approach:</span> We
                  prioritize understanding our clients business goals tailoring legal solutions to
                  align with their objectives.
                </p>
              </li>
              <li>
                <p class="my-1">
                  <span class="text-[var(--color-secondary)] font-medium"> Collaborative team:</span> our
                  multidisciplinary approach involves collaboration across legal disciplines to
                  provide holistic solutions, especially in complex transactions.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="">
            <a
              href="https://wa.me/+254702601502"
              target="_blank"
              class="border hover:text-white hover:bg-[var(--color-secondary)] border-[var(--color-secondary)] text-[var(--color-secondary)] rounded-lg px-10 py-3 font-medium"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-5 mb-10 md:mb-0">
        <div class="mt-11">
          <img src="/img/why-us.png" class="object-cover" alt="about-us" />
        </div>
      </div>
    </div>
  </div>
  <GetInTouch />
  <Articles />
  <ContactUs />
</template>
