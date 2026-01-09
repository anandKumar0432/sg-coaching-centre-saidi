
import { Teacher, Notice, Testimonial } from './types';

export const COACHING_INFO = {
  name: "SG COACHING CENTRE",
  address: "At-Saidi, Near Hanuman Mandir, Saidi, Nalanda, 805105",
  phone: "+91 7079214755",
  email: "info@sgcoaching.com",
  studentCount: 200,
  established: 2019
};

export const DEVELOPER_INFO = {
  name: "Anand Kumar",
  email: "anandevs188@gmail.com",
  phone: "+91 7033626094",
  image: "/public/anand.jpg", // Generic dev photo placeholder
  role: "Lead Full Stack Developer",
  description: "Passionate developer dedicated to building high-quality, impactful web solutions for education and community growth.",
  linkedIn: "https://www.linkedin.com/in/anand-kumar-77177b21b",
  portfolio: "https://portfolio-xi-three-1r1enjlptj.vercel.app/"
};

export const TEACHERS: Teacher[] = [
  {
    id: '1',
    name: 'Pankaj Sir',
    qualification: 'B.Sc (Math Hons), B.Ed (2026)',
    experience: '6+ Years',
    subjects: ['Mathematics', 'Science'],
    image: '/public/pankaj-sir.png', // Placeholder for Pankaj Sir
    description: 'Expert mathematician with a track record of helping over 1000+ students achieve top marks in board exams.',
    type: 'Lead Instructor'
  },
  {
    id: '2',
    name: 'Rupesh Sir',
    qualification: 'B.Sc (Physics Hons), B.Ed',
    experience: '13+ Years',
    subjects: ['Science', 'Maths', 'Sst'],
    image: '/public/rupesh-sir.jpeg', 
    description: 'With 13+ years of teaching experience, Rupesh Sir brings deep subject knowledge in Science, Maths, and SST. As Director, he focuses on quality education, strong fundamentals, and overall student development.',
    type: 'Director'
  }
];

export const NOTICES: Notice[] = [
  {
    id: 'n1',
    title: 'New Session Admission Open (2026-27)',
    content: 'Admissions are now open for Class I - X Limited seats available. Contact the office for registration.',
    date: 'Jan 10, 2025',
    isPriority: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    studentName: 'Rahul Kumar',
    class: 'Class X (2023 Batch)',
    review: 'Pankaj Sir makes math so easy. I scored 95 in my boards thanks to SG Coaching Centre.',
    rating: 5
  },
  {
    id: 't2',
    studentName: 'Priya Singh',
    class: 'Class XI ',
    review: 'The disciplined environment and regular tests helped me stay focused throughout the year.',
    rating: 5
  }
];

export const FAQS = [
  {
    question: "What classes do you teach?",
    answer: "We primarily focus on Class I to X students across Science and Commerce streams."
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes, we provide comprehensive printed notes and regular practice sets designed by our expert faculty."
  },
  {
    question: "What are the coaching timings?",
    answer: "We operate in two shifts: Morning (6:00 AM - 9:00 AM) and Evening (3:00 PM - 7:00 PM)."
  }
];
