import { useEffect } from "react";
import { getCatatanPemasukan } from "../api/Api";
import Card from "../components/Card";
import Line from "../components/Line";
import RouteBar from "../components/RouteBar";
import SideNav from "../components/SideNav";

const CatatanPemasukan = () => {
  useEffect(() => {
    getCatatanPemasukan();
  }, []);

  return (
    <>
      <SideNav />
      <div className="p-4 sm:ml-64">
        <RouteBar title="Data Catatan Pemasukan" />
        <Line />
        <div className="sm:grid grid-cols-3 gap-1 my-2">
          <Card title="Ini Judul" content="Ini Deskripsi" />
          <Card title="Ini Judul" content="Ini Deskripsi" />
          <Card title="Ini Judul" content="Ini Deskripsi" />
        </div>
        <Line />
        <div className="p-6 m-2 rounded-lg outline outline-1 outline-primary-400 hover:outline-yellow-400 group">
          <table className="table-auto w-full text-center">
            <thead className="uppercase bg-primary-400">
              <tr>
                <th scope="col" className="py-3 px-4 rounded-tl-lg">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Id Pengguna
                </th>
                <th scope="col" className="py-3 px-4">
                  Nama Pengguna
                </th>
                <th scope="col" className="py-3 px-4">
                  Judul Catatan
                </th>
                <th scope="col" className="py-3 px-4 rounded-tr-lg">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-600 even:bg-primary-600">
                <td className="border-b border-white py-2">1</td>
                <td className="border-b border-white py-2">1</td>
                <td className="border-b border-white py-2">Danu</td>
                <td className="border-b border-white py-2">
                  Pemasukan Bulan Juli
                </td>
                <td className="border-b border-white py-2">Detail</td>
              </tr>
              <tr className="odd:bg-gray-600 even:bg-inherit">
                <td className="border-b border-white py-2">1</td>
                <td className="border-b border-white py-2">1</td>
                <td className="border-b border-white py-2">Danu</td>
                <td className="border-b border-white py-2">
                  Pemasukan Bulan Juli
                </td>
                <td className="border-b border-white py-2">Detail</td>
              </tr>
              <tr className="odd:bg-gray-600 even:bg-primary-600">
                <td className="border-b border-white py-2 rounded-l-lg">1</td>
                <td className="border-b border-white py-2">1</td>
                <td className="border-b border-white py-2">Danu</td>
                <td className="border-b border-white py-2">
                  Pemasukan Bulan Juli
                </td>
                <td className="border-b border-white py-2 rounded-r-lg">
                  Detail
                </td>
              </tr>
              <tr className="odd:bg-gray-600 even:bg-inherit">
                <td className="border-b border-white py-2">1</td>
                <td className="border-b border-white py-2">1</td>
                <td className="border-b border-white py-2">Danu</td>
                <td className="border-b border-white py-2">
                  Pemasukan Bulan Juli
                </td>
                <td className="border-b border-white py-2">Detail</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CatatanPemasukan;
