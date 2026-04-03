import { test } from '@playwright/test';
import data from '../../testdata/booker.json';

test('API testing', async({request})=>{
    let baseURL = data.baseURL;

    // Create Token
    let r1 = await request.post(`${baseURL}/auth`, {
        data: {
            username: data.username,
            password: data.password
        }, ignoreHTTPSErrors: true
    })
    console.log(await r1.json());
    let token = (await r1.json()).token;
    console.log(token);

    // Get All Bookings
    let r2 = await request.get(`${baseURL}/booking`, {
        ignoreHTTPSErrors: true
    })
    console.log(await r2.json());
    let bookingId = (await r2.json())[0].bookingid;
    console.log(bookingId);


    // Specific Booking
    let r3 = await request.get(`${baseURL}/booking/${bookingId}`, {
        ignoreHTTPSErrors: true
    })
    console.log(await r3.status());
    console.log(await r3.json());


    // Create Booking
    let r4 = await request.post(`${baseURL}/booking`, {
        data: {
            firstname: data.firstname,
            lastname: data.lastname,
            totalprice: data.totalprice,
            depositpaid: data.depositpaid,
            bookingdates: {
                checkin: data.bookingdates.checkin,
                checkout: data.bookingdates.checkout
            },
            additionalneeds: data.additionalneeds
        }, ignoreHTTPSErrors: true
    })
    console.log(await r4.status());
    console.log(await r4.json());
    let newBookingId = (await r4.json()).bookingid;
    console.log(newBookingId);

    let r5 = await request.put(`${baseURL}/booking/${newBookingId}`, {
        headers: {
            Cookie: `token=${token}`
        },
        data: {
            firstname: data.firstname,
            lastname: data.lastname,
            totalprice: data.totalprice,
            depositpaid: data.depositpaid,
            bookingdates: {
                checkin: data.bookingdates.checkin,
                checkout: data.bookingdates.checkout
            },
            additionalneeds: data.additionalneeds
        }, ignoreHTTPSErrors: true
    })
    console.log(await r5.status());
    console.log(await r5.json());
})