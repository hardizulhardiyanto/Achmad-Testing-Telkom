import axios from 'axios';
import {repositoryUrl} from "./index";

const token = "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";
//URL
axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.common['Authorization'] = ` Bearer ${token}`;
axios.create({
    withCredentials: true,
})
export const getRepository = async ({payload}) => {
    try {
        const result = await axios.get(repositoryUrl);
        return result.data
    } catch (error) {
        return error
    }s
}