import myResume from "../assets/resume.json";
import "./ResumeComp.css";

export default function ResumeComp(){
    return(
        <>
           <div className="headerWrk"><h2>Work Experience</h2></div> 
        {myResume.work.map((wrk,i) => {
            return(
               <article key={i}>
                <h3>{wrk.title}</h3>
               <h4>{wrk.name}</h4>
               <h5>{wrk.years}</h5>
               <p>{wrk.description}</p>
               </article> 
           )
        })}

        <div className="headerEdu"><h2>Education</h2></div>
        {myResume.education.map((edu,i) => {
            return(
               <article className="infoEdu"key={i}>
                <h3>{edu.name}</h3>
               <h4>{edu.years}</h4>
               <p>{edu.description}</p>
               </article> 
           )
        })} 
        
        </>

    )

}