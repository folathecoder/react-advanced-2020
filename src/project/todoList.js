import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [reminder, setReminder] = useState({ note: "", time: "" });
  const [reminders, setReminders] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReminder({ ...reminder, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (reminder.note && reminder.time) {
      const newReminder = {
        ...reminder,
        id: new Date().getTime().toString(),
      };
      setReminders([...reminders, newReminder]);
      setReminder({ note: "", time: "" });
    }
  };

  const handleDelete = (id) => {
    const newReminders = reminders.filter((reminder) => reminder.id != id);
    setReminders(newReminders);
  };

  useEffect(() => {
    const getLocalReminders = localStorage.getItem("localReminders");
    setReminders(JSON.parse(getLocalReminders));
  }, []);

  useEffect(() => {
    localStorage.setItem("localReminders", JSON.stringify(reminders));
  });

  return (
    <>
      <section className="item">
        <form className="form">
          <div className="form-control">
            <label htmlFor="note">Reminder: </label>
            <input
              type="text"
              name="note"
              id="note"
              value={reminder.note}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Target: </label>
            <input
              type="date"
              name="time"
              id="time"
              value={reminder.time}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Set Reminder
          </button>
        </form>
      </section>

      <ul>
        {reminders.map((reminder) => {
          const { id, note, time } = reminder;
          return (
            <li key={id} className="item">
              <p>{note}</p>
              <p>{time}</p>
              <button
                className="btn_delete"
                onClick={(e) => {
                  handleDelete(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
