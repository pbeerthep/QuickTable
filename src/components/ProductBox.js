function ProductBox(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <img alt="" src={props.imgUrl} width="100"/>
            <p>{props.price}</p>
            <hr/>
        </div>
    );
}

export default ProductBox