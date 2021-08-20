import "./bootstrap.css";
import "./footer.css";

function Rodape() {
  return (
    <div className="content">
      <footer id="myFooter">
        <div className="container">
          <ul>
            <li>
              <a href="#sobre-mim">Sobre Mim</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
          <p className="footer-copyright">© 2021 Copyright - Renan Jansen</p>
        </div>
        <div className="footer-social" id="contato">
          <a
            href="https://www.linkedin.com/in/renan-jansen-760808191"
            className="social-icons"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/renanjansen" className="social-icons">
            <i class="bi-github" role="img" aria-label="GitHub"></i>
          </a>
          <a href="https://twitter.com/Renan_jansen" className="social-icons">
            <i class="bi bi-facebook"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Rodape;
