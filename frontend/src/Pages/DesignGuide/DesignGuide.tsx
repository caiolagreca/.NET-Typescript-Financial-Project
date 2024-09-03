import React from "react";
import RatioList from "../../Components/RatioList/RatioList";
import Table from "../../Components/Table/Table";
import { CompanyKeyMetrics } from "../../company";
import { testIncomeStatementData } from "../../Components/Table/testData";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>
        Design Guide - These are reusable components of the app with brief
        instructions on how to use them.
      </h1>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table />
      <h3>Table -</h3>
    </>
  );
};

export default DesignGuide;
