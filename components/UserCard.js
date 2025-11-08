export default function UserCard({ name, role = "student", children }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{role}</p>
            {children}
        </div>
    );
}