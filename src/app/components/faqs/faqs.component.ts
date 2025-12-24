import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: "app-faqs",
  imports: [CommonModule],
  templateUrl: "./faqs.component.html",
  styleUrl: "./faqs.component.css",
})
export class FaqsComponent {
  faqs: FAQ[] = [
    {
      id: 1,
      question: "How does Foodie Express work?",
      answer:
        "Foodie Express is an online platform that connects you with a variety of restaurants in your area. Simply enter your location, browse the available menus, place your order, and enjoy delicious food delivered straight to your doorstep.",
      isOpen: true,
    },
    {
      id: 2,
      question: "What cuisines are available on Foodie Express?",
      answer:
        "We offer a wide variety of cuisines including Indian, Chinese, Italian, Mexican, and many more.",
      isOpen: false,
    },
    {
      id: 3,
      question: "How can I pay for my order?",
      answer:
        "We accept multiple payment methods including credit/debit cards, UPI, and cash on delivery.",
      isOpen: false,
    },
    {
      id: 4,
      question: "Is there a minimum order amount?",
      answer:
        "Minimum order amounts vary by restaurant. You can see the minimum order requirement on each restaurant's page.",
      isOpen: false,
    },
    {
      id: 5,
      question: "How do I track my order?",
      answer:
        "Once your order is placed, you can track it in real-time through our app or website.",
      isOpen: false,
    },
    {
      id: 6,
      question: "Can I schedule my delivery for later?",
      answer:
        "Yes, you can schedule your delivery for a later time during the checkout process.",
      isOpen: false,
    },
  ];

  toggleFaq(faqId: number): void {
    const faq = this.faqs.find((f) => f.id === faqId);
    if (faq) {
      faq.isOpen = !faq.isOpen;
    }
  }
}
