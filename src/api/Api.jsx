import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

export const getCatatanPemasukan = async () => {
  const dataCatatanPemasukan = await axios.get(`${baseUrl}/catatan-pemasukan`);
  console.log({ getCatatanPemasukan: dataCatatanPemasukan });
};
