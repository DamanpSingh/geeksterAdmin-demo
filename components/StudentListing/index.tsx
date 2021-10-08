import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import {
    tableHeading,
    maxPageNumber,
    defaultPageOptions,
    listingFilerts
} from './studentListingConstants';

interface Props { };

const tempStudentData = require('./temp.json');

const StudentListing: React.FC<Props> = ({ }) => {

    const [studentList, setStudentList] = useState([]);
    const [currPage, setCurrPage] = useState(defaultPageOptions.pageNumer);
    const { register, handleSubmit } = useForm();
    const filterSubmitRef = useRef(null);
    const [filterData, setFilterData] = useState({});
    const onSubmit = (data) => { setFilterData(data) };
    const [startPage, setStartPage] = useState(1);
    
    const getStudentsList = (
        pageNumer: number,
        size: number,
        orderBy: string,
        orderDeriction: string,
        filter: string
    ) => {
        // Call the API
        //console.log('Calling API with params:' + `pageNumer=${pageNumer}&size=${size}&orderBy=${orderBy}&orderDeriction=${orderDeriction}&filter=${filter}`);
        let data = tempStudentData.data;
        setStudentList(data);
    }

    const getFilterString = () => {
        // build a filterString based on choosen options
        console.log(filterData);
        return '';
    }

    useEffect(() => {
        let filterString = getFilterString();
        getStudentsList(
            currPage || defaultPageOptions.pageNumer,
            defaultPageOptions.size,
            defaultPageOptions.orderBy,
            defaultPageOptions.orderDeriction,
            filterString || defaultPageOptions.filter
        );
    }, [filterData])

    return (
        <React.Fragment>
            <div className="listingHeader">
                <div className="studentsList">Students list</div>
                <button className="btnPrimary">
                    <Link href={`/students/newStudent`}><a className="navTitle">Add new student</a></Link>
                </button>
            </div>
            <div className="listingFilters">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register(listingFilerts.nameEmail.value)} placeholder={listingFilerts.nameEmail.placeholder} />
                    <input {...register(listingFilerts.programEnrolled.value)} placeholder={listingFilerts.programEnrolled.placeholder} />
                    <input {...register(listingFilerts.contactNo.value)} placeholder={listingFilerts.contactNo.placeholder} />

                    <select {...register(listingFilerts.stage.value)}>
                        {
                            listingFilerts.stage.options.map((option, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={option.value}
                                    >{option.text}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <input
                        hidden
                        type="submit"
                        ref={filterSubmitRef}
                    />
                </form>
            </div>
            <table>
                <thead className="tableHeadings">
                    <tr>
                        {tableHeading.map((heading, index) => {
                            return (
                                <th key={index}>{heading}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map((student, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {`${index + 1}.${student?.username || ''}`}
                                    </td>
                                    <td>
                                        {student.email || ''}
                                    </td>
                                    <td>
                                        {student.contact?.personal?.[0]?.number || ''}
                                    </td>
                                    <td>
                                        {student?.programs[0]?.programme?.level || ''}
                                    </td>
                                    <td>
                                        <div
                                            className="icon-checkbox isaBox"
                                        >
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="pageSelector">
                <div
                    className={`pageNumberOption ${currPage <= 1 && 'disabled'}`}
                    onClick={() => {
                        if (startPage > 1) setStartPage(startPage - 1)
                        if (currPage > 1) setCurrPage(currPage - 1)
                        if (startPage > 1 || currPage > 1) filterSubmitRef.current.click();
                    }}
                >
                    {`<`}
                </div>
                {
                    [...Array(maxPageNumber)].map((empty, index) => {
                        return (
                            <div
                                key={index}
                                className={`pageNumberOption ${currPage == index + startPage && 'selected'}`}
                                onClick={() => {
                                    setCurrPage(index + startPage);
                                    filterSubmitRef.current.click();
                                }}
                            >
                                {index + startPage}
                            </div>
                        )
                    })
                }
                <div
                    className={`pageNumberOption`}
                    onClick={() => {
                        setCurrPage(currPage + 1);
                        if (currPage + 1 == startPage + maxPageNumber) setStartPage(startPage + 1);
                        filterSubmitRef.current.click();
                    }}
                >
                    {`>`}
                </div>
            </div>
            <style jsx>
                {
                    `
                    form{
                        width: 100;
                        height: auto;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin-bottom: 1rem;
                    }
                    input{
                        border: 1px solid #E8E8E8;
                        box-sizing: border-box;
                        border-radius: 8px;
                        width: 20%;
                        padding: 8px;
                    }
                    select{
                        border: 1px solid #E8E8E8;
                        box-sizing: border-box;
                        border-radius: 8px;
                        background: white;
                        margin-right: 4px;
                    }
                    table {
                        border-collapse: collapse;
                        width: 100%;
                        vertical-align: center;
                      }
                      
                    th, td {
                        text-align: left;
                        padding: 6px;
                    }
                    td {
                        border-bottom: 1px solid #ddd;
                    }
                    th{
                        background-color: #F8F8FB;
                    }
                    .pageSelector{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }
                    .pageNumberOption{
                        text-align: center;
                        width: 30px;
                        height: 30px;
                        line-height: 30px;
                        font-size: 14px;
                        border-radius: 50%;
                        margin: 5px;
                    }
                    .pageNumberOption.selected {
                        background-color: #22ADCF;
                        color: white;
                    }
                    .pageNumberOption.disabled:hover {
                        cursor: not-allowed;
                        background-color: white;
                    }
                    .pageNumberOption:hover {
                        background-color: #22ADCF;
                        color: white;
                        cursor: pointer;
                    }
                    .listingHeader{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin-bottom: 2rem;
                        margin-right: 4px;
                        margin-left: 4px;
                    }
                    .studentsList{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 30px;
                    }
                    .btnPrimary{
                        width: 152px;
                        height: 36px;
                        left: 1248px;
                        top: 142px;
                        background: #22ADCF;
                        border-radius: 8px;
                        border-color: #22ADCF;
                        box-shadow: 0;
                        color: white;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
}

export default StudentListing;