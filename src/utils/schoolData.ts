export type PagePath = '/' | '/about' | '/admissions' | '/campuses' | '/events' | '/contact';

export interface BannerItem {
  id: number;
  src: string;
  alt: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
}

export interface StatItem {
  target: number;
  label: string;
}

export interface CampusItem {
  id: string;
  name: string;
  location: string;
  homeDescription: string;
  fullDescription: string;
  homeImage: string;
  homeImageAlt: string;
  pageIcon: string;
  studentsCount: string;
  facultyCount: string;
  programs: string;
  facilities: string;
  address: string;
  phone: string;
}

export interface LeadershipItem {
  name: string;
  role: string;
  institution: string;
  shortDesc: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  category: 'Academic' | 'Sports' | 'Cultural' | 'Workshop' | 'Community';
  title: string;
  time: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  showOnHome?: boolean;
}

export interface PastEventItem {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: string;
}

export interface EventCategoryItem {
  name: 'Academic' | 'Sports' | 'Cultural' | 'Community';
  icon: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  authorName: string;
  authorRole: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  targetPath: PagePath;
}

export interface ProgramItem {
  id: string;
  grade: string;
  title: string;
  description: string;
  icon: string;
  features: { icon: string; label: string }[];
}

export interface CoreValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface FacilityItem {
  icon: string;
  title: string;
  description: string;
}

