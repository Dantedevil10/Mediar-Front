import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceUService } from '../../services/service-u.service';

@Component({
  selector: 'app-telamensagem',
  templateUrl: './telamensagem.component.html',
  styleUrl: './telamensagem.component.css'
})
export class TelamensagemComponent {

  user: any; // Para armazenar os dados do usuário
  mensagens: any;
  errorMessage: string | null = null; // Para armazenar mensagens de erro, se necessário

  // filteredMessages: any[] = []; ignore essa variavel

  contatoSelecionado: string = "";
  selecionado: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private serviceUService: ServiceUService
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id'); // Pega o id da URL

    if (userId) {
      // Passa o id da rota para o serviço
      this.serviceUService.DadosUsers(userId).subscribe({
        next: (data) => {
          this.user = data; // Armazena os dados do usuário
          // console.log(data);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Erro ao carregar dados do usuário'; // Define mensagem de erro
        }
      });
    }

    this.serviceUService.DadosMensagens().subscribe({
      next:(data)=>{
        this.mensagens = data;
        // console.log(data)
      },
      error:(err)=>{
        console.error(err);
        this.errorMessage = 'Erro ao carregar dados do usuário'; // Define mensagem de erro
      }
    })


  }

  contatoSelect(contatoSelecionado: any) {
    // console.log(contatoSelecionado);
    if (contatoSelecionado) {
      this.selecionado = true;
    } else if (contatoSelecionado == "") {
      this.selecionado = false;
    } else {
      this.selecionado = false;
    }

    return this.contatoSelecionado = contatoSelecionado;
  }
}
