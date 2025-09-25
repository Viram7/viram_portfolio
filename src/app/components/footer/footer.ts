import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  scrollTo(event: Event, sectionId: string) {
    event.preventDefault(); // Prevent default jump

    const element = document.getElementById(sectionId);
    if (element) {
      // Scroll so that the element comes to the top of the viewport
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Optional: if you want it aligned to bottom (feels like scrolling up)
      // element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
