import React from "react";

const Contact = () => {
  return (
    <div className="container-padre-contact">
      <div className="container-portfolio">
        <div className="title-portfolio">Contact Me</div>
        <div className="container-proyectos">
          <div className="container-proyectos-fila-1">
            <div className="container-contact">
              {/* <img src={imgJS} alt="" className="image-proyecto" /> */}
              <p href="" className="title-contact">
                My Adress
              </p>
            </div>

            <div className="container-contact" >
              {/* <img src={imgPHP} alt="" className="image-proyecto" /> */}
              <p href="" className="title-contact" id="email">
                Email Me
              </p>
            </div>
          </div>

          <div className="container-proyectos-fila-1">
            <div className="container-contact">
              {/* <img src={imgExcel} alt="" className="image-proyecto" /> */}
              <a href="https://www.linkedin.com/in/lucas-navarro-5a2243206/" className="title-contact" id="linkedin">
                Linkedin
              </a>
            </div>

            <div className="container-contact">
              {/* <img src={imgPHP} alt="" className="image-proyecto" /> */}
              <p  className="title-contact" id="number">
                Call Me
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
