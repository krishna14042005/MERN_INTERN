const Gallery = (props) => {
    return(
        <div>
            <h2>welcome to {props.page} page</h2>
            <img src="sece.jpg" alt=""/>
            <h2>The image is {props.image}</h2>
        </div>
    );
};
export default Gallery;