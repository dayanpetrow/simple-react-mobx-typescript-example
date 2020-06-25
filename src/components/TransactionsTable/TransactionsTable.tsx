import React from "react";
import { Wrapper } from "./styled";
import { Transaction } from "../../stores/TransactionStore";
import { toJS } from "mobx";
import moment from "moment";
import { DollarCircleOutlined } from "@ant-design/icons";

interface TransactionsTableProps {
  transactions: Transaction[];
  balance: number;
}

export default function TransactionsTable(props: TransactionsTableProps) {
  const transactions = toJS(props.transactions);

  return (
    <Wrapper hasProfit={props.balance >= 1000}>
      <div className={"Table"}>
        <div className={"TableHead"}>
          <div>Active purchases ({transactions.length})</div>
          <div className={"Profit"}>
            <DollarCircleOutlined /> {(props.balance - 1000).toFixed(2)}
          </div>
        </div>
        {transactions.length === 0 && (
          <div className={"EmptyTable"}>No active purchases were found.</div>
        )}
        {transactions.map((transaction: Transaction) => (
          <div className={"TableRow"}>
            <div className={"TableRow__date"}>
              {moment(transaction.date).format("d/MM/YY, HH:mm:ss ")}
            </div>
            <div className={"TableRow__type"}>{transaction.type}</div>
            <div className={"TableRow__price"}>{transaction.price}</div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
