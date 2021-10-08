
export const tableHeading = [
    "Name",
    "Email",
    "Contact Info",
    "Stage",
    "ISA"
]

export const maxPageNumber = 5;

export const defaultPageOptions = {
    pageNumer: 1,
    size: 10,
    orderBy: '',
    orderDeriction: 'ASC',
    filter: ''
}

export const listingFilerts = {
    nameEmail: {
        placeholder: "Name/Email",
        value: "nameEmail"
    },
    programEnrolled: {
        placeholder: "Programme Enrolled",
        value: "programEnrolled"
    },
    contactNo: {
        placeholder: "Contact No",
        value: "contactNo"
    },
    stage: {
        value: "stage",
        options: [
            {
                value: "",
                text: "Stage"
            },
            {
                value: "",
                text: "Stage"
            },
            {
                value: "Completed Pre Course",
                text: "Completed Pre Course"
            },
            {
                value: "Attending Beginner",
                text: "Attending Beginner"
            },
            {
                value: "Took Admission Test",
                text: "Took Admission Test"
            },
            {
                value: "Attending Advancer",
                text: "Attending Advancer"
            },
            {
                value: "Taking Mock Interviews",
                text: "Taking Mock Interviews"
            }
        ]
    }
}