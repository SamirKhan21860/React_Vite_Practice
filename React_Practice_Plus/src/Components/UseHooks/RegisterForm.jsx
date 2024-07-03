import { useState } from "react";

export default function RegisterForm() {
  const formData = {
    firstName: "Luke",
    lastName: "Jones",
    email: "lukeJones@sculpture.com",
  };

  const [form, setForm] = useState(formData);

  return (
    <>
      <label>
        First name:
        <input
          type="text"
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>{`${form.firstName} ${form.lastName} (${form.email})`}</p>
    </>
  );
}
