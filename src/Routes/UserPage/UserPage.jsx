import { Container, Stack, Typography } from "@mui/material"
import UserPageContent from "./UserPageContent"

export const UserPage = () => {
    return (
        <Stack flexDirection={'column'} overflow={'hidden'}>
             {/* <Stack>
                <Typography>Привіт Алексей!</Typography>
            </Stack>
            <Stack>
                <Typography>Твої курси</Typography>
            </Stack>
            <Stack>
                
            </Stack> */}
            <UserPageContent />
        
            
        </Stack>
    )
}