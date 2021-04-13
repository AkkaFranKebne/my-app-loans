import React, { FunctionComponent } from 'react';

interface OwnProps {
  data: any;
  total: {
    totalLoan: any;
    totalFee: any;
    totalApr: any;
  };
}

type TableProps = Omit<JSX.IntrinsicElements['table'], 'children'> & OwnProps;

const Table: FunctionComponent<TableProps> = props => {
  const { data, total } = props;
  const { totalLoan, totalFee, totalApr } = total;

  return (
    <table width="100%">
      {data?.data?.length > 0 && (
        <tr>
          <th>creditor</th>
          <th>loan</th>
          <th>fee</th>
          <th>APR</th>
        </tr>
      )}
      {data?.data?.map((item: any) => {
        return (
          <tr>
            <td>{item.creditor} </td>
            <td>{item.loan} </td>
            <td>{item.fee} </td>
            <td> {item.apr} </td>
          </tr>
        );
      })}
      {data?.data?.length > 0 && (
        <tr>
          <th>Total:</th>
          <th>{totalLoan} SEK</th>
          <th>{totalFee} SEK</th>
          <th>{totalApr} %</th>
        </tr>
      )}
    </table>
  );
};

export default Table;
