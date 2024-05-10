import { FaUser, FaPhone } from "react-icons/fa6";

function Contact({ id, name, number, onDelete }) {
  return (
    <div>
      <div>
        <p>
          <FaUser />
          {name}
        </p>

        <p>
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Contact;
