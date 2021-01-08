import React, { useEffect } from 'react';
import './BKCHome.scss';
import { MainBtn } from '../../Components/BKC/BKCHomePage/MainBtn';
import { Booker } from '../../Components/BKC/BKCHomePage/Booker';
import { BookingInfor } from '../../Components/BKC/BKCHomePage/BookingInfor';
import { BookingDetail } from '../../Components/BKC/BKCHomePage/BookingDetail'
import { useDispatch } from 'react-redux';
import { emptyBookingDetails, emptyBookingInfor } from '../../ActionCreators/bkcActionCreators';
import { savePageName } from '../../ActionCreators/appActionCreators';


export const BKCHome = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(emptyBookingInfor());
        // dispatch(emptyBookingDetails());
        dispatch(savePageName("BookingCar"))
    });
    function handleSave(booker, bookingInfor, bookingDetails){

    }
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-xl-12">
                    <div className="card">
                        <div className="card-body">
                            <Booker />
                            <div className="mt-1"></div>
                            <BookingInfor />
                            <div className="mt-1"></div>
                            <BookingDetail />
                            <div className="mt-1"></div>
                            <MainBtn onSave={handleSave} />
                            <div className="mt-1"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}