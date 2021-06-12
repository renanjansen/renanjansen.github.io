import './bootstrap.css';
import perfil from './img/perfil.jpg';

function Sobremim (){
  
  return(
  
  <div class="conteiner-fluid text-center bg-light pt-5 mb-0">
  
   <img src={perfil} class="border rounded-circle img-fluid border-dark border-5"/>
   <h1 id="sobre-mim" class="pb-3 pt-4 fs-1">Olá, eu sou Renan Jansen</h1>
   <p class="fs-1">Técnico em mecatrônica, estudante de análise e desenvolvimento de sistemas, descobri na pandemia de 2019/2021 um mundo totalmente novo e repleto de oportunidades.</p>
   <p class="fs-1">Tenho dedicado horas de meus dias em estudos e atividades práticas, tendo afiniade e interesse tanto em back quanto front-end.</p>
   <p class="fs-1">Busco uma primeira oportunidade no mercado e acredito que a tendo poderei otimizar minhas capacidades e desenvolver outras habilidades latentes.</p>
  </div>
 
  );
}
  
  
  
  export default Sobremim;