export const SCHOOL_IDENTITY = {
  name: 'AL BADAR PUBLIC HIGH SCHOOL',
  shortName: 'ABPS',
  logoPrimary: 'AL BADAR',
  logoSecondary: 'PUBLIC HIGH SCHOOL',
  logoUrl: '/assets/logo.jpg',
  breadImageUrl: '/assets/bread.jpg',
  tagline: 'Committed to providing quality education and shaping the future of our students.',
  phone: '0301 7243663',
  address: '37/SP ROAD NEAR ALHAMRA CHOWK, Pakpattan, Pakistan',
  streetAddress: '37/SP ROAD NEAR ALHAMRA CHOWK',
  cityCountry: 'Pakpattan, Pakistan',
  emails: {
    general: 'info@abps.edu.pk',
    admissions: 'admissions@abps.edu.pk',
    support: 'support@abps.edu.pk',
  },
  officeHours: [
    'Monday - Friday: 8:00 AM - 5:00 PM',
    'Saturday: 9:00 AM - 1:00 PM',
    'Sunday: Closed',
  ],
  portalUrl: 'https://portal.abps.edu.pk',
  studentAppUrl: 'https://play.google.com/store/apps/details?id=com.app.hsol.al.badar',
  socialLinks: {
    facebook: 'https://www.facebook.com/albadarschools.pk/',
    twitter: 'https://abps.edu.pk/#twitter',
    instagram: 'https://abps.edu.pk/#instagram',
    linkedin: 'https://abps.edu.pk/#linkedin',
    youtube: 'https://www.youtube.com/@abps-r5p',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1527.1745324610424!2d73.37563267986407!3d30.35033471516228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393d59f406cd7599%3A0xe57a96db433ee2e3!2sAL%20BADR%20PUBLIC%20HIGH%20SCHOOL!5e1!3m2!1sen!2s!4v1769028786048!5m2!1sen!2s',
  copyright: '© 2026 AL BADAR PUBLIC HIGH SCHOOL. All rights reserved.',
};

export const NAV_LINKS: { label: string; path: PagePath }[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Campuses', path: '/campuses' },
  { label: 'Events', path: '/events' },
  { label: 'Contact Us', path: '/contact' },
];

export const BANNERS: BannerItem[] = [
  {
    id: 1,
    src: '/assets/banners/banner_1.jpg',
    alt: 'AL BADAR PUBLIC HIGH SCHOOL - Quality Education in Pakpattan',
  },
  {
    id: 2,
    src: '/assets/banners/banner_2.jpg',
    alt: 'AL BADAR PUBLIC HIGH SCHOOL - Excellence in Education',
  },
];

export const HOME_FEATURES: FeatureItem[] = [
  {
    title: 'Academic Excellence',
    description: 'Our rigorous curriculum and experienced faculty ensure the highest standards of education.',
    icon: 'fas fa-graduation-cap',
    image: '/assets/banners/banner_1.jpg',
    imageAlt: 'Academic Excellence at AL BADAR PUBLIC HIGH SCHOOL',
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from industry experts and renowned educators dedicated to your success.',
    icon: 'fas fa-users',
    image: '/assets/banners/banner_2.jpg',
    imageAlt: 'Expert Faculty at AL BADAR PUBLIC HIGH SCHOOL',
  },
  {
    title: 'Modern Facilities',
    description: 'State-of-the-art infrastructure and resources to support your learning journey.',
    icon: 'fas fa-building',
    image: '/assets/banners/banner_1.jpg',
    imageAlt: 'Modern Facilities at AL BADAR PUBLIC HIGH SCHOOL',
  },
  {
    title: 'Global Opportunities',
    description: 'International partnerships and exchange programs for a global perspective.',
    icon: 'fas fa-globe',
    image: '/assets/banners/banner_2.jpg',
    imageAlt: 'Global Opportunities at AL BADAR PUBLIC HIGH SCHOOL',
  },
];

export const STATS: StatItem[] = [
  { target: 10000, label: 'Students' },
  { target: 500, label: 'Faculty Members' },
  { target: 25, label: 'Years of Excellence' },
  { target: 3, label: 'Campuses' },
];

export const CAMPUSES: CampusItem[] = [
  {
    id: 'boys',
    name: 'Boys Campus',
    location: 'Pakpattan, Pakistan',
    homeDescription:
      'Dedicated to providing quality education for boys with state-of-the-art facilities and comprehensive academic programs.',
    fullDescription:
      'Dedicated to providing quality education for boys with state-of-the-art facilities, modern laboratories, and comprehensive academic programs designed to nurture young minds.',
    homeImage: '/assets/banners/banner_1.jpg',
    homeImageAlt: 'Boys Campus - AL BADAR PUBLIC HIGH SCHOOL Pakpattan',
    pageIcon: 'fas fa-male',
    studentsCount: '2000+ Students',
    facultyCount: '100+ Faculty',
    programs: 'Primary to Intermediate',
    facilities: 'Library, Labs, Sports Complex, Auditorium',
    address: '37/SP ROAD NEAR ALHAMRA CHOWK, Pakpattan, Pakistan',
    phone: '0301 7243663',
  },
  {
    id: 'girls',
    name: 'Girls Campus',
    location: 'Pakpattan, Pakistan',
    homeDescription:
      'Empowering girls through quality education with excellent infrastructure and dedicated faculty.',
    fullDescription:
      'A modern facility dedicated to empowering girls through quality education, excellent infrastructure, and dedicated faculty committed to academic excellence.',
    homeImage: '/assets/banners/banner_2.jpg',
    homeImageAlt: 'Girls Campus - AL BADAR PUBLIC HIGH SCHOOL Pakpattan',
    pageIcon: 'fas fa-female',
    studentsCount: '1800+ Students',
    facultyCount: '90+ Faculty',
    programs: 'Primary to Intermediate',
    facilities: 'Library, Computer Labs, Science Labs, Sports Facilities',
    address: '37/SP ROAD NEAR ALHAMRA CHOWK, Pakpattan, Pakistan',
    phone: '0301 7243663',
  },
  {
    id: 'choti-dunya',
    name: 'Choti Dunya Campus',
    location: 'Pakpattan, Pakistan',
    homeDescription:
      'Specialized campus focused on early childhood development and primary education.',
    fullDescription:
      'Our specialized campus offering comprehensive educational programs with a focus on early childhood development and primary education, creating a nurturing learning environment.',
    homeImage: '/assets/banners/banner_1.jpg',
    homeImageAlt: 'Choti Dunya Campus - AL BADAR PUBLIC HIGH SCHOOL Pakpattan',
    pageIcon: 'fas fa-child',
    studentsCount: '1500+ Students',
    facultyCount: '75+ Faculty',
    programs: 'Pre-School to Primary',
    facilities: 'Playground, Activity Rooms, Library, Digital Classrooms',
    address: '37/SP ROAD NEAR ALHAMRA CHOWK, Pakpattan, Pakistan',
    phone: '0301 7243663',
  },
];

export const LEADERSHIP: { director: LeadershipItem; deputyDirector: LeadershipItem } = {
  director: {
    name: 'Director',
    role: 'School Director',
    institution: 'AL BADAR PUBLIC HIGH SCHOOL',
    shortDesc: 'Leading our institution with vision and dedication to educational excellence.',
    image: '/assets/director.jpg',
    imageAlt: 'Director - AL BADAR PUBLIC HIGH SCHOOL Pakpattan',
    paragraphs: [
      'Welcome to AL BADAR PUBLIC HIGH SCHOOL, where excellence in education meets character development. For over 25 years, we have been committed to providing world-class education that empowers our students to achieve their full potential.',
      'Our institution stands as a beacon of academic excellence, fostering an environment where students not only excel academically but also develop into responsible, ethical, and well-rounded individuals. We believe in nurturing critical thinking, creativity, and leadership skills that prepare our students for the challenges of tomorrow.',
      'At AL BADAR PUBLIC HIGH SCHOOL, we are dedicated to creating a learning community where every student is valued, supported, and inspired to reach their highest aspirations. Together, we build a foundation for lifelong success.',
    ],
  },
  deputyDirector: {
    name: 'Deputy Director',
    role: 'Deputy Director',
    institution: 'AL BADAR PUBLIC HIGH SCHOOL',
    shortDesc: 'Supporting academic excellence and student development initiatives.',
    image: '/assets/deputy_director.jpg',
    imageAlt: 'Deputy Director - AL BADAR PUBLIC HIGH SCHOOL Pakpattan',
    paragraphs: [
      'It is with great pleasure that I welcome you to AL BADAR PUBLIC HIGH SCHOOL. Our institution is built on the pillars of academic rigor, character building, and holistic development.',
      'We take pride in our dedicated faculty, modern facilities, and innovative teaching methodologies that create an engaging and supportive learning environment. Our commitment extends beyond academics to include sports, arts, and community service, ensuring the all-round development of our students.',
      'We work tirelessly to maintain the highest standards of education while instilling values of integrity, respect, and social responsibility. Our goal is to prepare students not just for examinations, but for life itself.',
      'I invite you to be part of our educational journey and witness the transformation of young minds into future leaders and responsible citizens.',
    ],
  },
};

export const ABOUT_STORY = {
  heading: 'Our Story',
  paragraphs: [
    'AL BADAR PUBLIC HIGH SCHOOL has been a beacon of educational excellence for over 25 years. Founded with a vision to transform lives through quality education, we have grown from a small institution to a network of campuses serving thousands of students.',
    'Our commitment to academic excellence, character building, and holistic development has made us a trusted name in education. We believe in nurturing not just academic success, but also the personal growth and character development of every student.',
  ],
  image: '/assets/bread.jpg',
  imageAlt: 'AL BADAR PUBLIC HIGH SCHOOL - Educational Excellence in Pakpattan',
};

export const MISSION_VISION = {
  mission: {
    title: 'Our Mission',
    icon: 'fas fa-bullseye',
    description:
      'To provide world-class education that empowers students to achieve their full potential, develop critical thinking skills, and become responsible global citizens who contribute positively to society.',
  },
  vision: {
    title: 'Our Vision',
    icon: 'fas fa-eye',
    description:
      'To be a leading educational institution recognized for academic excellence, innovation, and the holistic development of students who are prepared to excel in an ever-changing world.',
  },
};

export const CORE_VALUES: CoreValueItem[] = [
  {
    icon: 'fas fa-star',
    title: 'Excellence',
    description: 'Striving for the highest standards in everything we do',
  },
  {
    icon: 'fas fa-heart',
    title: 'Integrity',
    description: 'Upholding ethical principles and honesty in all actions',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Innovation',
    description: 'Embracing new ideas and technologies for better learning',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Respect',
    description: 'Valuing diversity and treating everyone with dignity',
  },
  {
    icon: 'fas fa-users-cog',
    title: 'Collaboration',
    description: 'Working together to achieve common goals',
  },
  {
    icon: 'fas fa-seedling',
    title: 'Growth',
    description: 'Continuous improvement and personal development',
  },
];

export const ADMISSION_STEPS = [
  {
    step: 1,
    icon: 'fas fa-file-alt',
    title: 'Application',
    description:
      'Submit your application form online or visit our campus. Ensure all required documents are attached.',
  },
  {
    step: 2,
    icon: 'fas fa-search',
    title: 'Review',
    description:
      'Our admissions committee will review your application and documents within 5-7 business days.',
  },
  {
    step: 3,
    icon: 'fas fa-user-check',
    title: 'Interview',
    description: 'Shortlisted candidates will be invited for an interview and assessment test.',
  },
  {
    step: 4,
    icon: 'fas fa-check-circle',
    title: 'Acceptance',
    description: 'Receive your admission letter and complete the enrollment process by paying fees.',
  },
];

export const ADMISSION_REQUIREMENTS = {
  documents: [
    'Completed application form',
    'Previous academic transcripts',
    'Birth certificate',
    'CNIC/B-Form copy',
    'Recent photographs',
    'Character certificate',
  ],
  academicCriteria: [
    'Minimum 60% marks in previous class',
    'Passing score in entrance test',
    'Good conduct record',
    'Medical fitness certificate',
  ],
  importantDates: [
    { label: 'Application Deadline:', value: 'May 31, 2024' },
    { label: 'Entrance Test:', value: 'June 15, 2024' },
    { label: 'Interviews:', value: 'June 20-25, 2024' },
    { label: 'Classes Start:', value: 'September 1, 2024' },
  ],
};

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'primary',
    grade: 'Grades 1-5',
    title: 'Primary Education',
    description: 'Foundation years focusing on basic skills and character development',
    icon: 'fas fa-book',
    features: [
      { icon: 'fas fa-star', label: 'Foundation Building' },
      { icon: 'fas fa-heart', label: 'Character Development' },
    ],
  },
  {
    id: 'middle',
    grade: 'Grades 6-8',
    title: 'Middle School',
    description: 'Building on fundamentals with enhanced curriculum',
    icon: 'fas fa-book-reader',
    features: [
      { icon: 'fas fa-lightbulb', label: 'Enhanced Learning' },
      { icon: 'fas fa-users', label: 'Skill Development' },
    ],
  },
  {
    id: 'high',
    grade: 'Grades 9-10',
    title: 'High School',
    description: 'Preparing for board examinations and higher studies',
    icon: 'fas fa-university',
    features: [
      { icon: 'fas fa-trophy', label: 'Exam Preparation' },
      { icon: 'fas fa-graduation-cap', label: 'Higher Studies' },
    ],
  },
  {
    id: 'intermediate',
    grade: 'Grades 11-12',
    title: 'Intermediate',
    description: 'Specialized streams: Pre-Medical, Pre-Engineering, Commerce, Arts',
    icon: 'fas fa-certificate',
    features: [
      { icon: 'fas fa-flask', label: 'Specialized Streams' },
      { icon: 'fas fa-briefcase', label: 'Career Focus' },
    ],
  },
];

