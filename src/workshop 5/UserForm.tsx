import React, { useState, type ChangeEvent, type FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`ข้อมูลที่กรอก: \nชื่อ: ${formData.name}\nอีเมล: ${formData.email}`);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
    });
  };

  return (
    <div className="form-container">
      <h2>User Form Exercise</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input-group">
          <label htmlFor="name">ชื่อ:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="กรอกชื่อของคุณ"
          />
        </div>
        <div className="form-input-group">
          <label htmlFor="email">อีเมล:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="กรอกอีเมลของคุณ"
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="btn btn-green">Submit</button>
          <button type="button" onClick={handleClear} className="btn btn-red">Clear</button>
        </div>
      </form>
      <hr />
      <div className="form-realtime-data">
        <h3>ข้อมูลปัจจุบัน:</h3>
        <p>
          <strong>ชื่อ:</strong> {formData.name || 'ยังไม่ได้กรอก'}
        </p>
        <p>
          <strong>อีเมล:</strong> {formData.email || 'ยังไม่ได้กรอก'}
        </p>
      </div>
    </div>
  );
};

export default UserForm;