import axios from "axios";

const ApiServer = axios.create ({
        baseURL:"http://localhost/api/api/",
})
export default ApiServer;