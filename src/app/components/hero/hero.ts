import { CommonModule } from '@angular/common';
import { Component, OnInit, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BgImage } from "../bg-image/bg-image";
import { ViewChild, ElementRef } from '@angular/core';
import { Header } from "../header/header";
import { About } from "../about/about";
import { Skills } from "../skills/skills";
import { ProjectCard } from "../project-card/project-card";
import { Projects } from "../projects/projects";
import { Contact } from "../contact/contact";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-hero',
  imports: [CommonModule, Header, About, Skills, ProjectCard, Projects, Contact, Footer],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero  {







  //   skills = [
  //   { name: 'HTML', icon: 'fa-html5', color: 'text-danger' },
  //   { name: 'CSS', icon: 'fa-css3-alt', color: 'text-primary' },
  //   { name: 'JavaScript', icon: 'fa-js', color: 'text-warning' },
  //   { name: 'Django', icon: 'fa-leaf', color: 'text-success' },
  //   { name: 'React', icon: 'fa-react', color: 'text-info' },
  //   { name: 'C/C++', icon: 'fa-code', color: 'text-secondary' },
  //   { name: 'Python', icon: 'fa-python', color: 'text-primary' },
  //   { name: 'MySQL', icon: 'fa-database', color: 'text-info' }
  // ];




}