export const CAMPUS_FACILITIES: FacilityItem[] = [
  {
    icon: 'fas fa-book',
    title: 'Libraries',
    description: 'Well-stocked libraries with thousands of books and digital resources',
  },
  {
    icon: 'fas fa-flask',
    title: 'Science Labs',
    description: 'Fully equipped laboratories for Physics, Chemistry, and Biology',
  },
  {
    icon: 'fas fa-laptop',
    title: 'Computer Labs',
    description: 'Modern computer facilities with high-speed internet access',
  },
  {
    icon: 'fas fa-futbol',
    title: 'Sports Complex',
    description: 'Comprehensive sports facilities including fields, courts, and gymnasiums',
  },
  {
    icon: 'fas fa-utensils',
    title: 'Cafeteria',
    description: 'Clean and hygienic dining facilities with healthy meal options',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Security',
    description: '24/7 security surveillance and controlled access for student safety',
  },
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'science-fair-2024',
    day: '25',
    month: 'Mar',
    category: 'Academic',
    title: 'Annual Science Fair 2024',
    time: '9:00 AM - 4:00 PM',
    location: 'Main Campus Auditorium',
    description: 'Showcasing innovative science projects from students across all campuses. Open to public.',
    image: '/assets/banners/banner_1.jpg',
    imageAlt: 'Annual Science Fair 2024 - AL BADAR PUBLIC HIGH SCHOOL',
    featured: true,
    showOnHome: true,
  },
  {
    id: 'sports-championship-2024',
    day: '30',
    month: 'Mar',
    category: 'Sports',
    title: 'Inter-Campus Sports Championship',
    time: '8:00 AM - 6:00 PM',
    location: 'Main Campus Sports Complex',
    description: 'Annual sports competition featuring athletics, cricket, football, and basketball.',
    image: '/assets/banners/banner_2.jpg',
    imageAlt: 'Inter-Campus Sports Championship - AL BADAR PUBLIC HIGH SCHOOL',
    showOnHome: true,
  },
  {
    id: 'cultural-festival-2024',
    day: '05',
    month: 'Apr',
    category: 'Cultural',
    title: 'Cultural Festival 2024',
    time: '2:00 PM - 8:00 PM',
    location: 'All Campuses',
    description: 'Celebrating diversity through music, dance, drama, and art exhibitions.',
    image: '/assets/banners/banner_1.jpg',
    imageAlt: 'Cultural Festival 2024 - AL BADAR PUBLIC HIGH SCHOOL',
    showOnHome: true,
  },
  {
    id: 'career-guidance-workshop',
    day: '12',
    month: 'Apr',
    category: 'Workshop',
    title: 'Career Guidance Workshop',
    time: '10:00 AM - 2:00 PM',
    location: 'Main Campus Conference Hall',
    description: 'Expert sessions on career planning, university selection, and professional development.',
    image: '/assets/banners/banner_2.jpg',
    imageAlt: 'Career Guidance Workshop - AL BADAR PUBLIC HIGH SCHOOL',
  },
  {
    id: 'debate-competition',
    day: '20',
    month: 'Apr',
    category: 'Academic',
    title: 'Debate Competition',
    time: '11:00 AM - 3:00 PM',
    location: 'North Campus',
    description: 'Inter-campus debate competition on current affairs and social issues.',
    image: '/assets/banners/banner_1.jpg',
    imageAlt: 'Debate Competition - AL BADAR PUBLIC HIGH SCHOOL',
  },
  {
    id: 'community-service-day',
    day: '28',
    month: 'Apr',
    category: 'Community',
    title: 'Community Service Day',
    time: '9:00 AM - 1:00 PM',
    location: 'Various Locations',
    description: 'Students and staff participate in community service activities and charity work.',
    image: '/assets/banners/banner_2.jpg',
    imageAlt: 'Community Service Day - AL BADAR PUBLIC HIGH SCHOOL',
  },
];

