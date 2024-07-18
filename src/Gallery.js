function Gallery(props){
    return (
        <div>
            <p> {props.Text}</p>
            <img alt="" src={props.src}/>
        </div>
    )
}
export default Gallery