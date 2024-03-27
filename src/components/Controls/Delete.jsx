import { isMySneet } from "../../utils"
import { deleteSneet } from "../../redux/sneetSlice"
import { useDispatch, useSelector } from "react-redux"
import { selectAuthenticatedUser } from "../../redux/userSlice"

const Delete = (props) => {
    const authenticatedUser = useSelector(selectAuthenticatedUser);
const dispatch = useDispatch();

if (isMySneet(props.sneet.user.id, authenticatedUser.id)) {
    return (
        <button onClick={() => {
            console.log(props.sneet.id)
            dispatch(deleteSneet(props.sneet.id))
          }}><div className="control-icon"><img className="svg" src="./public/icons/trash-can-solid.svg"/></div></button>
    )
}

}
 
export default Delete;