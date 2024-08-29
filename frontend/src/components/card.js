import React from 'react';

function Card({card}) {
    return (
        <div className={"h-[10rem w-[22rem] bg-gray-200 mx-auto my-4 py-2 rounded-xl border-gray-400 border-[1px]"}>
            <div className="card-title-part mx-4 my-2">
                <h3 className="card-title font-[500] text-gray-900">
                    {card.title}
                </h3>

            </div>
            <div className="horizontal-line h-[1px] w-full bg-gray-400"></div>
            <div className="card-description-part mx-4 my-2 text-gray-500">
                {card.description}
            </div>
        </div>
    );
}

export default Card;