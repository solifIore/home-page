import { useNavigate } from "react-router-dom";

export default function Button({ to, children, className }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} className={className}>
      {children}
    </button>
  );
}
