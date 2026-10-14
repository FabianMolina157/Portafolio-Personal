import { Component } from '@angular/core';
@Component({ selector: 'app-root', standalone: true, templateUrl: './app.component.html', styleUrl: './app.component.scss' })
export class AppComponent {
  readonly profile = { name: 'Fabian Ignacio Molina Quinteros', role: 'Estudiante · Desarrollo de software', email: 'anilom157@gmail.com', location: 'Cochabamba, Bolivia' };
  menuOpen = false;
  readonly navigation = [ { id: 'hero', label: 'Inicio', icon: 'bi-house' }, { id: 'about', label: 'Sobre mí', icon: 'bi-person' }, { id: 'skills', label: 'Habilidades', icon: 'bi-lightning-charge' }, { id: 'education', label: 'Educación', icon: 'bi-mortarboard' }, { id: 'portfolio', label: 'Proyectos', icon: 'bi-grid' }, { id: 'services', label: 'Conocimientos', icon: 'bi-layers' }, { id: 'contact', label: 'Contacto', icon: 'bi-envelope' } ];
  readonly socials = [ { name: 'GitHub', icon: 'bi-github', url: '[LINK_GITHUB]' }, { name: 'LinkedIn', icon: 'bi-linkedin', url: '[LINK_LINKEDIN]' }, { name: 'Instagram', icon: 'bi-instagram', url: '[LINK_INSTAGRAM]' }, { name: 'Facebook', icon: 'bi-facebook', url: '[LINK_FACEBOOK]' } ];
  readonly skills = [ { name: 'HTML', level: 70 }, { name: 'CSS', level: 65 }, { name: 'JavaScript', level: 55 }, { name: 'TypeScript', level: 45 }, { name: 'Angular', level: 40 }, { name: 'Git y GitHub', level: 50 } ];
  readonly projects = [
    { number: '01', title: '[NOMBRE DEL PROYECTO]', category: 'Proyecto académico', description: 'Añade una descripción breve del problema que resuelve y tu aporte.', tags: ['[TECNOLOGÍA]', '[TECNOLOGÍA]'], image: 'assets/projects/proyecto-1.svg', github: '[LINK_GITHUB]' },
    { number: '02', title: '[NOMBRE DEL PROYECTO]', category: 'Desarrollo web', description: 'Describe las funciones, las decisiones técnicas y lo que aprendiste.', tags: ['[TECNOLOGÍA]', '[TECNOLOGÍA]'], image: 'assets/projects/proyecto-2.svg', github: '[LINK_GITHUB]' },
    { number: '03', title: '[NOMBRE DEL PROYECTO]', category: 'Aplicación', description: 'Reemplaza esta tarjeta con un trabajo real tuyo o elimínala si no aplica.', tags: ['[TECNOLOGÍA]', '[TECNOLOGÍA]'], image: 'assets/projects/proyecto-3.svg', github: '[LINK_GITHUB]' }
  ];
  readonly knowledge = [ { icon: 'bi-code-slash', title: 'Desarrollo web', text: 'Fundamentos de estructura, estilos y programación para experiencias web.' }, { icon: 'bi-phone', title: 'Aplicaciones', text: 'Interés en crear herramientas digitales útiles y fáciles de utilizar.' }, { icon: 'bi-database', title: 'Bases de datos', text: 'Conocimientos por completar sobre modelado y gestión de información.' }, { icon: 'bi-bezier2', title: 'Diseño de interfaces', text: 'Atención a la claridad, accesibilidad y adaptación a dispositivos.' } ];
  closeMenu(): void { this.menuOpen = false; }
  onSubmit(event: SubmitEvent): void {
    event.preventDefault(); const form = event.target as HTMLFormElement; const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get('subject') ?? 'Consulta desde mi portafolio'));
    const body = encodeURIComponent('Hola, soy ' + String(data.get('name') ?? '') + '.\n\n' + String(data.get('message') ?? '') + '\n\nResponder a: ' + String(data.get('email') ?? ''));
    window.location.href = 'mailto:' + this.profile.email + '?subject=' + subject + '&body=' + body;
  }
}
