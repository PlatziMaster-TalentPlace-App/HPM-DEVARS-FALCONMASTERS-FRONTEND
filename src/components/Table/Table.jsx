import React from "react";
import "./Table.scss";
import { BsChevronCompactDown } from "react-icons/bs";
import Card from "../Card/Card";
import List from "../List/List";

const Table = ({
  cardWidth = "620px",
  cardHeight = "460px",
  application,
  title,
  options,
  buttonTitle,
  listGridTemplateColumns,
}) => (
  <Card cardWidth={cardWidth} cardHeight={cardHeight}>
    <header className="table__header">{title}</header>
    <section className="table__section">
      {options.map((option) => (
        <List
          key={option.id}
          application={application}
          career={option.career}
          name={option.name}
          salary={option.salary}
          coin={option.coin}
          status={option.status}
          buttonTitle={buttonTitle}
          listGridTemplateColumns={listGridTemplateColumns}
        />
      ))}
    </section>
    <footer className="table__footer">
      VER MÁS
      <BsChevronCompactDown />
    </footer>
  </Card>
);

export default Table;
