import {lazy,Suspense} from "react";
const LasyComponent = lazy(() => import("../About"))
const LazyLoadingWithSuspense = () =>{
    return(
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
            <h1>This is LazyLoading Componenet with Suspence</h1>
            <LasyComponent/>
            </Suspense>
            
        </div>
    )
}
export default LazyLoadingWithSuspense;