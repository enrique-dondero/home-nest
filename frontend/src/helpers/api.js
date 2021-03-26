import axios from 'axios';

export default axios.create({
    baseURL: `http://api.app.local/api/v1/`
});
