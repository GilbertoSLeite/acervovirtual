import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
import { MotionContainer, varBounceIn } from "../../components/Animation";
import { Helmet } from "react-helmet";
import NotFound from "../../assets/Images/NotFound/NotFound.png";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

const Page404 = () => {
  return (
    <RootStyle>
      <Helmet>Página Não Encontrada</Helmet>
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            {/*<motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Desculpa, essa página não existe!
              </Typography>
            </motion.div>*/}
            <Typography sx={{ color: "text.secondary" }}>
              Desculpe, não foi possível encontrar a página que está procurando.
              Possivelmente digitou a URL errada.
            </Typography>

            {/*<motion.div variants={varBounceIn}>
              <Box
                component="img"
                src={NotFound}
                sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
              />
            </motion.div>*/}

            <Button
              to="/"
              size="large"
              variant="contained"
              component={RouterLink}
            >
              Volte para Página Principal
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
};

export default Page404;
