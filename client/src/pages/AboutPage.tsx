import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1 style={{textAlign:'center'}}>О нас</h1>
      <p style={{textAlign:'center'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum
        vero, repudiandae expedita beatae iure? Mollitia tempore quae qui
        voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatum, repellat! Quia modi facere, aspernatur iure deleniti, omnis
        similique vel neque in ipsum voluptate enim necessitatibus officia
        tempore nobis excepturi? At! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Non nostrum vero, repudiandae expedita beatae iure?
        Mollitia tempore quae qui voluptatum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatum, repellat! Quia modi facere,
        aspernatur iure deleniti, omnis similique vel neque in ipsum voluptate
        enim necessitatibus officia tempore nobis excepturi? At! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Non nostrum vero,
        repudiandae expedita beatae iure? Mollitia tempore quae qui voluptatum.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        repellat! Quia modi facere, aspernatur iure deleniti, omnis similique
        vel neque in ipsum voluptate enim necessitatibus officia tempore nobis
        excepturi? At!
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <button className="btn" onClick={() => history.push("/")}>
          Обратно к списку дел
        </button>
      </div>
    </>
  );
};
