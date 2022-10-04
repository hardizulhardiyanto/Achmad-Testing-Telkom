import axios from 'axios';

export const postRegister = async ({payload}) => {
    try {
        const result = await axios.post(REGISTER_URL, payload);
        return result.data
    } catch (error) {
        return error
    }
}