import React from 'react'
import imgJS from "../img/js.jpg";
import imgPHP from "../img/php.png";
import imgExcel from "../img/excel.webp";

const Portfolio = () => {
  return (
    <div className='container-padre-portfolio'>

      <div className="container-portfolio">
        <div className="title-portfolio">My works</div>
        <div className="container-proyectos">
          <div className="container-proyectos-fila-1">

            <div className="container-proyecto">
              {/* <img src={imgJS} alt="" className="image-proyecto" /> */}
              <a href="https://lucasnavarro21.github.io/encriptador/" className='title-proyecto'>Encryptor</a>
            </div>
        
        
            <div className="container-proyecto">
              {/* <img src={imgPHP} alt="" className="image-proyecto" /> */}
              <a href="https://pair-drop-codigo-jc9xfs.flutterflow.app/" className='title-proyecto'>P2P FILE TRANSFER APP</a>
            </div>
          </div>

          <div className="container-proyectos-fila-1">
            <div className="container-proyecto">
              {/* <img src={imgExcel} alt="" className="image-proyecto" /> */}
              <a href="https://github.com/LucasNavarro21/PFinalComidaApp" className='title-proyecto'>Food order app</a>
            </div>

            <div className="container-proyecto">
              {/* <img src={imgPHP} alt="" className="image-proyecto" /> */}
              <a href="https://github.com/LucasNavarro21/forohub" className='title-proyecto'>Forohub</a>
            </div>
          </div>

      </div>
      </div>
    </div>
  )
}

export default Portfolio