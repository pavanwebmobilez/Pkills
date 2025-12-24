import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Testimonial {
  id: number;
  title: string;
  review: string;
  rating: number;
  customerName: string;
  customerRole: string;
  avatar: string;
  featured: boolean;
}

@Component({
  selector: "app-testimonials",
  imports: [CommonModule],
  templateUrl: "./testimonials.component.html",
  styleUrl: "./testimonials.component.css",
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      title: "I rarely find time to cook",
      review:
        'Foodie Express has become my go-to solution for delicious and healthy meals. I love the convenience of ordering from my favorite restaurants with just a few clicks. Plus, the delivery is always on time, making my hectic days a little bit easier."',
      rating: 5.0,
      customerName: "Skylar Siphron",
      customerRole: "Customer",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/4407bd16e888516356ae1f37bd6c22d8b0ac3f5c?width=96",
      featured: false,
    },
    {
      id: 2,
      title: "Family Gatherings Made Easy",
      review:
        '"I recently hosted a family gathering and decided to order from Foodie Express. It was a game-changer! The food arrived exactly on schedule, and everyone raved about the quality and taste. I appreciate the seamless ordering process and the professional service.',
      rating: 5.0,
      customerName: "Nolan Korsgaard",
      customerRole: "Customer",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/571ff8d47d7119c5753ba0e65a319a239bc8cee7?width=96",
      featured: true,
    },
    {
      id: 3,
      title: "Foodie Express never disappoints",
      review:
        "\"I consider myself a culinary adventurer, and Foodie Express never disappoints. I love exploring different cuisines, and Foodie Express makes it so easy. The variety of restaurants is impressive, and the website is user-friendly. It's like a foodie's paradise right at my fingertips!\"",
      rating: 5.0,
      customerName: "Alfredo Philips",
      customerRole: "Customer",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/b115c895f270026a57d5a5b4be385251d4f227bb?width=96",
      featured: false,
    },
    {
      id: 4,
      title: "Quick and Reliable Service",
      review:
        '"As a busy professional, I don\'t have much time to cook. Foodie Express has been a lifesaver! The app is easy to use, and the food always arrives hot and fresh. The variety of cuisines available is amazing, and I love trying new restaurants."',
      rating: 5.0,
      customerName: "Sarah Johnson",
      customerRole: "Customer",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/4407bd16e888516356ae1f37bd6c22d8b0ac3f5c?width=96",
      featured: false,
    },
    {
      id: 5,
      title: "Best Food Delivery Service",
      review:
        '"I\'ve tried many food delivery services, but Foodie Express is by far the best. The delivery drivers are always professional and friendly, and the food quality is consistently excellent. I highly recommend it to anyone looking for a reliable food delivery service."',
      rating: 5.0,
      customerName: "Michael Chen",
      customerRole: "Customer",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/571ff8d47d7119c5753ba0e65a319a239bc8cee7?width=96",
      featured: false,
    },
  ];

  currentSlide = 0;
  itemsPerSlide = 3;

  get totalSlides(): number {
    return Math.ceil(this.testimonials.length / this.itemsPerSlide);
  }

  get visibleTestimonials(): Testimonial[] {
    const start = this.currentSlide * this.itemsPerSlide;
    const end = start + this.itemsPerSlide;
    return this.testimonials.slice(start, end);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  previousSlide(): void {
    this.currentSlide =
      this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
  }

  get slides(): number[] {
    return Array.from({ length: this.totalSlides }, (_, i) => i);
  }
}
