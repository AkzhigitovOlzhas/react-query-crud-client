import { useQuery } from "react-query";
import { Flex } from "rebass/styled-components";
import { getAllBooks } from "../api";
import { Container } from "../shared";
import Loader from "react-loader-spinner";
import { BookRemoveBtn } from "./BookRemoveBtn";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

function changeProp(data) {
  return data.map((item) => {
    return { key: item.id, title: item.title, author: item.author };
  });
}

export const BookList = () => {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      render: (text, record) => (
        <Link to={`/update-book/${record.key}`}>{text}</Link>
      ),
    },
    {
      title: "Author",
      className: "column-money",
      dataIndex: "author",
      align: "right",
    },
    {
      dataIndex: "delete",
      render: (_, record) => <BookRemoveBtn id={record.key} />,
    },
  ];

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <Loader type="ThreeDots" color="#ccc" height={40}></Loader>
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return <span>Error: {error.message}.</span>;
  }
  let newData = changeProp(data);

  return (
    <Container>
      <Table
        pagination={false}
        columns={columns}
        dataSource={newData}
        bordered
      />
    </Container>
  );
};
