import React, { useState } from 'react';
import Form from './Components/Form';
import ShowFormData from './Components/ShowFormData';

function App() {
    const [showData, setShowData] = useState(false);
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
        setShowData(true);
    };

    return (
        <div>
            <Form onFormSubmit={handleFormSubmit} />
            {showData && <ShowFormData data={formData} />}
        </div>
    );
}

export default App;