export const PAST_EVENTS: PastEventItem[] = [
  {
    id: 'national-excellence-awards',
    date: 'March 5, 2024',
    title: 'National Academic Excellence Awards',
    description: 'Our students achieved outstanding success in the National Academic Excellence Awards ceremony.',
    icon: 'fas fa-trophy',
  },
  {
    id: 'guest-lecture-series',
    date: 'February 20, 2024',
    title: 'Guest Lecture Series',
    description: 'Renowned speakers from various fields shared their expertise with our students.',
    icon: 'fas fa-microphone',
  },
  {
    id: 'art-exhibition',
    date: 'February 10, 2024',
    title: 'Art Exhibition',
    description: 'Showcasing creative talents of our students through paintings, sculptures, and digital art.',
    icon: 'fas fa-palette',
  },
];

export const EVENT_CATEGORIES: EventCategoryItem[] = [
  {
    name: 'Academic',
    icon: 'fas fa-book-open',
    description: 'Science fairs, competitions, seminars, and academic conferences',
  },
  {
    name: 'Sports',
    icon: 'fas fa-futbol',
    description: 'Athletic competitions, tournaments, and fitness activities',
  },
  {
    name: 'Cultural',
    icon: 'fas fa-music',
    description: 'Music, dance, drama, and cultural celebrations',
  },
  {
    name: 'Community',
    icon: 'fas fa-users',
    description: 'Community service, charity events, and social initiatives',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      '"AL BADAR PUBLIC HIGH SCHOOL has provided an excellent learning environment for my child. The teachers are dedicated and the facilities are outstanding."',
    authorName: 'Parent Name',
    authorRole: 'Parent of Student',
  },
  {
    quote:
      '"I am grateful for the quality education and support I received at AL BADAR PUBLIC HIGH SCHOOL. It prepared me well for my future endeavors."',
    authorName: 'Student Name',
    authorRole: 'Alumni',
  },
  {
    quote:
      '"The school\'s commitment to academic excellence and character development is truly commendable. My children are thriving here."',
    authorName: 'Parent Name',
    authorRole: 'Parent of Students',
  },
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'news-science-fair',
    date: 'March 15, 2024',
    title: 'Annual Science Fair 2024',
    excerpt: 'Join us for our annual science fair showcasing innovative projects from students across all campuses.',
    image: '/assets/banners/banner_1.jpg',
    imageAlt: 'Annual Science Fair 2024 at AL BADAR PUBLIC HIGH SCHOOL',
    targetPath: '/events',
  },
  {
    id: 'news-admissions-open',
    date: 'March 10, 2024',
    title: 'Admissions Open for Fall 2024',
    excerpt: 'Applications are now open for the Fall 2024 semester. Apply early to secure your spot.',
    image: '/assets/banners/banner_2.jpg',
    imageAlt: 'Admissions Open - AL BADAR PUBLIC HIGH SCHOOL',
    targetPath: '/admissions',
  },
  {
    id: 'news-national-competition',
    date: 'March 5, 2024',
    title: 'Students Win National Competition',
    excerpt: 'Our students have achieved outstanding success in the National Academic Excellence Awards.',
    image: '/assets/banners/banner_1.jpg',
    imageAlt: 'Students Win National Competition - AL BADAR PUBLIC HIGH SCHOOL',
    targetPath: '/events',
  },
];
