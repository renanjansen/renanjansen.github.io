import './bootstrap.css';
function Graduacoes(){
  return(
    <div>
    <hr />
    <h1 class="text-center bg-ligth pt-2 pb-2 mb-0" id="grad_cert">Graduações & Certificações :</h1>
   
    <div class="list-group text-center">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-3 ">Tecnólogo em Análise e Desenvolvimento de Sistemas</h5>
    <small>Centro universitário UniDomBosco</small>
    </div>
    <p class="mb-3 mt-2">A tecnologia baseada em recursos computacionais contribui, cada vez mais, em todas as área do conhecimento humano. Em suas múltiplas vertentes, desde a gestão dos recursos computacionais até as questões técnicas de Hardware e Software, se apresentam como possibilidade de evolução do conhecimento humano. O curso de análise e desenvolvimento de sistemas foca no aspecto técnico o desenvolvimento de soluções para os problemas do mercado.
    
    Mercado</p>
    <small>2020 - até a presente data.(previsão de formatura 2022)</small>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-3">Técnico em mecatrônica</h5>
    <small class="text-muted">Instituto Monitor</small>
    </div>
    <p class="mb-1">Quem faz o curso Técnico em Mecatrônica do Instituto Monitor fica apto a trabalhar em todo tipo de indústria, desenvolvendo e fazendo a manutenção de máquinas controladas por computador. Para isso, aprende de forma combinada, Elétrica, Mecânica e Informática</p>
    <small class="text-muted">2019 até 2020</small>
    </a>
    </div>
    </div>
    
    );
}
export default Graduacoes;