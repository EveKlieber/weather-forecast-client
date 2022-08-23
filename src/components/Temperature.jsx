import Typography from '@mui/material/Typography';

const Temperature = ({temp}) => {


  return (

    
      <Typography 
      variant="h3" 
      component="div"
      style={{color: `${temp>24 ? "red" : "blue"}`}}
      >
        <>
      {temp>0 && "+"}{temp}° 
      </>
      </Typography>
      
   

  )
}

export default Temperature;