import { use } from "react";
export default function BlogDetail({ params }) {
    const { id } = use(params);
  return (
    <div>
      <h1>Blog ID: {id}</h1>
    </div>
  );
}