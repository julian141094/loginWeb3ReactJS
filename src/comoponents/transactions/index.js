import React, { useState } from "react";
import useMetaMask from "../../hooks/metaMask";
import CustomTable from "../basics/table";
import { Card } from "react-bootstrap";
import { headers } from "../../constants";
import SendTransaction from "../sendTransaction";
import SeeTransaction from "../seeTransaction";

const List = () => {
  const { isActive, transactions } = useMetaMask();
  // console.log("Las tansacciones => ", transactions);
  // Consts

  const [filterValue, setFilterValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const OptionValue = (item) => {
    return <SeeTransaction item={item} />;
  };

  return isActive ? (
    <>
      <Card className="rounded">
        <Card.Body>
          <CustomTable
            headers={headers}
            body={transactions}
            action={OptionValue}
            options={{
              responsive: true,
              striped: true,
              bordered: true,
              hover: true,
            }}
            optionsheader={{
              title: "Transactions",
              total: transactions.length,
              updatefilter: setFilterValue,
              updateselect: setSelectValue,
              filtercomponent: <SendTransaction />,
            }}
          />
        </Card.Body>
      </Card>
    </>
  ) : null;
};

export default List;
