import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { addStudentForm } from './addNewStudentConstants';

interface Props { };

const AddNewStudent: React.FC<Props> = ({ }) => {

    const { register, handleSubmit } = useForm();
    const formSubmitRef = useRef(null);
    const pictureRef = useRef(null);
    const [submitFormData, setSubmitFormData] = useState({});

    const onSubmit = (data) => {
        setSubmitFormData(data);
    }

    useEffect(() => {
        //Call API to send data
        // console.log(submitFormData);
    }, [submitFormData])

    return (
        <React.Fragment>
            <div className="pageHeader">
                <div className="pageHeading">New Student Details</div>
            </div>
            <div className="studentDetails">
                <div
                    className="icon-avatar m-t-b-1"
                    onClick={() => {
                        pictureRef.current.click();
                    }}
                ></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formElement w-50">
                        <input
                            hidden
                            type="file"
                            {...register(addStudentForm.picture.value)}
                        />
                        <label>{addStudentForm.username.lable}</label>
                        <input
                            {...register(addStudentForm.username.value)}
                            placeholder={addStudentForm.username.placeholder}
                        />
                    </div>
                    <div className="formElement w-50">
                        <label>{addStudentForm.email.lable}</label>
                        <input
                            {...register(addStudentForm.email.value)}
                            placeholder={addStudentForm.email.placeholder}
                        />
                    </div>
                    <div className="formElement w-50">
                        <label>{addStudentForm.password.lable}</label>
                        <input
                            {...register(addStudentForm.password.value)}
                            placeholder={addStudentForm.password.placeholder}
                        />
                    </div>
                    <div className="formElement w-50">
                        <label>{addStudentForm.contactNo.lable}</label>
                        <input
                            {...register(addStudentForm.contactNo.value)}
                            placeholder={addStudentForm.contactNo.placeholder}
                        />
                    </div>
                    <div className="formElement w-50">
                        <label>{addStudentForm.highestEducationTitle.lable}</label>
                        <input
                            {...register(addStudentForm.highestEducationTitle.value)}
                            placeholder={addStudentForm.highestEducationTitle.placeholder}
                        />
                    </div>
                    <div className="formElement w-50">
                        <label>{addStudentForm.highestEducationCgpa.lable}</label>
                        <input
                            {...register(addStudentForm.highestEducationCgpa.value)}
                            placeholder={addStudentForm.highestEducationCgpa.placeholder}
                        />
                    </div>
                    <div className="formElement w-50">
                        <label>{addStudentForm.highestEducationYearOfCompletion.lable}</label>
                        <input
                            {...register(addStudentForm.highestEducationYearOfCompletion.value)}
                            placeholder={addStudentForm.highestEducationYearOfCompletion.placeholder}
                        />
                    </div>
                    <div className="formElement w-50">
                        <label>{addStudentForm.totalWorkExperience.lable}</label>
                        <input
                            {...register(addStudentForm.totalWorkExperience.value)}
                            placeholder={addStudentForm.totalWorkExperience.placeholder}
                        />
                    </div>
                    <div className="formElement w-100">
                        <label>{addStudentForm.technicalSkills.lable}</label>
                        <input
                            className="p-b-5"
                            {...register(addStudentForm.technicalSkills.value)}
                            placeholder={addStudentForm.technicalSkills.placeholder}
                        />
                    </div>
                    <div className="formElement w-100">
                        <label>{addStudentForm.domainExpertise.lable}</label>
                        <input
                            className="p-b-5"
                            {...register(addStudentForm.domainExpertise.value)}
                            placeholder={addStudentForm.domainExpertise.placeholder}
                        />
                    </div>
                    <div className="formElement w-100">
                        <label>{addStudentForm.resume.lable}</label>
                        <input
                            type="file"
                            {...register(addStudentForm.resume.value)}
                            placeholder={addStudentForm.resume.placeholder}
                        />
                    </div>
                    <input
                        hidden
                        type="submit"
                        ref={formSubmitRef}
                    />
                    <div className="buttonWraper">
                        <button
                            className="btnPrimary s-center"
                            onClick={() => {
                                formSubmitRef.current.click();
                            }}
                        >
                            submit
                </button>
                    </div>
                </form>
            </div>
            <style jsx>
                {
                    `.pageHeading{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 30px;
                    }
                    .w-50{
                        width: 45%;
                        height: auto;
                    }
                    .w-100{
                        width: 100%;
                    }
                    form {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }
                    .formElement{
                        display: flex;
                        flex-direction: column;
                        margin: 0.5rem;
                    }
                    input {
                        background: #FFFFFF;
                        border: 1px solid #DDDDDD;
                        box-sizing: border-box;
                        border-radius: 8px;
                        margin-top: 0.25rem;
                        padding-bottom: 1rem;
                        padding-left: 0.20rem;
                    }
                    .p-b-5{
                        padding-bottom: 5rem;
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
                    .buttonWraper{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        width: 100%;
                        margin-top: 5rem;
                    }
                    .s-center{
                        align-self: center;
                    }
                    .studentDetails{
                        display: flex;
                        flex-direction: column;
                    }
                    .m-t-b-1{
                        margin-top: 1rem;
                        margin-bottom: 1rem;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
}

export default AddNewStudent;