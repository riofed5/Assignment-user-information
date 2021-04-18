import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

type ParamTypes = {
  id: string;
};
type CompanyTypes = {
  name: string;
};

type AddressTypes = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

type DetailsStateTypes = {
  name: string;
  username: string;
  email: string;
  phone: string;
  company: CompanyTypes;
  address: AddressTypes;
};

const Details: React.FC = (): JSX.Element => {
  //Get id of user from params
  const { id } = useParams<ParamTypes>();

  const [info, setInfo] = useState<DetailsStateTypes | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Define function to fetch info of user
    const fetchInfo = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await res.json();

        setInfo(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    //Fetch info of user
    fetchInfo();
  }, [id]);

  return (
    <>
      {loading && <Loading />}
      {info && !loading && (
        <div className="details">
          <p>- name: {info.name}</p>
          <p>- username: {info.username}</p>
          <p>- email: {info.email}</p>
          <p>- phone: {info.phone}</p>
          <p>- company: {info.company.name}</p>
          <ul>
            <li>street:{info.address.street} </li>
            <li>suite: {info.address.suite}</li>
            <li>city: {info.address.city}</li>
            <li>zipcode: {info.address.zipcode}</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Details;
