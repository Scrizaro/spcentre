import { Stack, Typography } from "@mui/material"
import { useQuery, gql } from '@apollo/client'
import { useEffect, useState } from "react"
import AboutImageList from "./AboutImageList"

const ABOUTDATA = gql`
query getCourse {
    aboutUsImage {
      data {
        attributes {
          image_name
          image {
            data {
              attributes{
                url
              }
            }
          }
        }
      }
    }
  },
`
export const About = () => {
    const { data } = useQuery(ABOUTDATA)
    const [image, setImage] = useState(' ')
    console.log(data)
    useEffect(() => {
        setImage(data?.aboutUsImage.data.attributes.image_name)
    },[data])
    return (
        <Stack flexDirection={'column'} py={5} gap={5}>
            <Typography variant="h2" component="h2">
                Про нас
            </Typography> 
           <Stack flexDirection={'row'} boxShadow={'0px 2px 4px rgba(0, 0, 0, 0.1)'} p={3} borderRadius={6}>
           <Typography flex={1/3}>
                           LOGO
                    </Typography>
                    <Typography flex={2/3}>
                            Мене звуть Скляр Катерина, і я засновник та провідний тренер навчальних програм у Центрі супраментальної психології. Понад 20 років я працюю астрологом, духовним психологом та тренером. Ця професія дозволила мені здобути досвід спілкування з дуже великою кількістю людей. Багато років я допомагала людям шукати відповіді на свої питання, розбиратися в особливостях своєї долі, змінювати долю, шукати та знаходити вихід із проблем зі здоров’ям, кар’єрою, особистим життям, виходити з криз, виховувати дітей згідно з духовними знаннями.
                    </Typography>
           </Stack>
           <Stack flexDirection={'row'} boxShadow={'0px 2px 4px rgba(0, 0, 0, 0.1)'} p={3} borderRadius={6}>
           <Typography flex={1/3}>
                           LOGO
                    </Typography>
                    <Typography flex={2/3}>
                    Іван Князев.  Куратор Центру. Координатор напрямків та проектів, що пов'язані з розвитком Центру.
                    </Typography>
           </Stack>
           <AboutImageList />
        </Stack>
    )
}