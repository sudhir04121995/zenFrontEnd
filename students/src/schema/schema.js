import * as yup from "yup";

export const studentSchema = yup.object({
    name : yup.string().required("please fill the name"),
    batch: yup.string().required("please fill the batch")
    .min(5,"invalid batch detail"),
    phone: yup.string(),
    email: yup.string().email().required("please fill a valid email"),
    qualification:yup.string().required("please specify your qualification")
    .min(2,"please add valid qualification")
    .max(10,"Don't playAround enter valid detail ")
});