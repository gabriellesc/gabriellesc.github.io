import React from 'react';

const Warehouse = ({ warehouse, cellDim, images }) => (
    <div className="row">
        <div className="col-xs-12" id="warehouse" style={{ display: 'table' }}>
            <div style={{ display: 'table-row-group' }}>
                {warehouse.map((row, i) => (
                    <div key={'row-' + i} style={{ display: 'table-row' }}>
                        {row.map((cell, j) => (
                            <div
                                key={'cell-' + i + '-' + j}
                                className="grid-cell"
                                style={{ display: 'table-cell', height: cellDim, width: cellDim }}>
                                {cell != '0' && (
                                    <img
                                        key={'img-' + i + '-' + j}
                                        src={
                                            'img/' +
                                            (cell == '1'
                                                ? images.rack
                                                : cell.startsWith('r')
                                                  ? images.icons[cell.slice(1)].robot
                                                  : images.icons[cell.slice(1)].goal)
                                        }
                                        style={{ width: cellDim, height: cellDim }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Warehouse;
