import React from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";

function PortfoliosPage() {
  return (
    <MainLayout>
      <Title title={"Projects"} span={"projects"} />
      <InnerLayout>
        <Menu menuItem={portfolios} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfoliosPage;
