import React from 'react'
import "./Resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="experience">
        <h2 className="section__title">Expérience</h2>

        <div className="resume__container grid">
          <div className="timeline grid">
            {/*eslint-disable-next-line*/}
            {Data.map((val, id) => {
                if (val.category === "education"){
                    return (
                        <Card key={id} 
                        icon={val.icon} 
                        title={val.title} 
                        year={val.year} 
                        desc={val.desc} />
                    )
                }
            })}
          </div>

          <div className="timeline grid">
            {/*eslint-disable-next-line*/}
            {Data.map((val, index) => {
                if (val.category === "experience"){
                    return (
                        <Card key={index} 
                            icon={val.icon} 
                            title={val.title} 
                            place={val.place}
                            year={val.year} 
                            desc={val.desc} />
                    )
                }
            })}
          </div>
        </div>
    </section>
  )
}

export default Resume