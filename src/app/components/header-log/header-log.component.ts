import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceUService } from '../../services/service-u.service';

@Component({
  selector: 'app-header-log',
  templateUrl: './header-log.component.html',
  styleUrl: './header-log.component.css'
})
export class HeaderLogComponent {

  user: any; // Para armazenar os dados do usuário
  errorMessage: string | null = null; // Para armazenar mensagens de erro, se necessário

  constructor(
    private route: ActivatedRoute,
    private serviceUService: ServiceUService
  ) {}


  ngOnInit(){
    const userId = this.route.snapshot.paramMap.get('id');

    if (userId) {
      // Busca os dados do usuário usando o serviço
      this.serviceUService.DadosUsers().subscribe({
        next: (data) => {
          this.user = data; // Armazena os dados do usuário
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Erro ao carregar dados do usuário'; // Define mensagem de erro
        }
      });
    }
  }
  

  isMenuOpen = false; //Menu De Perfil

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
