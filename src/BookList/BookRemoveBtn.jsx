import { useMutation, useQueryClient } from "react-query";
import { removeBook } from "../api";
import { Popconfirm } from "antd";
import "antd/dist/antd.css";
import { Link } from "rebass";
import Loader from "react-loader-spinner";

export const BookRemoveBtn = ({ id }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);
  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("books");
  };
  return (
    <Popconfirm title="Sure to delete?" onConfirm={remove}>
      {isLoading ? (
        <Loader type="Hearts" color="#00BFFF" height={17} width={40} />
      ) : (
        <Link> Delete </Link>
      )}
    </Popconfirm>
  );
};
