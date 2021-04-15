import React, { FunctionComponent } from 'react';
import { numberWithCommas } from '../../../utils/globals';
import Style from './Table.module.scss';

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
    <table width="100%" className={Style.table}>
      {data?.data?.length > 0 && (
        <thead>
          <tr>
            <th>creditor</th>
            <th>loan</th>
            <th>fee</th>
            <th>APR</th>
          </tr>
        </thead>
      )}
      <tbody>
        {data?.data?.map((item: any, index: number) => {
          return (
            <tr key={`table-row-${index}`}>
              <td>{item.creditor} </td>
              <td>{numberWithCommas(item.loan)} SEK</td>
              <td>{numberWithCommas(item.fee)} SEK</td>
              <td> {item.apr} %</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {data?.data?.length > 0 && (
          <tr>
            <th>After our help:</th>
            <th>{numberWithCommas(totalLoan)} SEK</th>
            <th>{numberWithCommas(totalFee)} SEK</th>
            <th>{totalApr.toFixed(2)} %</th>
          </tr>
        )}
      </tfoot>
    </table>
  );
};

export default Table;
