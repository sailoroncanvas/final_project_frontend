import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';



export const CasualPage = () => {
    return (
        <div>

            <div>
                <Link to="/sotd">
                    <button>
                        <BackIcon />
                    </button>
                </Link>
            </div>

            <div className="text-center py-6 font-bold text-4xl font-lobster text-black mt-6">#Casual</div>

            <div className='justify-center'>
                <div className="flex flex-col space-y-12 ">


                    <div>
                        <div className="flex flex-row space-x-12 justify-center py-12 px-4">


                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt=""
                                    className="w-52 h-52 object-cover"
                                />
                                <div className="font-bold mt-2 text-center">면 소재의 티셔츠</div>
                            </div>



                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                                    alt=""
                                    className="w-52 h-52 object-cover"
                                />
                                <div className="font-bold mt-2 text-center">얇은 반소매 셔츠</div>
                            </div>

                        </div>

                        <div>
                            <div className="flex flex-row space-x-12 justify-center py-12 px-4">

                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1575429885953-bdd542481522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        alt=""
                                        className="w-52 h-52 object-cover"
                                    />
                                    <div className="font-bold mt-2 text-center">워싱 데님 반바지</div>
                                </div>


                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1596047510016-0055e71b35d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
                "
                                        alt=""
                                        className="w-52 h-52 object-cover"
                                    />
                                    <div className="font-bold mt-2 text-center">반소매 청 원피스</div>
                                </div>

                            </div>

                        </div>










                        <div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
