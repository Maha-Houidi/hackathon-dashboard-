import { useList } from '@pankod/refine-core';
import { Typography, Box, Stack } from '@pankod/refine-mui'
import {useState } from 'react'
import{
  PieChart,
}from 'components'

const Home = () => {

  const { data, isLoading, isError } = useList({
    resource: "statistics",
  })

  const allStatistics = data?.data ?? []
  console.log('stats',allStatistics)
  const totalTeams =  allStatistics[0] 
  const totalParticipants =  allStatistics[1]
  const totalRevenue = allStatistics[2]

return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D" >
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title="Teams"
          value={totalTeams }
          series={[12*100/50, 100-(12*100/50)]}
          colors={['#275be8', '#c4e8ef']}
        />
        <PieChart 
          title="Participants"
          value={totalParticipants }
          series={[32*100/200, 100-(32*100/200)]}
          colors={['#275be8', '#c4e8ef']}
        />
        <PieChart 
          title="Total Revenue"
          value={totalRevenue}
          series={[75, 25]}
          colors={['#275be8', '#c4e8ef']}
        /> 
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
      </Stack>
    </Box>
  ) 
}

export default Home