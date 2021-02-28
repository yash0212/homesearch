import React from 'react';

class List extends React.Component {
    render() {
        const { listings } = this.props;
        return (
            <div className="list-wrapper flex p-1">
                {listings.map((listing,index) => {
                    return (
                        <div className="list-item bg-blue-400 text-white rounded m-2 px-3 py-2 w-1/2" key={index}>
                            <div className="flex justify-between align-center">
                                <div className="text-2xl font-semibold">{listing.name}</div>
                                <div className="text-xl">{listing.address}</div>
                            </div>
                            <div className="mt-2">{listing.city}</div>
                            <div className="mt-2 text-xl">{listing.price}</div>
                            <div className={`${listing.type === 'Rental' ? 'bg-pink-400' : 'bg-yellow-500'} max-w-min rounded px-2 py-1 mt-2`}>{listing.type}</div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default List;