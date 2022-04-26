import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-contentxt";

const Home = () => {
  const AuthCtx = useContext(AuthContext);
  //Delete after
  // const roles = [
  //   "Городничий",
  //   "Аммос Федорович",
  //   "Артемий Филиппович",
  //   "Лука Лукич",
  // ];
  // const strings = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
  // Аммос Федорович: Как ревизор?
  // Артемий Филиппович: Как ревизор?
  // Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
  // Аммос Федорович: Вот те на!
  // Артемий Филиппович: Вот не было заботы, так подай!
  // Лука Лукич: Господи боже! еще и с секретным предписаньем!`;

  // const mappedRoles = roles.map((role) => {
  //   const quotes = strings.split("\n");
  //   const personQuotes = quotes
  //     .map((quoteItem, index) => ({ index: index + 1, text: quoteItem }))
  //     .filter((quote) => quote.text.trim().startsWith(`${role}:`));
  //   return {
  //     role,
  //     quotes: personQuotes.map(
  //       (quote) =>
  //         `${quote.index}) ${quote.text
  //           .split(":")
  //           .filter((word, index) => index !== 0)
  //           .join(":")}`
  //     ),
  //   };
  // });

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={AuthCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
