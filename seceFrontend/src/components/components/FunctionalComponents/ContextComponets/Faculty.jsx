import CoE from "./CoE";
const Faculty=(res)=>{
    return(
        <div>
            <h4>Paper correction is in Process</h4>
            <CoE sgpa={res.sgpa} cgpa={res.cgpa}></CoE>
        </div>
    )
}
export default Faculty;