import axios from "axios";
import IP from "../components/Ips";

export default postRegisterUser = async (datos) => {
  return await axios({
    method: "post",
    url: `http://${IP.IP}:3001/api/users/register_user`,
    data: datos,
  });
};