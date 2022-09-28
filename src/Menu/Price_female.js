import React from 'react';
import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';



export default function Price_female() {
    return (
        <>
            < Navbar />
            <div className='col-12 p-0 m-0'>
                <div class="flow row col-12 mg101">
                    <h1>ราคาหอพักนักศึกษาหญิงมหาวิทยาลัยเชียงใหม่</h1>
                    <p>Chiang Mai University student dormitory prices</p>
                </div>
            </div>
            <div class="container">

                <div class="row py-3">
                    <div class="col-lg-7 mx-auto">
                        <div class="card shadow mb-4">
                            <div class="card-body p-5">
                            <h4 class="mb-4 text-purple "><strong>หอพักนักศึกษาหญิงอาคาร 1,2 และ 3 </strong></h4>
                                <ul class="list-unstyled">
                                <h6 class="mb-2 "><strong>ค่าบำรุงหอพักนักศึกษา</strong> </h6>
                                    <li class="mb-2">- ภาคเรียนปกติ คนละ 1,200 บาท/เทอม</li>
                                    <li class="mb-2">- ภาคเรียนฤดูร้อน คนละ 600 บาท/เทอม</li>
                                    <h6 class="mb-2"><strong>ค่าสาธารณูปโภค</strong> </h6>
                                    <li class="mb-2">- ภาคเรียนปกติ คนละ 1,000 บาท/เทอม</li>
                                    <li class="mb-2">- ภาคเรียนฤดูร้อน คนละ 400 บาท/เทอม</li>
                                    <h6 class="mb-2"><strong>ค่าประกันของเสียหาย</strong> </h6>
                                    <li class="mb-2">- คนละ 100 บาท ต่อ/เทอม</li>
                                    <h6 class="mb-2"><strong>ค่าทำความสะอาด</strong> </h6>
                                    <li class="mb-2">- นักศึกษาจ่ายค่าทำความสะอาด 100 บาท/ปีการศึกษา</li>
                                    <h5 class="mt-4 text-center text-red"><strong>สรุปค่าใช้จ่ายต่อเทอมในการเข้าพัก</strong> </h5>
                                    <li class="mb-2"><strong>สำหรับเข้าพักใหม่ (แรกเข้า)</strong></li>
                                    <li class="mb-2">- 2,400 บาท/เทอม</li>
                                    <li class="mb-2"><strong>สำหรับเดือนถัดไป</strong></li>
                                    <li class="mb-2">- 2,200 บาท/เทอม</li>

                                </ul>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
            < Footer />
        </>
    );
}