import Head from "next/head";
import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/layout";

import { Table } from "../../components/common/Table";
import { Hint } from "../../models/Hint";

import type { NextPage } from "next";
import { getManyBase } from "../../services/common";
import { hintResource } from "../../services/hint";

const Home: NextPage = () => {
  const [hints, setHints] = useState<Hint[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const hints = await getManyBase<Hint>({
        resource: hintResource,
      });

      setHints(hints);
    };

    fetchData();
  }, []);

  const columns = ["Autor", "Livro", "Sentença"];

  const tableContent = hints.map((hint) => {
    const getContent = (values: (string | undefined)[]) =>
      values.map((value) => (value ? value : "-"));

    return {
      id: hint.id as string,
      values: getContent([hint.author, hint.book, hint.tip]),
    };
  });

  return (
    <Box>
      <Head>
        <title>Sentenças</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box role="main" p={"2rem"}>
        <Table
          title="Sentenças"
          columns={columns}
          columnsContent={tableContent}
        />
      </Box>
    </Box>
  );
};

export default Home;
