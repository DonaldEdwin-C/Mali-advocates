<script setup>
import ContactUs from '@/components/ContactUs.vue'
import Articles from '@/components/Articles.vue'
</script>

<template>
  <div class="">this is the homepage</div>
  <div class="">
    <div
      class="relative bg-[url(/src/assets/img/law-books.png)] h-[470px] bg-cover bg-center services bg-no-repeat text-center"
    >
      <div class="absolute inset-0 h-full w-full overflow-hidden bg-fixed bg-[#04393A] opacity-80">
        <div class="container mx-auto px-8 sm:px-16 flex h-full items-center justify-center">
          <div class="">
            <div class="text-white">
              <p
                class="text-2xl first-line md:text-4xl font-normal px-3 lg:w-2/3 text-center mx-auto"
              >
                We are dedicated to offering solutions that are both innovative and practical for
                our clients <br /><span class="text-[#e0b47c]">Get in touch with us.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap pt-11 container mx-auto px-8 sm:px-16 lg:relative mb-11 justify-center gap-11 bottom-28"
    >
      <div
        class="flex rounded-lg w-[322px] md:w-[388px] text-center mx-3 h-60 px-5 py-7 p-8 flex-col shadow-xl bg-white"
      >
        <div class="">
          <div class="w-8 h-8 mx-auto">
            <img
              src="data:image/svg+xml,%3csvg%20width='38'%20height='34'%20viewBox='0%200%2038%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.6522%200.201416C8.34976%200.201416%200%207.05923%200%2015.5228C0%2019.1764%201.5592%2022.5206%204.15302%2025.1503C3.24227%2028.8628%200.196722%2032.1702%200.160292%2032.207C0%2032.3764%20-0.043716%2032.6269%200.051002%2032.8478C0.14572%2033.0688%200.349728%2033.2014%200.58288%2033.2014C5.4135%2033.2014%209.03464%2030.859%2010.827%2029.4153C13.2095%2030.3213%2015.8543%2030.8443%2018.6522%2030.8443C28.9546%2030.8443%2037.3043%2023.9865%2037.3043%2015.5228C37.3043%207.05923%2028.9546%200.201416%2018.6522%200.201416Z'%20fill='%23D9B679'/%3e%3c/svg%3e"
              class=""
              alt="chating"
            />
          </div>
          <h2 class="my-2 text-xl text-gray-700 font-normal">Get a Free Consultation</h2>
        </div>
        <div class="flex flex-col justify-between font-light flex-grow">
          <p class="">You can always reach out on whats-app for a free consultation</p>
        </div>
        <a
          target="_blank"
          href="https://wa.me/+254702601502"
          class="flex justify-center bg-[#e0b47c] text-white mx-auto font-normal hover:bg-whiteBrown hover:text-white border border-whiteBrown px-8 w-max py-2 rounded-md items-center"
          defaultbtn="false"
        >
          Chat Now
        </a>
      </div>
      <div
        class="flex rounded-lg w-[322px] md:w-[388px] text-center mx-3 h-60 px-5 py-7 p-8 flex-col shadow-xl bg-white"
      >
        <div class="">
          <div class="w-8 h-8 mx-auto">
            <img
              src="data:image/svg+xml,%3csvg%20width='29'%20height='34'%20viewBox='0%200%2029%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2030.1077C0%2031.8157%201.38574%2033.2014%203.09375%2033.2014H25.7812C27.4893%2033.2014%2028.875%2031.8157%2028.875%2030.1077V12.5764H0V30.1077ZM20.625%2017.4749C20.625%2017.0495%2020.973%2016.7014%2021.3984%2016.7014H23.9766C24.402%2016.7014%2024.75%2017.0495%2024.75%2017.4749V20.053C24.75%2020.4784%2024.402%2020.8264%2023.9766%2020.8264H21.3984C20.973%2020.8264%2020.625%2020.4784%2020.625%2020.053V17.4749ZM20.625%2025.7249C20.625%2025.2995%2020.973%2024.9514%2021.3984%2024.9514H23.9766C24.402%2024.9514%2024.75%2025.2995%2024.75%2025.7249V28.303C24.75%2028.7284%2024.402%2029.0764%2023.9766%2029.0764H21.3984C20.973%2029.0764%2020.625%2028.7284%2020.625%2028.303V25.7249ZM12.375%2017.4749C12.375%2017.0495%2012.723%2016.7014%2013.1484%2016.7014H15.7266C16.152%2016.7014%2016.5%2017.0495%2016.5%2017.4749V20.053C16.5%2020.4784%2016.152%2020.8264%2015.7266%2020.8264H13.1484C12.723%2020.8264%2012.375%2020.4784%2012.375%2020.053V17.4749ZM12.375%2025.7249C12.375%2025.2995%2012.723%2024.9514%2013.1484%2024.9514H15.7266C16.152%2024.9514%2016.5%2025.2995%2016.5%2025.7249V28.303C16.5%2028.7284%2016.152%2029.0764%2015.7266%2029.0764H13.1484C12.723%2029.0764%2012.375%2028.7284%2012.375%2028.303V25.7249ZM4.125%2017.4749C4.125%2017.0495%204.47305%2016.7014%204.89844%2016.7014H7.47656C7.90195%2016.7014%208.25%2017.0495%208.25%2017.4749V20.053C8.25%2020.4784%207.90195%2020.8264%207.47656%2020.8264H4.89844C4.47305%2020.8264%204.125%2020.4784%204.125%2020.053V17.4749ZM4.125%2025.7249C4.125%2025.2995%204.47305%2024.9514%204.89844%2024.9514H7.47656C7.90195%2024.9514%208.25%2025.2995%208.25%2025.7249V28.303C8.25%2028.7284%207.90195%2029.0764%207.47656%2029.0764H4.89844C4.47305%2029.0764%204.125%2028.7284%204.125%2028.303V25.7249ZM25.7812%204.32642H22.6875V1.23267C22.6875%200.665478%2022.2234%200.201416%2021.6562%200.201416H19.5938C19.0266%200.201416%2018.5625%200.665478%2018.5625%201.23267V4.32642H10.3125V1.23267C10.3125%200.665478%209.84844%200.201416%209.28125%200.201416H7.21875C6.65156%200.201416%206.1875%200.665478%206.1875%201.23267V4.32642H3.09375C1.38574%204.32642%200%205.71216%200%207.42017V10.5139H28.875V7.42017C28.875%205.71216%2027.4893%204.32642%2025.7812%204.32642Z'%20fill='%23D9B679'/%3e%3c/svg%3e"
              class=""
              alt="chating"
            />
          </div>
          <h2 class="my-2 text-xl text-gray-700 font-normal">Book a Appointment With Us</h2>
        </div>
        <div class="flex flex-col justify-between font-light flex-grow">
          <p class="">Book an appointment with us for an affordable price.</p>
        </div>
        <div class="flex justify-center">
          <button
            class="bg-[#e0b47c] text-white font-normal px-5 py-2 rounded-md flex items-center"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
  <Articles />
  <ContactUs />
</template>
