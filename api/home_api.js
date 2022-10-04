import axios from 'axios';
import {repositoryUrl} from "./index";

const token = "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";
//URL
axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.common['Token'] = `${token}`;
export const getRepository = async ({payload}) => {
    try {
        const result = await axios.get(repositoryUrl, {payload: {
                page: payload.page,
                per_page: payload.per_page
            }});
        return result.data
    } catch (error) {
        return error
    }
}