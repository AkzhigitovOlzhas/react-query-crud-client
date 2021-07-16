import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { Heading, Box } from "rebass/styled-components";
import { BookForm, Container } from "../shared";
import { createBook } from "../api";

export const CreateBook = () => {
  const history = useHistory();
  const { mutateAsync, isLoading } = useMutation(createBook);

  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    history.push("/");
  };

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Heading sx={{ marginBottom: 3 }}>Create New Book</Heading>
        <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  );
};
