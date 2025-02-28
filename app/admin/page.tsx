import dynamic from "next/dynamic";
import { isAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./app"), { ssr: false })
const AdminPage = async () => {
  if (!isAdmin()) {
    redirect("/");
  }

  return (
    <App />
  );
}

export default AdminPage;