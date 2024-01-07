import { setFips } from 'crypto';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const SearchPopUp = () => {
  //const [modalIsOpen, setModalIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [brnOptions, setBrnOptions] = useState([]);
  const [selectedBrn, setSelectedBrn] = useState('');
  const [filteredBrns, setFilteredBrns] = useState([]);
  const [status, setStatus] = useState('');
  const [primaryGuestName, setPrimaryGuestName] = useState('');
  const [services, setServices] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  // Placeholder function to fetch BRN options from the database
  const fetchBrnOptions = async () => {
    // Simulate fetching data from the database
    const response = await fetch('/api/brns'); // Replace with your API endpoint
    const data = await response.json();
    setBrnOptions(data);
  };

  // Placeholder function to fetch data based on the selected BRN
  const fetchDataBasedOnBrn = async () => {
    // Simulate fetching data from the database based on the selected BRN
    const response = await fetch(`/api/data?brn=${selectedBrn}`); // Replace with your API endpoint
    const data = await response.json();

    // Update state with fetched data
    setStatus(data.status);
    setPrimaryGuestName(data.primaryGuestName);
    setServices(data.services);
    setTotalBill(calculateTotalBill(data.services));
  };

  // Placeholder function to calculate the total bill
  const calculateTotalBill = (services) => {
    // Implement your logic to calculate the total bill from the services array
    return services.reduce((total, service) => total + service.price, 0);
  };

  useEffect(() => {
    // Fetch BRN options when the component mounts
    fetchBrnOptions();
  }, []);

  useEffect(() => {
    // Fetch data based on the selected BRN when it changes
    if (selectedBrn) {
      fetchDataBasedOnBrn();
    }
  }, [selectedBrn]);
  
  // Mock BRN data (example: BRN1, BRN2)
// Each BRN must have a guest name, status, services availed with their service id, price, and charged to, and total bill
const mockBrns = {
  BRN1: {
    guestName: 'David',
    status: 'Confirmed',
    services: [
      { id: '001', name: 'Service A', price: 50, charged: 'room' },
      { id: '002', name: 'Service B', price: 75, charged: 'brn' },
    ],
  },
  BRN2: {
    guestName: 'geripot',
    status: 'Pending',
    services: [
      { id: '003', name: 'Service C', price: 100, charged: 'brn' },
      { id: '004', name: 'Service D', price: 120, charged: 'room' },
    ],
  },
};

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredBrns = Object.keys(mockBrns).filter((brn) =>
    brn.toLowerCase().includes(query.toLowerCase())
  );
    setFilteredBrns(filteredBrns);
  };

  const handleBrnSelection = (brn) => {
    // Fetch data from mockBrns based on the selected BRN
    const selectedBrnData = mockBrns[brn];

    if (selectedBrnData) {
      setSelectedBrn(brn);
      setSearchQuery(brn);
      setFilteredBrns([]);

      // Update state with fetched data
      setStatus(selectedBrnData.status);
      setPrimaryGuestName(selectedBrnData.guestName);
      setServices(selectedBrnData.services);
      setTotalBill(calculateTotalBill(selectedBrnData.services));
    }
  };

  return (
    <div>
        <h1>SEARCH BRN</h1>
        {
          /*
          <select onChange={(e) => setSelectedBrn(e.target.value)}>
          <option value="" disabled>Select BRN</option>
          {brnOptions.map((brn) => (
            <option key={brn} value={brn}>{brn}</option>
          ))}
          </select>
          */
        }
        <label>Enter BRN:  </label>
        <input
        type="text"
        id="brnSearch"
        placeholder="BRN"
        value={searchQuery}
        onChange={handleSearchChange}
        />
        {filteredBrns.length > 0 && (
        <ul>
          {filteredBrns.map((brn) => (
            <li key={brn} onClick={() => handleBrnSelection(brn)}>
              {brn}
            </li>
          ))}
        </ul>
        )}



        <div>
          <h2>Status: {status}</h2>
          <h2>Primary Guest Name: {primaryGuestName}</h2>
        </div>

        {/* Charged Services Table */}
        <table>
          <thead>
            <tr>
              <th>Service ID</th>
              <th>Price</th>
              <th>Charged To</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.price}</td>
                <td>{service.charged}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <h2>Total Bill: {totalBill}</h2>
        </div>
    </div>
  );
};

export default SearchPopUp;
