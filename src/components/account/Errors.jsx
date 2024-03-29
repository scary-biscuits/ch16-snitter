const Errors = (props) => {
    console.log(props)
    return ( 
        <div>
      <p>{props.error.name}</p>
      
      <p>{props.error.message}</p>
    </div>
     );
}
 
export default Errors;