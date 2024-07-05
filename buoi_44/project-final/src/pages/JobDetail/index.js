/*eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailJob } from "../../services/jobService"
import {
    Button,
    Card,
    Col,
    Input,
    Row,
    Tag,
    Form,
    notification,
    Select,
} from "antd";
import { getDetailCompany } from "../../services/companyService";
import { rules } from "../../contants";
import { getTimeCurrent } from "../../helpers/getTime";
import { createCV } from "../../services/cvService";
import GoBack from "../../components/GoBack";
const { TextArea } = Input;
const { Option } = Select;

function JobDetail() {
    const params = useParams();
    const [ job, setJob ] = useState();
    const [form] = Form.useForm();
    const [noti, contextHolder] = notification.useNotification();

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getDetailJob(params.id);
            const infoCompany = await getDetailCompanty(response.idCompany);
            const dataFinal = {
                ...response,
                infoCompany: infoCompanty,
            };
            setJob(dataFinal);
        }
        fetchApi();
    }, []);

    const onFinish = async (values) => {
        values.idJob = job.id;
        values.idCompany = job.infoCompany.id;
        values.createAt = getTimeCurrent();
        const response = await createCV(values);
        if (response) {
            form.resetFields();
            noti.success({
                message: "Gửi yêu cầu thành công!",
                description: "Nhà tuyển dụng sẽ liên hệ với bạn trong thời gian sớm nhất."
            })
        }
    }


}