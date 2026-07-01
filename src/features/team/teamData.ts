import type { TeamMember } from '../../types/team'
import sabrinaEliasPhoto from '../../assets/_Sabrina_Elias_0.webp'
import marcelaPadilhaPhoto from '../../assets/_Marcela_Padrilha_0.webp'
import karinaEliasPhoto from '../../assets/_Karina_Elias_00.webp'
import luanaBarillariPhoto from '../../assets/_Luana_Barrillari_0.webp'
import cleytonMartinsPhoto from '../../assets/_Cleyton_Martins_0.webp'
import amarildoDamataPhoto from '../../assets/_Amarildo_Damata_3.webp'

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'sabrina-elias',
    name: 'Sabrina Elias',
    credentials: 'PhD, MSN, RN',
    title: 'Founder & Executive Director',
    photo: sabrinaEliasPhoto,
    linkedIn: 'https://www.linkedin.com/in/sabrina-elias/',
    bio: 'Sabrina Elias founded the Global Nursing Foundation after a 15-year journey that began when she left Brazil, started the U.S. nursing validation process, stopped just short of completion, and returned to finish what she started — earning her PhD from Johns Hopkins along the way. She holds an MSN and BSN from the University of São Paulo, and her RN licensure in Maryland. Her clinical and research experience spans WHO, NIH, and MedStar Health. She founded GNF to give other internationally educated nurses the structured support, guidance, and community she wished had existed when she started her own journey.',
  },
  {
    id: 'marcela-padilha',
    name: 'Marcela Padilha',
    credentials: 'PhD, MSN, RN',
    title: 'Founding Director of Education',
    photo: marcelaPadilhaPhoto,
    linkedIn: 'https://linkedin.com/in/marcela-padilha',
    bio: 'Marcela Padilha brings deep academic and clinical expertise to GNF\'s educational programming. With a PhD and MSN in nursing, she leads the design and quality of GNF\'s curriculum, ensuring every learning experience is grounded in evidence, practical, and genuinely useful for nurses navigating the validation journey.',
  },
  {
    id: 'karina-elias',
    name: 'Karina Elias',
    credentials: 'MEd, BArch, RA',
    title: 'Founding Director of Learning Experience and Design',
    photo: karinaEliasPhoto,
    linkedIn: 'https://www.linkedin.com/in/karina-elias-77050719a/',
    bio: 'Karina Elias brings an unusual and powerful combination of education design and architectural thinking to GNF. Her MEd and BArch backgrounds inform how she structures learning environments — both digital and conceptual — to be intuitive, engaging, and effective. She leads GNF\'s learning experience design, ensuring that the platform is as well-designed as it is informative.',
  },
  {
    id: 'luana-barillari',
    name: 'Luana Barillari',
    credentials: 'LLB, MBA',
    title: 'Founding Director of Strategic Development',
    photo: luanaBarillariPhoto,
    linkedIn: 'https://www.linkedin.com/in/luanabarillari/',
    bio: 'Luana Barillari leads GNF\'s strategic development, partnerships, and organizational growth. With a law degree and MBA, she brings legal acuity and business strategy to a mission-driven organization, helping GNF build the institutional relationships and financial foundation needed to scale its impact globally.',
  },
  {
    id: 'cleyton-martins',
    name: 'Cleyton Martins',
    credentials: 'BCS',
    title: 'Founding Director of Technology',
    photo: cleytonMartinsPhoto,
    linkedIn: 'https://www.linkedin.com/in/cleyton-souza-martins/',
    bio: 'Cleyton Martins leads all technology development at GNF, from the platform and community infrastructure to Flo, the AI validation assistant. With a Bachelor of Computer Science, he brings engineering rigor and product thinking to the tools that power the GNF member experience.',
  },
  {
    id: 'amarildo-damata',
    name: 'Amarildo Damata',
    credentials: 'MSc',
    title: 'Founding Director of International Mobility',
    photo: amarildoDamataPhoto,
    linkedIn: 'https://www.linkedin.com/in/amarildo-damata-04837810/',
    bio: 'Amarildo Damata leads GNF\'s international mobility programs, including the visa pathway guidance and employer sponsorship support for internationally educated nurses. His MSc background and deep knowledge of immigration pathways — including EB-3 Schedule A and TN visas — make him the anchor for nurses navigating the post-board journey into U.S. employment.',
  },
]
