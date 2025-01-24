import ExamResults from "./ExamResults";    
const CoE = (res) => {
  return (
    <div>
        <h4>Paper correction is done.</h4>
      <h5>Mark updating in Process</h5>
      <ExamResults sgpa={res.sgpa} cgpa={res.cgpa}></ExamResults>
      
    </div>
     
  );
};
export default CoE;