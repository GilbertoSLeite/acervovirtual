import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ls from "../../assets/Images/Logo/logo.png"

const SideBarLS = () => {
  return(
    <React.Fragment>
      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            p: 2.5,
            pt: 5,
            borderRadius: 2,
            position: 'relative',
            bgcolor: 'grey.200'
          }}>
          <Box
            component="img"
            src={ls}
            sx={{ width: 100, position: 'absolute', top: -50 }}/>
            <Box>
            <Typography>
                Soluções para
            </Typography>
            <Typography>
                Cidades Inteligentes
            </Typography>
            </Box>
            <Button
            fullWidth
            href="https://lsconsultorias.srv.br/home"
            target="_blank"
            variant="contained">
              Conheça
            </Button>    
        </Stack>
      </Box>
    </React.Fragment>
  )
}

export default SideBarLS;