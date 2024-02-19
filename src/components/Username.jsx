import PropTypes from "prop-types";
import styles from "./Username.module.css";
import { Container } from "@chakra-ui/react";

const Username = (props) => {
  const { username, isTalking } = props;

  return (
    <Container
      className={styles.username}
      bg={isTalking ? "red.500" : "green.500"}
      size={isTalking ? "lg" : "md"}
      shadow={"2xl"}
      rounded={"lg"}
      p={3}
    >
      {username}
    </Container>
  );
};

Username.propTypes = {
  username: PropTypes.string.isRequired,
  isTalking: PropTypes.bool,
};

export default Username;
