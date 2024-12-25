import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


const Banner = () => {
  return (
    <>
    
    <div className="banner_top">
      <div className="container">
        <div className="banner_part_content">
          <div className="first_part">
            <div className="fot_text">
              <p>Ingenieur Dieter Weiss</p>
              <h2>Ingenieurbüro für Bau- und <br /> Vermessungswesen</h2>
              <p>Wenn Sie zuverlässige Ingenieure brauchen – das <br /> Ingenieurbüro Dieter Weiss ist Garant für den Er­folg <br /> Ihrer Projekte.</p>
              <div className="ekflex">
              <Link to={'#'}>Ihr Projekt mit uns</Link>
              <IoIosArrowForward />
              </div>
            </div>
            <img src="Img/minbanner.png" alt="banner" />

          </div>
         
        </div>
      </div>

      {/* =========================      card start */}
      <div className="secend_part">
          <div className="container">
            <div className="all_flex">

            <div className="two_part">
              <div className="for_text">
                <h3>Unsere Dienstleistungen</h3>
                <p>Dienstleistung ist für unsere Mitarbeiter Herausforderung, das ist die Stärke unseres Teams. Ganz gleich, ob Verkehrsplanungen, Ver- und Ent­sorgung, Lärmschutz oder Spezialgebiete – wir bieten Rundum-Service mit:</p>
              </div>
            <img src="Img/minbanner.png" alt="banner" />
          </div>

            <div className="single_card">
              <div className="all_card">
               <img src="Img/cornar1.png" alt="demo" />
            <h4>Studien und Konzepte, <br /> Gesamtplanung</h4>
             <p>Neubau und Ausbau von Straßen, Verkehrsflächen, Wasserwegen und Eisenbahnen erfordert überzeugende Verkehrskonzepte.</p>
            <div className="ek_link">
            <Link to={'#'}>Erfahren Sie mehr</Link>
            <IoIosArrowForward />
            </div>
              </div>

              <div className="all_card">
               <img src="Img/cornar2.png" alt="demo" />
            <h4>Studien und Konzepte, <br /> Gesamtplanung</h4>
             <p>Verkehrskonzepte sind ein entscheidender Faktor jeglicher Infrastruktur. Das Ingenieurbüro Weiss hat deshalb ein Expertenteam aufgebaut.</p>
            <div className="ek_link">
            <Link to={'#'}>Erfahren Sie mehr</Link>
            <IoIosArrowForward />
            </div>
              </div>

              <div className="all_card">
               <img src="Img/cornar3.png" alt="demo" />
            <h4>Studien und Konzepte, <br /> Gesamtplanung</h4>
             <p>Bei Ausführung sämtlicher vermessungs -technischer Aufgaben im Leistungsbild „Ent­wurfs­vermessung“ sind wir ein leistungsstarker.</p>
            <div className="ek_link">
            <Link to={'#'}>Erfahren Sie mehr</Link>
            <IoIosArrowForward />
            </div>
              </div>

            </div>

            </div>
           {/* =========================      big  card  */}
           <div className="big_cards">
            <div className="text_big">
              <p>Unsere Firmenhistorie</p>
              <h2>Diplom-Ingenieur Dieter Weiss gründete im Jahre 1971 sein Ingenieurbüro.</h2>
              <p>Fast 30 Jahre lang führte er es als Alleininhaber. 1998 trat Sohn Klaus weiss als Stellvertreter an die Seite seines Vaters. Seit 2006 ist Diplom-Ingenieur Klaus Weiss alleiniger Geschäftsführer</p>
              <div className="big_link">
            <Link to={'#'}>Lesen Sie weiter</Link>
            <IoIosArrowForward />
            </div>
            </div>
            <img src="Img/photo.png" alt="Pho" />
           </div>

          </div>
          </div>
    </div>

    </>
  )
}

export default Banner