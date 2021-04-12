import React, { FunctionComponent, useState } from 'react';

interface OwnProps {
  data: any;
}

type TableProps = Omit<JSX.IntrinsicElements['table'], 'children'> & OwnProps;

const Table: FunctionComponent<TableProps> = props => {
    const [loan, setLoan] = useState(0);
    const [fee, setFee] = useState(0);
    const [apr, setApr] = useState(0);

    const { data } = props;

    return (
        <table width="100%">
              {data?.data?.length > 0 &&(
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
                        <td> {item.APR} </td>
                    </tr>
                )
            })}
            {data?.data?.length > 0 &&(
                <tr>
                    <th>-</th>
                    <th>{loan}</th>
                    <th>{fee}</th>
                    <th>{apr}</th>
                </tr>
            )}
        </table>
    );
};

export default Table;