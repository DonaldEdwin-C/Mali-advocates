<template>
  <div>
    <div class="max-w-7xl container mx-auto px-8 sm:px-16">
      <div class="mt-24">
        <h1 class="flex justify-center font-medium text-2xl">Book a Date With Us.</h1>
        <p class="flex justify-center mt-4 text-center px-3">
          Book a date and time . We we get back to you and give you more information
        </p>
      </div>
      <div class="min-h-screen flex items-center p-2 sm:p-5 lg:p-10 overflow-hidden relative">
        <div
          class="w-full rounded bg-white md:shadow-xl text-darkGreen md:p-10 mx-auto relative md:text-left"
        >
          <div class="flex flex-col justify-between flex-wrap">
            <div>
              <div class="my-8">
                <h3 class="uppercase my-3 font-medium">Select A date</h3>

            
                <div class="flex items-center">
                  <div class="bg-white shadow-md overflow-hidden">
                    <div
                  v-if="selectedDate"
                  class="bg-[#48bc84] text-white text-center py-8 mb-4"
                >
                  <div class="text-lg font-bold">
                    {{ selectedDate.getFullYear() }}
                  </div>
                  <div class="text-sm">
                    {{ weekdayName }}, {{ selectedDate.getDate() }} {{ months[selectedDate.getMonth()] }}
                  </div>
                </div>
                    <!-- Topbar -->
                    <div class="flex justify-between items-center text-neurtal-700 px-4 py-2">
                      <button @click="prev" class="font-medium">&lt;</button>
                      <span @click="toggleView" class="cursor-pointer font-normal">
                        {{
                          currentView === 'day'
                            ? months[displayMonth] + ' ' + displayYear
                            : displayYear
                        }}
                      </span>
                      <button @click="next" class="font-medium">&gt;</button>
                    </div>

                    <!-- Day View -->
                    <div v-if="currentView === 'day'" class="p-4">
                      <div
                        class="grid grid-cols-7 text-sm text-center font-normal uppercase text-gray-700"
                      >
                        <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span>
                        <span>Thu</span><span>Fri</span><span>Sat</span>
                      </div>
                      <div
                        class="grid grid-cols-7 text-sm font-thin text-center gap-y-3 gap-x-6 mt-3"
                      >
                        <span
                          v-for="day in daysInMonth"
                          :key="day + Math.random()"
                          @click="selectDay(day)"
                          :class="[
                            'w-13 h-10 flex items-center justify-center cursor-pointer',
                            day === selectedDate.getDate() &&
                            displayMonth === selectedDate.getMonth() &&
                            displayYear === selectedDate.getFullYear()
                              ? 'bg-[#48bc84] text-white'
                              : 'hover:border border-[var(color-primary)]',
                          ]"
                        >
                          {{ day }}
                        </span>
                      </div>
                    </div>

                    <!-- Month View -->
                    <div
                      v-if="currentView === 'month'"
                      class="p-4 grid grid-cols-3 gap-2 text-center"
                    >
                      <span
                        v-for="(month, index) in months"
                        :key="month"
                        @click="selectMonth(index)"
                        class="cursor-pointer hover:bg-blue-200 rounded py-2"
                      >
                        {{ month }}
                      </span>
                    </div>

                    <!-- Year View -->
                    <div
                      v-if="currentView === 'year'"
                      class="p-4 grid grid-cols-4 gap-2 text-center"
                    >
                      <span
                        v-for="year in years"
                        :key="year"
                        @click="selectYear(year)"
                        class="cursor-pointer hover:bg-blue-200 rounded py-2"
                      >
                        {{ year }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-2/3 lg:w-1/2 px-2 md:px-10">
              <div class="my-3">
                <h1 class="text-sm font-normal text-[var(color-primary)] uppercase">
                  Personal DETAILS
                </h1>
              </div>
              <div>
                <input
                  v-model="form.names"
                  type="text"
                  placeholder="Full Names"
                  class="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border border-gray-200 focus:outline-none"
                />
              </div>
              <div>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Email"
                  class="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border border-gray-200 focus:outline-none"
                />
              </div>
              <div>
                <input
                  v-model="form.phone_number"
                  type="tel"
                  placeholder="Phone Number"
                  class="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border border-gray-200 focus:outline-none"
                />
              </div>
              <div>
                <select
                  v-model="form.service"
                  class="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border border-gray-200 focus:outline-none"
                >
                  <option value="">Choose a Service</option>
                  <option value="Corporate & Commercial">Corporate & Commercial</option>
                  <option value="Contracted Corporate Services">Contracted Corporate Services</option>
                  <option value="Debt Recovery">Debt Recovery</option>
                  <option value="Dispute Resolution">Dispute Resolution</option>
                  <option value="Capital Markets">Capital Markets</option>
                  <option value="Real Estate, Construction & Conveyancing">
                    Real Estate, Construction & Conveyancing
                  </option>
                  <option value="Tax">Tax</option>
                </select>
              </div>
              <div>
                <select
                  v-model="form.meetingtype"
                  class="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border border-gray-200 focus:outline-none"
                >
                  <option value="">Choose meeting option</option>
                  <option value="On Zoom">On Zoom</option>
                  <option value="Physical">Physical</option>
                </select>
              </div>
              <h3 class="uppercase my-3 font-medium">Time</h3>
              <div class="flex flex-wrap justify-around md:justify-start gap-1 md:gap-2 my-5">
                <button
                  v-for="time in times"
                  :key="time"
                  @click="selectTime(time)"
                  :class="[
                    'px-3 py-2 md:px-5 md:w-28 md:py-3 text-sm md:text-base rounded-full font-semibold border transition-colors duration-200',
                    selectedTime === time
                      ? 'bg-[#D9B679] text-white border-[#e0b47c]'
                      : 'bg-white text-[#e0b47c] border-[#e0b47c]'
                  ]"
                >
                  {{ time }}
                </button>
              </div>
              <p class="text-xs">
                Your personal data will be used to process your order. For more information read our
                <span class="text-[#e0b47c]">privacy policy.</span>
              </p>
              <div class="flex justify-end my-5">
                <div>
                  <button
                    @click="submitForm"
                    class="bg-[#e0b47c] text-white font-semibold px-5 py-2 rounded-md flex items-center"
                  >
                    Book Now &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
