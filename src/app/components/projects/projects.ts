import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects  {
  screenHeight: number | undefined;
  top_touch = false;

  @ViewChild('projects_') targetElement!: ElementRef;

  projects = [
    {
      title: 'Rida (Pricing Module)',
      description: `Developed the Pricing Module for the Rida project. Worked on implementing
      pricing logic, calculation workflows, and integration with the main system.`,
      img: 'rida.png',
      codeLink: 'https://github.com/Viram7/rida-makeover',
      siteLink: 'https://rida-makeover.netlify.app/',
    },
    {
      title: 'Home.com',
      description: `Worked on the Home.com project with a focus on frontend development and integration.
      Enhanced UI components and optimized user workflows for a better experience.`,
      img: 'home_com.png',
      codeLink: 'https://github.com/Viram7/hotel/tree/main/project01',
      siteLink: 'https://viram-home-com.netlify.app/asset/page/index.html',
    },
    {
      title: 'Learning Management System (LMS)',
      description: `Contributed to the development of an LMS platform.
      Worked on features related to course management, user interface, and performance tracking.`,
      img: 'mw.png',
      codeLink: 'https://github.com/Viram7/mw-learning',
      siteLink: 'https://mw-learning.netlify.app/',
    },
    {
      title: 'Bhatra Project',
      description: `Worked on the Angular design part of the Bhatra Project under the guidance of Shushanshu sir.
      Focused on frontend UI/UX design and responsive layouts for the application.`,
      img: 'bhatra.png',
      codeLink: 'https://github.com/Viram7/bhatra-portfolio',
      siteLink: 'https://app.netlify.com/projects/bhatra-portfolio/overview',
    },
  ];




  // // const el = document.getElementById('scrollableDiv');
  // @ViewChild('projects_') el!: ElementRef<HTMLDivElement>;

  // ngAfterViewInit() {
  //       if (typeof window !== 'undefined') {
  //     this.screenHeight = window.innerHeight;
  //   }
  //   this.el.nativeElement.addEventListener('scroll', () => {
  //     if (this.el.nativeElement.scrollTop + this.el.nativeElement.clientHeight >= this.el.nativeElement.scrollHeight) {
  //       console.log('Element scrolled to bottom!');
  //       // trigger your action here
  //       this.unlockScroll();
  //     }
  //   });
  // }




  // @HostListener('window:resize', [])
  // onResize() {
  //   if (typeof window !== 'undefined') {
  //     this.screenHeight = window.innerHeight;
  //   }
  // }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   if (!this.targetElement) return;

  //   const el = this.targetElement.nativeElement;
  //   const rect = el.getBoundingClientRect();
  //   const threshold = 5; // pixels tolerance

  //   // Top detection
  //   if (rect.top <= threshold) {
  //     if (!this.top_touch) {
  //       console.log('Element reached top of the screen!');
  //       this.top_touch = true;
  //       this.lockScroll();
  //     }
  //   } else {
  //     this.top_touch = false;
  //   }

  // }

  // lockScroll() {
  //   if (typeof window !== 'undefined') {
  //     document.body.style.overflow = 'hidden';
  //   }
  // }

  // unlockScroll() {
  //   if (typeof window !== 'undefined') {
  //     document.body.style.overflow = 'auto';
  //   }
  // }
}
