<script setup>
import { ref } from 'vue'
import Articles from '@/components/Articles.vue'
import ContactUs from '@/components/ContactUs.vue'
import Values from '@/components/Values.vue'

const practises = ref([
  {
    icon: '/src/assets/img/practise/business.svg',
    title: 'Corporate & Commercial',
    description:
      'We at MALI Advocates LLP strive to empower our clients to traverse the intricate world ofcorporate and commercial law with confidence and proficiency. Our vast experience in corporate and commercial law has positioned us as partners for a wide array of clients ranging fromstartups, foreign and local corporations, and SMEs to large corporations.Our corporate Commercial practice provides comprehensive legal services by combiningemployment, financial, regulatory and taxation expertise.',
  },
  {
    icon: '/src/assets/img/practise/construction.svg',
    title: 'Contracted Corporate Services',
    description:
      'Our corporate services practice specializes in providing company secretarial services, contracted corporate legal counsel services, governance advisory and other specialized corporate services in Kenya. We are experts in compliance management and reporting and are conversant with the laws and regulations that apply to companies in Kenya. We regularly advise on compliance by companies in regulated sectors such as insurance, retirement benefits, and capital markets. Our lawyers frequently advise clients on Kenya’s regulatory regime relating to privacy and data protection. We monitor and advise on new legislation in all areas to ensure our clients are well informed in advance of any changes in the regulatory regimes which require their compliance.We have experience in dealings with various regulatory bodies such as Capital Markets Authority, the Registrar of Companies, sector regulators and local tax authorities.',
  },
  {
    icon: '/src/assets/img/practise/debt.svg',
    title: 'Debt Recovery',
    description:
      'We at MALI Advocates LLP acknowledge that financial stability is important to individuals, startups, SMEs and companies. Our aim is to go over and beyond to ensure our clients debt recovery needs are met, in a dignified manner, while maintaining relationships.',
  },
  {
    icon: '/src/assets/img/practise/file-contract.svg',
    title: 'Dispute Resolution',
    description:
      'MALI Advocates LLP specializes primarily in handling litigation and arbitration cases on a daily basis, representing clients in both domestic and international courts and tribunals. Our dispute resolution team possess expertise in litigation and various alternative dispute resolution methods such as mediation and arbitration. Our arears of expertise include Cross border Dispute resolution,Corporate and Securities litigation, insolvency litigation, financial service regulatory matters, competition, banking and finance, media law, employment and labor, family law (children matters, adoption, divorce) The firm is at the forefront of both domestic and international arbitration. We have represented clients in local and international arbitration tribunals for the settlement of investment disputes including the London Court of International Arbitration (LCIA).',
  },
  {
    icon: '/src/assets/img/practise/horse.svg',
    title: 'Capital Markets',
    description:
      'We work with issuers, holders, underwriters, shareholders, sponsors, arrangers, fund managers, trustees, custodians on a broad range of capital market offerings. We aim to provide our clients with capital raising, equity, mergers and acquisitions, private equity, venture capital, private placements, corporate governance and regulatory compliance.',
  },
  {
    icon: '/src/assets/img/practise/invoice.svg',
    title: 'Real Estate, Construction and Conveyancing',
    description:
      'MALI Advocates LLP operates a robust real estate construction law practice. We negotiatiate, draft and manage contruction and conveyancing agreements. We have worked hand in hand with some of the top real estate investment companies, assisting in the closing of all their commercial and residential contracts on behalf of the entities and their clients.',
  },
  {
    icon: '/src/assets/img/practise/justice.svg',
    title: 'Tax',
    description:
      'We offer advisory, compliance and tax disputes resolution by conducting thorough assessments of transactions and business structures, aiming to provide practical solutions tailored to the demands of today’s ever changing and challenging business landscape. Our tax compliance and advisory services are tailored to enhance business efficacy and efficiency.',
  },
])
</script>

<template>
  <div id="practice-areas">
    <div class="my-32 container mx-auto px-8 sm:px-16">
      <div>
        <h1 class="flex justify-center mb-4 text-4xl font-bold">Practice Areas</h1>
        <p class="flex justify-center w-3/4 mx-auto text-center px-3">
          MALI Advocates LLP operates through three distinct practice groups, namely the Litigation
          and Alternative Dispute Resolution Practice Group, Real Estate and Banking Practice Group,
          and Commercial and Insolvency Practice Group.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-11 justify-center mt-10">
        <div v-for="(practise, index) in practises" :key="index">
          <div
            class="flex rounded-lg w-full mx-3 min-h-140 px-5 py-7 flex-col shadow-md hover:shadow-xl"
          >
            <div class="items-center">
              <div class="mr-3 inline-flex items-center justify-center text-white flex-shrink-0">
                <img :src="practise.icon" class="w-12 h-12" alt="" />
              </div>
              <h2 class="my-2 text-xl text-gray-700 font-normal">{{ practise.title }}</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="font-normal">
                {{ practise.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Values />
  <Articles />
  <ContactUs />
</template>
