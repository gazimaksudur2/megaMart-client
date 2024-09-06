import { IoIosPricetags } from "react-icons/io";

const Card = ({ cardData }) => {
    return (
        <div>
            <div class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
                <img
                    class="object-cover object-center w-full h-56"
                    src={cardData?.photoUrl}
                    alt="avatar"
                />

                <div class="flex items-center px-6 py-3 bg-gray-900">
                    <svg
                        aria-label="headphones icon"
                        class="w-6 h-6 text-white fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
                        />
                    </svg>

                    <h1 class="mx-3 text-lg font-semibold text-white">{cardData?.category}</h1>
                </div>

                <div class="px-6 py-4">
                    <h1 class="text-xl font-semibold text-gray-800">
                        {cardData?.name}
                    </h1>

                    <p class="py-2 text-gray-700">
                        {cardData?.description}
                    </p>

                    <div class="flex items-center mt-4 text-gray-700 gap-3">
                        <svg
                            aria-label="suitcase icon"
                            class="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M14 11H10V13H14V11Z" />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                            />
                        </svg>
                        <div className="flex items-center justify-start">
                            <h1>Brand : </h1>
                            <h1 class="px-2 text-sm">{cardData?.brand}</h1>
                        </div>
                    </div>

                    <div class="flex items-center mt-4 text-gray-700 gap-4">
                        <IoIosPricetags size={20} />
                        <div className="flex items-center justify-start">
                            <h1>Price : </h1>
                            <h1 class="px-2 text-sm">$ {cardData?.price}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;