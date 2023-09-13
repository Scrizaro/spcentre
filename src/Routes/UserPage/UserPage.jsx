import { Container, Stack, Typography } from "@mui/material"
import UserPageContent from "./UserPageContent"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "../../features/userData/userData"


export const UserPage = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <Stack flexDirection={'column'} overflow={'hidden'}>
            {/* <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
      
        <UserPageContent />
      
            
        
            
        </Stack>
    )
}