import * as React from "react";

import { motion } from "framer-motion";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const modalAnimation = {
  open: {
    y: [-50, 0],
    opacity: [0, 1],
    transition: {
      type: "spring",
      stiffness: 160,
    },
  },
};

const style = {
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  margin: "auto",
  boxShadow: 24,
  borderRadius: 4,
  p: 3
};

function SimpleAccordion({ acordion }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Mais Detalhes</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{acordion}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default function Topico({
  title,
  description,
  acordion,
  modalTitle,
  modalText,
  img
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    console.log("open");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ padding: "5px" }}>
      <CardActionArea>
        <CardMedia onClick={handleOpen} component="img" src={img} height="240" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {description}
          </Typography>
        </CardContent>
        <SimpleAccordion acordion={acordion} />
        <Modal
          open={open}
          onClose={handleClose}
        >
        <motion.div style={{ ...style, left: "50%" }} variants={modalAnimation} animate={"open"}>
            <Box
              sx={{ ...style, backgroundColor: "background.default" }}
              color="text.secondary"
            >
              <Typography variant="h6" component="h2" color="text.primary">
                {modalTitle}
              </Typography>
              <Typography sx={{ mt: 2 }} color="text.primary">
                {modalText}
              </Typography>
            </Box>
          </motion.div>
        </Modal>
      </CardActionArea>
    </Card>
  );
}
