import Faculty from "./Faculty";
const Invigilator = (res) => {
  return (
    <div>
      <h3>Invigilation in Process</h3>
      <Faculty sgpa={res.sgpa} cgpa={res.cgpa}/>
    </div>
  );
};
export default Invigilator;