const currentView = ref('day')
const selectedDate = ref(new Date())
const displayMonth = ref(selectedDate.value.getMonth())
const displayYear = ref(selectedDate.value.getFullYear())
const selectedTime = ref(null)

//  form object
const form = ref({
  names: '',
  email: '',
  phone_number: '',
  service: '',
  meetingtype: '',
  date: '',
  time: '',
})

// Arrays
const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]
const years = Array.from({ length: 10 }, (_, i) => 2020 + i)
const times = ["8:00 AM", "10:00 AM", "12:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"]

// Weekday name
const weekdayName = computed(() =>
  selectedDate.value.toLocaleDateString('en-US', { weekday: 'long' })
)

// Days in month
const daysInMonth = computed(() => {
  const date = new Date(displayYear.value, displayMonth.value + 1, 0)
  const numDays = date.getDate()
  const firstDay = new Date(displayYear.value, displayMonth.value, 1).getDay()
  const blanks = Array.from({ length: firstDay }, () => '')
  const days = Array.from({ length: numDays }, (_, i) => i + 1)
  return [...blanks, ...days]
})

// Calendar functions
function prev() {
  if (currentView.value === 'day') {
    displayMonth.value--
    if (displayMonth.value < 0) {
      displayMonth.value = 11
      displayYear.value--
    }
  } else if (currentView.value === 'month') displayYear.value--
  else displayYear.value -= 10
}

function next() {
  if (currentView.value === 'day') {
    displayMonth.value++
    if (displayMonth.value > 11) {
      displayMonth.value = 0
      displayYear.value++
    }
  } else if (currentView.value === 'month') displayYear.value++
  else displayYear.value += 10
}

function selectDay(day) {
  if (day !== '') {
    selectedDate.value = new Date(displayYear.value, displayMonth.value, day)
    form.value.date = selectedDate.value.toDateString()
  }
}

function selectMonth(monthIndex) {
  displayMonth.value = monthIndex
  currentView.value = 'day'
}

function selectYear(year) {
  displayYear.value = year
  currentView.value = 'month'
}

function toggleView() {
  if (currentView.value === 'day') currentView.value = 'month'
  else if (currentView.value === 'month') currentView.value = 'year'
}

function selectTime(time) {
  selectedTime.value = time
  form.value.time = time
  console.log("Selected:", time)
}

//  Submit form
async function submitForm() {
  form.value.date = selectedDate.value.toDateString()
  form.value.time = selectedTime.value
  const formData= {...form.value}

     try {
       let response = await axios.post(`${import.meta.env.VITE_BASE_URL}/bookings`,formData)
       let  data = response.data
       console.log(data)

     } catch (error) {
       console.log(error)
     }
   


  console.log("Form submitted:", formData)
}
</script>
