
export interface Teacher {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  subjects: string[];
  image: string;
  description: string;
  type: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  isPriority: boolean;
}

export interface Testimonial {
  id: string;
  studentName: string;
  class: string;
  review: string;
  rating: number;
}
