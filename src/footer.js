import './bootstrap.css';
import './footer.css';

function Rodape (){
  return(
    <div class="content">
    
    <footer id="myFooter">
    <div class="container">
    <ul>
    <li><a href="#sobre-mim">Sobre Mim</a></li>
    <li><a href="#contato">Contato</a></li>
    </ul>
    <p class="footer-copyright">© 2021 Copyright - Renan Jansen</p>
    </div>
    <div class="footer-social" id="contato">
    <a href="https://www.linkedin.com/in/renan-jansen-760808191" class="social-icons"><i class="fa fa-linkedin"></i></a>
     <a href="https://github.com/renanjansen" class="social-icons"><i class="fa fa-github"></i></a>
    <a href="https://twitter.com/Renan_jansen" class="social-icons"><i class="fa fa-twitter"></i></a>
    </div>
    </footer>
    </div>
    
    );
}
export default Rodape;