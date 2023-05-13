//
import Axios from "axios";
import { useState, useEffect } from "react";
import Cardelement from "./Cardelement";

const DistrictVaccine = ({ district }) => {
  const [vacDetails, setVacDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  // calling the axios inside the useEfect with the dependency of district. This will be called only when the district changes from default.
  useEffect(() => {
    const fetchVaccineDetails = () => {
      Axios.get(
        `https://vaccine-slot-booking-system-backend.vercel.app/search-vaccination-centres-using-district/${district}`
      )
        .then((res) => {
          const { data } = res;
          console.log(data);
          setVacDetails(data);
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
          // toast(error.response.data.error, { type: "error" });
        });
    };

    if (district !== "Select District") {
      fetchVaccineDetails();
    }
  }, [district]);

  if (district !== "Select District" && loading) {
    return (
      <div className="d-flex justify-content-center text-info">
  <div clasName="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
    )
  }

  return (
    <div>
      {district !== "Select District" && (
        <div>
          {vacDetails.length === 0 ? (
            <h3 className="text-center text-color my-5">
              No Vaccine Center Available in this Location!
            </h3>
          ) : (
            <>
              <Cardelement details={vacDetails} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

const PinVaccine = ({ pincode }) => {
    const [vacpinDetails, setVacpinDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    // calling the axios inside the useEfect with the dependency of district. This will be called only when the district changes from default.
    useEffect(() => {
      const fetchVaccineDetails = () => {
        Axios.get(
          `https://vaccine-slot-booking-system-backend.vercel.app/search-vaccination-centres-using-pin/${pincode}`
        )
          .then((res) => {
            const { data } = res;
            setVacpinDetails(data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            // toast(error.response.data.error, { type: "error" });
          });
      };
  
      if (pincode !== "") {
        fetchVaccineDetails();
      }
    }, [pincode]);

    if (pincode != "" && loading) {
      return (
        <div className="d-flex justify-content-center text-info">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
      )
    }
    return (
      <div>
        {pincode !== "" && (
          <div>
            {vacpinDetails.length === 0 ? (
              <h3 className="text-center text-color my-5">
                No Vaccine Center Available in this Location!
              </h3>
            ) : (
              <>
                <Cardelement details={vacpinDetails} />
              </>
            )}
          </div>
        )}
      </div>
    );
  };
export {PinVaccine, DistrictVaccine} ;
