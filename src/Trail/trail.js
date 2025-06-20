import axios from "axios";
import { BASE_URL } from "../base.url.utils";



const trailku = async (activity) => {
  const id_tenant = localStorage.getItem("id_tenant");
  const email = localStorage.getItem("email");
  const url = `${BASE_URL}trail/write`;
  const datanya = { email: email, id_tenant: id_tenant, activity: activity };
  console.log('datanya trail',datanya);

  try {
    const response = await axios.post(url, datanya, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.result;
  } catch (error) {
    console.error("Gagal kirim trailku:", error);
    return null; // atau throw error jika ingin ditangani di atas
  }
};

export default trailku;
