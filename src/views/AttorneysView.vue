<template>
  <div>
    <section>
      <p class="pt-10 text-center text-5xl pb-6 text-[#04393a]">Meet Our Team</p>
      <p class="text-center text-xl font-thin">A team that is continuously advancing their</p>
      <p class="text-center text-xl font-thin">knowledge of new developments in the industries</p>
      <p class="text-center text-xl font-thin pb-10">and areas we practice.</p>
    </section>
  </div>

  <div class="flex flex-wrap justify-center gap-6 p-6">
    <div v-for="member in team" :key="member.name"
      class="w-full sm:w-1/2 lg:w-1/3 max-w-[320px] shadow-lg overflow-hidden bg-[rgb(244,250,255)]">
      <div class="p-4">
        <img :src="member.image" :alt="member.name" class="w-full h-[333px] object-cover" />
      </div>
      <div class="p-4">
        <h3 class="text-lg text-[#04393a] font-nomal">{{ member.name }}</h3>
        <p class="text-sm text-[#D9B679] font-normal">{{ member.title }}</p>
        <p class="text-black font-thin text-xs mt-2">{{ member.shortBio }}</p>

        <div class="flex w-full space-x-3 mt-5 mb-1 justify-between">
          <div class="flex gap-3 items-center">
            <img class="w-8 h-8" src="/img/phone-border.svg">
            <p class="font-normal">{{ member.contact }}</p>
          </div>
          <div class="flex gap-3">
            <a>
              <img class="w-8 h-8" src="/img/linkdn.svg">
            </a>
            <a>
              <img class="w-8 h-8" src="/img/email-border.svg">
            </a>

          </div>

        </div>

        <div class="flex justify-end mt-3">
          <button @click="openModal(member)" class="text-[#D9B679] text-sm font-medium underline">
            Read More
          </button>
        </div>

      </div>
    </div>
  </div>

  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50"
    style="background-color: rgba(0,0,0,0.6);">
    <div v-if="activeMember"
      class="bg-[#fff] shadow-lg w-full max-w-3xl max-h-[70vh] overflow-y-auto relative rounded">
    <div class="flex justify-end px-5 my-3">
        <button @click="closeModal" class="absolute  top-3 right-10 text-gray-500 hover:text-gray-700">
          X
        </button>
      </div>

      <div class="max-h-[70vh] overflow-y-auto">
        <div class="px-8">
        <h2 class="text-lg font-normal">{{ activeMember.name }}
          <span class="text-lg font-normal">{{ activeMember.description }}</span>
        </h2>
        <img :src="activeMember.image" :alt="activeMember.name" class="w-32 h-32 object-cover justify-end" />
        <p class="text-sm text-[#D9B679]">{{ activeMember.title }}</p>
        <p class="text-gray-700 text-xs whitespace-pre-line">
          {{ activeMember.fullBio }}
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const team = [
  {
    name: 'Celestine Koile',
    title: 'Managing Partner',
    contact: '+254 706 039 562',
    description: 'LLB, KSL (PGDip)',
    shortBio:
      'Head of Real Estate and Banking Practice Group, the Dispute Resolution Practice Group, and the Capital Markets Practice Group. With a wealth of experience in property law, real estate transactions, banking regulations, capital markets, and dispute resolution, Celestine is a trusted advisor for clients navigating complex legal landscapes. Her in-depth understanding of these specialized areas positions CKoile Advocates LLP as a premier firm for those seeking expert legal services.',
    fullBio: `Email: ckoile@maliadvocates.com
INTRODUCTION
Celestine Koile is the Managing Partner at CKoile Advocates LLP, where she leads with a commitment to legal excellence and client-focused solutions. Her principal areas of practice span Dispute Resolution, Commercial Transactions, Conveyancing and Real Estate, Employment and Labour Law, Banking and Finance, FinTech, Joint Ventures, Company Law, Insolvency and Debt Restructuring, and general commercial matters.

A Certified Professional Mediator, Celestine brings a deep understanding of alternative dispute resolution to her practice. She is currently pursuing studies in Certified Secretary, further expanding her expertise in corporate governance and compliance.

Celestine also serves as the Compliance Officer for a leading capital markets player and sits on the Cytonn Board as a Strategic Legal and Compliance Officer. She provides essential guidance on legal and regulatory matters, ensuring that her clients' operations remain compliant with the relevant laws. In addition, Celestine assists companies with outsourced legal officer requirements, offering tailored legal solutions to meet the evolving needs of corporate clients.

NOTEABLE EXPERIENCE
Dispute Resolution & Litigation
Part of the team that drove the settlement of a series of cases involving a leading real estate development firm in Kenya, focusing on minority shareholder rights. This led to the settlement of a claim exceeding KES 1.5 billion.
Representing a real estate development firm in a high-stakes arbitration concerning a commercial dispute valued at KES 5.9 billion.
Involved in presenting class action lawsuits before the Supreme Court of Kenya, seeking the interpretation of how locus inspection orders issued by international courts apply and whether they are self-executing in Kenya.
Providing legal counsel and representing clients in commercial litigation, employment disputes, and enforcement of commercial agreements, including wrongful termination and contractual disputes.
Part of the team advising and preparing documentation in relation to the ongoing transition into a new land regime for various corporate and individual clients.
Insolvency & Debt Restructuring
Advising clients in complex insolvency and debt restructuring matters, including the restructuring of distressed assets and facilitating negotiated settlements between creditors and debtors.
Acting for corporate clients in corporate rescue proceedings, and advising on the legal implications of bankruptcy laws and liquidation processes in Kenya.
Real Estate & Property Law
Acting for a leading real estate development company in Kenya in the sale of residential units, including preparation of leases, subleases, and legal due diligence.
Providing legal advice on tenancy and leasing issues arising during the COVID-19 pandemic, focusing on contractual obligations, rent renegotiation, and dispute resolution.
Drafting and reviewing documentation related to the sale, purchase, lease, and licensing of property, including the preparation of sale agreements for both corporate and individual clients.
Advising on the transition to the new land registration regime in Kenya, assisting both corporate and individual clients in navigating the legal and regulatory changes.
Commercial & Corporate Law
Advising on joint ventures, corporate restructuring, compliance, and general company law matters.
Providing strategic counsel in banking and finance, including regulatory compliance, FinTech advisory services, and financing arrangements.
Structuring and drafting various commercial agreements, including service-level agreements, shareholder agreements, and business development contracts.
Corporate Governance & Compliance
Serving as the Compliance Officer for a leading capital markets player, ensuring adherence to regulatory standards and providing strategic advice on legal matters in the capital markets sector.
Sitting on the Cytonn Board as a Strategic Legal and Compliance Officer, advising on governance, regulatory compliance, and legal matters.
Assisting companies with outsourced legal officer requirements, providing tailored legal services to businesses looking for flexible and comprehensive legal solutions.
Celestine's diverse skill set, coupled with her roles in corporate governance and compliance, positions her as a trusted advisor to clients in both the public and private sectors. Her strategic insight, coupled with her practical legal experience, ensures that her clients' legal needs are met with the highest standards of professionalism and expertise.`,
    image: '/img/celestine.png',
  },
  {
    name: 'Adamskey Dudi',
    title: 'Partner',
    contact: '+254 705 790 285',
    description: 'LLB, KSL (PGDip), Professional Mediator',
    shortBio:
      'With a rich background in corporate law, Adams brings extensive experience to CKoile Advocates LLP. His expertise includes mergers and acquisitions, corporate governance, and regulatory compliance. Adams is known for his strategic legal advice, contributing significantly to the firms success',
    fullBio: `Email: aojwang@maliadvocates.com
INTRODUCTION
Adamskey s a partner at CKoile Advocates LLP. Adamskey holds a Bachelor of Laws degree from the Moi University School of Law as well as a Post-Graduate Diploma from the Kenya School of Law. He is an accredited professional Mediator by Mediation Training Institute East Africa and is a member of the Law Society of Kenya. Currently Persuing Certified Secretary KASNEB.

His principal arears of practice are in Civil and commercial litigation including :banking and finance law, defamation law, employment law, constitutional law and judicial review, real estate and conveyancing, and environment law

NOTEABLE EXPERIENCE
Representing several leading banks and financial institutions in proceedings challenging the realization of their securities in various forms including charges, personal and corporate guarantees and bills of exchange
Representing clients across diverse sectors in prosecuting and defending proceedings on the constitutionality and administrative propriety of actions by the government, public and private institutions and enforcement of fundamental rights and freedoms
Advising and acting for both corporate and individual clients on different aspects of employment law including employee entitlements, performance, disciplinary separation procedures, redundancy and retirement benefits
Advising and representing leading media houses on potential and actual litigation arising from publications in print and broadcast media.
Acting for a diverse range of clients on matters touching on environmental and land rights including disputes on ownership and use of property, environmental concerns arising out of real estate developments, licenses, leases, sales and purchases of property. This has been across several dispute resolution mechanisms including courts of law and specialized tribunals.
Acting for clients in high-value, complex and delicate commercial arbitrations including disputes on aviation insurance, aircraft ownership, construction and telecommunications
Acting for the Registrar of Political Parties and the Independent Electoral and Boundaries Commission in political party disputes and election petitions in various forums including the Political Parties Dispute Tribunal and the High Court.
Conducting local and multi-jurisdictional legal due diligence on behalf of investors, advising on regulatory compliance across diverse industries including in the areas of public procurement and public-private partnerships, preparing and negotiating transactional documentation.`,
    image: '/img/adamskey.png',
  },
  {
    name: 'Annie Brenda Ndambuki',
    title: 'Lawyer/Trainee Advocate/Certified Professional Mediator',
    contant: '',
    description: 'KSL (PGDip), Lawyer/Trainee Advocate/Certified Professional Mediator',
    shortBio:
      'With a rich background in corporate law, Adams brings extensive experience to CKoile Advocates LLP. His expertise includes mergers and acquisitions, corporate governance, and regulatory compliance. Adams is known for his strategic legal advice, contributing significantly to the firms success',
    fullBio: `Email: 
INTRODUCTION
Annie is a “Jack of all trades” with the credentials and ambition to back it up. She is a trainee advocate who brings to the team a sharp legal mind, with growing expertise in commercial law, dispute resolution and corporate governance. A Certified Professional Mediator and a lover of all things analytical, Annie is also pursuing certification as a Company Secretary – because why stop at one qualification? When she is not immersed in case law or legal research, Annie swaps statutes for sneakers. She’s a fierce competitor on the basketball court and on the sports shooting arena. Whether in litigation or shooting, Annie brings precision, strategy and tenacity to every challenge she takes on.`,
    image: '/img/annie.png',
  },
  {
    name: 'Victor Maina',
    title: 'L.L.B Graduate, Certified Secretaries (Advanced Level)',
    contact: '',
    description: 'L.L.B Graduate, Certified Secretaries (Advanced Level)',
    shortBio:
      'Victor Maina is a dedicated and results-driven legal professional with a Bachelor of Laws degree from the Catholic University of Eastern Africa. Renowned for his innovative approach and meticulous attention to detail, Victor brings strategic insight, diligence, and a strong work ethic to every matter he handles',
    fullBio: `Email: 
INTRODUCTION
Victor Maina is a dedicated and results-driven legal professional with a Bachelor of Laws degree from the Catholic University of Eastern Africa. Renowned for his innovative approach and meticulous attention to detail, Victor brings strategic insight, diligence, and a strong work ethic to every matter he handles.

Victor has carved out a strong niche in tax litigation and advisory, where he was part of a team that successfully lodged a tax objection against a tax assessment of Kshs 1.2 billion. He possesses a clear and up-to-date understanding of Kenya's ever-evolving tax laws and legislation. His expertise spans across Withholding Tax, Value Added Tax (VAT), Pay as You Earn (PAYE), and Corporation Tax. Victor has consistently provided clear, concise, and strategic tax advice to a wide range of clients, including both individuals and corporate entities.`,
    image: '/img/victor.png',
  },
  {
    name: 'Benard Muriithi Kariuki',
    title: 'Advocate of the High Court of Kenya',
    contact: '',
    description: 'Advocate of the High Court of Kenya',
    shortBio:
      'Meet Benard Muriithi Kariuki aka ‘Wakili Karis’, an Advocate of the High Court of Kenya who believes that no legal problem is too big, nor too small, for a creative mind and a steady cup of Mocha. With a practice as varied as Nairobi’s traffic (and just as lively), Benard handles it all: Alternative Dispute Resolution for when you want to settle things amicably, Commercial and Civil Litigation for when the gloves come off, Criminal Law for those “it wasn’t me!” moments, and Data Protection for the digital age skeptics among us',
    fullBio: `Email: 
INTRODUCTION
Meet Benard Muriithi Kariuki aka ‘Wakili Karis’, an Advocate of the High Court of Kenya who believes that no legal problem is too big, nor too small, for a creative mind and a steady cup of Mocha. With a practice as varied as Nairobi’s traffic (and just as lively), Benard handles it all: Alternative Dispute Resolution for when you want to settle things amicably, Commercial and Civil Litigation for when the gloves come off, Criminal Law for those “it wasn’t me!” moments, and Data Protection for the digital age skeptics among us.

Conveyancing, Family Law, Employment disputes, and even those thorny Land and Environmental matters? Benard’s got you covered. He’s also your go-to guy for untangling the knots of Corporate Governance, Risk Management, and Compliance,no legal labyrinth is too complex.

When companies hit rough waters, Benard jumps in to steer the ship, tackling corporate restructuring, liquidation, administration, and tax litigation with sharp focus and a dash of good humor. His secret weapon? An uncanny knack for spotting compliance pitfalls before anyone else does.

Clients appreciate his ability to translate “legalese” into everyday language and his talent for turning legal challenges into operational wins. With Benard on your team, your interests are always in good hands, and your legal journey, just a bit less daunting.`,
    image: '/img/benard.png',
  },

]

const showModal = ref(false)
const activeMember = ref(null)

function openModal(member) {
  activeMember.value = member
  showModal.value = true
}
function closeModal() {
  showModal.value = false
}
</script>
