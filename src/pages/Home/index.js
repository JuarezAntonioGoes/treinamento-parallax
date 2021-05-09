import React, { useEffect, useRef } from "react";
import "./style.css";

const Home = () => {
  const refImg = useRef([]);

  useEffect(() => {
    window.addEventListener("scroll", parallaxAnimation);
  }, []);

  const parallaxAnimation = (e) => {
    const scroll = e.currentTarget.scrollY;
    refImg.current[1].style.top = 50 + scroll * -0.5 + "%";

    refImg.current[0].style.top = scroll * -1.5 + "px";
    refImg.current[0].style.left = scroll * 2 + "px";

    refImg.current[2].style.top = scroll * -1.5 + "px";
    refImg.current[2].style.left = scroll * -5 + "px";

    refImg.current[3].style.marginTop = scroll * 1.5 + "px";

    refImg.current[4].style.top = scroll * -0.12 + "px";

    refImg.current[5].style.top = scroll * 0.25 + "px";

    refImg.current[6].style.top = scroll * -0.5 + "px";
  };

  return (
    <main className="main">
      <header id="header" ref={(e) => (refImg.current[6] = e)}>
        <a href="#teste" className="logo">
          Jungle
        </a>

        <ul>
          <li>
            <a href="#teste" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#teste">About</a>
          </li>
          <li>
            <a href="#teste">Destination</a>
          </li>
          <li>
            <a href="#teste">Contact</a>
          </li>
        </ul>
      </header>

      <section>
        <h2 id="text" ref={(e) => (refImg.current[1] = e)}>
          <span>Preparado para uma nova </span>
          <br /> Aventura
        </h2>

        <img
          src="./img/bird1.png"
          alt="bird"
          id="bird1"
          ref={(e) => (refImg.current[0] = e)}
        />

        <img
          src="./img/bird2.png"
          alt="bird"
          id="bird2"
          ref={(e) => (refImg.current[2] = e)}
        />

        <img
          src="./img/forest.png"
          alt="forest"
          id="forest"
          ref={(e) => (refImg.current[5] = e)}
        />

        <img
          src="./img/rocks.png"
          alt="rocks"
          id="rocks"
          ref={(e) => (refImg.current[4] = e)}
        />
        <img src="./img/water.png" alt="water" id="water" />

        <a href="#e" id="btn" ref={(e) => (refImg.current[3] = e)}>
          Explorar
        </a>
      </section>

      <div className="sec">
        <h2>Parallax efeito</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          error soluta deserunt tempore consequuntur natus optio! Accusantium
          est quisquam quo quia tempora doloremque, officiis optio deleniti, ea
          maiores nemo? Mollitia. Perferendis totam aliquid consequatur labore
          id. Cum, libero. Assumenda earum minus similique in autem optio,
          sapiente esse voluptate temporibus odio illum sint est fugiat
          laudantium ipsum dolorum aliquid voluptates officia? Illum tempore
          earum molestias, mollitia reiciendis nemo, repellendus laudantium
          ipsum fuga deserunt deleniti repudiandae! Quidem libero placeat
          delectus veniam eum sequi modi mollitia beatae molestias iste, alias
          repellendus nihil culpa. Natus ipsam commodi exercitationem accusamus
          fugiat sint. Ipsam veritatis saepe facere ducimus error at
          reprehenderit excepturi, soluta beatae consequuntur. Nostrum quia ut
          ullam mollitia cupiditate neque, accusantium laboriosam sint quod! Ad
          optio placeat eaque doloremque unde enim quod, magni hic molestias
          dolores, officiis id neque consectetur magnam rerum ut animi quas
          ipsum tenetur porro voluptates blanditiis recusandae mollitia illum.
          Temporibus. Perferendis ad eaque impedit, animi in odio sit ducimus
          nam reprehenderit, rem sed? Doloribus corrupti, pariatur esse debitis
          rerum vitae iure tempore ducimus ullam saepe eum, illum sunt aperiam
          cum! Ab libero, voluptatem labore enim iusto, architecto impedit
          beatae sunt incidunt, non voluptatibus quod eveniet nemo aspernatur ex
          quo in sit recusandae debitis rerum tempora asperiores quaerat
          suscipit. Illum, iusto. Distinctio exercitationem ducimus ullam eum
          provident sunt veritatis ea ex eaque. Soluta tempora optio odio neque
          totam cupiditate a ut mollitia voluptatem, minus eum quo quia unde
          blanditiis facilis natus. A, porro, magnam possimus ex perferendis
          nobis vero quidem laboriosam aliquid minus autem numquam veritatis
          aliquam blanditiis minima nostrum? Nobis harum error magni commodi
          asperiores sed nihil facere, esse voluptate! Exercitationem at
          praesentium vel maiores soluta. Maxime perspiciatis odio laboriosam
          voluptatem mollitia tenetur assumenda officia ad. Atque autem quis
          temporibus commodi exercitationem veritatis debitis natus minima,
          sapiente aperiam eum! Voluptatem! Neque eius blanditiis quam
          accusantium sunt laudantium nulla, architecto quos qui accusamus illum
          eos, dignissimos quis aspernatur officiis reprehenderit quas deleniti
          animi voluptates cum. Ipsum rerum ut sint libero nam! Officiis cum
          velit, provident quis optio ullam aut in inventore ipsam debitis
          commodi rerum ducimus asperiores nulla atque assumenda modi rem ipsa
          labore. Explicabo perspiciatis libero nam quia fuga? Labore.
          Voluptates repellat saepe est veritatis sapiente quasi quis cum
          accusantium dolor fuga ipsum animi reiciendis quibusdam velit, optio
          dolores possimus qui quia eligendi! Expedita fugiat aspernatur vero?
          Eligendi, nisi magni. Est, facilis repellendus quam beatae ipsum
          magnam blanditiis? Ad eum fuga sit aliquam doloribus repellendus
          quaerat iste placeat sint iure? Ea obcaecati excepturi rerum
          voluptatem cupiditate aliquid numquam ipsam accusamus? Perspiciatis et
          omnis, velit reprehenderit, fuga nemo nihil, hic nobis exercitationem
          assumenda maiores unde accusamus porro molestias officiis saepe quidem
          dolore tempore! Rem quaerat necessitatibus eius amet harum iusto
          tenetur. Tempore nemo optio natus, commodi, mollitia nisi deserunt
          delectus vero, beatae sint illo sequi vitae corporis accusantium saepe
          ducimus veniam. Officiis nesciunt aperiam necessitatibus beatae sed
          facilis dicta facere provident. Dolorem possimus sint illum aliquid
          quasi recusandae laborum porro quo minus impedit sit quidem repellat
          facere deserunt cupiditate cum nobis sunt libero, atque odio amet.
          Animi autem deserunt quam debitis? Pariatur placeat quidem odit natus
          ipsa tenetur saepe non nemo? Repellendus aliquam vero unde sint, quia
          dolores placeat ullam debitis assumenda quidem obcaecati quis dolorum
          facilis dolor? Laborum, expedita labore? Quam saepe, repellat unde
          commodi, dolore perspiciatis quibusdam ab corporis aut mollitia ipsam
          nihil, alias laudantium illo officiis animi labore inventore earum ex
          accusamus quos. Suscipit, sint tempore. Suscipit, sapiente. Modi
          molestias et omnis veniam ipsa suscipit praesentium quam quia est,
          perferendis voluptatem cum facilis in iure illo provident quasi fuga
          quisquam ipsum. Quam, odio quod illum veritatis accusantium ab!
        </p>
      </div>
    </main>
  );
};

export default Home;
