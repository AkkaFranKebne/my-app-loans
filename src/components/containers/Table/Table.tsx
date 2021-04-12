import React, { FunctionComponent, useEffect } from 'react';

interface OwnProps {
  data: any[];
}

type TableProps = Omit<JSX.IntrinsicElements['div'], 'children'> & OwnProps;

const Table: FunctionComponent<TableProps> = props => {
    const { data } = props;
    return (
        <div>
            {data?.map((item: any) => {
                return (
                    <div>
                        creditor: {item.creditor} 
                        loan: {item.loan} 
                        fee: {item.fee} 
                        apr: {item.APR} 
                    </div>
                )
            })}
            </div>
    );
};

export default Table;